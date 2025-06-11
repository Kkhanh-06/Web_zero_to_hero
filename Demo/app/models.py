from sqlalchemy import Column, String, Float, DateTime
from .database import Base

class Student(Base):
    __tablename__ = "student"
    MaSV = Column(String(255), primary_key=True, index=True)
    name = Column(String(255))
    bod = Column(DateTime)
    address = Column(String(255))
    score = Column(Float)
