'use client';

import { TeamMember } from '@/types/service.types';
import { TEAM_MEMBERS } from '@/constants/service';
import TeamCard from './TeamCard';
import SectionTitle from '@/components/layout/SectionTitle';
import { StaggerContainer } from '@/components/animation/StaggerContainer';

export function TeamSection() {
  return (
    <StaggerContainer>
      <section className="bg-[#e8f3ff] py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-6 lg:pt-2 font-sora">
          <SectionTitle
            title="LEADERSHIP:"
            subtitle="Our technology experts, your partners."
            variant="secondary"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto mt-4">
            {TEAM_MEMBERS.map((member: TeamMember) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
        |
      </section>
    </StaggerContainer>
  );
}
