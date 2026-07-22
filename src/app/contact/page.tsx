import Link from 'next/link';

function ContactPage() {
  return (
    <main id="main-content" className="bg-white">
      <section className="mx-auto flex min-h-[60vh] max-w-7xl flex-col justify-center px-6 py-24">
        <header className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electricBlue">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Let’s build something meaningful together
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Share your goals and we’ll help you shape a practical roadmap for
            modernizing your infrastructure and technology stack.
          </p>
        </header>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-deepNavy px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
