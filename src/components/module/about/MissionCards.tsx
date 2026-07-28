import { MissionCardProps } from '@/types/service.types';
import { cards } from '@/constants/service';
import { fadeUp, fadeUp2, whileInViewProps } from '@/libs/motion-variants';
import { motion } from 'framer-motion';
import { StaggerContainer } from '@/components/animation/StaggerContainer';

export default function MissionCards() {
  return (
    <StaggerContainer>
      <motion.section
        variants={fadeUp2}
        {...whileInViewProps}
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
                <article className="h-full group rounded-2xl border-l-4 border-[#0a84ff] bg-white p-8 transition-all duration-200 shadow-sm  hover:-translate-y-1">
                  <card.icon
                    className="mb-5 text-[#0a84ff]/50 group-hover:text-amberGold"
                    size={40}
                  />

                  <h3 className="text-xl font-bold font-sora text-deepNavy">
                    {card.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600 font-sans font-normal">
                    {card.description}
                  </p>
                </article>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.section>
    </StaggerContainer>
  );
}
