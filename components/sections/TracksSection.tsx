
const tracks = [
  {
    number: "01",
    name: "Cybersecurity",
    tagline: "Think beyond the threat.",
    description:
      "Explore ethical hacking, digital security, and the tools used to protect systems.",
    partner: "ThinkCyber",
    category: "SECURITY",
    symbol: "⌘",
    background: "bg-[#102b50]",
    text: "text-white",
    muted: "text-blue-100",
    border: "border-white/15",
    badge: "bg-white/10",
    symbolColor: "text-[#ffbd54]",
  },
  {
    number: "02",
    name: "Artificial Intelligence",
    tagline: "Turn ideas into intelligence.",
    description:
      "Explore AI concepts and discover how AI tools can help you build something useful.",
    partner: "Base44",
    category: "INTELLIGENCE",
    symbol: "✳",
    background: "bg-[#fff3d9]",
    text: "text-[#102b50]",
    muted: "text-slate-600",
    border: "border-[#f0d9a8]",
    badge: "bg-white/80",
    symbolColor: "text-[#b4770d]",
  },
  {
    number: "03",
    name: "Finance",
    tagline: "Decode the world of money.",
    description:
      "Discover how technology is changing financial systems, money, and markets.",
    partner: "CMT Association",
    category: "FINANCE",
    symbol: "↗",
    background: "bg-[#eaf1fc]",
    text: "text-[#102b50]",
    muted: "text-slate-600",
    border: "border-[#d4e1f4]",
    badge: "bg-white/80",
    symbolColor: "text-[#1555a0]",
  },
];

export default function TracksSection() {
  return (
    <section
      id="tracks"
      className="bg-[#f7f8fc] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d9e2f0] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#1555a0]">
              <span className="h-2 w-2 rounded-full bg-[#f5a623]" />
              Find your direction
            </span>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-[#102b50] sm:text-5xl lg:text-6xl">
              Three tracks.
              <span className="block text-[#1555a0]">
                One big opportunity.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-slate-600">
            Pick the field that sparks your curiosity.
            Every track has the same cash prizes, so choose
            the one you want to explore.
          </p>
        </div>

        {/* Track cards */}
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {tracks.map((track) => (
            <article
              key={track.number}
              className={`group flex flex-col overflow-hidden rounded-3xl border ${track.border} ${track.background} p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8`}
            >
              {/* Card header */}
              <div className="flex items-start justify-between gap-3">
                <span
                  className={`rounded-full ${track.badge} px-3 py-2 text-[10px] font-bold tracking-[0.16em] ${track.text}`}
                >
                  {track.category}
                </span>

                <span
                  className={`text-sm font-bold ${track.muted}`}
                >
                  {track.number}
                </span>
              </div>

              {/* Decorative symbol */}
              <div
                aria-hidden="true"
                className={`mt-8 flex h-16 w-16 items-center justify-center rounded-2xl border ${track.border} ${track.badge} text-4xl ${track.symbolColor}`}
              >
                {track.symbol}
              </div>

              {/* Description */}
              <h3
                className={`mt-7 text-2xl font-black tracking-tight ${track.text} sm:text-3xl`}
              >
                {track.name}
              </h3>

              <p
                className={`mt-3 text-sm font-semibold ${track.text}`}
              >
                {track.tagline}
              </p>

              <p
                className={`mt-3 min-h-20 text-sm leading-6 ${track.muted}`}
              >
                {track.description}
              </p>

              {/* Partner */}
              <div
                className={`mt-7 border-t ${track.border} pt-5`}
              >
                <p
                  className={`text-[10px] font-bold uppercase tracking-[0.16em] ${track.muted}`}
                >
                  Track partner
                </p>

                <p className={`mt-2 font-bold ${track.text}`}>
                  {track.partner}
                </p>
              </div>

              {/* Footer */}
              <div
                className={`mt-6 flex items-center justify-between border-t ${track.border} pt-5`}
              >
                <span className={`text-xs ${track.muted}`}>
                  Same prizes across tracks
                </span>

                <span
                  aria-hidden="true"
                  className={`text-xl transition-transform group-hover:translate-x-1 ${track.text}`}
                >
                  →
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Closing note */}
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <h3 className="font-bold text-[#102b50]">
              Not sure which track to choose?
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              Choose the subject you're most curious about.
              You don't need prior coding experience.
            </p>
          </div>

          <a
            href="/register"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#f5a623] px-6 py-3 font-bold text-[#102b50] transition hover:bg-[#ffc15c]"
          >
            Register free <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
