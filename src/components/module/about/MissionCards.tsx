import { MissionCardProps } from '@/types/service.types';
import { cards } from '@/constants/service';
import { fadeUp } from '@/libs/motion-variants';
import { motion } from 'framer-motion';
import { StaggerContainer } from '@/components/animation/StaggerContainer';

export default function MissionCards() {
  return (
    <StaggerContainer>
      <section
        className=" bg-[#e8f3ff] py-24 mt-20"
        aria-labelledby="mission-heading"
      >
        <div className="mx-auto w-full max-w-7xl px-6">
          <header className="mb-10 text-center">
            <motion.h2
              variants={fadeUp}
              id="mission-heading"
              className="text-3xl md:text-4xl font-extrabold font-sora text-deepNavy"
            >
              What drives us
            </motion.h2>
          </header>

          <ul className="grid gap-8 md:grid-cols-3" role="list">
            {cards.map((card: MissionCardProps) => (
              <motion.li
                key={card.title}
                variants={fadeUp}
                className="list-none"
              >
                <article className="h-full rounded-2xl border border-slate-300 bg-white p-8 transition-all duration-200 shadow-sm hover:shadow-[#f5a623] hover:-translate-y-1">
                  <card.icon
                    className="mb-5 text-amberGold/50 hover:text-amberGold"
                    size={40}
                  />

                  <h3 className="text-xl font-bold font-sora text-slate-900">
                    {card.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600 font-sans font-semibold">
                    {card.description}
                  </p>
                </article>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </StaggerContainer>
  );
}
