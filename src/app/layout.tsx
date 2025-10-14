import type { Metadata } from "next";
import { M_PLUS_2, Ysabeau } from "next/font/google";
import cn from "classnames";
import StyledComponentsRegistry from "@/lib/styled-registry";

import "./globals.css";
import { ThemeSwitcher } from "@/app/_components/theme-switcher";

const font = Ysabeau({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-latin", display: "swap" });
const japaneseFont = M_PLUS_2({ weight: ["400", "700"], preload: false, variable: "--font-japanese", display: "swap" });

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
      <body className={cn(japaneseFont.variable, font.variable, "dark:bg-slate-900 dark:text-slate-400")}>
        <StyledComponentsRegistry>
          <ThemeSwitcher />

          <div className="min-h-screen">{children}</div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
