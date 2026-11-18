"use client";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { useLayoutData } from "@/context/LayoutContext";
import { FaFacebook } from "react-icons/fa";

export function Footer(){
  
  const { layoutData } = useLayoutData();
  const contact = layoutData?.contact;
             
  return (
    <footer className="bg-white border-t border-line py-12 text-[0.88rem] text-ink-2">
      <div className="wrap flex flex-col gap-8">
        {/* Top / Badges Row */}
        <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-line">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center sm:items-start gap-2 w-full sm:w-auto">
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
                  className="h-14 sm:h-20 w-auto object-contain shrink-0"
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

            <p className="text-[0.82rem] text-ink-2 text-center sm:text-left">
              Copyright @ 2026 Opal Landscaping LLC
            </p>
          </div>

          <div className="flex w-full sm:w-auto flex-col items-center sm:items-end gap-5">
              <div className="flex flex-nowrap items-center justify-center gap-2 sm:gap-5 w-full">

                <a
                  href="https://share.google/7tHx42ybaLgGtLjyV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-20 sm:w-32 h-12 sm:h-16 shrink-0 transition-transform duration-200 hover:scale-105"
                  aria-label="View Opal Landscaping Google Reviews"
                >
                  <Image
                    src="/footer/google-review.png"
                    alt="Google 5-star Reviews Badge"
                    fill
                    className="object-contain"
                  />
                </a>

                {[
                  {
                    src: "/icons/ecovadis.png",
                    alt: "EcoVadis Platinum Certification",
                  },
                  {
                    src: "/icons/iso-9001.png",
                    alt: "ISO 9001 Certification",
                  },
                  {
                    src: "/icons/iso-14001.png",
                    alt: "ISO 14001 Certification",
                  },
                  {
                    src: "/icons/iso-45001.png",
                    alt: "ISO 45001 Certification",
                  },
                ].map((badge) => (
                  <div
                    key={badge.src}
                    className="relative w-10 h-10 sm:w-16 sm:h-16 shrink-0"
                  >
                    <Image
                      src={badge.src}
                      alt={badge.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}

              </div>

              <a
                href="https://www.techsoftweb.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-palm text-[0.8rem] sm:text-[0.85rem] text-center sm:text-right font-semibold transition-colors hover:text-[#b48816] hover:underline underline-offset-4"
              >
                Web Design Company in Kochi Techsoft
              </a>

            </div></div>

        {/* Bottom / Links & Social Media Icons */}
        <div className="flex flex-wrap items-center justify-center sm:justify-center gap-4 pb-20 sm:pb-0">
        <div className="flex items-center gap-3" aria-label="Social media profiles">
            <a
              href={contact?.instagram || ""}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full border border-line bg-sand flex items-center justify-center text-ink-2 hover:text-[#E4405F] hover:border-[#E4405F]/40 transition-colors"
            >
              <FaInstagram className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href={contact?.facebook || ""}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full border border-line bg-sand flex items-center justify-center text-ink-2 hover:text-[#0A66C2] hover:border-[#0A66C2]/40 transition-colors"
            >
              <FaFacebook className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href={contact?.linkedin || ""}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full border border-line bg-sand flex items-center justify-center text-ink-2 hover:text-[#0A66C2] hover:border-[#0A66C2]/40 transition-colors"
            >
              <FaLinkedinIn className="w-4 h-4" aria-hidden="true" />
            </a>

            <a
              href={`https://wa.me/${contact?.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full border border-line bg-sand flex items-center justify-center text-ink-2 hover:text-[#25D366] hover:border-[#25D366]/40 transition-colors"
            >
              <FaWhatsapp className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
