# Atyra — Handmade & Customised Gifts Made With Love

Official brand website and product showcase for **Atyra**, a handmade arts & crafts boutique — customised gift hampers, crochet creations, yarn hair accessories, handmade pockets & pouches, pipe-cleaner bouquets and fully bespoke pieces.

> Handmade. Customised. Made with Love.

## Features

- Single-page boutique experience: hero, creations, featured products, about, custom orders, occasions, gallery, Instagram, contact
- Custom-order enquiry form — every enquiry is saved to MongoDB and answered with a reference code plus a one-tap "Continue on WhatsApp" handoff
- Product "Enquire / Customise" buttons and occasion chips pre-fill the enquiry form
- Filterable masonry gallery, editorial marquee, kinetic hero reveal, smooth momentum scrolling (lenis) and subtle framer-motion micro-interactions
- Fully responsive (mobile-first), SEO + Open Graph metadata, accessible semantic markup
- All business details (WhatsApp number, Instagram, email, products, categories, gallery) live in **one** config file

## Tech Stack

| Layer    | Tech                                                          |
| -------- | ------------------------------------------------------------- |
| Frontend | React (CRA + craco), Tailwind CSS, framer-motion, lenis, lucide-react, sonner |
| Backend  | FastAPI, MongoDB (motor)                                      |

## Project Structure

```
├── frontend/
│   ├── src/config/site.js      ← ALL brand data & contact details (edit here)
│   ├── src/components/         ← Navbar, Hero, Marquee, Categories, Featured,
│   │                              About, WhyAtyra, CustomOrders, Occasions,
│   │                              Gallery, InstagramSection, Contact, Footer…
│   └── src/lib/lenis.js        ← smooth-scroll engine
├── backend/
│   └── server.py               ← FastAPI app: POST/GET /api/enquiries
└── .env.example files          ← required environment variables
```

## Getting Started

### 1. Backend

```bash
cd backend
pip install -r requirements.txt
cp .env.example .env          # set MONGO_URL + DB_NAME
uvicorn server:app --reload --port 8001
```

### 2. Frontend

```bash
cd frontend
yarn install
cp .env.example .env          # set REACT_APP_BACKEND_URL
yarn start
```

### 3. Customise your brand details

Open `frontend/src/config/site.js` and update once:

- `whatsappNumber` — used by every WhatsApp button on the site
- `instagram` — handle + URL
- `email`, `location`
- categories, products, gallery images and dropdown options

## API

| Method | Route             | Description                                  |
| ------ | ----------------- | -------------------------------------------- |
| GET    | `/api/`           | Health check                                 |
| POST   | `/api/enquiries`  | Save a custom-order enquiry (validated JSON) |
| GET    | `/api/enquiries`  | List the latest 200 enquiries                |

## Notes

- Product imagery uses placeholder/AI photography — swap in real Atyra photos via `src/config/site.js`.
- Enquiries store an optional inspiration image as a base64 data URL (≤ 3 MB).
- Submitting the form is an **enquiry only**, never an automatic purchase.

© 2026 Atyra. All rights reserved.
