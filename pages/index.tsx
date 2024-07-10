import Head from "next/head";
import { Home } from "@/components/Home";

export default function home() {
  return (
    <>
      <Head>
        {/* Main */}
        <title>Frank Vukelić - React/Next.js</title>
        <link rel="shortcut icon" href="/assets/favicon.png" />
        <meta name="viewport" content="width=device-width"/>
        <meta name="description" content="Proficient in React, Next.js, and a versatile tech stack, I deliver top-notch, interactive web experiences. I specialize in crafting compelling, responsive websites for individuals and small businesses." />

        {/* Open Graph */}
        <meta property="og:title" content="Frank Vukelić - React/Next.js" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://devfrank.vercel.app" />
        {/* <meta property="og:image" content="screenshot.png" /> */}
        <meta property="og:description" content="Proficient in React, Next.js, and a versatile tech stack, I deliver top-notch, interactive web experiences. I specialize in crafting compelling, responsive websites for individuals and small businesses." />

        {/* Twitter */}
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@frank_kelic"/>
        <meta name="twitter:creator" content="@frank_kelic"/>
        {/* <meta name="twitter:image" content="screenshot.png"/>  */}
        <meta name="twitter:title" content="Frank Vukelić - React/Next.js"/>
        <meta name="twitter:description" content="Proficient in React, Next.js, and a versatile tech stack, I deliver top-notch, interactive web experiences. I specialize in crafting compelling, responsive websites for individuals and small businesses."/>
      </Head>
      <Home />
    </>
  );
}
