import Head from "next/head";
import { PageShell } from "@/components/PageShell";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>BookNest</title>
        <meta name="description" content="A book library" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* display navbar and footer globally */}
      <PageShell>
        <Component {...pageProps} />
      </PageShell>
    </>
  );
}
