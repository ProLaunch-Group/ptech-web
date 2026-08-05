import SectionTitle from '@/components/layout/SectionTitle';

const whyUsMetrics = [
  {
    value: '4',
    title: 'Core Service Lines',
    description:
      'Cloud Migrations · DevOps · Custom Software · IT Infrastructure',
  },
  {
    value: '24hr',
    title: 'Response Guarantee',
    description: 'Every message is reviewed within one business day.',
  },
  {
    value: 'Pan-Africa',
    title: '& Global Reach',
    description: 'Serving businesses across Nigeria, Africa, and globally.',
  },
];

export function WhyProLaunchTechnologies() {
  return (
    <section
      aria-labelledby="why-prolaunch-heading"
      className="bg-deepNavy dark:bg-[#07152b] py-16 md:py-24 text-white transition-colors duration-300"
    >
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-24 font-sora">
        <div className="space-y-12">
          <SectionTitle
            title="Why ProLaunch Technologies"
            subtitle="We are your partner, not just a vendor."
            description="We help businesses reduce complexity, improve reliability, and build scalable technology solutions that create measurable business value. We own outcomes, not just deliverables."
            variant="universal"
          />

          {/* Metrics Grid Container */}
          <div className="border border-white/15 rounded-2xl overflow-hidden bg-slate-900/60 backdrop-blur-md">
            <ul className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/15">
              {whyUsMetrics.map((metric, index) => (
                <li
                  key={index}
                  className="p-8 sm:p-10 flex flex-col items-center text-center space-y-3 hover:bg-white/[0.04] transition-colors"
                >
                  {/* Highlight Stat */}
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-electricBlue tracking-tight font-sora">
                    {metric.value}
                  </span>

                  {/* Card Subheading */}
                  <h3 className="text-lg sm:text-xl font-bold font-sora text-white pt-1">
                    {metric.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm font-sans text-slate-300 max-w-xs leading-relaxed">
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
