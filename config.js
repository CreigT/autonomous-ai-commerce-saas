// config.js - EDIT THESE VARIABLES ONLY, then push to Vercel
const CONFIG = {
  STORE_NAME: "AI Autonomous Commerce",
  PREMIUM_PRICE: 49,
  API_KEY: "your-openai-or-llm-api-key-here", // Optional for real agents later
  PRODUCTS: [
    { id: 1, name: "AI Productivity Tool", price: 29, image: "https://via.placeholder.com/300x200?text=AI+Tool" },
    { id: 2, name: "Smart Home Kit", price: 99, image: "https://via.placeholder.com/300x200?text=Smart+Home" },
    { id: 3, name: "Digital Course Bundle", price: 49, image: "https://via.placeholder.com/300x200?text=Course" }
  ],
  AGENTS: [
    { name: "CEO Agent", status: "Online", role: "Strategic Oversight" },
    { name: "Sales Agent", status: "Active", role: "Lead Conversion" },
    { name: "Marketing Agent", status: "Running", role: "Content & Ads" },
    { name: "Support Agent", status: "Standby", role: "Customer Help" }
  ]
};