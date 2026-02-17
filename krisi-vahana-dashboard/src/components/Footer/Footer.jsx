import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <h3 className={styles.brand}>Krisi Vahana Pvt Ltd</h3>
        <p className={styles.subtext}>Empowering Agriculture with Vision Intelligence</p>
      </div>

      <div className={styles.line}></div>

      <div className={styles.bottom}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Krisi Vahana Pvt Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
