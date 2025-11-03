import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({ duration: 1000, once: true }); // once: true avoids repeated animations on scroll back
    }
  }, []);

  return <Component {...pageProps} />;
}
