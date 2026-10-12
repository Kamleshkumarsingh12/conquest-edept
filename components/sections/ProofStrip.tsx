
const stats = [
  {
    value: "₹4 crore",
    label: "Prize pool",
    detail: "Cash prizes + scholarships",
  },
  {
    value: "3",
    label: "Competition tracks",
    detail: "Cybersecurity · AI · Finance",
  },
  {
    value: "100%",
    label: "Online",
    detail: "Including the final",
  },
  {
    value: "Certificate",
    label: "For every participant",
    detail: "Everyone receives a certificate",
  },
];

function PartnerName({
  name,
  description,
}: {
  name: string;
  description?: string;
}) {
  return (
    <div className="flex min-w-0 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-4 text-center transition-colors hover:border-blue-200 sm:px-6">
      <div>
        <p className="text-base font-extrabold tracking-tight text-[#16365f] sm:text-lg">
          {name}
        </p>

        {description && (
          <p className="mt-1 text-xs text-slate-500">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default function ProofStrip() {
  return (
    <section
      aria-label="Olympiad statistics and partners"
      className="border-y border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">

        {/* Statistics */}
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-[#f8faff] p-4 sm:p-6"
            >
              <p className="text-2xl font-black tracking-tight text-[#1555a0] sm:text-3xl">
                {stat.value}
              </p>

              <h3 className="mt-2 text-sm font-bold text-[#102b50] sm:text-base">
                {stat.label}
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Partner logos */}
        <div className="mt-12 border-t border-slate-200 pt-9 sm:mt-14 sm:pt-11">

          {/* Sponsor */}
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              Sponsored by
            </p>

            <div className="mx-auto mt-4 max-w-sm rounded-2xl border border-slate-200 bg-white px-8 py-5">
              {/* Replace with the approved Apexr logo */}
              <p className="text-2xl font-black tracking-tight text-[#16365f]"> 
                APEXR   
              </p>

              <p className="mt-1 text-xs text-slate-500">
                University guidance sponsor
              </p>
            </div>
          </div>

          {/* Track partners */}
          <div className="mt-10">
            <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              Track partners
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <PartnerName
                name="ThinkCyber"
                description="Cybersecurity track"
              />

              <PartnerName
                name="Base44"
                description="AI track"
              />

              <PartnerName
                name="CMT Association"
                description="Finance track"
              />
            </div>
          </div>

          {/* Scholarship partner */}
          <div className="mt-8">
            <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              Scholarships with
            </p>

            <div className="mx-auto max-w-sm">
              <PartnerName name="WUD" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
