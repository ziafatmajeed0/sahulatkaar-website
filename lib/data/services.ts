export const serviceCategories = [
  {
    category: "Document Services",
    emoji: "\uD83D\uDCC4",
    color: "from-blue-500 to-blue-600",
    items: [
      "NADRA registration & updates",
      "Property documents",
      "Tax forms & returns",
      "Government office submissions",
      "Certificate applications",
      "Passport & visa related tasks",
    ],
  },
  {
    category: "Shopping & Errands",
    emoji: "\uD83D\uDED2",
    color: "from-orange-500 to-orange-600",
    items: [
      "Market shopping",
      "Store/mall purchases",
      "Online order pickups",
      "Bill payments",
      "Utility bill submission",
      "Home delivery coordination",
    ],
  },
  {
    category: "Healthcare",
    emoji: "\uD83D\uDC8A",
    color: "from-green-500 to-green-600",
    items: [
      "Medicine pickup from pharmacy",
      "Hospital document collection",
      "Doctor's appointment scheduling",
      "Lab reports collection",
      "Medical certificate assistance",
      "Emergency healthcare coordination",
    ],
  },
  {
    category: "Home Services",
    emoji: "\uD83C\uDFE0",
    color: "from-red-500 to-red-600",
    items: [
      "Home maintenance coordination",
      "Repair scheduling",
      "Cleaning services arrangement",
      "Utility connections",
      "Rent & property management",
      "Inspection coordination",
    ],
  },
  {
    category: "Business Services",
    emoji: "\uD83D\uDCCA",
    color: "from-purple-500 to-purple-600",
    items: [
      "Office tasks",
      "Document scanning & organizing",
      "Banking transactions",
      "Business registration assistance",
      "Contract preparation",
      "Vendor coordination",
    ],
  },
  {
    category: "Custom Tasks",
    emoji: "\u2699\uFE0F",
    color: "from-indigo-500 to-indigo-600",
    items: [
      "Anything you need!",
      "Multiple tasks coordination",
      "Event arrangement help",
      "Appointment scheduling",
      "Research & information",
      "Any local service in Pakistan",
    ],
  },
] as const;

export const homeServices = [
  { icon: "\uD83D\uDCC4", title: "Document Handling", description: "NADRA, property, tax work" },
  { icon: "\uD83D\uDED2", title: "Shopping", description: "Market errands & delivery" },
  { icon: "\uD83D\uDC8A", title: "Medicine", description: "Medicine pickup & delivery" },
  { icon: "\u2699\uFE0F", title: "Custom Tasks", description: "Har type ka kaam" },
] as const;

export const footerServices = [
  "Document Handling",
  "Shopping",
  "Medicine",
  "Custom Tasks",
] as const;
