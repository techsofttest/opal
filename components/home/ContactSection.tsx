"use client";

import { useState } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useLayoutData } from "@/context/LayoutContext";

export function ContactSection (){
  
  const { layoutData } = useLayoutData();
  const contact = layoutData?.contact;
  const address2 = layoutData?.address2;
  const services = layoutData?.service || [];
const [formData, setFormData] = useState({
  name: "",
  phone: "",
  type: "Landscape design & build",
  area: "",
  msg: "",
});

const [loading, setLoading] = useState(false);
const [submitStatus, setSubmitStatus] = useState<"success" | "error" | "">("");
  const [outText, setOutText] = useState("");
  const [showOut, setShowOut] = useState(false);
  const [copied, setCopied] = useState(false);

 const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (
    !formData.name.trim() ||
    !formData.phone.trim()
  ) {
    setSubmitStatus("error");
    setOutText("Please enter your name and phone number.");
    setShowOut(true);
    return;
  }

  setLoading(true);
  setShowOut(false);
  setSubmitStatus("");

  const enquiryMessage = `Hello Opal Landscaping,

Name: ${formData.name.trim()}
Phone: ${formData.phone.trim()}
Project: ${formData.type}
Location: ${formData.area.trim() || "-"}
Details: ${formData.msg.trim() || "-"}

Please contact me to arrange a site visit.`;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/send`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          project: formData.type,
          area: formData.area.trim(),
          message: formData.msg.trim(),
        }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      const validationMessage = result.errors
        ? Object.values(result.errors).flat().join("\n")
        : result.message || "Unable to send your enquiry.";

      throw new Error(String(validationMessage));
    }

    setSubmitStatus("success");
    setOutText(enquiryMessage);
    setShowOut(true);

    setFormData({
      name: "",
      phone: "",
      type: "Landscape design & build",
      area: "",
      msg: "",
    });

  } catch (error) {
    setSubmitStatus("error");
    setOutText(
      error instanceof Error
        ? error.message
        : "Something went wrong. Please try again."
    );
    setShowOut(true);

  } finally {
    setLoading(false);
  }
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
  const maplink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.431057404285!2d55.31291887609279!3d25.22240983068593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d34214f5263%3A0xe54d6d63fa28ba35!2sAl%20Makhawi%20Building!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
    
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
              <a
                href={contact?.phone || ""}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[1.1rem] no-underline select-all hover:underline">{contact?.phone}</a>
            </div>
            <div className="grid gap-1 reveal delay-3">
              <small className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-on-palm-2">
                WhatsApp
              </small>
              <a
                href={`https://wa.me/${contact?.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[1.1rem] no-underline select-all hover:underline"
              >
                +{contact?.whatsapp}
              </a>
            </div>
            <div className="grid gap-1 reveal delay-4">
              <small className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-on-palm-2">
                Email
              </small>
              <a
                href={`mailto:${contact?.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[1.1rem] no-underline select-all hover:underline"
              >{contact?.email}
              </a>
            </div>
            <div className="grid gap-1 reveal delay-5">
              <small className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-on-palm-2">
                Address
              </small>
              <address className="not-italic [&_p]:text-on-palm [&_p]:leading-[1.5] [&_p_strong]:text-[1.12rem]
            [&_p_strong]:leading-relaxed
            [&_p_strong]:text-ink
            [&_p_strong]:font-medium
            [&_h2]:heading-display
            [&_h2]:text-[1.65rem]
            sm:[&_h2]:text-[1.85rem]
            [&_h2]:text-white
            [&_h2]:mb-4
            [&_h2]:mt-6 [&_h3]:heading-display [&_h3]:text-[1.4rem] [&_h3]:text-white mb-3" dangerouslySetInnerHTML={{__html:contact?.address ?? ""}} />
             <small className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-on-palm-2">
              Sharjah Address 
              </small>
              <address className="not-italic [&_p]:text-on-palm [&_p]:leading-[1.5] [&_p_strong]:text-[1.12rem]
            [&_p_strong]:leading-relaxed
            [&_p_strong]:text-ink
            [&_p_strong]:font-medium
            [&_h2]:heading-display
            [&_h2]:text-[1.65rem]
            sm:[&_h2]:text-[1.85rem]
            [&_h2]:text-white
            [&_h2]:mb-4
            [&_h2]:mt-6 [&_h3]:heading-display [&_h3]:text-[1.4rem] [&_h3]:text-white mb-3" dangerouslySetInnerHTML={{__html:address2 ?? ""}} />
             
              <div className="mt-3 rounded-[6px] overflow-hidden border border-line/30 shadow-inner">
                <iframe
                  title="Opal Landscaping Location"
                  src={contact?.map || maplink}
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
                ><option value="" disabled> Select a project type</option>
                {services.map((sub) => ( <option key={sub.id} value={sub.title}>{sub.title}</option> ))}
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
  disabled={loading}
>
  {loading ? "Sending..." : "Send Enquiry"}
</button>

            {showOut && (
              <div className="flex flex-col gap-2.5 p-4 bg-sand rounded-[6px] text-[0.92rem] border border-line/40">
               <span className="text-ink font-medium">
                    {submitStatus === "success"
                      ? "Your enquiry has been sent successfully. You can also share the details on WhatsApp."
                      : outText}
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
                    href={`https://wa.me/${contact?.whatsapp}?text=${encodeURIComponent(
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
