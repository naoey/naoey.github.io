import type { Metadata } from "next";
import { Mukta, Noto_Sans_JP, Noto_Sans_Kannada, Source_Sans_3 } from "next/font/google";
import cn from "classnames";
import StyledComponentsRegistry from "@/lib/styled-registry";
import { ThemeSwitcher } from "@/app/_components/theme-switcher";

import "./globals.css";

const fontLatin = Source_Sans_3({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-latin",
  display: "swap",
});

const fontJapanese = Noto_Sans_JP({
  weight: ["400", "600", "700"],
  preload: false,
  variable: "--font-japanese",
  display: "swap",
});

const fontHindi = Mukta({
  weight: ["400", "600", "700"],
  subsets: ["devanagari"],
  variable: "--font-hindi",
  display: "swap",
});

const fontKannada = Noto_Sans_Kannada({
  weight: ["400", "600", "700"],
  subsets: ["kannada"],
  variable: "--font-kannada",
  display: "swap",
});

export const metadata: Metadata = {
  title: `Letters to the Stars`,
  description: `Strangers on the internet with random thoughts and words`,
  openGraph: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body
        className={cn(
          fontJapanese.variable,
          fontHindi.variable,
          fontKannada.variable,
          fontLatin.variable,
          "dark:bg-slate-900 dark:text-slate-400",
        )}
      >
        <StyledComponentsRegistry>
          <ThemeSwitcher />

          <div className="min-h-screen w-full bg-stone-100 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-white to-stone-100">
            {children}
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
