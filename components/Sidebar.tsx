"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import Link from "next/link";
import ThemeToggle from "@/widgets/ThemeToggle";
import { usePopup } from "@/context/popupContext";
import useViewportWidth from "@/hooks/useViewportWidth";
import { buildSidebarViewModel } from "@/utils/sidebarViewModel";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();

  const width = useViewportWidth();

  const { openPopup } = usePopup();

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const navGroups = buildSidebarViewModel(pathname);

  return (
    <div
      className={`flex flex-col gap-10 md:h-screen overflow-auto border border-white/30 dark:border-white/10 bg-white/55 dark:bg-slate-900/45 backdrop-blur-2xl shadow-[0_8px_32px_rgba(15,23,42,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)] ${
        isExpanded
          ? "absolute left-0 top-0 bottom-0 right-0 z-10 md:static md:w-140 lg:w-110 p-5 md:p-6 rounded-none md:rounded-3xl"
          : "relative w-full md:w-20 p-2 h-max rounded-none md:rounded-3xl"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`flex items-center justify-between gap-6 ${
          !isExpanded && "md:flex-col py-5 px-4"
        }`}
      >
        <button
          className="cursor-pointer p-2 rounded-xl transition-colors xl:hover:bg-white/50 dark:xl:hover:bg-white/10 xl:hover:text-primary"
          onClick={toggleSidebar}
        >
          <AiOutlineMenu size={25} />
        </button>

        <div>
          <ThemeToggle />
        </div>

        <button className="cursor-pointer p-2 rounded-xl transition-colors xl:hover:bg-white/50 dark:xl:hover:bg-white/10 xl:hover:text-primary">
          <AiOutlineSearch size={25} />
        </button>
        <button
          onClick={openPopup}
          className="cursor-pointer p-2 rounded-xl transition-colors xl:hover:bg-white/50 dark:xl:hover:bg-white/10 xl:hover:text-primary"
        >
          <HiOutlineUserCircle size={25} />
        </button>
      </div>

      <div
        className={`flex flex-col mb-auto gap-8
        ${isExpanded ? "block" : "hidden"}
        `}
      >
        {navGroups.map((group) => (
          <div key={group.id} className="flex flex-col gap-4">
            <h2 className={`font-medium tracking-[2px]`}>{group.groupName}</h2>
            <>
              {group.items.map((item) => (
                <Link
                  href={item.href}
                  key={item.id}
                  className={`flex items-center pr-2 gap-2 text-black dark:text-white py-2.5 rounded-xl border border-transparent transition-all duration-200 xl:hover:bg-white/60 dark:xl:hover:bg-white/10 xl:hover:border-white/50 dark:xl:hover:border-white/15 ${
                    item.active &&
                    "!text-primary !bg-white/70 dark:!bg-white/10 !border-primary/60 shadow-sm"
                  }`}
                  onClick={() => {
                    if (width < 768) {
                      setIsExpanded(false);
                    }
                  }}
                >
                  <span className="text-primary font-medium tracking-[2px] text-xl font-secondary">
                    {item.displayId}
                  </span>
                  {item.name}

                  <span
                    className={`py-1 px-2 capitalize rounded-full text-[11px] text-center border border-primary/60 bg-primary/5 dark:bg-primary/10 font-medium tracking-[1px] ${
                      item.showAccessBadge ? "inline-block" : "hidden"
                    }`}
                  >
                    <span className="text-primary">{item.access}</span>
                  </span>
                </Link>
              ))}
            </>
          </div>
        ))}
      </div>
    </div>
  );
}
