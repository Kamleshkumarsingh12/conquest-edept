
import Link from "next/link";

export default function MobileRegisterBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white/95 p-3 backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-lg items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-extrabold text-[#102b50]">
            Conquest 2026
          </p>
          <p className="text-xs text-gray-500">
            Free entry · Class 11 & 12
          </p>
        </div>

        <Link
          href="/register"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#102b50] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#193e6d]"
        >
          Register free <span className="ml-2" aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
