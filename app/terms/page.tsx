
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Conquest Tech Olympiad 2026",
  description:
    "Read the participation terms for Conquest by edept: Tech Olympiad 2026.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fb] px-4 py-10 sm:px-6 sm:py-16">
      <article className="mx-auto max-w-3xl rounded-3xl bg-white p-6 shadow-sm sm:p-10">
        <Link
          href="/"
          className="text-sm font-bold text-[#102b50] hover:underline"
        >
          ← Back to Conquest
        </Link>

        <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
          Conquest by edept · Tech Olympiad 2026
        </p>

        <h1 className="mt-3 text-3xl font-black text-[#102b50] sm:text-4xl">
          Terms & Conditions
        </h1>

        <p className="mt-3 text-sm text-gray-500">
          Last updated: 11 October 2026
        </p>

        <div className="mt-8 space-y-7 text-sm leading-7 text-gray-700">
          <section>
            <h2 className="text-lg font-bold text-[#102b50]">
              1. About the event
            </h2>
            <p className="mt-2">
              Conquest by edept: Tech Olympiad 2026 is an online student
              competition organised by edept. The event is intended for
              eligible Class 11 and 12 students in India. Registration is
              advertised as free.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#102b50]">
              2. Eligibility and registration
            </h2>
            <p className="mt-2">
              Participants must provide accurate information and meet the
              eligibility rules published by the organiser. The registration
              form is for individual participants, not teams.
            </p>
            <p className="mt-2">
              The organiser must confirm the permitted stream for each track,
              required equipment, registration deadline and final event dates
              before registrations open.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#102b50]">
              3. Participant responsibilities
            </h2>
            <p className="mt-2">
              Participants must follow the event instructions, submission
              requirements, assessment rules and any code of conduct
              communicated by the organiser. Participants must not
              impersonate another person, submit false details, or interfere
              with the event or its systems.
            </p>
            <p className="mt-2">
              The specific assessment format, academic integrity rules and
              disqualification procedure must be published once confirmed.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#102b50]">
              4. Prizes and scholarships
            </h2>
            <p className="mt-2">
              The event plan describes a total pool of ₹4 crore comprising
              cash prizes and scholarships. For each track, the planned cash
              prizes are ₹1,00,000 for first place, ₹70,000 for second place,
              and ₹30,000 for third place. Eligible top performers may receive
              scholarships subject to the final eligibility rules and award
              terms.
            </p>
            <p className="mt-2">
              These details are subject to confirmation by the organiser.
              Scholarship coverage, eligibility, duration, applicable
              programmes, award conditions and disbursement procedures must
              be published clearly before the event.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#102b50]">
              5. Event dates and changes
            </h2>
            <p className="mt-2">
              Dates currently shown on the website are planned dates until
              formally confirmed. The organiser should communicate any
              changes to registered participants through the official
              communication channels.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#102b50]">
              6. Personal information
            </h2>
            <p className="mt-2">
              Personal information submitted during registration is handled
              under the event's Privacy Policy. The organiser must implement
              the required safeguards for student and parent data.
            </p>
            <p className="mt-2">
              The optional Apexr guidance-session consent is separate from
              participation in Conquest. Declining it must not affect
              eligibility for the event.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#102b50]">
              7. Intellectual property and submissions
            </h2>
            <p className="mt-2">
              Participants retain any rights they already hold in their work,
              subject to the rules and licences that the organiser may
              publish for event submissions. The organiser must state any
              permission it needs to review, display or use participant work
              before requiring participants to agree to those terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#102b50]">
              8. Event administration
            </h2>
            <p className="mt-2">
              The organiser may take reasonable steps to administer the
              competition, address rule violations and maintain fair
              participation. Any cancellation, disqualification, dispute
              resolution and liability provisions must be reviewed and
              approved by the organiser before publication.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#102b50]">
              9. Contact
            </h2>
            <p className="mt-2">
              Add the official Conquest support email and/or WhatsApp number
              here before publishing these terms.
            </p>
          </section>
        </div>

        <div className="mt-10 border-t border-gray-100 pt-6">
          <Link
            href="/privacy"
            className="font-semibold text-[#102b50] underline"
          >
            Read Privacy Policy →
          </Link>
        </div>
      </article>
    </main>
  );
}
