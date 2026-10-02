import Link from "next/link";
import Navbar from "./header/page";

const features = [
  { title: "Fast", text: "Server-rendered pages that load quickly." },
  { title: "Accessible", text: "Keyboard friendly with proper ARIA support." },
  { title: "Responsive", text: "Looks good on mobile, tablet and desktop." },
];

export default function Home() {

  return (
    <div>
      <Navbar />
      <main className="bg-white light:bg-neutral-900 text-black dark:text-black">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Build something great
          </h1>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A simple starter home page built with Next.js and Tailwind CSS.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/features"
              className="py-2.5 px-5 rounded-md font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Get started
            </Link>
            <Link
              href="/about"
              className="py-2.5 px-5 rounded-md font-semibold border border-slate-300 dark:border-neutral-700 hover:bg-slate-100 dark:hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Learn more
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
          <h2 className="text-2xl font-bold text-center">Why choose us</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-lg border border-slate-300 dark:border-neutral-700"
              >
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-slate-300 dark:border-neutral-700 py-16 text-center px-4">
          <h2 className="text-2xl font-bold">Ready to start?</h2>
          <Link
            href="/contact"
            className="inline-block mt-6 py-2.5 px-5 rounded-md font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Contact us
          </Link>
        </section>
      </main>
      </div>
      );
}