import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Caveat, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-hand", display: "swap" });
const bevn = Be_Vietnam_Pro({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-bevn", display: "swap" });

export const metadata: Metadata = {
  title: "yoco.works — Quiet websites & thoughtful automations",
  description:
    "A one-person studio building small, well-made websites and the quiet automations that let them earn their keep. One person, plain conversations, flat fees.",
  openGraph: {
    title: "yoco.works — Quiet websites & thoughtful automations",
    description:
      "A one-person studio building small, well-made websites and the quiet automations that let them earn their keep.",
    url: "https://yoco.works",
    siteName: "yoco.works",
    type: "website",
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem('yoco-theme');if(t!=='light'&&t!=='dark'){t=(window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches)?'light':'dark';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${mono.variable} ${caveat.variable} ${bevn.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <noscript>
          <style>{`.rv{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
