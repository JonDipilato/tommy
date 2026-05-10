import Image from "next/image";
import {
  CalendarIcon,
  CarIcon,
  DiscIcon,
  DropletIcon,
  GaugeIcon,
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
    icon: CarIcon,
    title: "Mobile Maintenance",
    body: "On-site maintenance and smaller repairs handled where the vehicle is parked.",
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
    title: "Maintenance Service Contracts",
    body: "Set up ongoing maintenance for peace of mind and let us take care of your vehicle without the need to bring it to a shop.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20 sm:py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Services</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            Mobile maintenance and repairs without bringing your vehicle to a shop.
          </h2>
          <p className="mt-4 text-lg text-navy-900/70">
            Sedans, SUVs, and pickups — straightforward mobile service from a
            local mechanic who takes the time to get it right, with maintenance
            service contracts available for ongoing peace of mind.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl bg-navy-950 shadow-card ring-1 ring-navy-900/5">
          <div className="relative aspect-[16/7] min-h-[260px]">
            <Image
              src="/images/auto-repair/mobile-mechanic.jpg"
              alt="Mobile mechanic working under the hood of a vehicle"
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
