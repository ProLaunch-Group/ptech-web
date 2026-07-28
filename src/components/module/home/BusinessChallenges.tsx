import { StaggerContainer } from '@/components/animation/StaggerContainer';
import ChallengeCard from '@/components/module/home/ChallengeCard';
import { challengesData } from '@/constants/constants';
import SectionTitle from '@/components/layout/SectionTitle';

export default function BusinessChallenges() {
  return (
    <StaggerContainer>
      <section
        className="w-full py-16 md:pt-10 md:pb-22 bg-[#0a84ff]"
        aria-labelledby="challenges-heading"
      >
        {/* Inner Container Max-W-7xl */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 flex flex-col ">
          {/* Header / Titles Section */}

          <SectionTitle
            title=" The challenges"
            description="Your infrastructure wasn't built for your current scale."
          />

          <ul
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-8"
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
