import React, {useState, useEffect} from "react";
import Link from "next/link";
import { Twitter, Linkedin, GitHub } from "react-feather";

const Header = () => {
  const [width, setWidth] = useState(0);
  const [size, setSize] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    if (width > 1600) setSize(26);
    if (width <= 1600) setSize(24);
    if (width <= 900) setSize(22);
  }, [])
  
  return (
    <header>
      <nav>
        <h2 className="title">OPEN MORSE</h2>
        <div className="icon__group">
          <Link
            href="https://linkedin.com/in/abdoachhoubi"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin color="rgb(255, 255, 255)" size={size} />
          </Link>
          <Link href="https://github.com/abdoachhoubi" target="_blank">
            <GitHub color="rgb(255, 255, 255)" size={size} />
          </Link>
          <Link href="https://twitter.com/abdo_achhoubi" target="_blank">
            <Twitter color="rgb(255, 255, 255)" size={size} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
