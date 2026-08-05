import { StaggerContainer } from '@/components/animation/StaggerContainer';
import ChallengeCard from '@/components/module/home/ChallengeCard';
import { challengesData } from '@/constants/constants';
import SectionTitle from '@/components/layout/SectionTitle';

export default function BusinessChallenges() {
  return (
    <StaggerContainer>
      <section
        className="w-full py-16 md:py-24 bg-lightBlue dark:bg-[#07152b] transition-colors duration-300"
        aria-labelledby="challenges-heading"
      >
        {/* Inner Container Max-W-7xl */}
        <div className="max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-24 flex flex-col">
          {/* Header / Titles Section */}
          <SectionTitle
            title="The challenge"
            description="Your infrastructure wasn't built for your current scale."
            variant="secondary"
          />

          <ul
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-8"
            aria-label="Target audiences and their business challenges"
          >
            {challengesData.map((item, index) => (
              <ChallengeCard key={index} item={item} index={index} />
            ))}
          </ul>
        </div>
      </section>
    </StaggerContainer>
  );
}
