from pydantic import BaseModel
from datetime import datetime

class StudentOut(BaseModel):
    MaSV: str
    name: str
    bod: datetime
    address: str
    score: float

    class Config:
        from_attributes = True
