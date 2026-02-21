import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import Card from "../components/Card";

const ubuntuBold = localFont({
  src: "./fonts/Ubuntu-Bold.ttf",
  display: "swap",
});

const DmSans = localFont({
  src: "./fonts/DMSans-VariableFont.ttf",
  display: "swap",
});

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#ede7e3]">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#484cee3]">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
          {/* Logo + Name */}
          <div className="flex items-center gap-3">
              <Image
                src="/phishhook-logo.png"
                alt="PhishHook logo"
                width={72}
                height={72}
              />
          <span className={`${ubuntuBold.className} text-4xl`}>
              <span className="text-[#123E45]">PhishHook</span>

          </span>
        </div>

          {/* Nav buttons */}
          <nav className={`${DmSans.className} flex items-center gap-2`}>
            <Link href="/resources">
              <Button variant="secondary">Resources</Button>
            </Link>
            <Link href="/help">
              <Button>Get Help</Button>
            </Link>
            <Link href="/login">
              <Button variant="tertiary">Login</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        {/* Hero area (motto + start) */}
        <div className="text-center">
          <p className={`${ubuntuBold.className} mt-2 text-2xl font-semibold tracking-wide md:text-3xl text-green-600`}>
            The danger is close — but avoidable.
          </p>
          <h1 className={`${ubuntuBold.className} mt-2 text-4xl font-semibold tracking-tight md:text-4xl text-cyan-600`}>
            Learn to recognize the hook before it reaches you.
          </h1>

          <div className="mt-6 flex justify-center">
            <Link href="/practice">
              <Button className={`${DmSans.className} mt-5 px-8 py-4 text-lg rounded-xl`}>
                      Start Practicing
              </Button>
            </Link>
          </div>
        </div>

        {/* Mission card */}
        <div className="mt-10">
          <Card>
            <h2 className="text-lg font-semibold">Mission</h2>
            <p className="mt-3 text-slate-300">
              PhishHook helps people build confidence recognizing scams through safe,
              realistic practice — without fear, shame, or pressure.
            </p>
          </Card>
        </div>

        {/* Did you know card */}
        <div className="mt-8">
          <Card>
            <h2 className="text-lg font-semibold">Did you know?</h2>
            <p className="mt-3 text-slate-300">
              Many phishing messages look “normal.” Watch for urgency, fake support,
              and tiny link misspellings.
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-slate-300">
              <li>Hover links before clicking.</li>
              <li>Be suspicious of urgency (“act now”).</li>
              <li>Verify through official contact methods.</li>
            </ul>
          </Card>
        </div>
      </section>
    </main>
  );
}