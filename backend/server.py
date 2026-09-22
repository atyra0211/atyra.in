from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from typing import Optional, List, Annotated
from datetime import datetime, timezone
from pydantic import BaseModel, Field, ConfigDict, BeforeValidator, EmailStr
from bson import ObjectId

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="Atyra API")
api_router = APIRouter(prefix="/api")

PyObjectId = Annotated[str, BeforeValidator(str)]


class BaseDocument(BaseModel):
    model_config = ConfigDict(populate_by_name=True, extra="ignore")
    id: PyObjectId = Field(
        default_factory=lambda: str(ObjectId()),
        validation_alias="_id",
        serialization_alias="id",
    )

    @classmethod
    def from_mongo(cls, doc):
        if not doc:
            return None
        return cls.model_validate(doc)

    def to_mongo(self):
        return self.model_dump(by_alias=True, exclude_none=True)


class EnquiryCreate(BaseModel):
    name: str
    email: EmailStr
    whatsapp: str
    occasion: str
    product_type: str
    color_theme: Optional[str] = ""
    budget: Optional[str] = ""
    quantity: Optional[int] = None
    delivery_date: Optional[str] = ""
    details: str
    inspiration_image: Optional[str] = None


class Enquiry(EnquiryCreate, BaseDocument):
    model_config = ConfigDict(populate_by_name=True, extra="ignore")
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


@api_router.get("/")
async def root():
    return {"message": "Atyra API is running"}


@api_router.post("/enquiries", response_model=Enquiry)
async def create_enquiry(input: EnquiryCreate):
    enquiry = Enquiry(**input.model_dump())
    await db.enquiries.insert_one(enquiry.to_mongo())
    return enquiry


@api_router.get("/enquiries", response_model=List[Enquiry])
async def list_enquiries():
    docs = await db.enquiries.find().sort("created_at", -1).to_list(200)
    return [Enquiry.from_mongo(d) for d in docs]


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
