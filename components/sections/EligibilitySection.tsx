
const requirements = [
  {
    number: "01",
    title: "Class 11 or 12",
    description:
      "Open to students currently studying in Class 11 or Class 12.",
    icon: "▤",
  },
  {
    number: "02",
    title: "Any school in India",
    description:
      "You don't need to be an edept learner. Students from schools across India can participate.",
    icon: "⌖",
  },
  {
    number: "03",
    title: "Science or Commerce",
    description:
      "Science students can explore the available tracks. Commerce students can participate through Finance.",
    icon: "◈",
  },
  {
    number: "04",
    title: "Solo participation",
    description:
      "Conquest is an individual competition. No team or teammates are required.",
    icon: "♙",
  },
];

export default function EligibilitySection() {
  return (
    <section
      id="eligibility"
      className="overflow-hidden bg-[#102b50] py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        {/* Left: Heading */}
        <div>
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#ffbd54]">
            Your opportunity
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            This could be
            <br />
            <span className="text-[#ffbd54]">
              your starting point.
            </span>
          </h2>

          <p className="mt-5 max-w-lg text-base leading-7 text-blue-100 sm:text-lg">
            You don't need to be an expert. Bring your curiosity, explore a
            track that interests you and take on the challenge.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-black text-[#ffbd54]">
                ₹0
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                Registration fee
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-black text-[#ffbd54]">
                100%
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                Online competition
              </p>
            </div>
          </div>
        </div>

        {/* Right: Eligibility cards */}
        <div className="grid gap-3 sm:grid-cols-2">
          {requirements.map((item) => (
            <article
              key={item.number}
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 transition-colors hover:border-[#ffbd54]/50 hover:bg-white/[0.09] sm:p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold tracking-[0.16em] text-[#ffbd54]">
                  {item.number}
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-xl text-[#ffbd54]">
                  {item.icon}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-extrabold text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-blue-100/80">
                {item.description}
              </p>
            </article>
          ))}

          {/* Equipment requirement */}
          <div className="rounded-2xl border border-[#ffbd54]/25 bg-[#ffbd54]/10 p-5 sm:col-span-2 sm:p-6">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ffbd54] text-xl text-[#102b50]">
                ↗
              </span>

              <div>
                <h3 className="font-extrabold text-white">
                  What you'll need
                </h3>

                <p className="mt-2 text-sm leading-6 text-blue-100">
                  A laptop or computer and a Wi-Fi connection. No coding
                  experience or registration fee is required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto mt-10 max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div>
            <h3 className="text-lg font-extrabold text-white sm:text-xl">
              Ready to take your first step?
            </h3>

            <p className="mt-2 text-sm text-blue-100">
              Pick your track and register for free.
            </p>
          </div>

          <a
            href="/register"
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#ffbd54] px-6 py-3.5 text-sm font-extrabold text-[#102b50] transition-colors hover:bg-white"
          >
            Register free <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
