type SectionHeadingProps = {
  align?: 'left' | 'center';
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export default function SectionHeading({
  align = 'center',
  eyebrow,
  title,
  description,
  className = '',
}: SectionHeadingProps) {
  const alignmentClass =
    align === 'left' ? 'items-start text-left' : 'items-center text-center';

  return (
    <div
      className={`flex flex-col max-w-2xl ${alignmentClass} ${className}`.trim()}
    >
      {eyebrow ? (
        <p className="mb-4 inline-flex rounded-full bg-slate-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-amberGold">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>
      ) : null}
    </div>
  );
}
