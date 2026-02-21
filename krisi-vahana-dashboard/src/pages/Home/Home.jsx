import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Scan,
  Tractor,
  Database,
  ArrowRight,
  CheckCircle2,
  Sprout,
} from "lucide-react";

// Import your custom components
import { TiltCard } from "../../components/TitleCard/TiltCard";
import { FeatureCard } from "../../components/FeatureCard/FeatureCard";

// Import CSS Module
import styles from "./Home.module.css";

export default function Home() {
  const [demoOpen, setDemoOpen] = useState(false);
  const navigate = useNavigate(); // 2. Initialize the navigate function

  // 3. Create a navigation handler
  const handleViewTechnology = () => {
    navigate("/aiTechnology"); // Ensure this matches your route path in App.js
  };

  return (
    <div className={styles.container}>
      <main>
        {/* HERO SECTION */}
        <section className={styles.hero}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}>
            {/* <div className={styles.badge}>
              <span className="dot" /> Series A Funding Secured
            </div> */}

            <h1 className={styles.title}>
              The Future of <br />
              <span className={styles.goldText}>Precision Farming</span>
            </h1>

            <p className={styles.description}>
              Autonomous robotics powered by advanced computer vision. Reducing
              labor costs while increasing yield quality by up to 40%.
            </p>

            <div className={styles.btnGroup}>
              <button
                className={styles.primaryBtn}
                onClick={handleViewTechnology}>
                View Technology{" "}
                {/* <ArrowRight size={20} style={{ marginLeft: "8px" }} /> */}
              </button>
              {/* <button className={styles.secondaryBtn}>View Technology</button> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={styles.visualWrapper}>
            <TiltCard />
          </motion.div>
        </section>

        {/* SLOGAN SECTION */}
        <section className={styles.sloganSection}>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className={styles.sloganTitle}>
            One Operator.
            <br />
            <span className={styles.sloganHighlight}>One Robot.</span>
            <br />
            One Acre per Hour.
          </motion.h2>
        </section>

        {/* BENTO GRID */}
        <section className={styles.bentoGrid}>
          <FeatureCard
            title="AI Vision"
            description="Detect ripeness with 99% accuracy."
            icon={Scan}
            className={styles.cardLarge}
          />
          <FeatureCard
            title="Field Durability"
            description="IP67 rated chassis for all weather."
            icon={Tractor}
            className={`${styles.cardSmall} ${styles.specialCard}`}
          />
          <FeatureCard
            title="Data Analytics"
            description="Real-time yield mapping."
            icon={Database}
            className={styles.cardSmall}
          />
          <FeatureCard
            title="Precision Picking"
            description="Soft-touch robotic grippers."
            icon={Sprout}
            className={styles.cardLarge}
          />
        </section>
      </main>
    </div>
  );
}
