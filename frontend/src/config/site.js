/* ─────────────────────────────────────────────────────────────
   ATYRA — central brand configuration
   Change your business details ONCE here and the whole site updates.
   ───────────────────────────────────────────────────────────── */

export const SITE = {
  name: "Atyra",
  tagline: "Handmade. Customised. Made with Love.",
  heroSub: "Thoughtfully handcrafted gifts, accessories and creations made especially for you.",

  // ⬇⬇ EDIT THESE — used everywhere on the site ⬇⬇
  whatsappNumber: "+91 99309 01131",
  email: "info@atyra.in",
  location: "Handmade with love · India",
  website: "www.atyra.in",
  websiteUrl: "https://www.atyra.in",
  instagram: {
    handle: "@atyra.in",
    url: "https://www.instagram.com/atyra.in/",
  },
  facebook: {
    handle: "atyra.in",
    url: "https://www.facebook.com/atyra.in/",
  },
};

export const waLink = (
  message = "Hi Atyra! I'd love to enquire about a custom handmade gift."
) => `https://wa.me/${SITE.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

export const NAV_LINKS = [
  { label: "Home", hash: "#home" },
  { label: "About", hash: "#about" },
  { label: "Creations", hash: "#creations" },
  { label: "Gallery", hash: "#gallery" },
  { label: "Custom Orders", hash: "#custom-orders" },
  { label: "Contact", hash: "#contact" },
];

export const IMAGES = {
  hero: "https://images.pexels.com/photos/17864123/pexels-photo-17864123.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  heroPolaroid:
    "https://images.unsplash.com/photo-1700170447159-9d2d0da133a5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzJ8MHwxfHNlYXJjaHw0fHx3b29sJTIweWFybiUyMGZsb3dlcnMlMjBrbml0dGVkJTIwaGFuZGljcmFmdHxlbnwwfHx8fDE3OTAwNzEwMTJ8MA&ixlib=rb-4.1.0&q=85",
  aboutMain:
    "https://images.unsplash.com/photo-1771523350538-29baf74f710c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NjAzNDR8MHwxfHNlYXJjaHwyfHxjcmFmdGluZyUyMGFydGlzYW4lMjBoYW5kcyUyMGNlcmFtaWMlMjB5YXJuJTIwZ2lmdCUyMGJveHxlbnwwfHx8fDE3OTAwNjgxNjF8MA&ixlib=rb-4.1.0&q=85",
  aboutSecond:
    "https://images.pexels.com/photos/7679739/pexels-photo-7679739.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
};

export const MARQUEE_ITEMS = [
  "Customised Gift Hampers",
  "Crochet Creations",
  "Yarn Hair Accessories",
  "Pockets & Pouches",
  "Pipe-Cleaner Bouquets",
  "Personalised Gifts",
  "Made for Every Occasion",
  "Made With Love",
];

export const CATEGORIES = [
  {
    id: "hampers",
    title: "Customised Gifts & Hampers",
    description: "Curated hampers filled with handcrafted treasures, wrapped and personalised for your people.",
    image:
      "https://images.unsplash.com/photo-1664849173063-8d8244ac3933?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHozfHxjdXN0b20lMjBnaWZ0JTIwaGFtcGVyJTIwYm91cXVldCUyMGhhbmRtYWRlJTIwYWNjZXNzb3JpZXN8ZW58MHx8fHwxNzkwMDY4MTU0fDA&ixlib=rb-4.1.0&q=85",
    galleryFilter: "Hampers",
  },
  {
    id: "crochet",
    title: "Crochet Creations",
    description: "Soft, intricate and made stitch by stitch — keepsakes that last.",
    image:
      "https://images.pexels.com/photos/37540169/pexels-photo-37540169.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    galleryFilter: "Crochet",
  },
  {
    id: "accessories",
    title: "Hair Accessories",
    description: "Woolen and yarn hair bands and bows — gentle on hair, pretty on everyone.",
    image:
      "https://static.prod-images.emergentagent.com/jobs/9f1dbf0d-bef2-4152-990b-d32613ef57f4/images/9547365e5855f774e9e806c48616c96ba3bf6e4111bae16151a25579e2a4570d.jpeg",
    galleryFilter: "Accessories",
  },
  {
    id: "pouches",
    title: "Handmade Pockets & Pouches",
    description: "Little handmade pockets and coin pouches to keep tiny treasures safe.",
    image:
      "https://images.unsplash.com/photo-1726197847318-e4bd469af258?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHxoYW5kbWFkZSUyMGNyYWZ0cyUyMGNyb2NoZXQlMjBwb3R0ZXJ5JTIwcGFzdGVsJTIwYWVzdGhldGljfGVufDB8fHx8MTc5MDA2ODE1NHww&ixlib=rb-4.1.0&q=85",
    galleryFilter: "Custom Gifts",
  },
  {
    id: "bouquets",
    title: "Pipe Cleaner Bouquets",
    description: "Forever-fresh flower bouquets, hand-twisted from soft pastel pipe cleaners.",
    image:
      "https://static.prod-images.emergentagent.com/jobs/9f1dbf0d-bef2-4152-990b-d32613ef57f4/images/095b9abf6c9ddba4d1b277fcc4cd5a94fb11c087b7c729ae73819be8c9013902.jpeg",
    galleryFilter: "Bouquets",
  },
  {
    id: "custom",
    title: "Custom Creations",
    description: "Have an idea or an occasion? We'll craft it from scratch, together with you.",
    image:
      "https://images.unsplash.com/photo-1701372764803-6ca0f1c6f346?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxoYW5kbWFkZSUyMGNyYWZ0cyUyMGNyb2NoZXQlMjBwb3R0ZXJ5JTIwcGFzdGVsJTIwYWVzdGhldGljfGVufDB8fHx8MTc5MDA2ODE1NHww&ixlib=rb-4.1.0&q=85",
    galleryFilter: "Custom Gifts",
  },
];

export const PRODUCTS = [
  {
    id: "prod-1",
    name: "Birthday Bliss Hamper",
    category: "Hampers",
    description: "A joyful hamper packed with handmade treats, ribbons and little surprises for the big day.",
    priceTag: "Price on Request",
    cta: "Enquire Now",
    productType: "Gift Hamper",
    image:
      "https://images.unsplash.com/photo-1664849173063-8d8244ac3933?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHozfHxjdXN0b20lMjBnaWZ0JTIwaGFtcGVyJTIwYm91cXVldCUyMGhhbmRtYWRlJTIwYWNjZXNzb3JpZXN8ZW58MHx8fHwxNzkwMDY4MTU0fDA&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "prod-2",
    name: "Pastel Crochet Pouch",
    category: "Crochet",
    description: "A squishy pastel crochet pouch, perfect for coins, rings and tiny secrets.",
    priceTag: "Price on Request",
    cta: "Customise",
    productType: "Crochet",
    image:
      "https://images.unsplash.com/photo-1728393287642-13bee7126ae8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwzfHxjcm9jaGV0JTIweWFybiUyMHBhc3RlbCUyMGhhbmRtYWRlJTIwY3JhZnR8ZW58MHx8fHwxNzkwMDcxMDEyfDA&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "prod-3",
    name: "Handmade Yarn Hair Band",
    category: "Accessories",
    description: "Chunky-knit woolen hair band with a delicate flower detail — soft, stretchy, sweet.",
    priceTag: "Custom Quote",
    cta: "Customise",
    productType: "Hair Accessory",
    image:
      "https://static.prod-images.emergentagent.com/jobs/9f1dbf0d-bef2-4152-990b-d32613ef57f4/images/9547365e5855f774e9e806c48616c96ba3bf6e4111bae16151a25579e2a4570d.jpeg",
  },
  {
    id: "prod-4",
    name: "Mini Flower Bouquet",
    category: "Bouquets",
    description: "A pocket-sized posy of handmade blooms that never needs watering.",
    priceTag: "Price on Request",
    cta: "Customise",
    productType: "Custom Gift",
    image:
      "https://images.unsplash.com/photo-1615670289616-0ab01183ee64?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHxfHxjdXN0b20lMjBnaWZ0JTIwaGFtcGVyJTIwYm91cXVldCUyMGhhbmRtYWRlJTIwYWNjZXNzb3JpZXN8ZW58MHx8fHwxNzkwMDY4MTU0fDA&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "prod-5",
    name: "Custom Celebration Hamper",
    category: "Hampers",
    description: "Designed around your occasion, colours and story — no two hampers alike.",
    priceTag: "Custom Quote",
    cta: "Enquire Now",
    productType: "Gift Hamper",
    image:
      "https://images.pexels.com/photos/30727980/pexels-photo-30727980.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "prod-6",
    name: "Crochet Coin Pocket",
    category: "Crochet",
    description: "A tiny treasure keeper, crocheted in your favourite colours.",
    priceTag: "Price on Request",
    cta: "Customise",
    productType: "Pocket / Pouch",
    image:
      "https://images.unsplash.com/photo-1700171394718-2457b1190444?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzJ8MHwxfHNlYXJjaHwzfHx3b29sJTIweWFybiUyMGZsb3dlcnMlMjBrbml0dGVkJTIwaGFuZGljcmFmdHxlbnwwfHx8fDE3OTAwNzEwMTJ8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "prod-7",
    name: "Floral Pipe-Cleaner Bouquet",
    category: "Bouquets",
    description: "Fuzzy, playful stems hand-twisted into a bouquet that stays fresh forever.",
    priceTag: "Price on Request",
    cta: "Customise",
    productType: "Pipe Cleaner Bouquet",
    image:
      "https://static.prod-images.emergentagent.com/jobs/9f1dbf0d-bef2-4152-990b-d32613ef57f4/images/095b9abf6c9ddba4d1b277fcc4cd5a94fb11c087b7c729ae73819be8c9013902.jpeg",
  },
  {
    id: "prod-8",
    name: "Personalised Gift Box",
    category: "Custom Gifts",
    description: "A curated box built from a wishlist you give us — colours, themes, favourites.",
    priceTag: "Custom Quote",
    cta: "Enquire Now",
    productType: "Custom Gift",
    image:
      "https://images.pexels.com/photos/7679676/pexels-photo-7679676.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

export const WHY_POINTS = [
  { icon: "Hand", title: "Made by Hand", text: "Every creation is carefully handcrafted." },
  { icon: "Heart", title: "Made for You", text: "Customised according to your preferences." },
  { icon: "Sparkles", title: "Thoughtfully Designed", text: "Every detail is chosen with care." },
  { icon: "Flower2", title: "Unique Creations", text: "No two handmade pieces have to be exactly alike." },
  { icon: "Gift", title: "Personal Touch", text: "Perfect for meaningful gifting and special occasions." },
  { icon: "HeartHandshake", title: "Made with Love", text: "Because handmade gifts carry something special." },
];

export const OCCASIONS = [
  { label: "Birthdays", icon: "Cake" },
  { label: "Anniversaries", icon: "Heart" },
  { label: "Graduation", icon: "GraduationCap" },
  { label: "Special Celebrations", icon: "Flower2" },
  { label: "Festivals", icon: "PartyPopper" },
  { label: "Baby Showers", icon: "Baby" },
  { label: "Engagements", icon: "Gem" },
  { label: "Just Because", icon: "Sparkles" },
];

export const GALLERY_FILTERS = ["All", "Hampers", "Crochet", "Accessories", "Bouquets", "Custom Gifts"];

export const GALLERY = [
  {
    id: "g1",
    category: "Hampers",
    title: "Lavish Lavender Gift Box",
    aspect: "aspect-[4/5]",
    alt: "Handmade gift hamper decorated with ribbons and dried flowers",
    url: "https://images.unsplash.com/photo-1664849173063-8d8244ac3933?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHozfHxjdXN0b20lMjBnaWZ0JTIwaGFtcGVyJTIwYm91cXVldCUyMGhhbmRtYWRlJTIwYWNjZXNzb3JpZXN8ZW58MHx8fHwxNzkwMDY4MTU0fDA&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "g2",
    category: "Bouquets",
    title: "Pastel Pipe-Cleaner Bouquet",
    aspect: "aspect-[3/4]",
    alt: "Pastel pipe-cleaner flower bouquet wrapped in kraft paper",
    url: "https://static.prod-images.emergentagent.com/jobs/9f1dbf0d-bef2-4152-990b-d32613ef57f4/images/095b9abf6c9ddba4d1b277fcc4cd5a94fb11c087b7c729ae73819be8c9013902.jpeg",
  },
  {
    id: "g3",
    category: "Crochet",
    title: "Crochet Meadow Flowers",
    aspect: "aspect-square",
    alt: "Tiny crocheted flowers arranged on a table",
    url: "https://images.unsplash.com/photo-1700171394718-2457b1190444?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzJ8MHwxfHNlYXJjaHwzfHx3b29sJTIweWFybiUyMGZsb3dlcnMlMjBrbml0dGVkJTIwaGFuZGljcmFmdHxlbnwwfHx8fDE3OTAwNzEwMTJ8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "g4",
    category: "Accessories",
    title: "Blush Knit Hair Band",
    aspect: "aspect-[3/4]",
    alt: "Hand-knit blush pink yarn hair band with flower detail",
    url: "https://static.prod-images.emergentagent.com/jobs/9f1dbf0d-bef2-4152-990b-d32613ef57f4/images/9547365e5855f774e9e806c48616c96ba3bf6e4111bae16151a25579e2a4570d.jpeg",
  },
  {
    id: "g5",
    category: "Hampers",
    title: "Wrapped with Ribbon & Lace",
    aspect: "aspect-[4/5]",
    alt: "Gift wrapped in floral paper with lace flower and ribbon",
    url: "https://images.pexels.com/photos/7340413/pexels-photo-7340413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "g6",
    category: "Custom Gifts",
    title: "Personalised Keepsake Box",
    aspect: "aspect-square",
    alt: "Personalised handmade keepsake box",
    url: "https://images.pexels.com/photos/7679676/pexels-photo-7679676.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "g7",
    category: "Crochet",
    title: "Stitch by Stitch",
    aspect: "aspect-[3/4]",
    alt: "Pastel crochet work in progress with yarn and hook",
    url: "https://images.pexels.com/photos/37540169/pexels-photo-37540169.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "g8",
    category: "Bouquets",
    title: "Blush & Ivory Floral Bundle",
    aspect: "aspect-[4/5]",
    alt: "Blush and ivory handmade flower bundle",
    url: "https://images.unsplash.com/photo-1615670289616-0ab01183ee64?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHxfHxjdXN0b20lMjBnaWZ0JTIwaGFtcGVyJTIwYm91cXVldCUyMGhhbmRtYWRlJTIwYWNjZXNzb3JpZXN8ZW58MHx8fHwxNzkwMDY4MTU0fDA&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "g9",
    category: "Accessories",
    title: "The Craft Corner",
    aspect: "aspect-square",
    alt: "Pastel craft supplies and handmade accessories on a table",
    url: "https://images.unsplash.com/photo-1726197847318-e4bd469af258?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHxoYW5kbWFkZSUyMGNyYWZ0cyUyMGNyb2NoZXQlMjBwb3R0ZXJ5JTIwcGFzdGVsJTIwYWVzdGhldGljfGVufDB8fHx8MTc5MDA2ODE1NHww&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "g10",
    category: "Custom Gifts",
    title: "The Perfect Wrap",
    aspect: "aspect-[4/5]",
    alt: "Elegant handmade gift wrapping with satin ribbon",
    url: "https://images.unsplash.com/photo-1592903297149-37fb25202dfa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGdpZnQlMjBib3glMjB3cmFwcGVkJTIwcGFzdGVsfGVufDB8fHx8MTc5MDA3MTAxMnww&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "g11",
    category: "Hampers",
    title: "Celebration Tower",
    aspect: "aspect-[3/4]",
    alt: "Celebration gift arrangement with chocolates and flowers",
    url: "https://images.pexels.com/photos/30727980/pexels-photo-30727980.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "g12",
    category: "Custom Gifts",
    title: "Decorative Creations",
    aspect: "aspect-square",
    alt: "Handmade decorative creation in pastel colours",
    url: "https://images.unsplash.com/photo-1701372764803-6ca0f1c6f346?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxoYW5kbWFkZSUyMGNyYWZ0cyUyMGNyb2NoZXQlMjBwb3R0ZXJ5JTIwcGFzdGVsJTIwYWVzdGhldGljfGVufDB8fHx8MTc5MDA2ODE1NHww&ixlib=rb-4.1.0&q=85",
  },
];

export const INSTAGRAM_POSTS = [
  "https://images.pexels.com/photos/6905162/pexels-photo-6905162.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.unsplash.com/photo-1700170447159-9d2d0da133a5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzJ8MHwxfHNlYXJjaHw0fHx3b29sJTIweWFybiUyMGZsb3dlcnMlMjBrbml0dGVkJTIwaGFuZGljcmFmdHxlbnwwfHx8fDE3OTAwNzEwMTJ8MA&ixlib=rb-4.1.0&q=85",
  "https://images.unsplash.com/photo-1787074627982-a319f6cf4855?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxoYW5kbWFkZSUyMGdpZnQlMjBib3glMjB3cmFwcGVkJTIwcGFzdGVsfGVufDB8fHx8MTc5MDA3MTAxMnww&ixlib=rb-4.1.0&q=85",
  "https://images.unsplash.com/photo-1668072587859-f0f30c8fa938?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIweWFybiUyMHBhc3RlbCUyMGhhbmRtYWRlJTIwY3JhZnR8ZW58MHx8fHwxNzkwMDcxMDEyfDA&ixlib=rb-4.1.0&q=85",
];

export const PRODUCT_TYPES = [
  "Gift Hamper",
  "Crochet",
  "Hair Accessory",
  "Pocket / Pouch",
  "Pipe Cleaner Bouquet",
  "Custom Gift",
  "Other",
];

export const OCCASION_OPTIONS = [
  "Birthday",
  "Anniversary",
  "Graduation",
  "Baby Shower",
  "Engagement",
  "Festival / Holiday",
  "Special Celebration",
  "Just Because",
  "Other",
];

export const BUDGET_OPTIONS = [
  "Under ₹500",
  "₹500 – ₹1,000",
  "₹1,000 – ₹2,500",
  "₹2,500 – ₹5,000",
  "Above ₹5,000",
  "Let's decide together",
];
