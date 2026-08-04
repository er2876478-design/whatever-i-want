"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const pathUrl = usePathname();

  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full ${
        stickyMenu
          ? "bg-[#071419]/80 py-4 shadow-sm backdrop-blur-lg"
          : "py-7"
      }`}
    >
      <div className="relative mx-auto flex max-w-[1440px] items-center justify-between px-6 sm:px-8 lg:px-12">
        <div className="flex items-center gap-4">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 shadow-[0_0_25px_rgba(134,208,40,0.25)]">
            <span className="h-3.5 w-3.5 rounded-full bg-[#86d028] shadow-[0_0_18px_rgba(134,208,40,0.45)]" />
          </div>
          <div>
            <div className="text-sm font-black tracking-[0.28em] text-white">EDWARD</div>
            <div className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/60">Operations Systems</div>
          </div>
        </div>

        <div className={`invisible h-0 w-full items-center justify-between lg:visible lg:flex lg:h-auto lg:w-auto ${navigationOpen ? "visible!" : ""}`}>
          <nav>
            <ul className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-2">
              {menuData.map((menuItem, key) => (
                <li key={key} className="relative">
                  {menuItem.path ? (
                    <Link
                      href={menuItem.path}
                      className={`relative border border-transparent px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] transition hover:text-white ${
                        pathUrl === menuItem.path ? "text-white" : "text-white/75"
                      }`}
                    >
                      {menuItem.title}
                    </Link>
                  ) : (
                    <span className="relative border border-transparent px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-white/75">
                      {menuItem.title}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <a
          href="mailto:er2876478@gmail.com"
          className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.24em] text-white transition hover:border-[#86d028] hover:text-[#86d028]"
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
