"use client";

import { useState } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";

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
      <div className="wrap grid grid-cols-[1fr_1.1fr] max-[860px]:grid-cols-1 gap-[clamp(32px,6vw,72px)]">
        <div className="min-w-0">
          <Eyebrow className="!text-leaf">Contact</Eyebrow>
          <h2 className="heading-display text-[clamp(2rem,4.2vw,3.2rem)] mt-[14px]">
            Tell us about your site.
          </h2>
          <div className="grid gap-[22px] mt-8">
            <div className="grid gap-1">
              <small className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-on-palm-2">
                Office
              </small>
              <p className="text-[1.1rem] select-all">+971 4 370 6747</p>
            </div>
            <div className="grid gap-1">
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
            <div className="grid gap-1">
              <small className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-on-palm-2">
                Email
              </small>
              <p className="text-[1.1rem] select-all">
                info@opallandscaping.com
              </p>
            </div>
            <div className="grid gap-1">
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
            </div>
          </div>
        </div>

        <form
          id="quote"
          noValidate
          onSubmit={handleFormSubmit}
          className="bg-paper text-ink rounded-[4px] p-[clamp(20px,3vw,32px)] grid gap-4 min-w-0"
        >
          <div className="grid grid-cols-2 max-[520px]:grid-cols-1 gap-4 min-w-0">
            <label
              htmlFor="q-name"
              className="grid gap-[6px] text-[0.85rem] font-semibold text-ink-2 min-w-0"
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
                className="min-w-0 font-inherit text-[1rem] p-[12px_14px] border border-line rounded-[6px] bg-paper text-ink w-full focus:outline-2 focus:outline-water focus:outline-offset-0 focus:border-transparent"
              />
            </label>
            <label
              htmlFor="q-phone"
              className="grid gap-[6px] text-[0.85rem] font-semibold text-ink-2 min-w-0"
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
                className="min-w-0 font-inherit text-[1rem] p-[12px_14px] border border-line rounded-[6px] bg-paper text-ink w-full focus:outline-2 focus:outline-water focus:outline-offset-0 focus:border-transparent"
              />
            </label>
          </div>

          <div className="grid grid-cols-2 max-[520px]:grid-cols-1 gap-4 min-w-0">
            <label
              htmlFor="q-type"
              className="grid gap-[6px] text-[0.85rem] font-semibold text-ink-2 min-w-0"
            >
              Project type
              <select
                id="q-type"
                value={formData.type}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
                className="min-w-0 font-inherit text-[1rem] p-[12px_14px] border border-line rounded-[6px] bg-paper text-ink w-full focus:outline-2 focus:outline-water focus:outline-offset-0 focus:border-transparent"
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
              className="grid gap-[6px] text-[0.85rem] font-semibold text-ink-2 min-w-0"
            >
              Location / community
              <input
                id="q-area"
                placeholder="e.g. Arabian Ranches"
                value={formData.area}
                onChange={(e) =>
                  setFormData({ ...formData, area: e.target.value })
                }
                className="min-w-0 font-inherit text-[1rem] p-[12px_14px] border border-line rounded-[6px] bg-paper text-ink w-full focus:outline-2 focus:outline-water focus:outline-offset-0 focus:border-transparent"
              />
            </label>
          </div>

          <label
            htmlFor="q-msg"
            className="grid gap-[6px] text-[0.85rem] font-semibold text-ink-2 min-w-0"
          >
            Project details
            <textarea
              id="q-msg"
              placeholder="Approximate area, what you'd like, timeline"
              value={formData.msg}
              onChange={(e) =>
                setFormData({ ...formData, msg: e.target.value })
              }
              className="min-w-0 font-inherit text-[1rem] p-[12px_14px] border border-line rounded-[6px] bg-paper text-ink w-full min-h-[110px] resize-y focus:outline-2 focus:outline-water focus:outline-offset-0 focus:border-transparent"
            ></textarea>
          </label>

          <button
            className="btn btn-orange justify-self-start"
            type="submit"
          >
            Prepare my enquiry
          </button>

          {showOut && (
            <div className="grid gap-[10px] p-4 bg-sand rounded-[6px] text-[0.92rem]">
              <span>
                Your enquiry is ready. Send it on WhatsApp or copy it into an
                email to info@opallandscaping.com.
              </span>
              <pre
                id="outText"
                className="m-0 whitespace-pre-wrap font-mono text-[0.82rem] text-ink"
              >
                {outText}
              </pre>
              <div className="flex flex-wrap gap-2">
                <a
                  className="btn btn-orange !py-[0.6em] !px-[1em] !text-[0.88rem]"
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
                  className="btn btn-ghost !py-[0.6em] !px-[1em] !text-[0.88rem]"
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
    </section>
  );
};

