
const benefits = [
  {
    number: "01",
    title: "Free to participate",
    description:
      "No registration fee or hidden participation costs.",
    icon: "₹",
  },
  {
    number: "02",
    title: "Participate from home",
    description:
      "The competition is fully online, including the final. No travel is required.",
    icon: "⌂",
  },
  {
    number: "03",
    title: "Meaningful rewards",
    description:
      "Cash prizes up to ₹1,00,000 per track. The top 20 students per track can receive up to 100% scholarship in the edept × WUD B.Tech.",
    icon: "★",
  },
  {
    number: "04",
    title: "Every participant benefits",
    description:
      "Every participant receives a certificate and a scholarship toward edept programs. Scholarship amounts may vary.",
    icon: "✓",
  },
  {
    number: "05",
    title: "Explore future careers",
    description:
      "Experience cybersecurity, AI or finance before deciding which field to pursue further.",
    icon: "↗",
  },
];

export default function ParentsSection() {
  return (
    <section
      id="for-parents"
      className="bg-[#f7f9fd] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#1555a0]">
            For parents and guardians
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-[#102b50] sm:text-4xl lg:text-5xl">
            Why it's worth{" "}
            <span className="text-[#1555a0]">a weekend.</span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Give your child the opportunity to explore emerging fields,
            challenge themselves and discover what interests them.
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.number}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-950/5 sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl font-black text-[#1555a0]">
                  {benefit.icon}
                </span>

                <span className="text-xs font-extrabold tracking-[0.15em] text-slate-400">
                  {benefit.number}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-extrabold text-[#102b50]">
                {benefit.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {benefit.description}
              </p>
            </article>
          ))}

          {/* Proposed parent session */}
          <article className="flex flex-col rounded-2xl border border-[#f2d5a3] bg-[#fff8eb] p-6 sm:col-span-2 sm:p-7 lg:col-span-1">
            <span className="inline-flex w-fit rounded-full bg-white px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#9a5b00]">
              Proposed session
            </span>

            <h3 className="mt-5 text-lg font-extrabold text-[#102b50]">
              Guidance for parents, too.
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              The plan proposes a free online session with Apexr's founders
              about how universities assess student profiles and how
              achievements like Conquest may fit into an application.
            </p>

            <p className="mt-4 text-xs font-semibold leading-5 text-[#9a5b00]">
              Session date and availability to be confirmed by Apexr.
            </p>
          </article>
        </div>

        {/* CTA */}
        <div className="mt-10 overflow-hidden rounded-3xl bg-[#102b50] p-6 text-white sm:p-10 lg:p-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#ffbd54]">
                Support their curiosity
              </p>

              <h3 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
                Help your child take the first step.
              </h3>

              <p className="mt-3 text-sm leading-6 text-blue-100 sm:text-base">
                Registration is free. Let them explore a field, learn
                something new and experience a national online competition.
              </p>
            </div>

            <a
              href="/register"
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#ffbd54] px-6 py-4 text-sm font-extrabold text-[#102b50] transition-colors hover:bg-white"
            >
              Register your child free <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
