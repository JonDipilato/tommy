import { CheckIcon } from "./Icons";

const points = [
  {
    title: "Skilled ASE-standard work",
    body: "ASE Standard service with the practical experience to do the job right the first time.",
  },
  {
    title: "Maintenance contracts for peace of mind",
    body: "Set up a maintenance service contract and let us take care of your vehicle without the need to bring it to a shop.",
  },
  {
    title: "Repairs for everyday vehicles",
    body: "Daily drivers, family SUVs, work trucks. The cars and trucks people in this town actually own.",
  },
  {
    title: "Local mechanic you can call directly",
    body: "Pick up the phone and talk to the person working on your vehicle, with clear answers and direct scheduling.",
  },
];

export function WhyChoose() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="eyebrow">Why TK Pro Garage LLC</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
              Mobile repair that earns repeat customers the old-fashioned way.
            </h2>
            <p className="mt-5 text-lg text-navy-900/70">
              Honest diagnosis, clear pricing, quality work, and ongoing
              maintenance options designed to keep your vehicle handled before
              small issues become big ones.
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {points.map((p) => (
              <li
                key={p.title}
                className="rounded-2xl border border-navy-900/10 bg-white p-6 shadow-card"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-white">
                  <CheckIcon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy-950">
                  {p.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-navy-900/70">
                  {p.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
