
const cashPrizes = [
  {
    place: "01",
    label: "First place",
    amount: "₹1,00,000",
    accent: "bg-[#ffbd54]",
    text: "text-[#102b50]",
  },
  {
    place: "02",
    label: "Second place",
    amount: "₹70,000",
    accent: "bg-[#e8edf5]",
    text: "text-[#102b50]",
  },
  {
    place: "03",
    label: "Third place",
    amount: "₹30,000",
    accent: "bg-[#f1e2d5]",
    text: "text-[#102b50]",
  },
];

export default function PrizesSection() {
  return (
    <section
      id="prizes"
      className="relative overflow-hidden bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#f2d5a0] bg-[#fff8e9] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#80520c]">
            <span className="h-2 w-2 rounded-full bg-[#f5a623]" />
            The rewards
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-[#102b50] sm:text-5xl lg:text-6xl">
            ₹4 crore up for grabs.
            <span className="mt-2 block text-[#1555a0]">
              Free to enter.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Compete in your chosen track for cash prizes and
            scholarship opportunities. No registration fee.
          </p>
        </div>

        {/* Cash prizes */}
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {cashPrizes.map((prize) => (
            <article
              key={prize.place}
              className={`relative overflow-hidden rounded-2xl border border-slate-200 p-6 sm:p-8 ${prize.accent} ${prize.text}`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.16em] opacity-70">
                  {prize.label}
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-current/15 text-sm font-black">
                  {prize.place}
                </span>
              </div>

              <p className="mt-8 text-3xl font-black tracking-tight sm:text-4xl">
                {prize.amount}
              </p>

              <p className="mt-2 text-sm opacity-75">
                Cash prize per track
              </p>

              <div className="mt-7 h-px bg-current/15" />

              <p className="mt-4 text-sm font-semibold">
                Cybersecurity · AI · Finance
              </p>
            </article>
          ))}
        </div>

        {/* Scholarship opportunities */}
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl bg-[#102b50] p-6 text-white sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#ffbd54]">
                  For the top 20 in each track
                </p>

                <h3 className="mt-4 text-2xl font-black sm:text-3xl">
                  Up to 100% scholarship
                </h3>
              </div>

              <span
                aria-hidden="true"
                className="text-3xl text-[#ffbd54]"
              >
                ↗
              </span>
            </div>

            <p className="mt-4 max-w-lg text-sm leading-6 text-blue-100">
              Scholarship opportunities for the edept × WUD
              B.Tech program, according to the Olympiad brief.
            </p>

            <div className="mt-6 inline-flex rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white">
              Top 20 students per track
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-[#f7f9fd] p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1555a0]">
                  Every participant
                </p>

                <h3 className="mt-4 text-2xl font-black text-[#102b50] sm:text-3xl">
                  Recognition that continues
                </h3>
              </div>

              <span
                aria-hidden="true"
                className="text-3xl text-[#1555a0]"
              >
                ✳
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              A participant certificate and a scholarship
              across edept programs. Scholarship amounts vary.
            </p>

            <div className="mt-6 inline-flex rounded-full border border-[#d9e2f0] bg-white px-4 py-2 text-xs font-semibold text-[#1555a0]">
              Certificate + scholarship benefit
            </div>
          </article>
        </div>

        {/* Prize pool clarification */}
        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-slate-500">
          The ₹4 crore prize pool covers cash prizes for the top
          three students in each track and scholarships. Scholarship
          terms and amounts are subject to the final approved rules.
        </p>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="/register"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#f5a623] px-8 py-4 font-extrabold text-[#102b50] shadow-lg shadow-orange-500/10 transition hover:-translate-y-0.5 hover:bg-[#ffc15c]"
          >
            Register free
            <span aria-hidden="true">↗</span>
          </a>

          <p className="mt-3 text-xs text-slate-500">
            Choose your track and take your first step.
          </p>
        </div>
      </div>
    </section>
  );
}
