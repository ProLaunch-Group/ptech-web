export default function HeroSection() {
  return (
    <section className="bg-[#EEF5FF] py-28" aria-labelledby="about-hero-heading">
      <header className="mx-auto max-w-7xl px-6">
        <p className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-blue-600">
          About Us
        </p>

        <h1
          id="about-hero-heading"
          className="mt-6 max-w-3xl text-5xl font-bold leading-tight text-slate-900"
        >
          A technology partner built for the long term
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          ProLaunch Technologies exists to help ambitious organizations modernize
          with confidence by combining enterprise-grade expertise with the
          speed, flexibility and care of a dedicated engineering team.
        </p>
      </header>
    </section>
  );
}