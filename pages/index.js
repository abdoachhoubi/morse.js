import Head from "next/head";
import React from "react";
import { Header, Main, Footer } from "../containers";

export default function Home() {

  return (
    <div className="body">
      <Head>
        <title>morse code converter</title>
        <meta name="description" content="Morse code converter" />
      </Head>

      <Header />
      <Main />
      <Footer />
    </div>
  );
}
