import Layout from "@/components/Layout";
import { CharacterContextProvider } from "@/contexts/CharactersContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { PT_Sans, PT_Sans_Caption } from "next/font/google";

const ptSansCaption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: ["400", "700"]
});

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"]
});

export default function App({ Component, pageProps }: AppProps) {
  return(
    <CharacterContextProvider>
      <div className={`${ptSans.className}`}>
        <style jsx global>{`
          .caption-text {
            font-family: ${ptSansCaption.style.fontFamily}, sans-serif;
          }
        `}</style>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </CharacterContextProvider>
  )
}
