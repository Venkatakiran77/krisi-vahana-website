import styles from "./AITechnology.module.css";
import ripedImg from "../../assets/ripe1.jpg";
import unripedImg from "../../assets/unripe1.jpg";
import damagedImg from "../../assets/damage1.jpg";

export default function AITechnology() {
  return (
    <div className={styles.container}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1>
          AI-Powered <span>Autonomous Harvesting</span>
        </h1>
        <p>
          Real-time crop detection, precision robotics, and intelligent
          agricultural automation.
        </p>
      </section>

      {/* LIVE AI DEMO - FEATURED */}
      {/* PRODUCT DEMO VIDEO SECTION */}
      <section className={styles.videoSection}>
        <div className={styles.videoWrapper}>
          <iframe
            className={styles.demoVideo}
            src="https://www.youtube.com/embed/jc7agQ74Dr8"
            title="Autonomous Harvesting Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
      </section>

      {/* MODEL TRAINING SECTION */}
      <section className={styles.datasetSection}>
        <div className={styles.datasetHeader}>
          <h2>📊 Model Training & Vision Dataset</h2>
          <p>
            Our tomato detection system is trained on real-field images
            collected from Indian farms under varying lighting, density, and
            environmental conditions.
          </p>
        </div>

        <div className={styles.datasetGrid}>
          <div className={styles.datasetCard}>
            <h4>Dataset Scale</h4>
            <p>
              1200+ annotated images with riped and unriped classifications,
              captured across multiple farm environments.
            </p>
          </div>

          <div className={styles.datasetCard}>
            <h4>Annotation Strategy</h4>
            <p>
              Bounding-box annotations optimized for selective harvesting and
              precision manipulation planning.
            </p>
          </div>

          <div className={styles.datasetCard}>
            <h4>Model Architecture</h4>
            <p>
              YOLO-based object detection optimized for edge deployment,
              balancing inference speed and accuracy.
            </p>
          </div>

          <div className={styles.datasetCard}>
            <h4>Field Optimization</h4>
            <p>
              Trained under variable light, occlusion, and crop density to
              ensure reliable real-world performance.
            </p>
          </div>
        </div>
        <section className={styles.sampleImagesSection}>
          <h3>Sample Training Images</h3>

          <div className={styles.sampleGrid}>
            <div className={styles.sampleItem}>
              <img src={ripedImg} alt="Ripe Tomato" />
              <span>Ripe</span>
            </div>

            <div className={styles.sampleItem}>
              <img src={unripedImg} alt="Unripe Tomato" />
              <span>Unripe</span>
            </div>

            <div className={styles.sampleItem}>
              <img src={damagedImg} alt="Damaged Tomato" />
              <span>Damaged</span>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
