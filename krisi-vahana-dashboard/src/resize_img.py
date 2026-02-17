import cv2
import os
from tqdm import tqdm

# ====== PATHS UPDATED FOR YOUR PROJECT ======
# Pointing to your local assets folder
SOURCE = r"C:\Tomato_detector\krisi-vahana-dashboard\src\assets"    
# Saving them back to the same folder or a new 'resized' folder
DEST = r"C:\Tomato_detector\krisi-vahana-dashboard\src\assets\resized" 

# Updated size to 896 as requested
TARGET_SIZE = 896

# Create output folder
os.makedirs(DEST, exist_ok=True)

# Get all images in the source folder
files = [f for f in os.listdir(SOURCE)
         if f.lower().endswith((".jpg", ".jpeg", ".png", ".bmp", ".heic"))]

print(f"Found {len(files)} images in {SOURCE}.")

# Process and resize
for file in tqdm(files, desc="Resizing to 896px"):
    in_path = os.path.join(SOURCE, file)
    img = cv2.imread(in_path)

    if img is None:
        print(f"Skipping: {file} (could not read)")
        continue

    # Resize to square (896 x 896)
    img = cv2.resize(img, (TARGET_SIZE, TARGET_SIZE))

    # Save as JPG with good quality
    # Note: Using .jpg extension for the output to ensure consistency
    file_name_only = os.path.splitext(file)[0]
    out_path = os.path.join(DEST, f"{file_name_only}.jpg")
    
    cv2.imwrite(out_path, img, [cv2.IMWRITE_JPEG_QUALITY, 90])

print("\n✔ Done! All images resized to 896x896.")
print("Saved to:", os.path.abspath(DEST))