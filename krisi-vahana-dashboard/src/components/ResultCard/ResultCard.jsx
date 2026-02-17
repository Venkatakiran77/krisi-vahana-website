import React from "react";
import styles from "./ResultCard.module.css";

export default function ResultCard({ label, value }) {
  return (
    <div className={styles.card}>
      <h4>{label}</h4>
      <p>{value}</p>
    </div>
  );
}
