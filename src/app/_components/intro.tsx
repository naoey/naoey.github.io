import Link from "next/link";
import { Noto_Sans_Display } from "next/font/google";
import classNames from "classnames";

const notoSans = Noto_Sans_Display({ subsets: ["latin"] });

export function Intro() {
  return (
    <section className="flex-col flex items-center md:items-start md:justify-between px-5 py-8 md:mb-16 bg-slate-200 dark:bg-slate-950 text-center md:text-left">
      <Link href="/" className="hover:underline">
        <h1 className="text-4xl text-rose-900 md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">Letters to the Stars</h1>
      </Link>
      <h4 className={classNames("text-sm md:text-xl mt-4", notoSans.className)}>
        Idle musings late at night, excerpts from scribbles accumulated over a lifetime
      </h4>
    </section>
  );
}
