const formatPeso = (value) => `₱${Number(value).toLocaleString("en-PH")}`;

const FOOD_IMAGE_POOL = [
  "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=300&q=80",
];

const hashString = (value) =>
  Array.from(value).reduce((acc, char) => (acc * 31 + char.charCodeAt(0)) >>> 0, 7);

const parseMenuCsv = (csv) => {
  const lines = csv
    .trim()
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length <= 1) return [];

  const sectionMap = new Map();
  for (const line of lines.slice(1)) {
    const [sectionName, itemName, price, hasImage, imageUrlRaw] = line
      .split(",")
      .map((value) => value?.trim());
    if (!sectionName || !itemName || !price) continue;
    const imageEnabled = hasImage?.toLowerCase() === "yes";
    const fallbackImage =
      FOOD_IMAGE_POOL[hashString(`${sectionName}-${itemName}`) % FOOD_IMAGE_POOL.length];
    const imageUrl = imageEnabled ? imageUrlRaw || fallbackImage : null;

    if (!sectionMap.has(sectionName)) sectionMap.set(sectionName, []);
    sectionMap.get(sectionName).push([itemName, formatPeso(price), imageEnabled, imageUrl]);
  }

  return Array.from(sectionMap, ([name, items]) => ({ name, items }));
};

export const menus = {
  manila: {
    tag: "Metro Manila",
    title: "Luntian Table",
    description: "Modern Filipino comfort with garden-fresh flavors.",
    vibe: "Lush greens, capiz-inspired dividers, sunlit typography.",
    theme: {
      accent: "#5fd38d",
      paper: "#f7f3ea",
      ink: "#1f2a24",
      secondary: "#d1b07a",
      fontFamily: "\"Playfair Display\", serif",
      bodyFamily: "\"Archivo\", sans-serif",
    },
    cover: {
      enabled: true,
      title: "Luntian Table",
      subtitle: "Modern Filipino Dining",
      detail: "Seasonal tasting · Farm-to-table · Makati",
    },
    sections: parseMenuCsv(`
      Section,Item,Price,Image
      Starters,Kesong Puti + Malunggay Pandesal,220,yes
      Starters,Crispy Kangkong Chips,180,no
      Starters,Tuyo Caesar with Garlic Chips,260,yes
      Mains,Kare-Kare Short Rib,620,yes
      Mains,Chicken Inasal with Atsara,360,yes
      Mains,Seafood Paella Negra,720,no
      Sweets,Ube Basque Cheesecake,240,yes
      Sweets,Bibingka Brûlée,230,no
      Drinks,Calamansi Cooler,140,yes
      Drinks,Sago't Gulaman,150,no
      Drinks,Benguet Coffee,160,yes
    `),
    highlights: [
      "Chef's choice: Kare-kare with house bagoong espuma",
      "Ask for our vegan inasal mushroom skewer",
    ],
  },
  cebu: {
    tag: "Cebu City",
    title: "Sugbo Hearth",
    description: "Charcoal-grilled favorites inspired by Cebuano heritage.",
    vibe: "Charcoal textures, warm ember gradients, bold serif headers.",
    theme: {
      accent: "#ff8b5e",
      paper: "#1c1310",
      ink: "#f6efe6",
      secondary: "#b87951",
      fontFamily: "\"DM Serif Display\", serif",
      bodyFamily: "\"Work Sans\", sans-serif",
    },
    cover: {
      enabled: false,
    },
    sections: parseMenuCsv(`
      Section,Item,Price,Image
      Grilled Plates,Cebu Lechon Belly,680,yes
      Grilled Plates,Pusô Pork BBQ Skewers,320,no
      Grilled Plates,Tuna Panga + Toyomansi,460,yes
      Rice & Noodles,Danggit Fried Rice,280,no
      Rice & Noodles,Pancit Bisaya,250,no
      Sides,Ensaladang Mangga,210,yes
      Sides,Chicharon Bulaklak,240,no
      Desserts,Masareal Ice Cream Sandwich,190,yes
      Desserts,Otap Crumble,170,no
    `),
    highlights: [
      "Lechon belly is slow-roasted for 6 hours",
      "Try the otap crumble with mango sorbet",
    ],
  },
  davao: {
    tag: "Davao",
    title: "Kape & Cacao House",
    description: "Bean-to-cup brews and Mindanao-inspired plates.",
    vibe: "Coffee ink, cacao browns, editorial layout with stamps.",
    theme: {
      accent: "#c89b6b",
      paper: "#f1ebe2",
      ink: "#2a1c14",
      secondary: "#8c5b3f",
      fontFamily: "\"Fraunces\", serif",
      bodyFamily: "\"Space Grotesk\", sans-serif",
    },
    cover: {
      enabled: false,
    },
    sections: parseMenuCsv(`
      Section,Item,Price,Image
      Coffee Bar,Mt. Apo Pour Over,220,yes
      Coffee Bar,Cacao Latte,210,no
      Coffee Bar,Cold Brew + Muscovado,200,yes
      All-Day Plates,Durian BBQ Chicken,360,no
      All-Day Plates,Kinilaw na Tuna,340,yes
      All-Day Plates,Vegetable Laing Wrap,280,no
      Bakery,Tablea Sourdough,180,no
      Bakery,Pili Nut Croissant,200,yes
      Desserts,Durian Tres Leches,220,yes
      Desserts,Pili Nut Praline Tart,240,no
    `),
    highlights: [
      "All cacao is sourced from Davao farms",
      "Ask for single-origin tasting flight",
    ],
  },
  boracay: {
    tag: "Boracay",
    title: "Shoreline Social",
    description: "Island bar bites and sunset cocktails on the sand.",
    vibe: "Photo-forward layout with bold pricing and beach tones.",
    theme: {
      accent: "#f97316",
      paper: "#fff7ed",
      ink: "#1f130a",
      secondary: "#fb923c",
      fontFamily: "\"DM Serif Display\", serif",
      bodyFamily: "\"Work Sans\", sans-serif",
    },
    layout: "photo-left",
    photo:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
    sections: parseMenuCsv(`
      Section,Item,Price,Image
      Beach Plates,Grilled Prawns + Pineapple Glaze,520,yes
      Beach Plates,Adobo Tacos,420,no
      Beach Plates,Mango Kinilaw,360,yes
      Island Drinks,Sunset Lychee Spritz,260,yes
      Island Drinks,Calamansi Mojito,240,no
      Island Drinks,Buko Espresso Tonic,230,yes
      Desserts,Halo-Halo Parfait,220,no
      Desserts,Coconut Panna Cotta,210,yes
    `),
    highlights: [
      "Signature cocktail flights are available from 4–7pm.",
      "Ask for gluten-free taco shells.",
    ],
    cover: {
      enabled: false,
    },
  },
  siargao: {
    tag: "Siargao",
    title: "Cloud Nine Kitchen",
    description: "Coastal comfort plates and bright island flavors.",
    vibe: "Tropical paper tones, surf postcard accents, breezy typography.",
    theme: {
      accent: "#0f9f8c",
      paper: "#f6fbf8",
      ink: "#12312b",
      secondary: "#4fc7b7",
      fontFamily: "\"Cormorant Garamond\", serif",
      bodyFamily: "\"Source Sans 3\", sans-serif",
    },
    cover: {
      enabled: true,
      title: "Cloud Nine Kitchen",
      subtitle: "Island Coastal Dining",
      detail: "Fresh catch · Tropical produce · Siargao",
    },
    sections: parseMenuCsv(`
      Section,Item,Price,Image
      Small Plates,Coconut Kinilaw Cups,280,yes
      Small Plates,Charred Corn + Kesong Puti,220,yes
      Small Plates,Crispy Pusit Rings,260,yes
      Mains,Grilled Tanigue Steak,540,yes
      Mains,Lemongrass Chicken Inasal,390,yes
      Mains,Surfside Pork Belly Adobo,420,no
      Bowls,Green Mango Shrimp Bowl,360,yes
      Sweets,Toasted Bibingka with Salted Caramel,240,yes
      Sweets,Pandan Coconut Custard,210,no
      Drinks,Young Coconut Cold Brew,190,yes
      Drinks,Pomelo Calamansi Fizz,170,yes
    `),
    highlights: [
      "Fresh catch changes daily based on local boats",
      "Best paired with pomelo calamansi fizz",
    ],
  },
};

export const menuCards = [
  {
    id: "manila",
    label: "Garden · Modern",
  },
  {
    id: "cebu",
    label: "Fire · Heritage",
  },
  {
    id: "davao",
    label: "Cacao · Coffee",
  },
  {
    id: "boracay",
    label: "Beach · Sunset",
  },
  {
    id: "siargao",
    label: "Surf · Tropical",
  },
];
