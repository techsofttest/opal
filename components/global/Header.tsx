"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Our work", href: "/work" },
    { label: "Clients", href: "/clients" },
    { label: "Blogs", href: "/blogs" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <header className="sticky top-[env(safe-area-inset-top,0px)] z-50 bg-white backdrop-blur-[10px] border-b border-line">
      <div className="wrap relative flex items-center justify-between gap-4 h-[84px]">
        <Link
          className="relative z-10 flex items-center no-underline py-2"
          href="/"
          aria-label="Opal Landscaping home"
        >
          <div className="flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02]">
            <Image
              src="/logo/logo.jpeg"
              alt="Opal Landscaping Logo"
              width={70}
              height={70}
              priority
              className="h-12 sm:h-20 w-auto object-contain shrink-0"
            />
            <div className="flex flex-col justify-center leading-none select-none">
              <span className="font-display font-bold text-[#014c48] text-[1.45rem] sm:text-[1.85rem] tracking-[0.03em] leading-[1]">
                OPAL
              </span>
              <span className="font-display font-bold text-[#b48816] text-[0.62rem] sm:text-[0.76rem] tracking-[0.24em] mt-1 uppercase leading-[1]">
                LANDSCAPING LLC
              </span>
            </div>
          </div>
        </Link>

        <button
          className="hidden max-[860px]:block bg-transparent border border-line rounded-[8px] px-[10px] py-[8px] text-ink font-inherit cursor-pointer"
          id="menuBtn"
          aria-expanded={menuOpen}
          aria-controls="navLinks"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Menu
        </button>

        <nav
          className={`flex items-center gap-[26px] max-[860px]:gap-0 max-[860px]:absolute max-[860px]:left-0 max-[860px]:right-0 max-[860px]:top-[84px] max-[860px]:flex-col max-[860px]:items-start max-[860px]:bg-paper max-[860px]:border-b max-[860px]:border-line max-[860px]:py-2 max-[860px]:px-[max(20px,env(safe-area-inset-left,0px))] ${menuOpen ? "max-[860px]:flex" : "max-[860px]:hidden"
            }`}
          id="navLinks"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`no-underline font-medium text-[0.95rem] transition-colors max-[860px]:py-3 max-[860px]:w-full max-[860px]:border-b max-[860px]:border-line ${isActive
                  ? "text-palm font-semibold underline decoration-2 underline-offset-8"
                  : "text-ink-2 hover:text-ink"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            className="btn btn-orange max-[860px]:mt-3 max-[860px]:w-auto"
            href="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Get a quote
          </Link>
        </nav>
      </div>
    </header>
  );
};
