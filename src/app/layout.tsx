import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GoogleTagManager } from "@next/third-parties/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Google Analytics Test",
    default: "Google Analytics Test",
  },
  description: "Google Analytics Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Providers>{children}</Providers>
        <GoogleAnalytics gaId="G-ETKBQPVGEB" debugMode={true} />
        <GoogleTagManager gtmId="GTM-5KWFK578" />
      </body>
    </html>
  );
}
