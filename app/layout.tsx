import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "600", "700", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devfrank.vercel.app"),
  title: "Frank Vukelić - Next.js/React",
  description:
    "Proficient in Next.js/React, and a versatile tech stack to deliver top-notch web experiences. I also build WordPress websites for small businesses.",
  icons: {
    icon: "/assets/favicon.ico",
  },
  // Facebook
  openGraph: {
    title: "Frank Vukelić - Next.js/React",
    description:
      "Proficient in Next.js/React, and a versatile tech stack to deliver top-notch web experiences. I also build WordPress websites for small businesses.",
    url: "https://devfrank.vercel.app",
    // siteName: "Frank Vukelić Portfolio",
    type: "website",
    images: [
      {
        url: "https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v4/devfrank.vercel.app/Frank%20Vukeli%C4%87%20-%20Next.js%2FReact/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2Fd364b10f-1358-49a4-922a-1f059440e8c0.png%3Ftoken%3DrWcnb0GVcWIBQV9r6oHsdDK1xqcb3QzKI_V687rUyVw%26height%3D1000%26width%3D1000%26expires%3D33259381866/og.png",
        width: 1200,
        height: 630,
        alt: "Preview image Frank Vukelić Portfolio",
      },
    ],
  },
  // Twitter
  twitter: {
    card: "summary_large_image",
    site: "@frank_vkh",
    title: "Frank Vukelić - Next.js/React",
    description:
      "Proficient in Next.js/React, and a versatile tech stack to deliver top-notch web experiences. I also build WordPress websites for small businesses.",
    images: [
      {
        url: "https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v4/devfrank.vercel.app/Frank%20Vukeli%C4%87%20-%20Next.js%2FReact/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2Fd364b10f-1358-49a4-922a-1f059440e8c0.png%3Ftoken%3DrWcnb0GVcWIBQV9r6oHsdDK1xqcb3QzKI_V687rUyVw%26height%3D1000%26width%3D1000%26expires%3D33259381866/og.png",
        width: 1200,
        height: 630,
        alt: "Preview image Frank Vukelić Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
