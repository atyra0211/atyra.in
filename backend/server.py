from fastapi import FastAPI, APIRouter
from starlette.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime, timezone
import os
import requests
import logging
import base64


app = FastAPI(title="Atyra API")

api_router = APIRouter(prefix="/api")


# ---------------------------------------------------------
# Configuration
# ---------------------------------------------------------

GOOGLE_APPS_SCRIPT_URL = os.environ.get("GOOGLE_APPS_SCRIPT_URL", "")
ATYRA_ENQUIRY_TOKEN = os.environ.get("ATYRA_ENQUIRY_TOKEN", "")


# ---------------------------------------------------------
# Enquiry model
# ---------------------------------------------------------

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


# ---------------------------------------------------------
# Health check
# ---------------------------------------------------------

@api_router.get("/")
async def root():
    return {"message": "Atyra API is running"}


# ---------------------------------------------------------
# Submit enquiry
# ---------------------------------------------------------

@api_router.post("/enquiries")
async def create_enquiry(input: EnquiryCreate):

    if not GOOGLE_APPS_SCRIPT_URL:
        return {
            "success": False,
            "message": "Google Apps Script URL is not configured."
        }

    if not ATYRA_ENQUIRY_TOKEN:
        return {
            "success": False,
            "message": "Enquiry security token is not configured."
        }

    image_data = None

    # Handle uploaded inspiration image.
    # The frontend may send the image as a data URL.
    if input.inspiration_image:
        image_value = input.inspiration_image

        if image_value.startswith("data:"):
            try:
                header, encoded_data = image_value.split(",", 1)

                mime_type = header.split(";")[0].replace(
                    "data:", ""
                )

                image_data = {
                    "base64": encoded_data,
                    "mimeType": mime_type,
                    "fileName": "atyra-inspiration-image"
                }
            except Exception:
                logging.exception("Could not process inspiration image.")

    payload = {
        "token": ATYRA_ENQUIRY_TOKEN,

        "name": input.name,
        "email": input.email,
        "whatsappNumber": input.whatsapp,
        "occasion": input.occasion,
        "productType": input.product_type,
        "preferredColourTheme": input.color_theme,
        "approximateBudget": input.budget,
        "quantity": input.quantity,
        "preferredDeliveryDate": input.delivery_date,
        "customisationDetails": input.details,

        "inspirationImage": image_data
    }

    try:
        response = requests.post(
            GOOGLE_APPS_SCRIPT_URL,
            json=payload,
            timeout=30
        )

        response.raise_for_status()

        result = response.json()

        if not result.get("success"):
            logging.error(
                "Google Apps Script rejected enquiry: %s",
                result
            )

            return {
                "success": False,
                "message": "Could not save enquiry."
            }

        return {
            "success": True,
            "message": "Enquiry saved successfully.",
            "created_at": datetime.now(timezone.utc).isoformat()
        }

    except Exception as error:
        logging.exception("Failed to send enquiry to Google Apps Script.")

        return {
            "success": False,
            "message": "Could not save enquiry."
        }


app.include_router(api_router)


# ---------------------------------------------------------
# CORS
# ---------------------------------------------------------

cors_origins = os.environ.get(
    "CORS_ORIGINS",
    "https://atyra.in,https://www.atyra.in"
).split(",")

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=cors_origins,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ---------------------------------------------------------
# Logging
# ---------------------------------------------------------

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)

logger = logging.getLogger(__name__)
