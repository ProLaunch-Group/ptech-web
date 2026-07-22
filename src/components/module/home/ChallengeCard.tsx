import { ChallengeCardProps } from '@/types/service.types';

export default function ChallengeCard({ item }: ChallengeCardProps) {
  return (
    <li className="w-full p-6 md:p-8 bg-white border border-slate-100 rounded-3xl  hover:shadow-sm hover:shadow-amberGold  transition-shadow duration-300 flex flex-col justify-between">
      <div>
        {/*  Badge */}
        <span className="inline-block px-2.5 py-1 text-xs font-semibold tracking-wide text-slate-600 bg-rose-50 rounded-md font-sans mb-4 animate-pulse">
          {item.audience}
        </span>

        {/* Card Title */}
        {item.title && (
          <h3 className="text-lg md:text-xl font-bold text-slate-900 font-sora mb-2 tracking-tight">
            {item.title}
          </h3>
        )}

        {/*Card Body Text */}
        <p className="text-sm md:text-base font-semibold text-slate-600 font-sans leading-relaxed">
          {item.description}
        </p>
      </div>
    </li>
  );
}
