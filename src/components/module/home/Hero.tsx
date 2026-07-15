
import Link from "next/link";
import HeroCard from "@/components/module/home/HeroCard";
import { ArrowRight, ChevronRight, Shield } from "lucide-react";


export default function Hero() {



  return (

    <section className="max-w-7xl mx-auto px-6  w-full py-3 lg:py-12 grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Side: Editorial Content */}
      <header className="flex flex-col items-start ">
        <span className="inline-flex items-center gap-2 text-deepNavy font-dm-sans text-[14px] font-semibold px-4 py-2 rounded-full mb-4 tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-deepNavy animate-pulse" />
          TECHNOLOGY OPTIMISED
        </span>

        <h1 className="font-extrabold font-sora text-[36px] lg:text-[48px]  leading-[1.06] tracking-tight text-black mb-4 ">
          We help tech leaders modernize, optimize and scale <span className="text-deepNavy">with confidence</span>
        </h1>

        <p className="text-gray-600  font-dm-sans font-medium text-lg lg:text-xl leading-relaxed mb-10 max-w-xl">
          Cloud, DevOps, Custom Software, Infrastructure, End-to-end solutions  that reduce costs, accelerate delivery and drive real business outcomes.
        </p>

        <nav className="flex flex-wrap gap-4" aria-label="Hero Actions ">
          <Link
            href="/contact"
            className="inline-flex items-center font-dm-sans gap-2.5 bg-electricBlue text-[#F9F8FB] font-semibold px-7 py-3.5 rounded-xl text-[14px] transition-all duration-200 shadow-[0_6px_28px_rgba(46,123,247,0.4)] hover:shadow-[0_8px_36px_rgba(46,123,247,0.55)] hover:-translate-y-0.5 active:translate-y-0"
          >
            Get a Free Architecture Audit
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center font-dm-sans font-semibold gap-2.5 bg-white/5 border border-[#0000004D] hover:border-electricBlue text-electricBlue px-7 py-3.5 rounded-xl text-[15px] transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5"
          >
            Explore Our Services
            <ChevronRight size={16} />
          </Link>
        </nav>
      </header>


      {/* Right Side: Visual Dashboard Panel */}
      <aside className="hidden lg:block relative" aria-hidden="true">
        <HeroCard />

        {/* Floating Contextual Badges */}
        <span className="absolute -top-4 -right-4 bg-[#000000] rounded-xl px-4 py-2.5 shadow-xl flex items-center gap-2">
          <Shield size={14} className="text-[#10B981]" />
          <span className="text-white text-xs font-semibold">40% faster deployment</span>
        </span>
      </aside>

    </section >
  );
}


