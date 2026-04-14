export interface Brand {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  accentColor: string;
  heroImage: string;
}

export const brands: Brand[] = [
  {
    slug: "interface",
    name: "Interface",
    tagline: "Global Leader in Modular Flooring",
    description:
      "Interface is a worldwide leader in modular flooring, known for pioneering sustainable carpet tile manufacturing. Their products deliver exceptional acoustic performance, durability, and design innovation \u2014 making them a natural fit for strata common areas, lobbies, and corridors.",
    features: [
      "Carbon neutral floors across entire product range",
      "Industry-leading acoustic performance ratings",
      "Extensive design library with hundreds of options",
      "Proven durability in high-traffic commercial environments",
      "TacTiles installation system for adhesive-free installation",
    ],
    accentColor: "#2D5A3C",
    heroImage: "/images/brands/interface/hero.jpg",
  },
  {
    slug: "acouflor",
    name: "Acouflor",
    tagline: "Acoustic Flooring Specialists",
    description:
      "Acouflor specialises in acoustic flooring solutions designed specifically for multi-level buildings and strata environments. Their products are engineered to exceed BCA acoustic requirements, making them the go-to choice for strata buildings where noise transfer between levels is a priority concern.",
    features: [
      "Purpose-built for strata acoustic compliance",
      "Exceeds BCA acoustic requirements",
      "Integrated acoustic backing \u2014 no separate underlay",
      "Range of commercial and residential designs",
      "Australian-tested and certified",
    ],
    accentColor: "#4A6FA5",
    heroImage: "/images/brands/acouflor/hero.jpg",
  },
  {
    slug: "shaw-contract",
    name: "Shaw Contract",
    tagline: "Performance Meets Design",
    description:
      "Shaw Contract brings decades of commercial flooring expertise to the strata market. Known for combining exceptional performance with sophisticated design, Shaw Contract carpet tiles are built for heavy foot traffic while maintaining their appearance year after year.",
    features: [
      "EcoWorx backing for superior moisture resistance",
      "Cradle to Cradle certified products",
      "Advanced pattern technology for seamless appearance",
      "Extensive colour and texture options",
      "Rated for heavy commercial foot traffic",
    ],
    accentColor: "#8B4513",
    heroImage: "/images/brands/shaw-contract/hero.jpg",
  },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

export const BENEFITS = [
  {
    icon: "Volume2",
    title: "Acoustic Compliance",
    description:
      "Carpet tiles with integrated acoustic backing meet and exceed BCA requirements for noise transfer between levels \u2014 critical for strata buildings where acoustic complaints are the #1 issue.",
  },
  {
    icon: "RefreshCw",
    title: "Section Replacement",
    description:
      "When a section of corridor or lobby carpet is damaged, replace only the affected tiles \u2014 not the entire floor. Dramatically reduces maintenance costs and minimises disruption to residents.",
  },
  {
    icon: "Shield",
    title: "Commercial-Grade Durability",
    description:
      "Interface, Acouflor, and Shaw Contract carpet tiles are rated for heavy commercial traffic. In your strata common areas, they\u2019ll withstand decades of daily foot traffic from hundreds of residents.",
  },
  {
    icon: "Clock",
    title: "Minimal Disruption",
    description:
      "Carpet tiles can be installed section by section without closing entire areas. Residents can continue using common areas while work progresses floor by floor \u2014 no building-wide shutdowns.",
  },
  {
    icon: "Palette",
    title: "Design Flexibility",
    description:
      "Choose from hundreds of colours, patterns, and textures to create a sophisticated look that reflects your building\u2019s character. Mix and match tiles to create wayfinding, zones, or feature areas.",
  },
  {
    icon: "DollarSign",
    title: "Lower Lifecycle Cost",
    description:
      "While the upfront cost is comparable to broadloom, carpet tiles cost dramatically less over 10\u201320 years. Replace sections instead of whole floors, and extend the life of your flooring investment.",
  },
  {
    icon: "Droplets",
    title: "Moisture Management",
    description:
      "Premium carpet tile backings manage moisture effectively, preventing mould and mildew in areas prone to humidity or water ingress. Perfect for ground floor lobbies and basement common areas.",
  },
  {
    icon: "Leaf",
    title: "Sustainability Credentials",
    description:
      "Interface, Shaw Contract, and Acouflor all offer carbon-neutral and recycled-content options. Present strong environmental credentials to owners corporations focused on building sustainability.",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Free Site Assessment",
    description:
      "We visit your building to assess current flooring, measure common areas, and understand your specific requirements \u2014 acoustic needs, traffic patterns, design preferences, and budget.",
    icon: "ClipboardCheck",
  },
  {
    step: 2,
    title: "Tailored Recommendation",
    description:
      "We present a tailored proposal with the best-fit products from Interface, Acouflor, or Shaw Contract. Includes product samples, acoustic specifications, pricing, and a staged installation plan.",
    icon: "FileText",
  },
  {
    step: 3,
    title: "Professional Installation",
    description:
      "Our experienced flooring installers work floor-by-floor to minimise disruption. Carpet tiles are installed quickly and quietly \u2014 residents can walk on them immediately after installation.",
    icon: "Wrench",
  },
  {
    step: 4,
    title: "Ongoing Support",
    description:
      "We maintain a record of your product and batch details for future replacements. Need to replace damaged tiles in 5 years? We can supply exact-match tiles and install them the same day.",
    icon: "Headphones",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "We replaced the carpeting in all 12 levels of common area corridors with Interface carpet tiles. The acoustic improvement was immediate, complaints dropped to zero, and the building looks like it had a complete renovation.",
    name: "David R.",
    role: "Strata Manager",
    location: "Sydney, NSW",
    building: "42-unit residential tower",
  },
  {
    quote:
      "The ability to replace individual tiles has been transformational for our maintenance budget. Last quarter we replaced 15 damaged tiles in the lobby for under $500 \u2014 previously we were quoted $8,000 to re-carpet the entire area.",
    name: "Angela T.",
    role: "Building Manager",
    location: "Melbourne, VIC",
    building: "120-unit mixed-use complex",
  },
  {
    quote:
      "The owners corporation was skeptical about carpet tiles, but once they saw the Shaw Contract samples and understood the lifecycle cost savings, the vote was unanimous. Three years in, the corridors still look brand new.",
    name: "Mark & Jennifer S.",
    role: "Owners Corporation Committee",
    location: "Brisbane, QLD",
    building: "36-unit apartment complex",
  },
];

export const STRATA_AREAS = [
  {
    title: "Lobbies & Foyers",
    description:
      "Create a stunning first impression with premium carpet tiles in your building entrance. High-durability options from Interface and Shaw Contract are designed for the heaviest traffic areas.",
    icon: "Building2",
    features: ["Heavy traffic rated", "Impressive aesthetics", "Easy to clean and maintain"],
  },
  {
    title: "Corridors & Hallways",
    description:
      "The most-trafficked areas in any strata building. Carpet tiles excel here because damaged sections can be replaced individually, and installation can happen floor-by-floor.",
    icon: "LayoutPanelLeft",
    features: ["Section replacement", "Acoustic compliance", "Staged installation"],
  },
  {
    title: "Common Rooms & Lounges",
    description:
      "Meeting rooms, resident lounges, and community spaces benefit from the warmth and acoustic comfort of carpet tiles. Create inviting spaces that residents are proud to use.",
    icon: "Sofa",
    features: ["Warm and inviting", "Sound absorption", "Design flexibility"],
  },
  {
    title: "Lift Lobbies",
    description:
      "High-traffic transition zones that take a beating. Carpet tiles are ideal because individual tiles can be swapped when worn, without replacing the entire lift lobby floor.",
    icon: "ArrowUpDown",
    features: ["Individual tile replacement", "Compact installation area", "Consistent appearance"],
  },
];
