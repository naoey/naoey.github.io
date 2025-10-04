import { ThemeSwitcher } from "@/app/_components/theme-switcher";
import Link from "next/link";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between px-5 pt-8 mb-16 md:pb-4 dark:bg-slate-950">
      <Link href="/" className="hover:underline">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Words.
        </h1>
      </Link>
      <div className="flex h-100 flex-col items-end">
        <ThemeSwitcher />
        <h4 className="text-center md:text-right text-lg mt-5 md:pl-8">
          Late night thoughts and other excerpts from scribbles, accumulated on a trip through the thing called life
        </h4>
      </div>
    </section>
  );
}
