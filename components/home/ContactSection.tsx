"use client";

import { useState } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    type: "Landscape design & build",
    area: "",
    msg: "",
  });
  const [outText, setOutText] = useState("");
  const [showOut, setShowOut] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setShowOut(true);
      setOutText("Please add your name and phone number so we can reach you.");
      return;
    }

    const msg = `Hello Opal Landscaping,\n\nName: ${formData.name.trim()}\nPhone: ${formData.phone.trim()}\nProject: ${formData.type}\nLocation: ${formData.area.trim() || "-"}\nDetails: ${formData.msg.trim() || "-"}\n\nPlease contact me to arrange a site visit.`;
    setOutText(msg);
    setShowOut(true);
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(outText)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      })
      .catch(() => {
        setCopied(true);
      });
  };

  return (
    <section id="contact" className="bg-palm text-on-palm py-[clamp(64px,9vw,120px)]">
      <ScrollReveal className="wrap grid grid-cols-[1fr_1.1fr] max-[860px]:grid-cols-1 gap-[clamp(32px,6vw,72px)] items-start">
        {/* Left Column: Contact Details & Location Map */}
        <div className="min-w-0">
          <div className="reveal">
            <Eyebrow className="!text-leaf">Contact</Eyebrow>
          </div>
          <h2 className="heading-display text-[clamp(2rem,4.2vw,3.2rem)] mt-[14px] reveal delay-1">
            Tell us about your site.
          </h2>
          <div className="grid gap-[22px] mt-8">
            <div className="grid gap-1 reveal delay-2">
              <small className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-on-palm-2">
                Office
              </small>
              <p className="text-[1.1rem] select-all">+971 4 370 6747</p>
            </div>
            <div className="grid gap-1 reveal delay-3">
              <small className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-on-palm-2">
                WhatsApp
              </small>
              <a
                href="https://wa.me/971509040480"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[1.1rem] no-underline select-all hover:underline"
              >
                +971 50 904 0480
              </a>
            </div>
            <div className="grid gap-1 reveal delay-4">
              <small className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-on-palm-2">
                Email
              </small>
              <p className="text-[1.1rem] select-all">
                info@opallandscaping.com
              </p>
            </div>
            <div className="grid gap-1 reveal delay-5">
              <small className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-on-palm-2">
                Address
              </small>
              <address className="not-italic text-on-palm leading-[1.5]">
                Office 210, 2nd Floor, Al Makhawi Building
                <br />
                Oud Metha Road, PO Box 191406
                <br />
                Dubai, United Arab Emirates
              </address>
              <div className="mt-3 rounded-[6px] overflow-hidden border border-line/30 shadow-inner">
                <iframe
                  title="Opal Landscaping Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.431057404285!2d55.31291887609279!3d25.22240983068593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d34214f5263%3A0xe54d6d63fa28ba35!2sAl%20Makhawi%20Building!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                  width="100%"
                  height="160"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full block filter contrast-[1.05]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Normal Sized, Sticky Form */}
        <div className="min-w-0 self-start md:sticky md:top-28 z-10">
          <form
            id="quote"
            noValidate
            onSubmit={handleFormSubmit}
            className="bg-paper text-ink font-sans rounded-[8px] p-6 sm:p-7 shadow-lg border border-line flex flex-col gap-4 w-full max-w-[540px]"
          >
            <div className="grid grid-cols-2 max-[520px]:grid-cols-1 gap-4">
              <label
                htmlFor="q-name"
                className="flex flex-col gap-1.5 text-[0.85rem] font-semibold text-ink-2 font-sans"
              >
                Name
                <input
                  id="q-name"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="font-sans text-[0.95rem] py-2.5 px-3.5 border border-line rounded-[6px] bg-white text-ink w-full focus:outline-2 focus:outline-water focus:border-transparent transition-all"
                />
              </label>
              <label
                htmlFor="q-phone"
                className="flex flex-col gap-1.5 text-[0.85rem] font-semibold text-ink-2 font-sans"
              >
                Phone
                <input
                  id="q-phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="font-sans text-[0.95rem] py-2.5 px-3.5 border border-line rounded-[6px] bg-white text-ink w-full focus:outline-2 focus:outline-water focus:border-transparent transition-all"
                />
              </label>
            </div>

            <div className="grid grid-cols-2 max-[520px]:grid-cols-1 gap-4">
              <label
                htmlFor="q-type"
                className="flex flex-col gap-1.5 text-[0.85rem] font-semibold text-ink-2 font-sans"
              >
                Project type
                <select
                  id="q-type"
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value })
                  }
                  className="font-sans text-[0.95rem] py-2.5 px-3.5 border border-line rounded-[6px] bg-white text-ink w-full focus:outline-2 focus:outline-water focus:border-transparent transition-all cursor-pointer"
                >
                  <option>Landscape design &amp; build</option>
                  <option>Swimming pool</option>
                  <option>Irrigation</option>
                  <option>Maintenance contract</option>
                  <option>Hardscape</option>
                  <option>Indoor plants</option>
                </select>
              </label>
              <label
                htmlFor="q-area"
                className="flex flex-col gap-1.5 text-[0.85rem] font-semibold text-ink-2 font-sans"
              >
                Location / community
                <input
                  id="q-area"
                  placeholder="e.g. Arabian Ranches"
                  value={formData.area}
                  onChange={(e) =>
                    setFormData({ ...formData, area: e.target.value })
                  }
                  className="font-sans text-[0.95rem] py-2.5 px-3.5 border border-line rounded-[6px] bg-white text-ink w-full focus:outline-2 focus:outline-water focus:border-transparent transition-all"
                />
              </label>
            </div>

            <label
              htmlFor="q-msg"
              className="flex flex-col gap-1.5 text-[0.85rem] font-semibold text-ink-2 font-sans"
            >
              Project details
              <textarea
                id="q-msg"
                rows={3}
                placeholder="Approximate area, what you'd like, timeline"
                value={formData.msg}
                onChange={(e) =>
                  setFormData({ ...formData, msg: e.target.value })
                }
                className="font-sans text-[0.95rem] py-2.5 px-3.5 border border-line rounded-[6px] bg-white text-ink w-full min-h-[90px] resize-y focus:outline-2 focus:outline-water focus:border-transparent transition-all"
              ></textarea>
            </label>

            <button
              className="btn btn-orange justify-self-start self-start mt-1"
              type="submit"
            >
              Prepare my enquiry
            </button>

            {showOut && (
              <div className="flex flex-col gap-2.5 p-4 bg-sand rounded-[6px] text-[0.92rem] border border-line/40">
                <span className="text-ink font-medium">
                  Your enquiry is ready. Send it on WhatsApp or copy it into an
                  email to info@opallandscaping.com.
                </span>
                <pre
                  id="outText"
                  className="m-0 whitespace-pre-wrap font-mono text-[0.82rem] text-ink bg-white/70 p-2.5 rounded border border-line/30"
                >
                  {outText}
                </pre>
                <div className="flex flex-wrap gap-2 mt-1">
                  <a
                    className="btn btn-orange !py-[0.55em] !px-[1em] !text-[0.88rem]"
                    id="waLink"
                    href={`https://wa.me/971509040480?text=${encodeURIComponent(
                      outText
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open WhatsApp
                  </a>
                  <button
                    className="btn btn-ghost !py-[0.55em] !px-[1em] !text-[0.88rem]"
                    type="button"
                    id="copyBtn"
                    onClick={handleCopy}
                  >
                    {copied ? "Copied" : "Copy text"}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </ScrollReveal>
    </section>
  );
};
