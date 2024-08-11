import Head from "next/head";
import { Home } from "@/components/Home";

export default function home() {
  return (
    <>
      <Head>
        {/* HTML Meta Tags */}
        <title>Frank Vukelić - Next.js/React</title>
        <meta
          name="description"
          content="Freelance. Proficient in Next.js/React, and a versatile tech stack to deliver top-notch web experiences. I also build WordPress websites for small businesses."
        />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://devfrank.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Frank Vukelić - Next.js/React" />
        <meta
          property="og:description"
          content="Freelance. Proficient in Next.js/React, and a versatile tech stack to deliver top-notch web experiences. I also build WordPress websites for small businesses."
        />
        <meta
          property="og:image"
          content="https://ogcdn.net/2c2c6737-47d4-4459-9969-e711eb48394c/v1/devfrank.vercel.app/Frank%20Vukeli%C4%87%20-%20Next.js%2FReact/Freelance.%20Proficient%20in%20Next.js%2FReact%2C%20and%20a%20versatile%20tech%20stack%20to%20deliver%20top-notch%20web%20experiences.%20I%20also%20build%20WordPress%20websites%20for%20small%20businesses./https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2F745d1c0b-22a2-45ac-870f-c842fcdafde8.png%3Ftoken%3DTWfEAmEQiL6lzhtdngMLc6zVJFvFw3-hLi3pnVL1aVA%26height%3D675%26width%3D1200%26expires%3D33259377027/og.png"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="devfrank.vercel.app" />
        <meta property="twitter:url" content="https://devfrank.vercel.app" />
        <meta name="twitter:title" content="Frank Vukelić - Next.js/React" />
        <meta
          name="twitter:description"
          content="Freelance. Proficient in Next.js/React, and a versatile tech stack to deliver top-notch web experiences. I also build WordPress websites for small businesses."
        />
        <meta
          name="twitter:image"
          content="https://ogcdn.net/2c2c6737-47d4-4459-9969-e711eb48394c/v1/devfrank.vercel.app/Frank%20Vukeli%C4%87%20-%20Next.js%2FReact/Freelance.%20Proficient%20in%20Next.js%2FReact%2C%20and%20a%20versatile%20tech%20stack%20to%20deliver%20top-notch%20web%20experiences.%20I%20also%20build%20WordPress%20websites%20for%20small%20businesses./https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2F745d1c0b-22a2-45ac-870f-c842fcdafde8.png%3Ftoken%3DTWfEAmEQiL6lzhtdngMLc6zVJFvFw3-hLi3pnVL1aVA%26height%3D675%26width%3D1200%26expires%3D33259377027/og.png"
        />
      </Head>

      <Home />
    </>
  );
}
