import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-paper border-t border-line py-12 text-[0.88rem] text-ink-2">
      <div className="wrap flex flex-col gap-8">
        {/* Top / Badges Row */}
        <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-line">
          {/* Logo & Copyright */}
          <div className="flex flex-col gap-2">
            <Link href="/" className="relative w-50 h-16 block">
              <Image
                src="/logo/logo-v2.png"
                alt="Opal Landscaping"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-[0.82rem] text-ink-2">
              © 2026 Opal Landscaping LLC · A member of RC Group
            </p>
          </div>

          {/* Verification & Trust Badges */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Opal+Landscaping+LLC+Dubai"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-28 sm:w-32 h-14 sm:h-16 transition-transform duration-200 hover:scale-105"
              aria-label="View Opal Landscaping Google Reviews"
            >
              <Image
                src="/footer/google-review.png"
                alt="Google 5-star Reviews Badge"
                fill
                className="object-contain"
              />
            </a>

            <div className="relative w-14 sm:w-16 h-14 sm:h-16">
              <Image
                src="/footer/ecovadis-platinum.png"
                alt="EcoVadis Platinum Certification"
                fill
                className="object-contain"
              />
            </div>

            <div className="relative w-14 sm:w-16 h-14 sm:h-16">
              <Image
                src="/footer/iso.png"
                alt="ISO Certified Management System"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom / Links & Social Media Icons */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <nav className="flex flex-wrap gap-5 text-[0.84rem]">
            <Link
              href="/about"
              className="no-underline hover:text-ink transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="no-underline hover:text-ink transition-colors"
            >
              Services
            </Link>
            <Link
              href="/work"
              className="no-underline hover:text-ink transition-colors"
            >
              Our Work
            </Link>
            <Link
              href="/clients"
              className="no-underline hover:text-ink transition-colors"
            >
              Clients
            </Link>
            <Link
              href="/blogs"
              className="no-underline hover:text-ink transition-colors"
            >
              Blogs
            </Link>
            <Link
              href="/faq"
              className="no-underline hover:text-ink transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="no-underline hover:text-ink transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Social Media Clickable Icons with react-icons */}
          <div className="flex items-center gap-3" aria-label="Social media profiles">
            <a
              href="https://www.instagram.com/opal_landscaping_llc_uae"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full border border-line bg-sand flex items-center justify-center text-ink-2 hover:text-[#E4405F] hover:border-[#E4405F]/40 transition-colors"
            >
              <FaInstagram className="w-4 h-4" aria-hidden="true" />
            </a>

            <a
              href="https://www.linkedin.com/in/opal-landscaping-llc/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full border border-line bg-sand flex items-center justify-center text-ink-2 hover:text-[#0A66C2] hover:border-[#0A66C2]/40 transition-colors"
            >
              <FaLinkedinIn className="w-4 h-4" aria-hidden="true" />
            </a>

            <a
              href="https://wa.me/971509040480"
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
