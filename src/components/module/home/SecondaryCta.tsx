import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const SecondaryCta = () => {
  return (
    <section
      aria-labelledby="cta-heading"
      className="mb-15 w-full px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 rounded-2xl bg-gradient-to-r from-[#0a84ff] to-[#1e3a6e] px-5 py-6 sm:px-6 sm:py-8 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-8">
        <article className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <figure className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-deepNavy sm:h-20 sm:w-20">
            <Image
              src="/Home/Secondary-CTA-images/Vector_Cta.png"
              alt="CTA Technologies Logo"
              width={44}
              height={44}
              priority
            />
          </figure>

          <header className="max-w-2xl">
            <h2
              id="cta-heading"
              className="text-xl font-sans font-bold leading-tight text-white sm:text-2xl"
            >
              Ready to modernise your infrastructure
              <br />
              and scale confidently?
            </h2>

            <p className="mt-3 text-base font-sans text-blue-100 sm:text-lg">
              Get a free architecture audit in under 3 minutes.
            </p>
          </header>
        </article>

        <aside className="w-full lg:w-auto">
          <button
            type="button"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-base font-semibold text-[#1677F2] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-50 hover:cursor-pointer hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#1677F2] focus:ring-offset-2 sm:w-auto sm:px-8 sm:py-5 sm:text-lg"
          >
            Start Free Audit
            <ArrowRight className="h-5 w-5 transition-transform duration-300" />
          </button>
        </aside>
      </div>
    </section>
  );
};

export default SecondaryCta;
