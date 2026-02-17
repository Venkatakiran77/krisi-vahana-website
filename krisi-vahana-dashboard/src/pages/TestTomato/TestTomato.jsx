import React, { useState } from "react";
import styles from "./TestTomato.module.css";
import UploadBox from "../../components/UploadBox/UploadBox";
import CameraBox from "../../components/CameraBox/CameraBox";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function TestTomato() {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const testTomato = () => {
    navigate("/results", { state: { image } });
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <UploadBox onImageSelect={(f) => setImage(URL.createObjectURL(f))} />
        <CameraBox onCapture={(base64) => setImage(base64)} />
      </div>

      <div className={styles.right}>
        {image && <img src={image} alt="preview" className={styles.preview}/>}

        {image && (
          <Button 
            variant="contained"
            color="primary"
            onClick={testTomato}
            style={{ marginTop: "20px" }}
          >
            Run AI Test
          </Button>
        )}
      </div>
    </div>
  );
}
