import "tailwindcss/tailwind.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { Auth0Provider } from "@auth0/auth0-react";
import Link from "next/link";
import Image from "next/image";
import AvatarImage from "../public/avatar.png";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Personal blog." />
        <title>naoey</title>
      </Head>

      <header className="p-6">
        <Link
          as={`/`}
          href="/"
          className="text-lg font-bold flex flex-row align-middle"
        >
          <Image src={AvatarImage} alt="avatar" height={35} width={35} />
          &nbsp;
          naoey
        </Link>
      </header>

      <main className="py-14">
        <Component {...pageProps} />
      </main>
    </Auth0Provider>
  );
}
