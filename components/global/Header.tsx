"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutData } from "@/context/LayoutContext";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const { layoutData } = useLayoutData();
  const services = layoutData?.service || [];

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Our work", href: "/work" },
    { label: "Clients", href: "/clients" },
    { label: "Blogs", href: "/blogs" },
    { label: "FAQ", href: "/faq" },
  ];

  // Close dropdown when clicking outside on desktop
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          className={`flex items-center gap-[26px] max-[860px]:gap-0 max-[860px]:absolute max-[860px]:left-0 max-[860px]:right-0 max-[860px]:top-[84px] max-[860px]:flex-col max-[860px]:items-start max-[860px]:bg-paper max-[860px]:border-b max-[860px]:border-line max-[860px]:py-2 max-[860px]:px-[max(20px,env(safe-area-inset-left,0px))] ${
            menuOpen ? "max-[860px]:flex" : "max-[860px]:hidden"
          }`}
          id="navLinks"
        >
          {/* Static link: About */}
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className={`no-underline font-medium text-[0.95rem] transition-colors max-[860px]:py-3 max-[860px]:w-full max-[860px]:border-b max-[860px]:border-line ${
              pathname === "/about"
                ? "text-palm font-semibold underline decoration-2 underline-offset-8"
                : "text-ink-2 hover:text-ink"
            }`}
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div className="relative max-[860px]:w-full max-[860px]:border-b max-[860px]:border-line" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`flex items-center gap-1.5 bg-transparent border-none p-0 font-inherit font-medium text-[0.95rem] cursor-pointer transition-colors max-[860px]:py-3 max-[860px]:w-full max-[860px]:justify-between ${
                pathname.startsWith("/services")
                  ? "text-palm font-semibold underline decoration-2 underline-offset-8"
                  : "text-ink-2 hover:text-ink"
              }`}
              aria-expanded={servicesOpen}
            >
              Services
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu Container */}
            <div
              className={`min-w-[220px] bg-white rounded-[8px] shadow-lg border border-line p-2 transition-all duration-150 ${
                servicesOpen ? "block" : "hidden"
              } max-[860px]:static max-[860px]:shadow-none max-[860px]:border-none max-[860px]:bg-sand/30 max-[860px]:p-0 max-[860px]:pl-4 max-[860px]:mb-2 absolute left-0 top-full mt-2`}
            >
              {/* General Services index page link */}
              <Link
                href="/services"
                onClick={() => {
                  setServicesOpen(false);
                  setMenuOpen(false);
                }}
                className="block px-3 py-2 text-[0.9rem] font-medium text-palm hover:bg-sand/50 rounded-[6px] transition-colors max-[860px]:py-2.5"
              >
                All Services Overview
              </Link>
              <div className="h-px bg-line my-1 max-[860px]:hidden" />

              {services.map((sub) => (
                <Link
                  key={sub.id}
                  href={`/services/${sub.slug}`}
                  onClick={() => {
                    setServicesOpen(false);
                    setMenuOpen(false);
                  }}
                  className={`block px-3 py-2 text-[0.9rem] transition-colors rounded-[6px] max-[860px]:py-2.5 ${
                    pathname === sub.slug ? "text-palm font-semibold bg-sand/40" : "text-ink-2 hover:text-ink hover:bg-sand/40"
                  }`}
                >
                  {sub.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Remaining Nav Links */}
          {navLinks.slice(2).map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`no-underline font-medium text-[0.95rem] transition-colors max-[860px]:py-3 max-[860px]:w-full max-[860px]:border-b max-[860px]:border-line ${
                  isActive
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