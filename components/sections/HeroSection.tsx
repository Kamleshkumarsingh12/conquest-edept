
const cashPrizes = [
  { place: "1st place", amount: "₹1,00,000" },
  { place: "2nd place", amount: "₹70,000" },
  { place: "3rd place", amount: "₹30,000" },
];

const tracks = [
  { number: "01", name: "Cybersecurity", detail: "Explore digital security." },
  { number: "02", name: "AI", detail: "Build with artificial intelligence." },
  { number: "03", name: "Finance", detail: "Explore money and markets." },
];

export default function HeroSection() {
  return (
    <section className="overflow-hidden bg-[#f7f8fc] text-[#102b50]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:py-20">
        {/* Hero copy */}
        <div>
          <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.16em] text-[#1555a0] sm:text-sm">
            Conquest by edept · Tech Olympiad 2026
          </p>

          <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            India's Tech Olympiad for{" "}
            <span className="text-[#1555a0]">Class 11 &amp; 12.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Free to register. Explore Cybersecurity, AI or Finance.
            Compete online for cash prizes and scholarships.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["FREE entry", "Cybersecurity", "AI", "Finance", "100% online"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold sm:text-sm"
                >
                  {item}
                </span>
              )
            )}
          </div>

          {/* Prize pool */}
          <div className="mt-8 rounded-2xl bg-[#102b50] p-5 text-white sm:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-100">
              Total prize pool · Cash prizes + scholarships
            </p>

            <p className="mt-2 text-4xl font-black tracking-tight text-[#ffbd54] sm:text-5xl">
              ₹4 crore
            </p>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {cashPrizes.map((prize) => (
                <div
                  key={prize.place}
                  className="rounded-xl border border-white/15 bg-white/5 p-3"
                >
                  <p className="text-xs font-medium text-blue-100">
                    {prize.place}
                  </p>
                  <p className="mt-1 text-lg font-extrabold sm:text-xl">
                    {prize.amount}
                  </p>
                  <p className="mt-1 text-xs text-blue-100">Cash prize</p>
                </div>
              ))}
            </div>

            <p className="mt-4 text-sm leading-6 text-blue-100">
              Plus scholarships, including up to 100% for the top 20 students
              in each track.
            </p>
          </div>

          <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a
              href="/register"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#ffbd54] px-7 py-4 text-base font-extrabold text-[#102b50] transition-colors hover:bg-[#f5a623] sm:w-auto"
            >
              Register free <span aria-hidden="true">→</span>
            </a>

            <p className="text-sm leading-6 text-slate-500">
              Planned deadline: 20 November 2026
            </p>
          </div>

          {/* Sponsor logo placeholder: replace with approved asset */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span>Sponsored by</span>
            <span className="font-extrabold tracking-wide text-[#102b50]">
              APEXR
            </span>
            <span className="text-xs">
              Logo and role wording subject to approval
            </span>
          </div>
        </div>

        {/* Visual panel */}
        <div className="relative">
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[#ffbd54]/30 blur-3xl" />
          <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-blue-300/30 blur-3xl" />

          <div className="relative rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl shadow-blue-950/5 sm:p-7">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1555a0]">
                  One challenge
                </p>
                <h2 className="mt-2 text-2xl font-black sm:text-3xl">
                  Three ways to explore.
                </h2>
              </div>

              <span className="rounded-full bg-[#102b50] px-3 py-2 text-xs font-bold text-white">
                2026
              </span>
            </div>

            <div className="mt-6 space-y-3">
              {tracks.map((track, index) => (
                <div
                  key={track.number}
                  className={`flex items-center gap-4 rounded-xl border p-4 ${
                    index === 1
                      ? "border-[#ffbd54] bg-[#ffbd54]/20"
                      : "border-slate-200 bg-[#f8faff]"
                  }`}
                >
                  <span className="text-xs font-extrabold text-[#1555a0]">
                    {track.number}
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="font-extrabold">{track.name}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-600">
                      {track.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl bg-[#102b50] p-4 text-white">
              <p className="font-bold">Your next step starts here.</p>
              <p className="mt-1 text-sm leading-6 text-blue-100">
                Solo participation · Online competition · Free entry
              </p>
            </div>

            {/* Add the approved student-at-laptop image here when available. */}
          </div>
        </div>
      </div>
    </section>
  );
}
