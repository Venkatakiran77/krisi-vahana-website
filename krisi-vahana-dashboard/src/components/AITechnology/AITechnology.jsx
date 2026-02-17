import React, { useState, useRef } from "react";
import styles from "./AITechnology.module.css";
import axios from "axios";
import ripedImg from "../../assets/ripe1.jpg";
import unripedImg from "../../assets/unripe1.jpg";
import damagedImg from "../../assets/damage1.jpg";

export default function AITechnology() {
  const fileInputRef = useRef(null);

  const [originalImage, setOriginalImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [counts, setCounts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setOriginalImage(URL.createObjectURL(file));
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/predict",
        formData,
      );

      setResultImage(`data:image/jpeg;base64,${response.data.image}`);
      setCounts(response.data.counts);
    } catch (err) {
      setError("AI backend not connected.");
    }

    setLoading(false);
  };

  const handleCancel = () => {
    setOriginalImage(null);
    setResultImage(null);
    setCounts(null);
    setError(null);
    setLoading(false);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

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
      <section className={styles.demoSection}>
        <div className={styles.demoHeader}>
          <h2>🔬 Live Tomato AI Model</h2>
          <p>Upload an image and test our production AI model instantly.</p>
        </div>

        <div className={styles.uploadBox}>
          <div className={styles.uploadWrapper}>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleUpload}
              className={styles.hiddenInput}
            />

            <button
              className={styles.uploadBtn}
              onClick={() => fileInputRef.current.click()}>
              Upload Image
            </button>

            {fileInputRef.current?.files?.[0] && (
              <span className={styles.fileName}>
                {fileInputRef.current.files[0].name}
              </span>
            )}

            {originalImage && (
              <button className={styles.cancelBtn} onClick={handleCancel}>
                Reset
              </button>
            )}
          </div>
        </div>

        {loading && <p className={styles.loading}>Running AI inference...</p>}
        {error && <p className={styles.error}>{error}</p>}

        {(originalImage || resultImage) && (
          <div className={styles.resultWrapper}>
            {originalImage && (
              <div className={styles.imageCard}>
                <h4>Original</h4>
                <img src={originalImage} alt="original" />
              </div>
            )}

            {resultImage && (
              <div className={styles.imageCard}>
                <h4>Detection</h4>
                <img src={resultImage} alt="result" />
              </div>
            )}

            {counts && (
              <div className={styles.statsCard}>
                <h4>Detection Summary</h4>
                <div>🍎 Riped: {counts.riped}</div>
                <div>🍏 Unriped: {counts.unriped}</div>
                <div>Total: {counts.riped + counts.unriped}</div>
              </div>
            )}
          </div>
        )}
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
