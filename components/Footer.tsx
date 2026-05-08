import Image from "next/image";
import { BUSINESS, directionsUrl } from "@/lib/business";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-x py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="inline-flex rounded-xl bg-white px-3 py-2 shadow-sm">
              <Image
                src="/logo.png"
                alt="TKProGarage logo"
                width={200}
                height={64}
                className="h-10 w-auto"
              />
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/60">
              Mobile auto repair and maintenance for everyday cars and trucks.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Visit
            </h3>
            <p className="mt-4 text-[15px] text-white/85">{BUSINESS.street}</p>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-[15px] font-semibold text-accent-light hover:text-white"
            >
              Get directions →
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Contact
            </h3>
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="mt-4 block text-[15px] text-white/85 hover:text-white"
            >
              {BUSINESS.phone}
            </a>
            <p className="mt-2 text-[15px] text-white/70">
              {BUSINESS.hoursLine}
            </p>
            <p className="text-[15px] text-white/50">{BUSINESS.hoursClosed}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Certifications
            </h3>
            <p className="mt-4 text-[15px] text-white/85">
              Above ASE Certified Standards
            </p>
            <p className="mt-2 text-[15px] text-white/50">
              Mobile Auto Repair
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p>
            Built by{" "}
            <a
              href="https://dipilatoautomations.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent-light hover:text-white"
            >
              DiPilato Automations
            </a>
          </p>
          <p>{BUSINESS.certs}</p>
        </div>
      </div>
    </footer>
  );
}
