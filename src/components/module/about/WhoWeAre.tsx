import Image from 'next/image';

import MissionCards from '@/components/module/about/MissionCards';



export default function WhoWeAre() {
  return (
    <section className="py-28" aria-labelledby="story-heading">
      <header className="mx-auto max-w-7xl px-6">
      
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <article>
            <header>
              <p className="inline-block rounded-full bg-slate-200 px-4 py-1 text-sm font-extrabold font-sora uppercase text-amberGold">
                Who We Are
              </p>

              <h2 id="story-heading" className="mt-5 text-4xl font-extrabold text-slate-900 font-sora">
                Engineering trust into every layer of your business
              </h2>
            </header>

            <p className="mt-6 leading-8 text-slate-600 font-sans font-semibold">
              Founded to solve real-world engineering challenges, ProLaunch
              Technologies partners with businesses to build scalable software,
              improve operational efficiency and create digital experiences that
              deliver measurable value.
            </p>

            <p className="mt-6 leading-8 text-slate-600 font-sans font-semibold">
              Every engagement is guided by technical excellence, transparency
              and long-term collaboration.
            </p>
          </article>

          <figure className="m-0">
            <Image
              src="/About/WhoWeAre-image/about-culture.png"
              alt="Our team collaborating on a technology solution"
              width={700}
              height={500}
              className="rounded-3xl object-cover shadow-xl"
            />
          </figure>
        </div>
        
      
      </header>
      <MissionCards />
    </section>

  );
}