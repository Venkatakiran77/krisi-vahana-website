import numpy as np
import random
from app.ai.utils import read_image_from_bytes

def analyze_tomato_image(bytes_data):
    """
    Temporary dummy analysis.
    Later replaced with YOLO model.
    """

    img = read_image_from_bytes(bytes_data)

    # Generate random output for now
    count = random.randint(1, 5)
    ripe = random.randint(0, count)
    unripe = count - ripe
    damaged = random.choice([True, False])

    sizes = []
    for _ in range(count):
        sizes.append(random.choice(["small", "medium", "large"]))

    # Fake bounding boxes (x1,y1,x2,y2)
    boxes = []
    h, w, _ = img.shape
    for _ in range(count):
        x1 = random.randint(0, w // 2)
        y1 = random.randint(0, h // 2)
        x2 = random.randint(w // 2, w)
        y2 = random.randint(h // 2, h)
        boxes.append([x1, y1, x2, y2])

    return {
        "count": count,
        "ripe": ripe,
        "unripe": unripe,
        "damaged": damaged,
        "sizes": sizes,
        "boxes": boxes,
        "message": "Dummy AI output. Connect real model later."
    }
