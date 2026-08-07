import Link from 'next/link';

export const metadata = {
  title: 'Resume | Edward Rodriguez',
  description: 'View and download Edward Rodriguez resume.',
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#071419] text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.24em] text-white transition hover:border-[#86d028] hover:text-[#86d028]">
            Back home
          </Link>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#86d028] px-6 py-3 text-xs font-extrabold uppercase tracking-[0.22em] text-[#071419] transition hover:brightness-110"
          >
            Download PDF
          </a>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-[0_24px_60px_rgba(0,0,0,0.25)]">
          <iframe
            src="/Resume.pdf"
            title="Edward Rodriguez resume"
            className="h-[80vh] w-full min-w-0"
          />
        </div>
      </div>
    </main>
  );
}
