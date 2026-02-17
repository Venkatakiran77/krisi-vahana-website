from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from ultralytics import YOLO
import numpy as np
import cv2
from PIL import Image
import io
import base64

app = FastAPI()

# Allow React to access API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MODEL_PATH = r"C:\tomato_detector\krisi-vahana-dashboard\backend\runs\detect\train4\weights\best.pt"
model = YOLO(MODEL_PATH)

def detect_and_draw(image):
    results = model(image)[0]
    counts = {"riped": 0, "unriped": 0}

    for box in results.boxes:
        cls_id = int(box.cls[0])
        conf = float(box.conf[0])
        x1, y1, x2, y2 = map(int, box.xyxy[0])
        label = model.names[cls_id]

        if label in counts:
            counts[label] += 1
            color = (0, 0, 255) if label == "riped" else (0, 255, 0)
            text = f"{label} ({conf:.2f})"

            cv2.rectangle(image, (x1, y1), (x2, y2), color, 2)
            cv2.putText(image, text, (x1, y1 - 10),
                        cv2.FONT_HERSHEY_SIMPLEX, 0.6, color, 2)

    return image, counts


@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    contents = await file.read()
    image = Image.open(io.BytesIO(contents))
    image_np = np.array(image)
    image_np = cv2.cvtColor(image_np, cv2.COLOR_RGB2BGR)

    result_image, counts = detect_and_draw(image_np)

    _, buffer = cv2.imencode(".jpg", result_image)
    img_base64 = base64.b64encode(buffer).decode("utf-8")

    return {
        "image": img_base64,
        "counts": counts
    }
