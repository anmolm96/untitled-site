import type { NextPage } from "next";
import { Button } from "@/components/ui/button";

const APPLY_URL = "https://tally.so/r/Y5g2Yd";

export const metadata = {
  title: "The Untitled Fellowship — Untitled Ventures",
  description:
    "A summer fellowship for Indian students at U.S. universities. Own a real project, publish under your own name, and meet the people building for the next India.",
};

const SUMMER_LINES = [
  "You'll own a real project for the firm — one that outlasts your summer.",
  "You'll publish under your own name in KUWI, our newsletter on the people and businesses shaping India.",
  "You'll have a standing coffee each week with a different founder or investor.",
  "You'll work directly with the partners, in a cohort small enough that the access is real.",
];

const ApplyButton = ({ className }: { className?: string }) => (
  <a href={APPLY_URL} target="_blank" rel="noopener">
    <Button variant="default" size="lg" className={`text-lg group ${className ?? ""}`}>
      Apply for the fellowship{" "}
      <span className="ml-2 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        →
      </span>
    </Button>
  </a>
);

const Fellowship: NextPage = () => {
  return (
    <main>
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <a
          href="/"
          className="inline-block text-sm font-extrabold uppercase tracking-wide hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Untitled Ventures
        </a>
      </div>

      <div className="p-2">
        <div className="border-accents-1 m-auto my-8 w-full max-w-3xl rounded-md border border-black">
          <div className="flex flex-col gap-8 p-8 sm:p-12">
            <section className="flex flex-col gap-6">
              <p className="text-2xl font-extrabold uppercase tracking-wide sm:text-3xl">
                The Untitled Fellowship
              </p>
              <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
                The next generation of founders is, as yet, untitled.
              </h1>
              <p className="max-w-2xl text-xl leading-relaxed sm:text-2xl">
                The Untitled Fellowship is a summer fellowship for Indian
                students at U.S. universities. You&apos;ll own a real project
                for the firm, publish under your own name, and meet the
                people building for the next India.
              </p>
              <div>
                <ApplyButton />
              </div>
            </section>

            <section className="flex flex-col gap-6 border-t border-black/20 pt-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                The summer
              </p>
              <p className="text-2xl font-bold leading-tight sm:text-4xl">
                Spend a summer in Bengaluru with us.
              </p>
              <ul className="flex flex-col">
                {SUMMER_LINES.map((line) => (
                  <li
                    key={line}
                    className="border-t border-black/10 py-4 text-lg leading-relaxed first:border-t-0 first:pt-0"
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </section>

            <section className="flex flex-col gap-6 border-t border-black/20 pt-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Who it&apos;s for
              </p>
              <p className="max-w-2xl text-xl leading-relaxed">
                This is for Indian students at U.S. universities who are
                curious about venture capital, consumer, and India.
              </p>
            </section>
          </div>
        </div>
      </div>

      <footer className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-t border-black/20 pt-8 text-sm text-muted-foreground">
          <span>Untitled Ventures · Bengaluru, India</span>
          <div className="flex gap-6">
            <a
              href="/"
              className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Home
            </a>
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener"
              className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Apply
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Fellowship;
