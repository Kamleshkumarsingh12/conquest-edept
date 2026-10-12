
import Link from "next/link";

export const metadata = {
  title: "Registration | Conquest Tech Olympiad 2026",
  description: "Thank you for your interest in Conquest by edept.",
};

export default function RegistrationSuccessPage() {
  const message = encodeURIComponent(
    "Join me for Conquest by edept: Tech Olympiad 2026! It's free for Class 11 and 12 students. Check out the event and register."
  );

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f8fb] px-4 py-12">
      <section className="w-full max-w-xl rounded-3xl border border-gray-100 bg-white p-7 text-center shadow-sm sm:p-10">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-3xl">
          ✓
        </div>

        <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
          Conquest by edept · Tech Olympiad 2026
        </p>

        <h1 className="mt-3 text-3xl font-black tracking-tight text-[#102b50] sm:text-4xl">
          Thank you!
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-600">
          You’ve reached the registration confirmation preview. This is a
          frontend-only flow; your registration has not been saved or verified.
        </p>

        <div className="mt-7 rounded-2xl bg-[#f7f8fb] p-5 text-left">
          <h2 className="font-bold text-[#102b50]">Invite a friend</h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Share Conquest with someone in Class 11 or 12.
          </p>

          <a
            href={`https://wa.me/?text=${message}`}
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex w-full items-center justify-center rounded-xl bg-[#102b50] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#193e6d]"
          >
            Share on WhatsApp ↗
          </a>
        </div>

        <Link
          href="/"
          className="mt-7 inline-block text-sm font-semibold text-[#102b50] underline underline-offset-4"
        >
          Back to Conquest
        </Link>
      </section>
    </main>
  );
}
