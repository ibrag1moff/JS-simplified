"use client";
import { useAppSelector } from "@/hooks/redux";
import { useCheckout } from "@/hooks/useCheckout";
import Container from "@/widgets/Container";
import { CustomLoading } from "@/widgets/CustomLoading";
import ProtectedRouteWidget from "@/widgets/ProtectedRouteWidget";
import { ReactNode } from "react";

interface PaidRouteProps {
  children: ReactNode;
}

export default function PaidRoute({ children }: PaidRouteProps) {
  const { isLoggedIn, user } = useAppSelector((state) => state.user);

  const { isLoading, handleCreateCheckoutBase, handleCreateCheckoutSource } =
    useCheckout();

  const prices = [
    {
      id: 1,
      title: "Base",
      price: "$8.99",
      info: ["Access to all articles", "Free future updates"],
      buyNow: handleCreateCheckoutBase,
    },
    {
      id: 2,
      title: "Source",
      price: "$16.99",
      info: ["Everything in base", "Access to the source code of the book"],
      buyNow: handleCreateCheckoutSource,
    },
  ];

  if (user?.role === "FREE") {
    if (isLoading) return <CustomLoading />;
    return (
      <div className="px-5">
        <h3 className="font-semibold max-w-[450px] md:max-w-[600px] lg:text-2xl">
          To continue <span>enjoying</span> and <span>learning</span> about
          JavaScript you can <span>purchase</span> the whole book!
        </h3>
        <div className="flex flex-col lg:flex-row lg:justify-center lg:items-start gap-10 items-center h-screen mt-12">
          {prices.map((price) => (
            <div
              key={price.id}
              className="flex flex-col  gap-8 border border-primary rounded-xl shadow-custom shadow-primary p-6 w-full"
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold tracking-[2px]">
                    {price.title}
                  </h3>
                  <span className="font-medium">{price.price}</span>
                </div>
                <div>
                  {price.info.map((x) => (
                    <li className="text-right font-medium text-sm">{x}</li>
                  ))}
                </div>
              </div>

              <button
                disabled={isLoading}
                onClick={price.buyNow}
                className="bg-primary w-full py-2 text-white text-sm font-medium border border-primary xl:hover:bg-transparent xl:hover:text-primary cursor-pointer transition-all duration-300 rounded-xl"
              >
                Buy now
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    if (!isLoggedIn) {
      return <ProtectedRouteWidget />;
    }
  }

  return <>{children}</>;
}
