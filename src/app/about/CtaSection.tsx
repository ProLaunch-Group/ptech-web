import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20">

      <div className="max-w-5xl mx-auto px-6">

        <div className="rounded-3xl bg-[#1E3A8A] text-white px-10 py-20 text-center">

          <h2 className="text-4xl font-bold">
            Ready to modernize with a partner you can trust?
          </h2>

          <p className="mt-6 text-blue-100 max-w-2xl mx-auto">
            Let&apos;s build scalable technology solutions that help your
            business grow with confidence.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Link
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 rounded-full px-8 py-3 font-semibold"
            >
              Start Your Project
            </Link>

            <Link
              href="/services"
              className="border border-white rounded-full px-8 py-3"
            >
              Explore Services
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}