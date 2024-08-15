import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
// NextIntl
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
//
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "800", "700", "900"],
  variable: "--font-poppins",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 0.9,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://devfrank.vercel.app"),
  title: "Frank Vukelić | Web Developer",
  description:
    "Fullstack developer skilled in Next.js/React and a versatile tech stack, specializing in top-notch web experiences and WordPress sites for small businesses.",
  icons: {
    icon: "/assets/favicon.ico",
  },
  // Facebook
  openGraph: {
    title: "Franck Vukelić",
    description:
      "Proficient in Next.js/React, and a versatile tech stack to deliver top-notch web experiences. I also build WordPress websites for small businesses.",
    url: "https://devfrank.vercel.app",
    // siteName: "Frank Vukelić Portfolio",
    type: "website",
    images: [
      {
        url: "https://ogcdn.net/6064b869-74ed-4eb9-b76c-0b701ffe7e6b/v4/devfrank.vercel.app/Frank%20Vukeli%C4%87%20-%20Web%20Developer/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2Fa9e8c408-5c62-4e7d-8d40-771e29523783.png%3Ftoken%3DRapK6uD2jQZDTLwq_T8cMtxJEiVnLvKIhJWTW69GI9o%26height%3D960%26width%3D1200%26expires%3D33259637381/og.png",
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
    title: "Frank Vukelić - Web Developer",
    description:
      "Proficient in Next.js/React, and a versatile tech stack to deliver top-notch web experiences. I also build WordPress websites for small businesses.",
    images: [
      {
        url: "https://ogcdn.net/6064b869-74ed-4eb9-b76c-0b701ffe7e6b/v4/devfrank.vercel.app/Frank%20Vukeli%C4%87%20-%20Web%20Developer/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2Fa9e8c408-5c62-4e7d-8d40-771e29523783.png%3Ftoken%3DRapK6uD2jQZDTLwq_T8cMtxJEiVnLvKIhJWTW69GI9o%26height%3D960%26width%3D1200%26expires%3D33259637381/og.png",
        width: 1200,
        height: 630,
        alt: "Preview image Frank Vukelić Portfolio",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
    <html lang="en" suppressHydrationWarning={true}>
      <body className={poppins.className} id="root">{children}</body>
    </html></NextIntlClientProvider>
  );
}
