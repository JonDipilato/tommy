import Image from "next/image";
import {
  CalendarIcon,
  DiscIcon,
  DropletIcon,
  GaugeIcon,
  SnowflakeIcon,
  WrenchIcon,
} from "./Icons";

const services = [
  {
    icon: GaugeIcon,
    title: "Engine Diagnostics",
    body: "Check engine lights, performance issues, and electrical faults traced to the real cause, not guesswork.",
  },
  {
    icon: DiscIcon,
    title: "Brake Service",
    body: "Pads, rotors, calipers, fluid, and inspections so you stop short when it matters.",
  },
  {
    icon: SnowflakeIcon,
    title: "AC Service",
    body: "AC certified diagnostics, recharge, and repair so your cabin stays cold all summer.",
  },
  {
    icon: DropletIcon,
    title: "Oil Changes",
    body: "Fast, clean oil and filter service with a quick health check while we're under the hood.",
  },
  {
    icon: WrenchIcon,
    title: "General Repairs",
    body: "Belts, hoses, batteries, alternators, suspension, and the everyday fixes that keep cars on the road.",
  },
  {
    icon: CalendarIcon,
    title: "Preventive Maintenance",
    body: "Manufacturer-aligned service intervals so small things stay small and your vehicle stays dependable.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20 sm:py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Services</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            Everyday repairs, handled by people who actually do this work.
          </h2>
          <p className="mt-4 text-lg text-navy-900/70">
            Sedans, SUVs, and pickups — straightforward service from a local
            shop that takes the time to get it right.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl bg-navy-950 shadow-card ring-1 ring-navy-900/5">
          <div className="relative aspect-[16/7] min-h-[260px]">
            <Image
              src="/images/auto-repair/diagnostics.jpg"
              alt="Vehicle electrical diagnostics in progress"
              fill
              sizes="(min-width: 1024px) 1024px, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950/55 via-transparent to-transparent" />
          </div>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, body }) => (
            <li key={title}>
              <article className="group h-full rounded-2xl bg-white p-6 shadow-card ring-1 ring-navy-900/5 transition hover:-translate-y-0.5 hover:shadow-card-hover">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent-dark transition group-hover:bg-accent group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy-950">
                  {title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-navy-900/70">
                  {body}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
