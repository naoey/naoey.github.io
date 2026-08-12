"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

/** The scroll threshold by which the header should finish shrinking */
const full_shrink_threshold = 100;

const LinksWrapper = styled.div`
  transition: opacity 300ms ease;
`;

export function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shrinkRatio = Math.max(Math.min(window.scrollY, full_shrink_threshold) / full_shrink_threshold, 0);

      setIsShrunk(shrinkRatio > 0);

      requestAnimationFrame(() => {
        if (!headerRef.current || !titleRef.current) return;

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
      className="relative w-full sticky top-0 left-0 right-0 px-5 py-8 flex-col md:flex-row flex items-center justify-center md:justify-between text-center backdrop-blur-md"
      ref={headerRef}
    >
      <div>
        <Link href="/">
          <h1 className="text-4xl my-0 font-bold tracking-tighter leading-tight md:pr-8" ref={titleRef}>
            Letters to the Stars
          </h1>
        </Link>
      </div>

      <LinksWrapper style={{ opacity: isShrunk ? 0 : 1 }} className="flex flex-row justify-center items-center gap-3.5">
        <Link className="hover:underline" href="/">
          <h4>Blog</h4>
        </Link>
        <Link className="hover:underline" href="/about">
          <h4>About</h4>
        </Link>
      </LinksWrapper>
    </header>
  );
}
