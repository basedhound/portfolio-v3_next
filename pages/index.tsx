import Head from "next/head";
import { Home } from "@/components/Home";

export default function home() {
  return (
    <>
      <Head>
        <link rel="icon" href="favicon.ico" sizes="any" />
        {/* HTML Meta Tags */}
        <title>Frank Vukelić - Next.js/React</title>
        <meta
          name="description"
          content="Proficient in Next.js/React, and a versatile tech stack to deliver top-notch web experiences. I also build WordPress websites for small businesses."
        />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://devfrank.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Frank Vukelić - Next.js/React" />
        <meta
          property="og:description"
          content="Proficient in Next.js/React, and a versatile tech stack to deliver top-notch web experiences. I also build WordPress websites for small businesses."
        />
        <meta
          property="og:image"
          content="https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v4/devfrank.vercel.app/Frank%20Vukeli%C4%87%20-%20Next.js%2FReact/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2Fd364b10f-1358-49a4-922a-1f059440e8c0.png%3Ftoken%3DrWcnb0GVcWIBQV9r6oHsdDK1xqcb3QzKI_V687rUyVw%26height%3D1000%26width%3D1000%26expires%3D33259381866/og.png"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="devfrank.vercel.app" />
        <meta property="twitter:url" content="https://devfrank.vercel.app" />
        <meta name="twitter:title" content="Frank Vukelić - Next.js/React" />
        <meta
          name="twitter:description"
          content="Proficient in Next.js/React, and a versatile tech stack to deliver top-notch web experiences. I also build WordPress websites for small businesses."
        />
        <meta
          name="twitter:image"
          content="https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v4/devfrank.vercel.app/Frank%20Vukeli%C4%87%20-%20Next.js%2FReact/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2Fd364b10f-1358-49a4-922a-1f059440e8c0.png%3Ftoken%3DrWcnb0GVcWIBQV9r6oHsdDK1xqcb3QzKI_V687rUyVw%26height%3D1000%26width%3D1000%26expires%3D33259381866/og.png"
        />
      </Head>

      <Home />
    </>
  );
}
