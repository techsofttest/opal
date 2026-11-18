"use client";

import { FaWhatsapp, FaPhone } from "react-icons/fa6";
import { useLayoutData } from "@/context/LayoutContext";

export function FloatingWhatsApp() {
  const { layoutData } = useLayoutData();
  const contact = layoutData?.contact;
  const whatsappNumber = contact?.whatsapp?.replace(/\D/g, "") || "";

  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto max-w-[calc(100vw-32px)]"
    >
      <div className="flex items-center rounded-full bg-[#067a63] text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] overflow-hidden">
        {/* Chat (WhatsApp) Half */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=Hello%20Opal%20Landscaping%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 pl-3 pr-5 py-2.5 hover:bg-[#056854] transition-colors no-underline text-white"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/15 shrink-0 transition-transform duration-200 group-hover:scale-105">
            <FaWhatsapp className="w-4 h-4 text-white" aria-hidden="true" />
          </span>
          <span className="font-semibold text-[0.95rem] tracking-wide whitespace-nowrap">
            Chat
          </span>
        </a>

        {/* Vertical Divider */}
        <div className="w-px h-11 bg-white/25 shrink-0" aria-hidden="true" />

        {/* Call Half */}
        <a
          href={`tel:${contact?.phone}`}
          className="group flex items-center gap-2.5 pl-5 pr-6 py-2.5 hover:bg-[#056854] transition-colors no-underline text-white"
        >
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 shrink-0 transition-transform duration-200 group-hover:scale-105">
            <FaPhone className="w-3 h-3 text-[#b9f6ca]" aria-hidden="true" />
          </span>
          <span className="font-semibold text-[0.95rem] tracking-wide whitespace-nowrap">
            Call
          </span>
        </a>
      </div>
    </aside>
  );
}