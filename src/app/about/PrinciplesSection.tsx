import { CheckCircle2 } from 'lucide-react';

const principles = [
  {
    title: 'Trust by Default',
    description:
      'We value transparency and honesty in every client relationship.',
  },
  {
    title: 'Pragmatic Innovation',
    description:
      'Technology should solve real problems, not create unnecessary complexity.',
  },
  {
    title: 'Outcomes Over Output',
    description:
      'Success is measured by business impact, not simply completed tasks.',
  },
  {
    title: 'True Partnership',
    description: 'We work alongside our clients as an extension of their team.',
  },
  {
    title: 'Care for Craft',
    description:
      'Quality engineering and thoughtful design are at the heart of everything we build.',
  },
  {
    title: 'Long-Term Thinking',
    description:
      'We build scalable solutions designed to grow with your business.',
  },
];

export default function PrinciplesSection() {
  return (
    <section className="py-28" aria-labelledby="principles-heading">
      <div className="mx-auto max-w-7xl px-6">
        <header className="text-center">
          <p className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold uppercase text-blue-600">
            Core Values
          </p>

          <h2
            id="principles-heading"
            className="mt-6 text-4xl font-bold text-slate-900"
          >
            The principles behind every engagement
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-600">
            These values define how we collaborate, innovate and build
            meaningful relationships with every client.
          </p>
        </header>

        <ul
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {principles.map((item) => (
            <li key={item.title} className="list-none">
              <article className="h-full rounded-2xl border border-slate-200 p-8 transition hover:-translate-y-1 hover:shadow-lg">
                <CheckCircle2 className="mb-5 text-blue-600" size={28} />

                <h3 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
