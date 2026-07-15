import { metrics, services } from '@/constants/contanst';

export default function HeroCard() {
  return (
    <article className="bg-[#000000] rounded-2xl  p-6 shadow-[0_24px_80px_rgba(0,0,0,0.5)] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2E7BF7]/40 to-transparent" />

      {/* Header Info */}
      <header className="flex items-center justify-between mb-5">
        <div className="font-dm-sans">
          <p className="text-[#94A3B8] text-xs font-medium uppercase tracking-wider mb-1">
            Infrastructure Health
          </p>
          <p className="text-white font-bold text-xl">
            All Systems Operational
          </p>
        </div>
        <span className="flex items-center gap-1.5 bg-[#10B981]/10 text-[#10B981] px-3 py-1.5 rounded-full text-xs font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
          99.98% Uptime
        </span>
      </header>

      {/* Grid List Metrics */}
      <ul className="grid grid-cols-3 gap-3 mb-5">
        {metrics.map((m, i) => (
          <li
            key={i}
            className="bg-card rounded-xl  font-sora p-3.5 border border-white/5 flex flex-col justify-between"
          >
            <span className="text-[10px] font-semibold text-[#10B981] text-right">
              {m.change}
            </span>
            <p className="text-[#000000]  font-bold text-lg leading-none mt-1">
              {m.value}
            </p>
            <p className="text-[#000000] font-dm-sans font-semibold text-[10px] mt-1">
              {m.label}
            </p>
          </li>
        ))}
      </ul>

      {/* Chart Preview */}
      <div className="mb-5">
        <p className="text-[#94A3B8] text-xs mb-3">
          Deployment Activity — Last 7 days
        </p>
        <div className="flex items-end gap-1.5 h-14">
          {[40, 65, 48, 80, 55, 92, 70].map((h, i) => (
            <div
              key={i}
              style={{
                height: `${h}%`,
                transformOrigin: 'bottom',
                background:
                  i === 5
                    ? 'linear-gradient(to top, #2E7BF7, #1E3A6E)'
                    : 'rgba(46,123,247,0.2)',
                borderRadius: '3px 3px 2px 2px',
                flex: 1,
              }}
            />
          ))}
        </div>
      </div>

      {/* Dynamic Services Stack */}
      <ul className="space-y-3">
        {services.map((s, i) => (
          <li key={i} className="flex items-center gap-3">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[#CBD5E1] text-xs">{s.name}</span>
                <span className="text-[#94A3B8] text-[10px]">
                  {s.progress}%
                </span>
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${s.progress}%`,
                    background:
                      s.progress === 100
                        ? 'linear-gradient(90deg, #10B981, #06B6D4)'
                        : 'linear-gradient(90deg, #0A84FF, #06B6D4)',
                  }}
                />
              </div>
            </div>
            <span
              className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                s.status === 'Complete'
                  ? 'bg-[#10B981]/15 text-[#10B981]'
                  : s.status === 'Active'
                    ? 'bg-[#0A84FF]/15 text-electricBlue'
                    : 'bg-[#F59E0B]/15 text-amberGold'
              }`}
            >
              {s.status}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
