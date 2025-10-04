import { ThemeSwitcher } from "@/app/_components/theme-switcher";
import Link from "next/link";
import { Noto_Sans_Display } from "next/font/google";
import classNames from "classnames";

const notoSans = Noto_Sans_Display({ subsets: ["latin"] });

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between px-5 pt-8 mb-16 md:pb-4 bg-slate-200 dark:bg-slate-950">
      <Link href="/" className="hover:underline">
        <h1 className="text-5xl text-rose-900 md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Words.
        </h1>
      </Link>
      <div className="flex h-100 flex-col items-end">
        <ThemeSwitcher />
        <h4 className={classNames("text-center md:text-right text-lg mt-5 md:pl-8", notoSans.className)}>
          Late night thoughts and other excerpts from scribbles, accumulated on a trip through the thing called life
        </h4>
      </div>
    </section>
  );
}
