
const faqs = [
  {
    question: "Is Conquest really free?",
    answer:
      "Yes. Registration and the online workshop are free. There is no registration fee.",
  },
  {
    question: "Who can participate?",
    answer:
      "Students in Class 11 or Class 12 from any school in India can participate. The plan specifies Science and Commerce streams, with Commerce students joining through the Finance track.",
  },
  {
    question: "Do I need coding experience?",
    answer:
      "No prior coding experience is required. The free online workshop planned for 21 November will introduce participants to the basics.",
  },
  {
    question: "Is the entire competition online?",
    answer:
      "Yes. Registration, the workshop, Round 1 and the final are planned to take place online. You can participate from home.",
  },
  {
    question: "What equipment do I need?",
    answer:
      "You need a laptop or computer and a Wi-Fi connection. Specific laptop requirements for the Cybersecurity track still need confirmation.",
  },
  {
    question: "Can I participate in more than one track?",
    answer:
      "No. Choose one track: Cybersecurity, AI or Finance. All three tracks have the same cash prize structure.",
  },
  {
    question: "What prizes can I win?",
    answer:
      "In each track, the first-place winner receives ₹1,00,000, second place receives ₹70,000 and third place receives ₹30,000 in cash. The top 20 students per track can receive up to 100% scholarship in the edept × WUD B.Tech. Every participant receives a certificate and a scholarship toward edept programs, with the amount varying.",
  },
];

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Left column */}
          <div>
            <span className="inline-flex rounded-full border border-blue-100 bg-[#f7f9fd] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#1555a0]">
              FAQs
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#102b50] sm:text-4xl lg:text-5xl">
              Got questions?
              <br />
              <span className="text-[#1555a0]">
                We've got answers.
              </span>
            </h2>

            <p className="mt-5 max-w-md text-base leading-7 text-slate-600">
              Everything you need to know before registering for Conquest
              Tech Olympiad 2026.
            </p>

            <div className="mt-8 rounded-2xl border border-blue-100 bg-[#f7f9fd] p-5 sm:p-6">
              <p className="font-extrabold text-[#102b50]">
                Still have a question?
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Check the eligibility and equipment requirements before
                choosing your track.
              </p>

              <a
                href="/register"
                className="mt-5 inline-flex items-center font-bold text-[#1555a0] transition-colors hover:text-[#102b50]"
              >
                Register free <span className="ml-2">→</span>
              </a>
            </div>
          </div>

          {/* Right column: expandable questions */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white transition-colors open:border-blue-200 open:bg-[#f8faff]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start gap-4">
                    <span className="mt-0.5 text-xs font-extrabold tracking-wider text-[#1555a0]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm font-extrabold leading-6 text-[#102b50] sm:text-base">
                      {faq.question}
                    </span>
                  </span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-lg font-medium text-[#1555a0] transition-transform group-open:rotate-45 group-open:bg-blue-100">
                    +
                  </span>
                </summary>

                <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                  <p className="pl-8 text-sm leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
