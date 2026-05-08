"use client";

import { useState } from "react";
import { BUSINESS } from "@/lib/business";
import { CheckIcon, MessageIcon, PhoneIcon } from "./Icons";

type Status = "idle" | "submitting" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          result?.message ||
            "We could not send the request. Please call TKProGarage directly.",
        );
      }

      setStatus("sent");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "We could not send the request. Please call TKProGarage directly.",
      );
    }
  }

  return (
    <section id="contact" className="bg-white py-20 sm:py-24">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="eyebrow">Contact</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
              Tell us where the vehicle is and what's going on.
            </h2>
            <p className="mt-4 text-lg text-navy-900/70">
              Send a quick request and we'll get back to you to coordinate
              mobile service. Need to talk now? Calling is the fastest way to
              reach TKProGarage.
            </p>

            <div className="mt-8 space-y-4">
              <ContactRow
                icon={<PhoneIcon className="h-5 w-5" />}
                label="Phone"
                value={BUSINESS.phone}
                href={`tel:${BUSINESS.phoneTel}`}
              />
              <ContactRow
                icon={<MessageIcon className="h-5 w-5" />}
                label="Hours"
                value={BUSINESS.hoursLine}
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="rounded-2xl bg-gray-50 p-6 ring-1 ring-navy-900/5 sm:p-8"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  id="name"
                  name="name"
                  label="Name"
                  autoComplete="name"
                  required
                />
                <Field
                  id="phone"
                  name="phone"
                  label="Phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                />
                <Field
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  autoComplete="email"
                />
                <Field
                  id="vehicle"
                  name="vehicle"
                  label="Vehicle year / make / model"
                  required
                />
                <Field
                  id="location"
                  name="location"
                  label="Vehicle location"
                  className="sm:col-span-2"
                  required
                />
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-navy-900"
                  >
                    What do you need help with?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-2 block w-full rounded-lg border-0 bg-white px-3.5 py-3 text-[15px] text-navy-950 shadow-sm ring-1 ring-inset ring-navy-900/10 placeholder:text-navy-900/40 focus:ring-2 focus:ring-inset focus:ring-accent"
                  />
                </div>
              </div>
              <div className="hidden" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-primary !px-6 !py-3.5 !text-base disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "submitting" ? "Sending..." : "Request service"}
                </button>
                {status === "sent" && (
                  <span
                    role="status"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700"
                  >
                    <CheckIcon className="h-4 w-4" />
                    Got it. We'll follow up shortly.
                  </span>
                )}
                {status === "error" && (
                  <span
                    role="alert"
                    className="text-sm font-semibold text-red-700"
                  >
                    {errorMessage}
                  </span>
                )}
              </div>

              <p className="mt-4 text-xs text-navy-900/50">
                By submitting you agree we can contact you about your service
                request. We never share your info.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent-dark">
        {icon}
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-navy-900/50">
          {label}
        </div>
        <div className="text-[15px] font-semibold text-navy-950">{value}</div>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="flex items-center gap-3 rounded-xl px-2 py-2 -mx-2 transition hover:bg-navy-900/5"
      >
        {content}
      </a>
    );
  }
  return <div className="flex items-center gap-3">{content}</div>;
}

function Field({
  id,
  name,
  label,
  type = "text",
  className = "",
  ...rest
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-navy-900"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        className="mt-2 block w-full rounded-lg border-0 bg-white px-3.5 py-3 text-[15px] text-navy-950 shadow-sm ring-1 ring-inset ring-navy-900/10 placeholder:text-navy-900/40 focus:ring-2 focus:ring-inset focus:ring-accent"
        {...rest}
      />
    </div>
  );
}
