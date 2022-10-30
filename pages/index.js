import Head from "next/head";
import React, { useState } from "react";

const morse = {
  "A": ".-",
  "B": "-...",
  "C": "-.-.",
  "D": "-..",
  "E": ".",
  "F": "..-.",
  "G": "--.",
  "H": "....",
  "I": "..",
  "J": ".---",
  "K": "-.-",
  "L": ".-..",
  "M": "--",
  "N": "-.",
  "O": "---",
  "P": ".--.",
  "Q": "--.-",
  "R": ".-.",
  "S": "...",
  "T": "-",
  "U": "..-",
  "V": "...-",
  "W": ".--",
  "X": "-..-",
  "Y": "-.--",
  "Z": "--..",
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
};

const isalnum = (cc) => {
  if ((cc > 47 && cc < 58) || (cc > 64 && cc < 91) || (cc > 96 && cc < 123))
    return true;
  return false;
};

export default function Home() {
  const [value, setValue] = useState(null);
  const [converted, setConverted] = useState(null);

  const translate = () => {
    let x = "";
    let data = value.split("");
    data.map((l) => {
      if (morse.hasOwnProperty(l.toUpperCase())) x += morse[l.toUpperCase()] + " ";
      else if (l == " ") x += "   ";
    });
    setConverted(x);
  };
  return (
    <div className="body">
      <Head>
        <title>morse code converter</title>
        <meta name="description" content="Morse code converter" />
      </Head>
      <textarea
        type="text"
        name="field"
        placeholder="Type Something"
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => translate()}>convert</button>
      {converted}
    </div>
  );
}
