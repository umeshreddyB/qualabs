import { useState } from "react";
import {
  ArrowUpRight,
  Phone,
  Mail,
  MessageCircle,
  Check,
  Loader2,
} from "lucide-react";
import Reveal from "./Reveal";
import { services } from "../data";

const PHONE = "7989294321";
const PHONE_DISPLAY = "+91 79892 94321";
const EMAIL = "divyah964@gmail.com";
const WHATSAPP_URL = `https://wa.me/91${PHONE}`;
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${EMAIL}`;

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          _subject: "New Quadlabs project inquiry",
          _captcha: "false",
          _template: "table",
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" aria-label="Contact us" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Form */}
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-[#232327] bg-[#0d0d0f] p-7 sm:p-10">
              <div className="pointer-events-none absolute -left-16 -top-16 h-60 w-60 rounded-full bg-[#c4f82a]/10 blur-[90px]" />
              {status === "sent" ? (
                <div className="flex min-h-[28rem] flex-col items-center justify-center text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-[#c4f82a] text-[#0a0a0b]">
                    <Check className="h-8 w-8" />
                  </span>
                  <h3 className="mt-6 font-[var(--font-display)] text-2xl font-bold">
                    Thanks — we got it!
                  </h3>
                  <p className="mt-2 max-w-sm text-neutral-400">
                    Your message is on its way to our inbox. We'll get back to
                    you within one business day.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm font-semibold text-[#c4f82a] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative space-y-5">
                  <Field
                    label="Full Name"
                    name="name"
                    placeholder="Your full name"
                  />
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      placeholder="+91 93471 71519"
                    />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm text-neutral-400"
                    >
                      Service Required
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className="w-full appearance-none rounded-xl border border-[#232327] bg-[#141416] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#c4f82a]"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {services.map((s) => (
                        <option key={s.title} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm text-neutral-400"
                    >
                      Tell us about your project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Share your goals, timeline, and what success looks like for your business."
                      className="w-full resize-none rounded-xl border border-[#232327] bg-[#141416] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-[#c4f82a]"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-400">
                      Something went wrong. Please try again or email us
                      directly at {EMAIL}.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#c4f82a] px-7 py-4 font-semibold text-[#0a0a0b] transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                      </>
                    ) : (
                      <>
                        Book a Strategy Call
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Quick contact options */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col rounded-[2rem] border border-[#232327] bg-[#0d0d0f] p-7 sm:p-10">
              <h2 className="font-[var(--font-display)] text-2xl font-bold">
                Quick Contact Options
              </h2>
              <p className="mt-3 text-sm text-neutral-400">
                Quadlabs partners with ambitious brands to design, build, and
                scale products that deliver measurable results.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`tel:+91${PHONE}`}
                  className="flex items-start gap-4 rounded-2xl border border-[#232327] bg-[#141416] p-5 transition-colors hover:border-[#c4f82a]/40"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#c4f82a]/10 text-[#c4f82a]">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-neutral-500">
                      Call us
                    </span>
                    <span className="block font-semibold text-white">
                      {PHONE_DISPLAY}
                    </span>
                    <span className="block text-xs text-neutral-500">
                      Mon–Sat, business hours
                    </span>
                  </span>
                </a>

                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-start gap-4 rounded-2xl border border-[#232327] bg-[#141416] p-5 transition-colors hover:border-[#c4f82a]/40"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#c4f82a]/10 text-[#c4f82a]">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-neutral-500">
                      Email
                    </span>
                    <span className="block font-semibold text-white">
                      {EMAIL}
                    </span>
                    <span className="block text-xs text-neutral-500">
                      We respond within 24 hours
                    </span>
                  </span>
                </a>

                <div className="flex items-start gap-4 rounded-2xl border border-[#232327] bg-[#141416] p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-green-500/10 text-green-400">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-neutral-500">
                      WhatsApp
                    </span>
                    <span className="block text-sm text-neutral-300">
                      Instant chat & quick project questions
                    </span>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm text-neutral-400">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-[#232327] bg-[#141416] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-[#c4f82a]"
      />
    </div>
  );
}
