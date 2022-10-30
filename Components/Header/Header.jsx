import React from "react";
import Link from "next/link";
import { Twitter, Linkedin, GitHub } from "react-feather";

const Header = () => {
  return (
    <header>
      <nav>
        <h2 className="title">-- --- .-. ... .</h2>
        <div className="icon__group">
          <Link
            href="https://linkedin.com/in/abdoachhoubi"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin color="rgb(255, 255, 255)" size={26} />
          </Link>
          <Link href="https://github.com/abdoachhoubi" target="_blank">
            <GitHub color="rgb(255, 255, 255)" size={26} />
          </Link>
          <Link href="https://twitter/abdo_achhoubi" target="_blank">
            <Twitter color="rgb(255, 255, 255)" size={26} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
