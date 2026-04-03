import Link from "next/link";
import { FaHome, FaSearch, FaRobot } from "react-icons/fa";

export const metadata = {
  title: "Page Not Found — AIMS AI Medical Scriber",
  description: "The page you're looking for doesn't exist. Return to the AIMS homepage or explore our AI medical scribing platform.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-[var(--bg-primary)] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent-primary)]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 text-center max-w-lg mx-auto px-4">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full glass border border-[var(--glass-border)] mb-6">
            <FaRobot className="text-3xl text-[var(--accent-primary)]" />
          </div>
          <h1 className="text-6xl sm:text-8xl font-black text-gradient mb-4">404</h1>
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-3">
            Page Not Found
          </h2>
          <p className="text-[var(--text-secondary)] text-base leading-relaxed">
            The page you're looking for doesn't exist or may have been moved. 
            Our AI couldn't locate it — but we can help you find your way back.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-tertiary)] text-[var(--bg-primary)] font-bold rounded-xl hover:shadow-lg hover:shadow-[var(--accent-primary)]/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            <FaHome />
            Go Home
          </Link>
          <Link
            href="/technology"
            className="inline-flex items-center gap-2 px-6 py-3 glass border border-[var(--glass-border)] text-[var(--text-primary)] font-semibold rounded-xl hover:border-[var(--accent-primary)] transition-all duration-300"
          >
            <FaSearch />
            Explore Features
          </Link>
        </div>

        <div className="mt-12 glass rounded-xl p-6 border border-[var(--glass-border)]">
          <p className="text-sm text-[var(--text-muted)] mb-3">Looking for something specific?</p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <Link href="/ai-consulting" className="text-[var(--accent-primary)] hover:underline">AI Consulting</Link>
            <Link href="/virtual-front-desk" className="text-[var(--accent-primary)] hover:underline">Virtual Front Desk</Link>
            <Link href="/get-started" className="text-[var(--accent-primary)] hover:underline">Get Started</Link>
            <Link href="/customer-care" className="text-[var(--accent-primary)] hover:underline">Contact Us</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
