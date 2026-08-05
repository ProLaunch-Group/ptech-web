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
        className="bg-lightBlue dark:bg-[#07152b] py-16 md:py-24 mt-12 transition-colors duration-300"
        aria-labelledby="mission-heading"
      >
        <div className="max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-24">
          <header className="mb-12 text-center">
            <motion.h2
              variants={fadeUp}
              id="mission-heading"
              className="text-3xl md:text-4xl font-extrabold font-sora text-slate-900 dark:text-white"
            >
              What Drives Us
            </motion.h2>
          </header>

          <ul className="grid gap-8 md:grid-cols-3" role="list">
            {cards.map((card: MissionCardProps) => (
              <motion.li
                key={card.title}
                variants={fadeUp}
                className="list-none"
              >
                <article className="h-full group rounded-2xl border-l-4 border-electricBlue bg-white dark:bg-slate-900 p-8 transition-all duration-300 shadow-sm border-y border-r border-slate-200 dark:border-slate-800 hover:-translate-y-1 hover:shadow-md">
                  <card.icon
                    className="mb-5 text-electricBlue group-hover:text-amberGold transition-colors"
                    size={40}
                  />

                  <h3 className="text-xl font-bold font-sora text-slate-900 dark:text-white uppercase tracking-wider">
                    {card.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300 font-sans font-normal">
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
