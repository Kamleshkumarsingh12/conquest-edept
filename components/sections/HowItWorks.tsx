
const steps = [
  {
    number: "01",
    title: "Register for free",
    date: "By 20 November",
    description:
      "Choose your track and complete your registration online. There is no registration fee.",
    icon: "✦",
  },
  {
    number: "02",
    title: "Learn in the workshop",
    date: "21 November",
    description:
      "Get introduced to your chosen track and prepare for the competition with the online workshop.",
    icon: "↗",
  },
  {
    number: "03",
    title: "Take Round 1",
    date: "22 November",
    description:
      "Put your knowledge and problem-solving skills to the test in your selected track.",
    icon: "◎",
  },
  {
    number: "04",
    title: "Compete in the final",
    date: "29 November",
    description:
      "Qualifying participants move forward to the final and compete for cash prizes and scholarships.",
    icon: "🏆",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="overflow-hidden bg-[#f7f9fd] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#1555a0]">
            Your journey
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-[#102b50] sm:text-4xl lg:text-5xl">
            Four steps.{" "}
            <span className="text-[#1555a0]">One big opportunity.</span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            From registration to the final, your Conquest journey happens
            entirely online.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className="group relative rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5 sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-black tracking-[0.15em] text-[#1555a0]">
                  STEP {step.number}
                </span>

                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl font-bold text-[#1555a0] transition-colors group-hover:bg-[#1555a0] group-hover:text-white">
                  {step.icon}
                </span>
              </div>

              <div className="mt-7">
                <p className="text-xs font-bold uppercase tracking-wider text-[#d88712]">
                  {step.date}
                </p>

                <h3 className="mt-3 text-xl font-extrabold text-[#102b50]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="pointer-events-none absolute -right-4 top-12 z-10 hidden h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-sm text-[#1555a0] lg:flex">
                  →
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-blue-100 bg-white p-5 sm:flex-row sm:px-7">
          <div>
            <p className="font-bold text-[#102b50]">
              Your next opportunity starts here.
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Pick your track and take the first step.
            </p>
          </div>

          <a
            href="/register"
            className="inline-flex w-full items-center justify-center rounded-xl bg-[#1555a0] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#102b50] sm:w-auto"
          >
            Register free <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
