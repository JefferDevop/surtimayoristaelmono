import React, { useState, useEffect } from "react";
import styles from "./Redes.module.scss";
import { CardImg } from "reactstrap";
import Link from "next/link";

// import { IoLogoWhatsapp } from "react-icons/io";
// import { GiRotaryPhone } from "react-icons/gi";
// import { AiFillInstagram } from "react-icons/ai";
// import { BsFacebook } from "react-icons/bs";

export function Redes() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollThreshold = 50;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <div className={styles.redes}>
        <Link href="/">
          <CardImg src="/image/logo.jpg" alt="Naciotex" />{" "}
        </Link>      
      
    </div>
  );
}
