import { StaggerContainer } from '@/components/animation/StaggerContainer';
import ChallengeCard from '@/components/module/home/ChallengeCard';
import { challengesData } from '@/constants/constants';
import SectionTitle from '@/components/layout/SectionTitle';

export default function BusinessChallenges() {
  return (
    <StaggerContainer>
      <section
        className="w-full py-16 md:py-24 bg-[#0a84ff]"
        aria-labelledby="challenges-heading"
      >
        {/* Header / Titles Section */}

        <SectionTitle
          title=" Business challenges we solve"
          subtitle="IS YOUR TECH HOLDING YOU BACK?"
          description="Your infrastructure wasn't built for your current scale."
        />

        {/* Inner Container Max-W-7xl */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/*  Card Array Mapping */}
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
