"use client";
import { useState } from "react";
import { NavItems } from "@/config/sidebar";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import Link from "next/link";
import ThemeToggle from "@/widgets/ThemeToggle";
import { usePopup } from "@/context/popupContext";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);

  const { openPopup } = usePopup();

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const navGroups = NavItems();

  return (
    <div
      className={`flex flex-col gap-12 bg-[#fff] dark:bg-body border-r-6 border-[#e5e5e5] dark:border-hover h-screen overflow-auto ${
        isExpanded
          ? "absolute left-0 top-0 bottom-0 right-0 z-10 sm:static sm:w-90 p-6"
          : "relative w-20 p-1"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`flex items-center gap-7  ${
          isExpanded
            ? "flex-row"
            : "absolute top-10 left-1/2 translate-x-[-50%] flex-col"
        }`}
      >
        <button
          className={`cursor-pointer pb-4 xl:hover:text-primary ${
            !isExpanded && "block mx-auto"
          }`}
          onClick={toggleSidebar}
        >
          <AiOutlineMenu size={25} />
        </button>

        <div className="mb-2">
          <ThemeToggle />
        </div>

        <button
          className={`cursor-pointer pb-4 xl:hover:text-primary ${
            !isExpanded && "block mx-auto"
          }`}
        >
          <AiOutlineSearch size={25} />
        </button>
        <button
          onClick={openPopup}
          className={`cursor-pointer pb-4 xl:hover:text-primary ${
            !isExpanded && "block mx-auto"
          }`}
        >
          <HiOutlineUserCircle size={25} />
        </button>
      </div>

      <div className="flex flex-col mb-auto gap-8">
        {navGroups.map((group, i) => (
          <div key={i} className="flex flex-col gap-4">
            <h2
              className={`font-medium tracking-[2px] ${
                isExpanded ? "block" : "hidden"
              }`}
            >
              {group.groupName}
            </h2>
            <>
              {group.items.map((item) => (
                <Link
                  href={item.href}
                  key={item.id}
                  className={`flex items-center gap-2 border-b border-[#e5e5e5] dark:border-hover text-black dark:text-white py-2 xl:hover:bg-[#e5e5e5] dark:xl:hover:bg-hover rounded ${
                    isExpanded ? "block" : "hidden"
                  } ${
                    item.active &&
                    "!text-primary !bg-[#e5e5e5] dark:!bg-hover !border-primary"
                  }`}
                >
                  <span className="text-primary font-medium tracking-[2px] text-xl font-secondary">
                    {item.id < 10 ? "00" : "0"}
                    {item.id}
                  </span>

                  {item.name}
                </Link>
              ))}
            </>
          </div>
        ))}
      </div>
    </div>
  );
}
