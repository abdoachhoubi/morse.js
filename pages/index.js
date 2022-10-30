import Head from "next/head";
import React, { useState } from "react";
import { morse, translate } from "../res";
import { Header, Main, Footer } from "../Components";

export default function Home() {
  const [value, setValue] = useState(null);
  const [code, setCode] = useState(null);

  return (
    <div className="body">
      <Head>
        <title>morse code converter</title>
        <meta name="description" content="Morse code converter" />
      </Head>

      <Header />
      <Main />
      <Footer setValue={setValue} value={value} morse={morse} />
    </div>
  );
}
