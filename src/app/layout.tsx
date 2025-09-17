import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayurakshak - Natural Healing & Ayurvedic Care",
  description:
    "Reviving ancient healing wisdom through accessible Ayurveda health camps, medicinal plant gardens, and holistic education across India.",
  keywords:
    "Ayurveda, Natural Healing, Health Camps, Panchakarma, Herbal Medicine, NGO, India",
  authors: [{ name: "Ayurakshak" }],
  openGraph: {
    title: "Ayurakshak - Natural Healing & Ayurvedic Care",
    description:
      "Reviving ancient healing wisdom through accessible Ayurveda health camps, medicinal plant gardens, and holistic education across India.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster position="top-right" richColors closeButton duration={4000} />
      </body>
    </html>
  );
}
