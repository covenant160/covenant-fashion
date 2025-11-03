// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        {/* Preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Inter font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* Favicon placeholder */}
        <link rel="icon" href="/favicon.ico" />
        {/* Meta tags */}
        <meta name="description" content="Your fashion website powered by Next.js & Tailwind CSS" />
      </Head>
      <body className="antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
