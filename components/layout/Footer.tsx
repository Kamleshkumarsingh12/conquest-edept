
const footerLinks = [
  { label: "Choose your track", href: "#tracks" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Key dates", href: "#key-dates" },
  { label: "Eligibility", href: "#eligibility" },
  { label: "FAQs", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a
              href="/"
              className="inline-flex flex-col"
              aria-label="Conquest by edept home"
            >
              <span className="text-2xl font-black tracking-tight">
                CONQUEST<span className="text-[#ffbd54]">.</span>
              </span>

              <span className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">
                by edept · Tech Olympiad 2026
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-6 text-blue-100/75">
              A free, online competition for Class 11 and 12 students to
              explore Cybersecurity, AI and Finance.
            </p>

            <a
              href="/register"
              className="mt-6 inline-flex items-center rounded-xl bg-[#ffbd54] px-5 py-3 text-sm font-extrabold text-[#102b50] transition-colors hover:bg-white"
            >
              Register free <span className="ml-2">→</span>
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-sm font-extrabold text-white">
              Explore Conquest
            </h2>

            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-blue-100/75 transition-colors hover:text-[#ffbd54]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="text-sm font-extrabold text-white">
              Important information
            </h2>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="/privacy-policy"
                  className="text-sm text-blue-100/75 transition-colors hover:text-[#ffbd54]"
                >
                  Privacy policy
                </a>
              </li>

              <li>
                <a
                  href="/terms"
                  className="text-sm text-blue-100/75 transition-colors hover:text-[#ffbd54]"
                >
                  Terms and conditions
                </a>
              </li>

              <li>
                <a
                  href="#for-parents"
                  className="text-sm text-blue-100/75 transition-colors hover:text-[#ffbd54]"
                >
                  Information for parents
                </a>
              </li>
            </ul>

            {/* Add approved sponsor attribution here after confirmation. */}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-blue-100/60 sm:flex-row sm:items-center sm:justify-between">
         <p>
  © 2026 edept. All rights reserved.
</p>ṭ

          <p>Conquest by edept · Tech Olympiad 2026</p>
        </div>
      </div>
    </footer>
  );
}
