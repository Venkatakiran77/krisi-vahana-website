from fastapi import APIRouter, UploadFile, File, HTTPException
from app.ai.detector import analyze_tomato_image
from app.models.response_models import DetectionResponse

router = APIRouter()

@router.post("/detect", response_model=DetectionResponse)
async def detect_tomato(image: UploadFile = File(...)):
    try:
        contents = await image.read()
        output = analyze_tomato_image(contents)
        return output
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
