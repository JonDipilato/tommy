import { BUSINESS } from "@/lib/business";
import { ClockIcon, MapPinIcon, PhoneIcon } from "./Icons";

const week = [
  { day: "Monday", hours: "9 AM – 5 PM" },
  { day: "Tuesday", hours: "9 AM – 5 PM" },
  { day: "Wednesday", hours: "9 AM – 5 PM" },
  { day: "Thursday", hours: "9 AM – 5 PM" },
  { day: "Friday", hours: "9 AM – 5 PM" },
  { day: "Saturday", hours: "9 AM – 5 PM" },
  { day: "Sunday", hours: "Closed" },
];

export function Hours() {
  return (
    <section id="hours" className="bg-gray-50 py-20 sm:py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Hours & Service Area</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            Call to schedule mobile service.
          </h2>
          <p className="mt-4 text-lg text-navy-900/70">
            Available six days a week for local mobile maintenance and repair.
            Ask about a service contract if you want ongoing maintenance
            handled without bringing your vehicle to a shop.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-navy-900/5 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent-dark">
                <ClockIcon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-navy-950">Hours</h3>
            </div>
            <ul className="mt-5 divide-y divide-navy-900/5">
              {week.map((d) => (
                <li
                  key={d.day}
                  className="flex items-center justify-between py-3 text-[15px]"
                >
                  <span className="font-medium text-navy-900">{d.day}</span>
                  <span
                    className={
                      d.hours === "Closed"
                        ? "text-navy-900/50"
                        : "text-navy-900/80"
                    }
                  >
                    {d.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-navy-900/5 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent-dark">
                <MapPinIcon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy-950">
                  Service area
                </h3>
                <p className="text-[15px] text-navy-900/70">
                  Mobile service in the {BUSINESS.serviceArea} area.
                </p>
              </div>
            </div>

            <p className="mt-5 text-[15px] leading-7 text-navy-900/70">
              TK Pro Garage LLC comes to the vehicle for eligible maintenance and
              everyday repairs. Call to confirm availability for your location
              or to discuss a maintenance service contract.
            </p>

            <a href={`tel:${BUSINESS.phoneTel}`} className="btn-primary mt-6">
              <PhoneIcon className="h-4 w-4" />
              Call {BUSINESS.name}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
