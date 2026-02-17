import streamlit as st
import cv2
import numpy as np
from ultralytics import YOLO
from PIL import Image

# Load model
MODEL_PATH = r"C:\tomato_final_dataset\runs\detect\train4\weights\best.pt"
model = YOLO(MODEL_PATH)

st.set_page_config(page_title="Tomato AI Detector", layout="wide")
st.title("🍅 Tomato Ripeness Detection System")

option = st.sidebar.radio("Select Mode:", ("Upload Image", "Live Webcam"))

# ------------------------------------------
# Updated Function to return counts
# ------------------------------------------
def detect_and_draw(image):
    results = model(image)[0]
    counts = {"riped": 0, "unriped": 0}

    for box in results.boxes:
        cls_id = int(box.cls[0])
        conf = float(box.conf[0])
        x1, y1, x2, y2 = map(int, box.xyxy[0])
        label = model.names[cls_id]

        # Only process riped and unriped
        if label in counts:
            counts[label] += 1
            
            # Color logic
            color = (0, 0, 255) if label == "riped" else (0, 255, 0) # BGR
            text = f"{label} ({conf:.2f})"
            
            cv2.rectangle(image, (x1, y1), (x2, y2), color, 2)
            cv2.putText(image, text, (x1, y1 - 10), 
                        cv2.FONT_HERSHEY_SIMPLEX, 0.6, color, 2)

    return image, counts

# ------------------------------------------
# Main UI Layout
# ------------------------------------------
col_video, col_results = st.columns([3, 1]) # 3 parts video, 1 part results

with col_results:
    st.subheader("📊 Live Count")
    # Placeholders for dynamic updates
    riped_placeholder = st.empty()
    unriped_placeholder = st.empty()
    total_placeholder = st.empty()

# ------------------------------------------
# Upload Image Mode
# ------------------------------------------
if option == "Upload Image":
    uploaded_file = st.sidebar.file_uploader("Upload Image", type=["jpg", "png", "jpeg"])

    if uploaded_file:
        image = Image.open(uploaded_file)
        image_np = np.array(image)
        image_np = cv2.cvtColor(image_np, cv2.COLOR_RGB2BGR)

        result_image, counts = detect_and_draw(image_np)

        with col_video:
            st.image(cv2.cvtColor(result_image, cv2.COLOR_BGR2RGB), use_container_width=True)
        
        # Update metrics
        riped_placeholder.metric("🍎 Riped", counts["riped"])
        unriped_placeholder.metric("🍏 Unriped", counts["unriped"])
        total_placeholder.metric("Total Detected", sum(counts.values()))

# ------------------------------------------
# Webcam Mode
# ------------------------------------------
if option == "Live Webcam":
    run = st.sidebar.checkbox("Start Webcam")
    with col_video:
        FRAME_WINDOW = st.image([])

    cap = cv2.VideoCapture(0)
    while run:
        ret, frame = cap.read()
        if not ret: break

        result_frame, counts = detect_and_draw(frame)
        
        # Display frame
        FRAME_WINDOW.image(cv2.cvtColor(result_frame, cv2.COLOR_BGR2RGB))
        
        # Real-time update of metrics
        riped_placeholder.metric("🍎 Riped", counts["riped"])
        unriped_placeholder.metric("🍏 Unriped", counts["unriped"])
        total_placeholder.metric("Total Detected", sum(counts.values()))

    cap.release()