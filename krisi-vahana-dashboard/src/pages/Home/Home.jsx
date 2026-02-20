import React, { useState } from "react";
import styles from "./Home.module.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import bg1 from "../../assets/new_image.jpg";
import bg2 from "../../assets/robotics_arm.jpg";
import bg3 from "../../assets/oneAcre.png";

const slides = [
  {
    title: "Engineering Robotics",
    highlight: "For Real Farms",
    description:
      "Krisi Vahana Pvt Ltd builds agricultural robots designed for Indian field conditions — small, dense, irregular, and labour-constrained.",
    more: "Most agricultural machines fail because they are designed for controlled environments. We build by observing real farms first — soil variability, crop density, heat, dust, uneven terrain, and labour limitations. Our engineering begins where reality begins.",
    buttonText: "Explore Our Work",
    link: "/aiTechnology",
    image: bg1,
    gradient: "linear-gradient(135deg, #0f1f16 0%, #153124 50%, #b38b45 100%)",
  },
  {
    title: "Autonomous Selective",
    highlight: "Crop Harvesting",
    description:
      "We focus on intelligent, selective harvesting beginning with tomatoes.",
    more: "Selective harvesting requires perception precision and manipulation delicacy. Our systems combine computer vision, motion planning, and soft gripping mechanisms to ensure ripe produce is harvested without damaging surrounding plants.",
    buttonText: "See AI Technology",
    link: "/aiTechnology",
    image: bg2,
    gradient: "linear-gradient(135deg, #12261c 0%, #153124 60%, #2ecc71 100%)",
  },
  {
    title: "One Operator.",
    highlight: "One Robot. One Acre.",
    description:
      "Our vision is precise and demanding — one trained operator, one robot, one acre per day.",
    more: "Robotics should amplify human productivity, not eliminate it. Our long-term mission is operational efficiency — reducing physical strain, improving consistency, and enabling scalable agricultural output across Indian farms.",
    buttonText: "View Products",
    link: "/product",
    image: bg3,
    gradient: "linear-gradient(135deg, #0f1f16 0%, #214432 50%, #d4ac0d 100%)",
  },
];

export default function Home() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={styles.scrollContainer}>
      {slides.map((slide, index) => (
        <section
          key={index}
          className={styles.homeContainer}
          style={{ background: slide.gradient }}>
          <div className={styles.contentSection}>
            <div className={styles.textWrapper}>
              <h1 className={styles.heading}>
                {slide.title} <br />
                <span className={styles.highlightText}>{slide.highlight}</span>
              </h1>

              <p className={styles.subtext}>{slide.description}</p>
              {expandedIndex === index && (
                <p className={styles.moreText}>{slide.more}</p>
              )}

              <div className={styles.buttonGroup}>
                <Link to={slide.link} style={{ textDecoration: "none" }}>
                  <Button variant="contained" className={styles.mainBtn}>
                    {slide.buttonText}
                  </Button>
                </Link>
                <Button
                  variant="outlined"
                  className={styles.outlineBtn}
                  onClick={() => toggleExpand(index)}>
                  {expandedIndex === index ? "Show Less" : "Learn More"}
                </Button>
              </div>
            </div>
          </div>

          <div className={styles.imageSection}>
            <div className={styles.imageCard}>
              <img
                src={slide.image}
                alt={slide.title}
                className={styles.farmImg}
              />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
