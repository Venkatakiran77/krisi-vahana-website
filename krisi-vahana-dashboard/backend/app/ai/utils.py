from PIL import Image
import io
import numpy as np

def read_image_from_bytes(bytes_data):
    img = Image.open(io.BytesIO(bytes_data)).convert("RGB")
    img = np.array(img)
    return img
