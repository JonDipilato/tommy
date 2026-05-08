import Image from "next/image";
import { BUSINESS } from "@/lib/business";
import { ClockIcon, PhoneIcon, ShieldIcon } from "./Icons";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy-950 text-white"
    >
      <BackgroundDecor />

      <div className="container-x relative grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-12 lg:gap-10 lg:py-28">
        <div className="lg:col-span-7">
          <span className="eyebrow !bg-white/10 !text-white">
            <ShieldIcon className="h-3.5 w-3.5" />
            Mobile Auto Repair • ASE Standard
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Reliable auto repair{" "}
            <span className="text-accent-light">done right.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/75 sm:text-xl">
            From diagnostics and maintenance to everyday repairs,{" "}
            {BUSINESS.name} brings honest, skilled service to your vehicle
            wherever it sits.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="btn-primary !px-6 !py-3.5 !text-base"
            >
              <PhoneIcon className="h-5 w-5" />
              Call now
            </a>
            <a href="#hours" className="btn-ghost-light !px-6 !py-3.5 !text-base">
              <ClockIcon className="h-5 w-5" />
              View hours
            </a>
          </div>

          <dl className="mt-10 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <Stat label="Mon – Sat" value="9 – 5" />
            <Stat label="Service" value="Mobile" />
            <Stat label="Local area" value="Auburn, MA" />
          </dl>
        </div>

        <div className="lg:col-span-5">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wider text-white/50">{label}</dt>
      <dd className="mt-1 text-lg font-semibold text-white">{value}</dd>
    </div>
  );
}

function BackgroundDecor() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_70%_0%,rgba(30,136,229,.28),transparent),radial-gradient(40%_40%_at_0%_100%,rgba(66,165,245,.15),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.7) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
    </>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="relative overflow-hidden rounded-2xl shadow-card ring-1 ring-white/10">
        <div className="relative aspect-[4/5] min-h-[440px]">
          <Image
            src="/images/auto-repair/diagnostics.jpg"
            alt="Mechanic checking vehicle electrical components during mobile service"
            fill
            priority
            sizes="(min-width: 1024px) 42vw, 90vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
        </div>

        <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-xl bg-navy-950/80 px-4 py-3 ring-1 ring-white/15 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-white">
              <ShieldIcon className="h-5 w-5" />
            </div>
            <div className="text-sm">
              <div className="font-semibold">ASE Standard work</div>
              <div className="text-white/60">Mobile repair</div>
            </div>
          </div>
          <a
            href={`tel:${BUSINESS.phoneTel}`}
            className="text-sm font-semibold text-accent-light hover:text-white"
          >
            {BUSINESS.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
