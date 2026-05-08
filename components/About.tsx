import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_60%_at_20%_0%,rgba(30,136,229,.18),transparent)]"
      />
      <div className="container-x relative grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <span className="eyebrow !bg-white/10 !text-white">About</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Mobile repair focused on honest work and dependable service.
          </h2>
          <div className="mt-6 space-y-5 text-lg text-white/80">
            <p>
              TK Pro Garage LLC is a local mobile auto repair business focused on
              honest work, clear communication, and dependable service.
            </p>
            <p>
              Whether you need routine maintenance, diagnostics, brakes, oil
              service, or general repairs, the goal is simple: bring skilled
              service to you and help you get back on the road with confidence.
              Ask about setting up a maintenance service contract for peace of
              mind, so your vehicle is cared for without bringing it to a shop.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Badge>Mobile Auto Repair</Badge>
            <Badge>Maintenance & Repairs</Badge>
            <Badge>ASE Standard</Badge>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/auto-repair/toolbox.jpg"
                alt="Organized mechanic tools ready for repair work"
                fill
                sizes="(min-width: 1024px) 360px, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
            </div>
            <Image
              src="/logo.png"
              alt="TK Pro Garage LLC logo"
              width={400}
              height={140}
              className="mx-auto mt-6 h-20 w-auto"
            />
            <div className="mt-6 grid grid-cols-2 gap-4 text-center">
              <Stat label="Days available" value="6" />
              <Stat label="Service model" value="Mobile" />
              <Stat label="Service standard" value="ASE" wide />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium text-white ring-1 ring-inset ring-white/15">
      {children}
    </span>
  );
}

function Stat({
  label,
  value,
  wide = false,
}: {
  label: string;
  value: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`rounded-xl bg-white/5 p-4 ring-1 ring-white/10 ${
        wide ? "col-span-2" : ""
      }`}
    >
      <div className="text-xl font-bold">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-white/60">
        {label}
      </div>
    </div>
  );
}
