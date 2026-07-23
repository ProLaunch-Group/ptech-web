import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-[#1e3a6e] text-white px-10 py-20 text-center">
          <h2 className="text-4xl font-bold font-sora">
            Ready to turn your technology into your competitve advantage?
          </h2>

          <p className="mt-6 text-blue-100 max-w-2xl mx-auto font-sans">
            Let&apos;s build scalable technology solutions that help your
            business grow with confidence.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link
              href="/contact"
              className="bg-amber-500 hover:bg-amber-600 rounded-full px-8 py-3 font-semibold font-sans"
            >
              Start a Conversation
            </Link>

            <Link
              href="/services"
              className="border border-white rounded-full hover:bg-electricBlue px-8 py-3 font-sans"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
