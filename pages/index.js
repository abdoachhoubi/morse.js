import Head from "next/head";
import React, { useState } from "react";
import { Header, Main, Footer } from "../components";

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
