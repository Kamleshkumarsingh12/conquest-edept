
const dates = [
  {
    day: "20",
    month: "NOV",
    label: "Registration deadline",
    title: "Registration closes",
    description:
      "Complete your free registration and choose your competition track.",
    status: "START HERE",
    featured: true,
  },
  {
    day: "21",
    month: "NOV",
    label: "Online workshop",
    title: "Learn and prepare",
    description:
      "Get introduced to your chosen track and prepare for the competition.",
    status: "GET READY",
    featured: false,
  },
  {
    day: "22",
    month: "NOV",
    label: "Round 1",
    title: "Show what you know",
    description:
      "Take on the first round and put your skills to the test.",
    status: "COMPETE",
    featured: false,
  },
  {
    day: "29",
    month: "NOV",
    label: "Grand final",
    title: "Make your move",
    description:
      "Qualifying participants compete for cash prizes and scholarships.",
    status: "THE FINAL",
    featured: false,
  },
];

export default function KeyDates() {
  return (
    <section
      id="key-dates"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-orange-100 bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#b66b00]">
              Mark your calendar
            </span>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-[#102b50] sm:text-4xl lg:text-5xl">
              The countdown to{" "}
              <span className="text-[#1555a0]">Conquest.</span>
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Four important dates. One opportunity to challenge yourself,
              explore a new field and compete.
            </p>
          </div>

          <a
            href="/register"
            className="inline-flex w-fit shrink-0 items-center justify-center rounded-xl bg-[#1555a0] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#102b50]"
          >
            Register free <span className="ml-2">→</span>
          </a>
        </div>

        {/* Timeline */}
        <div className="relative mt-12 sm:mt-16">
          {/* Horizontal connector on desktop */}
          <div className="absolute left-[12%] right-[12%] top-9 hidden h-px bg-blue-100 lg:block" />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {dates.map((date) => (
              <article
                key={date.label}
                className={`relative rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6 ${
                  date.featured
                    ? "border-[#1555a0] bg-[#102b50] text-white shadow-lg shadow-blue-950/10"
                    : "border-slate-200 bg-[#f8faff] text-[#102b50] hover:border-blue-200"
                }`}
              >
                {/* Date marker */}
                <div className="relative z-10 flex items-center gap-4">
                  <div
                    className={`flex h-[72px] w-[72px] shrink-0 flex-col items-center justify-center rounded-2xl ${
                      date.featured
                        ? "bg-[#ffbd54] text-[#102b50]"
                        : "border border-blue-100 bg-white text-[#1555a0]"
                    }`}
                  >
                    <span className="text-3xl font-black leading-none">
                      {date.day}
                    </span>
                    <span className="mt-1 text-[10px] font-extrabold tracking-[0.2em]">
                      {date.month}
                    </span>
                  </div>

                  <div>
                    <span
                      className={`text-[10px] font-extrabold tracking-[0.14em] ${
                        date.featured
                          ? "text-[#ffbd54]"
                          : "text-slate-500"
                      }`}
                    >
                      {date.status}
                    </span>
                    <p className="mt-1 text-sm font-bold">
                      {date.label}
                    </p>
                  </div>
                </div>

                <div className="mt-7">
                  <h3 className="text-xl font-extrabold tracking-tight">
                    {date.title}
                  </h3>

                  <p
                    className={`mt-3 text-sm leading-6 ${
                      date.featured
                        ? "text-blue-100"
                        : "text-slate-600"
                    }`}
                  >
                    {date.description}
                  </p>
                </div>

                <div
                  className={`mt-6 border-t pt-4 text-xs font-semibold ${
                    date.featured
                      ? "border-white/15 text-blue-100"
                      : "border-slate-200 text-slate-500"
                  }`}
                >
                  {date.day} November 2026
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Reminder */}
        <div className="mt-8 flex items-start gap-3 rounded-xl border border-orange-100 bg-orange-50/70 p-4 sm:items-center sm:p-5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-lg">
            !
          </span>

          <p className="text-sm leading-6 text-slate-700">
            <span className="font-bold text-[#102b50]">
              Don't leave it until the last day.
            </span>{" "}
            Register early so you have time to prepare for your chosen track.
          </p>
        </div>
      </div>
    </section>
  );
}
