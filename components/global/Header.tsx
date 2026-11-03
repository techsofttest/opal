"use client";

import { useState } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-[env(safe-area-inset-top,0px)] z-50 bg-white backdrop-blur-[10px] border-b border-line">
      <div className="wrap relative flex items-center justify-between gap-4 h-[84px]">
        <a
          className="relative z-10 flex items-center self-start no-underline pt-2"
          href="#top"
          aria-label="Opal Landscaping home"
        >
          <div className="bg-white px-1 pb-1 rounded-b-2xl border-x border-b border-line shadow-md transition-transform duration-200 hover:scale-[1.02]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo/logo.jpeg"
              alt="Opal Landscaping Logo"
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain shrink-0 rounded-b-xl"
            />
          </div>
        </a>

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
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="no-underline font-medium text-[0.95rem] text-ink-2 hover:text-ink max-[860px]:py-3 max-[860px]:w-full max-[860px]:border-b max-[860px]:border-line"
          >
            About
          </a>
          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
            className="no-underline font-medium text-[0.95rem] text-ink-2 hover:text-ink max-[860px]:py-3 max-[860px]:w-full max-[860px]:border-b max-[860px]:border-line"
          >
            Services
          </a>
          <a
            href="#work"
            onClick={() => setMenuOpen(false)}
            className="no-underline font-medium text-[0.95rem] text-ink-2 hover:text-ink max-[860px]:py-3 max-[860px]:w-full max-[860px]:border-b max-[860px]:border-line"
          >
            Our work
          </a>
          <a
            href="#sectors"
            onClick={() => setMenuOpen(false)}
            className="no-underline font-medium text-[0.95rem] text-ink-2 hover:text-ink max-[860px]:py-3 max-[860px]:w-full max-[860px]:border-b max-[860px]:border-line"
          >
            Clients
          </a>
          <a
            href="#group"
            onClick={() => setMenuOpen(false)}
            className="no-underline font-medium text-[0.95rem] text-ink-2 hover:text-ink max-[860px]:py-3 max-[860px]:w-full max-[860px]:border-b max-[860px]:border-line"
          >
            RC Group
          </a>
          <a
            href="#csr"
            onClick={() => setMenuOpen(false)}
            className="no-underline font-medium text-[0.95rem] text-ink-2 hover:text-ink max-[860px]:py-3 max-[860px]:w-full max-[860px]:border-b max-[860px]:border-line"
          >
            Punarjani
          </a>
          <a
            href="#faq"
            onClick={() => setMenuOpen(false)}
            className="no-underline font-medium text-[0.95rem] text-ink-2 hover:text-ink max-[860px]:py-3 max-[860px]:w-full max-[860px]:border-b max-[860px]:border-line"
          >
            FAQ
          </a>
          <a
            className="btn btn-solid max-[860px]:mt-3 max-[860px]:w-auto"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Get a quote
          </a>
        </nav>
      </div>
    </header>
  );
};

