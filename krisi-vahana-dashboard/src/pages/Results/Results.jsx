import React from "react";
import styles from "./Results.module.css";
import { useLocation } from "react-router-dom";
import ResultCard from "../../components/ResultCard/ResultCard";

export default function Results() {
  const { state } = useLocation();

  const dummy = {
    count: 3,
    ripe: 2,
    unripe: 1,
    damaged: false,
    sizes: ["small", "medium", "large"],
  };

  return (
    <div className={styles.container}>
      <h1>Results</h1>

      <img src={state.image} className={styles.preview} />

      <div className={styles.cards}>
        <ResultCard label="Total Tomatoes" value={dummy.count} />
        <ResultCard label="Ripe Tomatoes" value={dummy.ripe} />
        <ResultCard label="Unripe Tomatoes" value={dummy.unripe} />
        <ResultCard label="Damaged" value={dummy.damaged ? "Yes" : "No"} />
        <ResultCard label="Sizes" value={dummy.sizes.join(", ")} />
      </div>
    </div>
  );
}
