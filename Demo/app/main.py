from fastapi import FastAPI, Request, Depends
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from sqlalchemy.orm import Session
from . import database, models, schemas

app = FastAPI()

app.mount("/static", StaticFiles(directory="app/static"), name="static")
templates = Jinja2Templates(directory="app/templates")

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.get("/api/students", response_model=list[schemas.StudentOut])
def get_students(q: str = "", db: Session = Depends(get_db)):
    return db.query(models.Student).filter(
        models.Student.MaSV.contains(q) | models.Student.name.contains(q)
    ).all()
