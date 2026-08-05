'use client';

import { useAIQualifier } from '@/contextApi/AIQualifierContext';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const SecondaryCta = () => {
  const { openAIQualifier } = useAIQualifier();

  return (
    <section
      aria-labelledby="cta-heading"
      className="py-10 md:py-16 w-full"
    >
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex w-full flex-col gap-6 rounded-3xl bg-linear-to-r from-electricBlue via-blue-700 to-deepNavy px-8 py-10 md:py-12 lg:flex-row lg:items-center lg:justify-between shadow-2xl relative overflow-hidden">
          <article className="flex flex-col items-start gap-5 sm:flex-row sm:items-center relative z-10">
            <figure className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-slate-900/60 border border-white/20 sm:h-20 sm:w-20">
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
                className="text-2xl font-sora font-extrabold leading-tight text-white sm:text-3xl"
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

          <aside className="w-full lg:w-auto relative z-10">
            <button
              type="button"
              onClick={() => openAIQualifier()}
              aria-label="Open AI Qualifier widget to request a free architecture audit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-base font-bold text-electricBlue shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-50 hover:text-amberGold cursor-pointer focus:outline-none focus:ring-2 focus:ring-amberGold sm:w-auto sm:px-8 font-sora"
            >
              Start Free Audit
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default SecondaryCta;
