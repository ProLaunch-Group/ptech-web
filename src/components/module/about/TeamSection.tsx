'use client';

import { TeamMember } from '@/types/service.types';
import { TEAM_MEMBERS } from '@/constants/service';
import TeamCard from './TeamCard';
import SectionTitle from '@/components/layout/SectionTitle';
import { StaggerContainer } from '@/components/animation/StaggerContainer';

export function TeamSection() {
  return (
    <StaggerContainer>
      <section className="bg-[#f0f7ff] dark:bg-[#07152b] py-16 md:py-24 transition-colors duration-300">
        <div className="max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-24 font-sora">
          <SectionTitle
            title="LEADERSHIP:"
            subtitle="Our technology experts, your partners."
            variant="secondary"
          />
          <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto mt-12">
            {TEAM_MEMBERS.map((member: TeamMember) => (
              <div key={member.id} className="w-full sm:w-[350px] lg:w-[380px]">
                <TeamCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </StaggerContainer>
  );
}
