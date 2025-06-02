import axios from "axios";
import { useAppSelector } from "./redux";
import { useState } from "react";

enum Products {
  base,
  source,
}

type Product = keyof typeof Products;

export const useCheckout = () => {
  const { user } = useAppSelector((state) => state.user);

  const [isLoading, setIsLoading] = useState(false);

  const handleCreateCheckout = async (product: Product) => {
    setIsLoading(true);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/checkout/create-checkout-session`,
        { email: user?.email || "", product }
      );

      window.location.href = res.data.url;
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    handleCreateCheckoutBase: () => handleCreateCheckout("base"),
    handleCreateCheckoutSource: () => handleCreateCheckout("source"),
  };
};
