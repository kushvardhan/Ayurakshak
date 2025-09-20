import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
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
  title:
    "Ayurakshak -  Ayurvedic Treatment & Natural Healing for Communities",
  description:
    "Ayurakshak provides Ayurvedic treatment, health camps, and natural healing to underserved communities across India. Join our mission to heal with nature through traditional Ayurveda, Panchakarma therapy, and holistic wellness programs.",
  keywords:
    "Ayurakshak , Ayurvedic Treatment, Natural Healing, Health Camps, Panchakarma, Herbal Medicine, Community Healthcare, Traditional Medicine, Naturopathy, Liver Disease, Cancer Care, Heart Disease, Diabetes, Blood Pressure, NGO India, Mathura",
  authors: [
    { name: "Ayurakshak" },
    {
      name: "Kush Vardhan",
      url: "https://kush-personal-portfolio-my-portfolio.vercel.app/",
    },
  ],
  creator: "Kush Vardhan",
  publisher: "Ayurakshak",
  openGraph: {
    title: "Ayurakshak - Ayurvedic Treatment & Natural Healing",
    description:
      "Ayurakshak provides Ayurvedic treatment, health camps, and natural healing to underserved communities across India. Healing communities with traditional Ayurveda.",
    type: "website",
    locale: "en_US",
    url: "https://ayurakshak.org",
    siteName: "Ayurakshak ",
    images: [
      {
        url: "/AyurRakshakImageLogo.jpeg",
        width: 1200,
        height: 630,
        alt: "Ayurakshak NGO - Natural Healing & Ayurvedic Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayurakshak NGO - Ayurvedic Treatment & Natural Healing",
    description:
      "Healing communities with traditional Ayurveda. health camps and natural treatments.",
    images: ["/AyurRakshakImageLogo.jpeg"],
    creator: "@Krishna08241873",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
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
