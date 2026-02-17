import React from "react";
import styles from "./Products.module.css";

import potatoImg from "../../assets/potato.jpg";
import groundnutImg from "../../assets/groundnut.png";
import turmericImg from "../../assets/turmeric.png";
import tomatoRobotImg from "../../assets/tomato_robot.png";

const products = [
  {
    title: "Autonomous Potato Harvester",
    image: potatoImg,
    description:
      "Designed for efficient large-scale potato harvesting, this machine minimizes soil damage while ensuring maximum crop recovery.",
    features: [
      "Precision digging mechanism",
      "Low crop damage rate",
      "Soil separation conveyor system",
      "GPS-based field navigation",
      "High efficiency for Indian farm conditions"
    ]
  },
  {
    title: "Groundnut Harvester",
    image: groundnutImg,
    description:
      "Engineered for groundnut extraction with minimal root breakage and optimized separation for dryland and irrigated farms.",
    features: [
      "Root-safe lifting system",
      "Integrated shaking and cleaning unit",
      "Optimized for Indian soil types",
      "Reduced labor dependency",
      "High throughput output"
    ]
  },
  {
    title: "Turmeric Harvester",
    image: turmericImg,
    description:
      "Specialized digging and separation system built for turmeric rhizomes, ensuring maximum recovery and minimal damage.",
    features: [
      "Deep soil penetration blades",
      "Gentle rhizome handling",
      "Automated soil filtration",
      "Compact tractor-compatible design",
      "Low maintenance system"
    ]
  },
  {
    title: "AI-Powered Tomato Robotic Harvester",
    image: tomatoRobotImg,
    description:
      "An advanced robotic harvesting system powered by computer vision. Detects ripeness, size, and damage in real-time before precise picking.",
    features: [
      "Computer vision-based ripeness detection",
      "Soft-grip robotic arm",
      "Damage classification system",
      "Autonomous row navigation",
      "Real-time yield analytics"
    ]
  }
];

export default function Products() {
  return (
    <div className={styles.productsContainer}>
      <div className={styles.header}>
        <h1>Our Harvesting Machines</h1>
        <p>
          Intelligent agricultural machinery designed specifically for Indian farming conditions,
          reducing labor dependency and increasing productivity.
        </p>
      </div>

      <div className={styles.productGrid}>
        {products.map((product, index) => (
          <div key={index} className={styles.productCard}>
            <div className={styles.imageWrapper}>
              <img src={product.image} alt={product.title} />
            </div>

            <div className={styles.productContent}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>

              <ul>
                {product.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>

              <button className={styles.learnBtn}>
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
{/* PRODUCT ROADMAP SECTION */}
<section className={styles.roadmapSection}>

  <div className={styles.roadmapHeader}>
    <h2>Future Product Roadmap</h2>
    <p>
      Our current focus is field-ready harvesting systems.
      The following intelligent modules are under active research
      and development.
    </p>
  </div>

  <div className={styles.techSection}>
    <div className={styles.techCard}>
      <span className={styles.badge}>Coming Soon</span>
      <h3>Autonomous Tomato Harvester</h3>
      <p>
        AI-powered vision detects ripeness in real-time and performs
        precision harvesting with minimal crop damage.
      </p>
    </div>

    <div className={styles.techCard}>
      <span className={styles.badge}>In Development</span>
      <h3>Multi-Crop Platform</h3>
      <p>
        Modular architecture enabling adaptation to different crops
        through model retraining and configurable hardware.
      </p>
    </div>

    <div className={styles.techCard}>
      <span className={styles.badge}>Research Phase</span>
      <h3>Precision Weeding System</h3>
      <p>
        AI-based weed detection and targeted removal system
        to reduce chemical dependency and labor intensity.
      </p>
    </div>

    <div className={styles.techCard}>
      <span className={styles.badge}>Research Phase</span>
      <h3>Crop Health Intelligence</h3>
      <p>
        Computer vision-driven crop monitoring system
        for disease detection and yield forecasting.
      </p>
    </div>
  </div>

</section>

    </div>
  );
}
