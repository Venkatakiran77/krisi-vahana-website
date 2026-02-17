import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import styles from "./CameraBox.module.css";
import { Button } from "@mui/material";

export default function CameraBox({ onCapture }) {
  const webcamRef = useRef(null);
  const [img, setImg] = useState(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
    onCapture(imageSrc);
  };

  return (
    <div className={styles.box}>
      {!img ? (
        <Webcam ref={webcamRef} screenshotFormat="image/png" className={styles.cam}/>
      ) : (
        <img src={img} alt="capture" className={styles.preview}/>
      )}

      <Button variant="contained" onClick={capture} style={{ marginTop: "10px" }}>
        Capture
      </Button>
    </div>
  );
}
