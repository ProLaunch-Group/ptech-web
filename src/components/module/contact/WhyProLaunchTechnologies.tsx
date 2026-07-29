import SectionTitle from '@/components/layout/SectionTitle';
import { metrics } from '@/constants/service';

export function WhyProLaunchTechnologies() {
  return (
    <section
      aria-labelledby="why-prolaunch-heading"
      className="bg-[#1e3a6e] py-5 md:py-2"
    >
      <div className="mx-auto max-w-7xl px-6 lg:pt-2 font-sora ">
        <div className="p-6 sm:p-10 lg:p-12  space-y-10">
          <SectionTitle
            title="Why ProLaunch Technologies"
            subtitle="A partner, not just a vendor"
            description=" We help businesses reduce complexity, improve reliability, and build scalable technology solutions that create measurable business value.
                  We own outcomes, not just deliverables."
            variant="universal"
          />

          {/* Metrics Grid Container */}
          <div className="border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden bg-[#1e3a6e]/50">
            <ul className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {metrics.map((metric, index) => (
                <li
                  key={index}
                  className="p-6 sm:p-8 flex flex-col items-center text-center space-y-2 hover:bg-white/[0.02] transition-colors"
                >
                  {/* Highlight Stat */}
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a84ff] tracking-tight font-sora">
                    {metric.value}
                  </span>

                  {/* Card Subheading */}
                  <h3 className="text-base sm:text-lg font-bold font-sora text-[#e8f3ff] pt-1">
                    {metric.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm font-sora text-[#e8f3ff]/70 max-w-xs leading-normal">
                    {metric.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
