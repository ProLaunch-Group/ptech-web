export default function AboutUsHero() {
  return (
    <section
      className="bg-[#e8f3ff] py-28"
      aria-labelledby="about-hero-heading"
    >
      <header className="mx-auto max-w-7xl px-6 font-sora">
        <p className="inline-block rounded-full bg-slate-200 text-amberGold px-4 py-1 text-sm font-extrabold uppercase tracking-wide font-sora">
          About Us
        </p>

        <h1
          id="about-hero-heading"
          className="mt-6 max-w-3xl text-5xl font-bold leading-tight text-slate-900 font-sora"
        >
          Most technology vendors hand over a deliverable and disappear, we
          don&apos;t.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 font-sans font-semibold">
          ProLaunch Technologies is the cloud computing and enterprise
          technology arm of ProLaunch Group. We stay accountable long after
          go-live because we measure our success by what changes for your
          business, not just what we delivered. We help growing SMEs,
          modernizing enterprises, and ambitious startups across Africa and
          globally build, automate, and secure the digital foundations they need
          to scale.
        </p>
      </header>
    </section>
  );
}
