import Link from 'next/link';

function ServicesPage() {
  return (
    <main id="main-content" className="bg-white">
      <section className="mx-auto flex min-h-[60vh] max-w-7xl flex-col justify-center px-6 py-24">
        <header className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electricBlue">
            Services
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Practical services for modern teams
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            From cloud modernization to software delivery, we help organizations
            optimize operations and accelerate growth.
          </p>
        </header>
        <div className="mt-8">
          <Link
            href="/about"
            className="inline-flex items-center rounded-full bg-electricBlue px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Learn about our approach
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ServicesPage;
