import React from "react";
import { motion } from "framer-motion";
import styles from "./FeatureCard.module.css";

export function FeatureCard({
  title,
  description,
  icon: Icon,
  delay = 0,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      // Combines the module style with any extra layout classes (like Bento grid spans)
      className={`${styles.featureCard} ${className}`}>
      {/* Background Decorative Icon */}
      <div className={styles.bgIcon}>
        <Icon size={128} color="#f1c40f" />
      </div>

      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <Icon className={styles.iconPrimary} />
        </div>

        <h3 className={styles.title}>{title}</h3>

        <p className={styles.description}>{description}</p>
      </div>

      {/* Subtle hover flare */}
      <div className={styles.hoverGradient} />
    </motion.div>
  );
}
