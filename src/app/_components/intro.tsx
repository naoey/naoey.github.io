"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

/** The scroll threshold by which the header should finish shrinking */
const full_shrink_threshold = 100;

export function Intro() {
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        if (!headerRef.current || !titleRef.current) return;

        const shrinkRatio = Math.max(Math.min(window.scrollY, full_shrink_threshold) / full_shrink_threshold, 0);
        const interpolate = (max: number, min: number) => max - (max - min) * shrinkRatio;
        const fontHeading = interpolate(38, 24);
        const height = interpolate(140, 60);
        const padding = interpolate(32, 16);

        headerRef.current.style.padding = `${padding}px 20px`;
        headerRef.current.style.height = `${height}px`;
        titleRef.current.style.fontSize = `${fontHeading}px`;
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className="w-full sticky top-0 left-0 right-0 px-5 py-8 flex-col flex items-center justify-center bg-stone-900/70 text-center backdrop-blur-md"
      ref={headerRef}
    >
      <Link href="/">
        <h1 className="text-rose-600 text-4xl my-0 font-bold tracking-tighter leading-tight md:pr-8" ref={titleRef}>
          Letters to the Stars
        </h1>
      </Link>
    </header>
  );
}
