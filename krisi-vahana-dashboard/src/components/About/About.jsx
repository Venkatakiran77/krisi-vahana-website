import React from "react";
import styles from "./About.module.css";

import ceoImg from "../../assets/ceo.jpeg";
import ctoImg from "../../assets/cto.jpeg";
import cbdoImg from "../../assets/cbdo.png";
import cooImg from "../../assets/coo.jpeg";

export default function About() {
  return (
    <div className={styles.container}>

      {/* HERO */}
      <section className={styles.hero}>
        <h1>About Krisi Vahana</h1>
        <p>
          We are building AI-powered autonomous agricultural systems designed
          to transform Indian farming through robotics and intelligent automation.
        </p>
      </section>

      {/* VISION */}
      <section className={styles.vision}>
        <h2>Our Vision</h2>
        <p>
          Our mission is to reduce labor dependency, increase harvesting efficiency,
          and introduce intelligent precision systems into Indian agriculture.
          Starting with AI-driven tomato harvesting, our architecture is built
          to scale across multiple crops and farming environments.
        </p>
      </section>

      {/* TEAM SECTION */}
      <section className={styles.teamSection}>
        <h2>Founding Team</h2>

        <div className={styles.teamGrid}>

          <div className={styles.card}>
            <img src={ceoImg} alt="CEO" />
            <h3>Gopal</h3>
            <span>CEO – Mechanical Engineer</span>
            <ul>
              <li>3+ years R&D experience</li>
              <li>Led agri machinery projects</li>
              <li>Expert in mechanical systems</li>
            </ul>
          </div>

          <div className={styles.card}>
            <img src={ctoImg} alt="CTO" />
            <h3>Venkata Kiran</h3>
            <span>CTO – Software Engineer</span>
            <ul>
              <li>Scalable backend & APIs</li>
              <li>AI/ML & data processing</li>
              <li>Robotics & IoT systems</li>
            </ul>
          </div>

          <div className={styles.card}>
            <img src={cbdoImg} alt="CBDO" />
            <h3>Radhesh</h3>
            <span>CBDO – Marketing & Strategy</span>
            <ul>
              <li>2.5 years marketing experience</li>
              <li>CRM & customer strategy</li>
              <li>Brand & communication design</li>
            </ul>
          </div>

          <div className={styles.card}>
            <img src={cooImg} alt="COO" />
            <h3>Aadarsh</h3>
            <span>COO – Electrical Engineer</span>
            <ul>
              <li>Embedded navigation systems</li>
              <li>Startup experience</li>
              <li>Robotics hardware integration</li>
            </ul>
          </div>

        </div>
      </section>

      {/* DIFFERENCE SECTION */}
      <section className={styles.difference}>
        <h2>What Makes Us Different</h2>
        <p>
          We don’t just build agricultural machines — we build AI-first robotic
          platforms. Our systems integrate mechanical engineering, embedded
          electronics, and intelligent computer vision to create scalable
          agricultural automation solutions.
        </p>
      </section>

    </div>
  );
}
