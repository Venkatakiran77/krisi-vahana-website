from pydantic import BaseModel
from typing import List

class DetectionResponse(BaseModel):
    count: int
    ripe: int
    unripe: int
    damaged: bool
    sizes: List[str]
    boxes: List[list]
    message: str
