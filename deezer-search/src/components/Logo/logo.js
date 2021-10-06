import React from "react";
import deezerLogo from "../../assets/deezer-logo.png";
import styles from "./logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <img
        id="deezer-logo"
        className={styles.logoImg}
        src={deezerLogo}
        alt="deezer logo"
      />
    </div>
  );
}
