
export default function AnnouncementBar() {
  return (
    <div className="bg-[#ffbd54] px-4 py-2.5 text-[#102b50]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center text-xs sm:text-sm">
        <span className="font-extrabold">CONQUEST 2026</span>

        <span className="hidden text-[#102b50]/40 sm:inline">|</span>

        <p className="font-medium">
          Free registration · Deadline planned for 20 November
        </p>

        <a
          href="/register"
          className="font-extrabold underline decoration-2 underline-offset-4 transition-opacity hover:opacity-70"
        >
          Register free →
        </a>
      </div>
    </div>
  );
}
