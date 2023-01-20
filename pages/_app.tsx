import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Work_Sans } from "@next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${workSans.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
