import { ShieldCheck } from 'lucide-react';
import { reasons } from '@/constants/constants';

export default function WhyChooseUsSection() {
  return (
    <section className="container-page py-20 lg:py-28">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <header>
          <p className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-sans font-semibold uppercase text-blue-600">
            Why clients choose us
          </p>

          <h2 className="mt-5 text-4xl font-extra bold font-sora text-slate-900">
            Enterprise rigor with the pace of a dedicated team
          </h2>

          <p className="mt-6 leading-8 text-slate-600 font-sans">
            Organizations stay with ProLaunch because we combine the reliability
            they expect from a large firm with the accountability and speed of a
            partner that truly cares.
          </p>
        </header>

        <ul className="grid gap-3">
          {reasons.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium leading-relaxed text-navy">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
