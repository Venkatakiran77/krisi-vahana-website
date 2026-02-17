import React from "react";
import styles from "./UploadBox.module.css";
import { Button } from "@mui/material";

export default function UploadBox({ onImageSelect }) {
  return (
    <div className={styles.box}>
      <h3>Upload Tomato Image</h3>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => onImageSelect(e.target.files[0])}
      />

      <Button variant="contained" color="secondary" style={{ marginTop: "10px" }}>
        Upload
      </Button>
    </div>
  );
}
