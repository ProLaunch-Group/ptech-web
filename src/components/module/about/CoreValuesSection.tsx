import { principles } from '@/constants/service';

export default function PrinciplesSection() {
  return (
    <section className="py-28" aria-labelledby="principles-heading">
      <div className="mx-auto max-w-7xl px-6">
        <header className="text-center">
          <p className="inline-block rounded-full bg-slate-200 px-4 py-1 text-sm font-bold uppercase text-amberGold font-sans">
            Core Values
          </p>

          <h2
            id="principles-heading"
            className="mt-6 text-4xl font-bold text-slate-900 font-sora"
          >
            What we stand for.
          </h2>

          {/* <p className="mx-auto mt-6 max-w-2xl text-slate-600">
            These values define how we collaborate, innovate and build meaningful
            relationships with every client.
          </p> */}
        </header>

        <ul
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {principles.map((item) => (
            <li key={item.title} className="list-none">
              <article className="h-full rounded-2xl border border-slate-200 p-8 transition hover:-translate-y-1 hover:shadow-lg">
                <item.icon className="mb-5 text-amberGold/50" size={40} />

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
