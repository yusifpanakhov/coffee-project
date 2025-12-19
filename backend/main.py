from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import Session, select

from database import engine, create_db
from models import Product
from schemas import ProductCreate

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def start():
    create_db()

@app.get("/products")
def get_products():
    with Session(engine) as session:
        return session.exec(select(Product)).all()

@app.post("/products")
def create_product(product: ProductCreate):
    with Session(engine) as session:
        new_product = Product(**product.dict())
        session.add(new_product)
        session.commit()
        session.refresh(new_product)
        return new_product
