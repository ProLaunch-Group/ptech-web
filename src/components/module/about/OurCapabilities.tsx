import { whyUs } from '@/constants/service';
import { ShieldCheck } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

export default function OurCapabilities() {
  return (
    <section className="py-20 lg:py-28">
      <div className="grid items-center gap-14 lg:grid-cols-2 mx-auto w-full max-w-7xl">
        <SectionHeading
          align="left"
          eyebrow="OUR CORE CAPABILITIES"
          title="We deliver results across four primary service pillars"
          description="Organizations stay with ProLaunch because we combine the reliability they expect from a large firm with the accountability and speed of a partner that truly cares."
        />
        <ul className="grid gap-3 font-sora">
          {whyUs.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm font-sora"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <ShieldCheck
                  className="h-3.5 w-3.5 text-amberGold"
                  aria-hidden="true"
                />
              </span>
              <span className="text-sm font-medium leading-relaxed font-sans text-navy">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
