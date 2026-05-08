"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BUSINESS } from "@/lib/business";
import { CloseIcon, MenuIcon, PhoneIcon } from "./Icons";

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#hours", label: "Hours" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition ${
        scrolled
          ? "bg-white/90 backdrop-blur shadow-[0_1px_0_rgba(15,23,42,0.06)]"
          : "bg-white"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4 sm:h-20">
        <Link
          href="#home"
          aria-label="TK Pro Garage LLC home"
          className="flex items-center"
        >
          <Image
            src="/logo.png"
            alt="TK Pro Garage LLC logo"
            width={180}
            height={56}
            priority
            className="h-9 w-auto sm:h-11"
          />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm font-medium text-navy-900/80">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="transition hover:text-accent-dark"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${BUSINESS.phoneTel}`}
            className="btn-primary hidden sm:inline-flex"
            aria-label={`Call ${BUSINESS.name} at ${BUSINESS.phone}`}
          >
            <PhoneIcon className="h-4 w-4" />
            {BUSINESS.phone}
          </a>
          <a
            href={`tel:${BUSINESS.phoneTel}`}
            className="btn-primary inline-flex sm:hidden !px-3"
            aria-label={`Call ${BUSINESS.name}`}
          >
            <PhoneIcon className="h-4 w-4" />
            Call
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy-900 ring-1 ring-inset ring-navy-900/10 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden">
          <nav
            aria-label="Mobile"
            className="container-x border-t border-navy-900/10 py-4"
          >
            <ul className="flex flex-col gap-1">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-navy-900 hover:bg-navy-900/5"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
