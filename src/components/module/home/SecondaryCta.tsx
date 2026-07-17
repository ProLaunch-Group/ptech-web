import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
const SecondaryCta = () => {
  return (
    <section
      aria-labelledby="cta-heading"
      className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-4 lg:px-12 
      bg-gradient-to-r from-[#0a84ff] to-[#1e3a6e]"
    >
      {/* Content */}
      <article className="flex items-center gap-6">
        {/* Company Logo */}
        <figure className="flex h-20 w-20 items-center justify-center rounded-full bg-deepNavy">
          <Image
            src="/Home/Secondary-CTA-images/Vector_Cta.png"
            alt="CTA Technologies Logo"
            width={44}
            height={44}
            priority
          />
        </figure>

        {/* Text Content */}
        <header>
          <h2
            id="cta-heading"
            className="text-2xl font-sans font-bold leading-tight text-white md:text-2xl"
          >
            Ready to modernise your infrastructure
            <br />
            and scale confidently?
          </h2>

          <p className="mt-3 text-base text-blue-100 md:text-lg font-sans">
            Get a free architecture audit in under 3 minutes.
          </p>
        </header>
      </article>

      {/* Call To Action */}
      <aside>
        <button
          type="button"
          className=" font-sans group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-5 text-lg font-semibold 
            text-[#1677F2] font:semibold shadow-lg transition-all duration-300 hover:bg-slate-50 hover:shadow-xl hover:cursor-pointer 
            focus:outline-none focus:ring-2 focus:ring-[#1677F2] focus:ring-offset-2 hover:-translate-y-0.5"
        >
          Start Free Audit
          <ArrowRight className="h-5 w-5 transition-transform duration-300" />
        </button>
      </aside>
    </section>
  );
};

export default SecondaryCta;
