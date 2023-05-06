import "tailwindcss/tailwind.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import AvatarImage from "../public/avatar.png";

import "./app.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Personal blog." />
        <title>naoey</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <header className="p-6">
        <Link
          as={`/`}
          href="/"
          className="heading-main"
        >
          <Image src={AvatarImage} alt="avatar" height={35} width={35} />
          &nbsp; naoey
        </Link>
      </header>

      <main className="py-14">
        <Component {...pageProps} />
      </main>
    </>
  );
}
