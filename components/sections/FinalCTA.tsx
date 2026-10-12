
export default function FinalCTA() {
  return (
    <section
      id="register"
      className="relative overflow-hidden bg-[#102b50] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border border-white/10 sm:h-96 sm:w-96"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-14 h-64 w-64 rounded-full border border-white/10 sm:h-80 sm:w-80"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#1555a0]/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#ffbd54]">
          Conquest by edept · Tech Olympiad 2026
        </span>

        <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Your curiosity could take you{" "}
          <span className="text-[#ffbd54]">further.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">
          Explore Cybersecurity, AI or Finance. Compete for cash prizes,
          discover new possibilities and take your first step with Conquest.
        </p>

        {/* Key benefits */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold">
            Free registration
          </span>

          <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold">
            ₹4 crore prize pool
          </span>

          <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold">
            Fully online
          </span>
        </div>

        {/* Primary CTA */}
        <div className="mt-9">
          <a
            href="/register"
            className="inline-flex w-full items-center justify-center rounded-xl bg-[#ffbd54] px-8 py-4 text-base font-extrabold text-[#102b50] shadow-lg shadow-black/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white sm:w-auto"
          >
            Register free <span className="ml-3 text-lg">→</span>
          </a>

          <p className="mt-4 text-sm text-blue-200">
            For students in Class 11 and 12 across India.
          </p>
        </div>

        {/* Deadline reminder */}
        <div className="mx-auto mt-10 max-w-xl border-t border-white/15 pt-6">
          <p className="text-sm leading-6 text-blue-100">
            Registration deadline planned for{" "}
            <span className="font-extrabold text-[#ffbd54]">
              20 November 2026
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
