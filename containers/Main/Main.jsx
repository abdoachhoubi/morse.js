import React, { useState, useEffect, useRef } from "react";
import { RefreshCw } from "react-feather";
import { ascii, morse, mtoa, atom } from "../../res";
import { Copy } from "react-feather";

const Main = () => {
  const [mode, setMode] = useState("mtoa");
  const [from, setFrom] = useState("MORSE");
  const [to, setTo] = useState("ASCII");
  const [res, setRes] = useState("");
  const [vis, setVis] = useState("none");
  const [mssg, setMssg] = useState("");

  const entry = useRef();

  const setVisibility = () => {
    setVis("visible");
    window.setTimeout(() => {
      setVis("none");
    }, 1000);
  };

  const copyContent = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setMssg("Copied to clipboard");
    } catch (err) {
      setMssg(`Failed to copy: ${err}`);
    }
    setVisibility();
  };

  const switchMode = () => {
    setRes("");
    entry.current.value = "";
    setMode((it) => {
      if (it === "mtoa") return "atom";
      else return "mtoa";
    });
  };

  useEffect(() => {
    if (mode == "mtoa") {
      setFrom("MORSE");
      setTo("ASCII");
    } else {
      setFrom("ASCII");
      setTo("MORSE");
    }
  }, [mode]);

  return (
    <main>
      <button className="switch" onClick={() => switchMode()}>
        <h3 className="mode">
          <span className={from}>{from}</span> TO{" "}
          <span className={to}>{to}</span>
        </h3>
        <RefreshCw size={30} color="rgb(255,255,255)" />
      </button>
      <section className="translator">
        <article className="translate">
          <textarea
            onChange={(e) => {
              if (mode == "atom") setRes(atom(e.target.value, morse));
              else setRes(mtoa(e.target.value, ascii));
            }}
            ref={entry}
            name="entry"
            id="entry"
            cols="30"
            rows="10"
            className="entry"
            placeholder={
              mode === "atom"
                ? "Enter your ASCII string"
                : "Enter your Morse code"
            }
          />
        </article>
        <article className="result">
          <div className="re__header">
            <h3 className="title">Result:</h3>
            <div className="cp__ic" onClick={() => copyContent(res)}>
              <span className={`toast ${vis}`}>Copied to clipboard</span>
              <Copy size={22} color="#fff" />
            </div>
          </div>
          <p className="result__text">{res}</p>
        </article>
      </section>
    </main>
  );
};

export default Main;
