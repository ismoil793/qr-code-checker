import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://spz-bearings.uz/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>
          Разработано <strong>SPZ-Bearings</strong>
        </span>
      </a>
    </footer>
  );
}

export default Footer;
