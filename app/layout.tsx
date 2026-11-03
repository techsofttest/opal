import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: "Opal Landscaping",
  description:
    "Opal Landscaping LLC — landscape design, construction, maintenance, irrigation and swimming pools in Dubai since 2007.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Gloock&family=Figtree:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
        />
        {/* Preload critical above-the-fold media */}
        <link rel="preload" as="image" href="/logo/logo.jpeg" />
        <link rel="preload" as="image" href="/img/pool-aerial.jpg" />
        <link rel="preload" as="image" href="/founder/founder.jpeg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
