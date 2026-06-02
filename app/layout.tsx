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
  metadataBase: new URL("https://catalinalozada.com"),

  title: "Catalina Lozada | UX/UI Designer & Creative Strategist",

  description:
    "Portfolio of Catalina Lozada, Senior UX/UI Designer and Creative Strategist. Explore selected work across eCommerce, AI-powered products, CRM optimization, digital experiences, brand systems, and customer journey design.",

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Catalina Lozada | UX/UI Designer & Creative Strategist",

    description:
      "Portfolio of Catalina Lozada, Senior UX/UI Designer and Creative Strategist. Explore selected work across eCommerce, AI-powered products, CRM optimization, digital experiences, brand systems, and customer journey design.",

    url: "https://catalinalozada.com",

    siteName: "Catalina Lozada Portfolio",

    images: [
      {
        url: "https://catalinalozada.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Catalina Lozada Portfolio",
      },
    ],

    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Catalina Lozada | UX/UI Designer & Creative Strategist",

    description:
      "Portfolio of Catalina Lozada, Senior UX/UI Designer and Creative Strategist. Explore selected work across eCommerce, AI-powered products, CRM optimization, digital experiences, brand systems, and customer journey design.",

    images: ["https://catalinalozada.com/og-image.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
