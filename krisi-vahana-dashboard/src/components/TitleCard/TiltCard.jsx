import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import styles from "./TiltCard.module.css";
import robotImage from "../../assets/robotics_arm.jpg";

export function TiltCard() {
  const ref = useRef(null);

  // Motion Values for mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the movement
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Map mouse position to rotation degrees
  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"],
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"],
  );

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={styles.cardContainer}>
      <div
        style={{ transform: "translateZ(30px)" }} /* Reduced from 75px */
        className={styles.innerContent}>
        <img
          src={robotImage}
          alt="Autonomous agricultural robot"
          className={styles.robotImage}
        />
        <div className={styles.overlay} />

        <div className={styles.statsWrapper}>
          <div className={styles.statusIndicator}>
            {/* <div className={styles.statusDot} /> */}
            {/* <span className={styles.statusText}>System Online</span> */}
          </div>

          <div className={styles.dataBox}>
            <div>
              <p className={styles.label}>Efficiency Rate</p>
              <p className={styles.value}>98.4%</p>
            </div>
            <div className={styles.chart}>
              {[40, 65, 50, 85, 60, 95].map((h, i) => (
                <div
                  key={i}
                  className={styles.bar}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
