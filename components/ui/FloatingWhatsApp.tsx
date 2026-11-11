import { FaWhatsapp } from "react-icons/fa6";

export const FloatingWhatsApp = () => {
  return (
    <aside
      aria-label="WhatsApp quick chat"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto max-w-[calc(100vw-32px)]"
    >
      <a
        href="https://wa.me/971509040480?text=Hello%20Opal%20Landscaping%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#20bd5a] hover:bg-[#25D366] text-white shadow-xl hover:shadow-2xl border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        {/* <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span> */}
        <FaWhatsapp className="w-5 h-5 shrink-0 text-white text-xl" aria-hidden="true" />
        <span className="font-semibold text-[0.92rem] tracking-wide whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
};
