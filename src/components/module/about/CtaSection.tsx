import { ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-10 lg:py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-[#1e3a6e] flex flex-col items-center text-white px-10 py-20 text-center">
          <h2 className="text-2xl font-sora font-extrabold leading-tight text-white sm:text-2xl lg:text-3xl">
            Ready to turn your technology into your competitve advantage?
          </h2>

          <p className="mt-6 text-lightBlue max-w-2xl mx-auto font-sans">
            Let&apos;s build scalable technology solutions that help your
            business grow with confidence.
          </p>

          <nav
            className="flex justify-center flex-wrap gap-4 mt-4 lg:mt-6"
            aria-label="Hero Actions "
          >
            <Link
              href="/contact"
              className="inline-flex items-center font-sans gap-2.5 bg-electricBlue text-[#F9F8FB] font-semibold px-7 py-3.5 rounded-xl text-[14px] transition-all duration-200  hover:shadow-[0_8px_36px_rgba(46,123,247,0.55)] hover:-translate-y-0.5 active:translate-y-0"
            >
              Get a Free Architecture Audit
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="hidden md:block"
              />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center font-sans font-semibold gap-2.5 bg-white/5 border border-[#0000004D] hover:border-amberGold text-white px-7 py-3.5 rounded-xl text-[15px] transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5 hover:text-amberGold  active:translate-y-0"
            >
              Explore Our Services
              <ChevronRight size={16} aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
}
