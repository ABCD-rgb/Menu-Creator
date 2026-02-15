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
    sections: [
      {
        name: "Starters",
        items: [
          ["Kesong Puti + Malunggay Pandesal", "₱220"],
          ["Crispy Kangkong Chips", "₱180"],
          ["Tuyo Caesar with Garlic Chips", "₱260"],
        ],
      },
      {
        name: "Mains",
        items: [
          ["Kare-Kare Short Rib", "₱620"],
          ["Chicken Inasal with Atsara", "₱360"],
          ["Seafood Paella Negra", "₱720"],
        ],
      },
      {
        name: "Sweets",
        items: [
          ["Ube Basque Cheesecake", "₱240"],
          ["Bibingka Brûlée", "₱230"],
        ],
      },
      {
        name: "Drinks",
        items: [
          ["Calamansi Cooler", "₱140"],
          ["Sago't Gulaman", "₱150"],
          ["Benguet Coffee", "₱160"],
        ],
      },
    ],
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
    sections: [
      {
        name: "Grilled Plates",
        items: [
          ["Cebu Lechon Belly", "₱680"],
          ["Pusô Pork BBQ Skewers", "₱320"],
          ["Tuna Panga + Toyomansi", "₱460"],
        ],
      },
      {
        name: "Rice & Noodles",
        items: [
          ["Danggit Fried Rice", "₱280"],
          ["Pancit Bisaya", "₱250"],
        ],
      },
      {
        name: "Sides",
        items: [
          ["Ensaladang Mangga", "₱210"],
          ["Chicharon Bulaklak", "₱240"],
        ],
      },
      {
        name: "Desserts",
        items: [
          ["Masareal Ice Cream Sandwich", "₱190"],
          ["Otap Crumble", "₱170"],
        ],
      },
    ],
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
    sections: [
      {
        name: "Coffee Bar",
        items: [
          ["Mt. Apo Pour Over", "₱220"],
          ["Cacao Latte", "₱210"],
          ["Cold Brew + Muscovado", "₱200"],
        ],
      },
      {
        name: "All-Day Plates",
        items: [
          ["Durian BBQ Chicken", "₱360"],
          ["Kinilaw na Tuna", "₱340"],
          ["Vegetable Laing Wrap", "₱280"],
        ],
      },
      {
        name: "Bakery",
        items: [
          ["Tablea Sourdough", "₱180"],
          ["Pili Nut Croissant", "₱200"],
        ],
      },
      {
        name: "Desserts",
        items: [
          ["Durian Tres Leches", "₱220"],
          ["Pili Nut Praline Tart", "₱240"],
        ],
      },
    ],
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
    sections: [
      {
        name: "Beach Plates",
        items: [
          ["Grilled Prawns + Pineapple Glaze", "₱520"],
          ["Adobo Tacos", "₱420"],
          ["Mango Kinilaw", "₱360"],
        ],
      },
      {
        name: "Island Drinks",
        items: [
          ["Sunset Lychee Spritz", "₱260"],
          ["Calamansi Mojito", "₱240"],
          ["Buko Espresso Tonic", "₱230"],
        ],
      },
      {
        name: "Desserts",
        items: [
          ["Halo-Halo Parfait", "₱220"],
          ["Coconut Panna Cotta", "₱210"],
        ],
      },
    ],
    highlights: [
      "Signature cocktail flights are available from 4–7pm.",
      "Ask for gluten-free taco shells.",
    ],
    cover: {
      enabled: false,
    },
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
];
