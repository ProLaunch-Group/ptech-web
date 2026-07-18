import Image from 'next/image';
import { logos } from '@/constants/constants';

export default function TrustedBy() {
  return (
    <section className="border-y border-white/5 py-8 md:py-12 md:mt-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
        <h2 className="font-sora  font-semibold text-xs md:text-sm tracking-[0.15em] uppercase text-center md:text-left">
          Trusted by Innovative Companies
        </h2>
      </div>

      <div className="relative flex w-full overflow-x-hidden mask-[linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]">
        {/* The Scrolling Track */}
        <div className="flex gap-16 animate-marquee whitespace-nowrap min-w-full shrink-0 items-center justify-around">
          {/* Track 1: Original */}
          <ul className="flex items-center gap-16 shrink-0">
            {logos.map((logo, index) => (
              <li
                key={`orig-${index}`}
                className="flex items-center justify-center shrink-0"
              >
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={logo.width}
                  height={logo.height}
                  className="opacity-40 hover:opacity-100 transition-opacity duration-200 grayscale hover:grayscale-0 cursor-pointer object-contain"
                />
              </li>
            ))}
          </ul>

          {/* Track 2: Duplicate */}
          <ul className="flex items-center gap-16 shrink-0" aria-hidden="true">
            {logos.map((logo, index) => (
              <li
                key={`dup-${index}`}
                className="flex items-center justify-center shrink-0"
              >
                <Image
                  src={logo.src}
                  alt=""
                  width={logo.width}
                  height={logo.height}
                  className="opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-pointer object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
