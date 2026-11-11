export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  image: string;
  alt: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      paragraphs: string[];
      keyTakeaways?: string[];
    }[];
    conclusion: string;
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: "sustainable-landscaping-dubai-native-plants",
    title: "Sustainable Landscaping in Dubai: Native Plants That Beat the Summer Heat",
    excerpt:
      "How ghaf trees, bougainvillea, and drought-tolerant desert flora thrive in 48 °C climates while dramatically reducing water demand.",
    date: "OCT 2026",
    readTime: "4 MIN READ",
    category: "Sustainability",
    author: {
      name: "Eng. Tariq Al Mansoori",
      role: "Lead Arid Horticulturist · Opal Landscaping",
    },
    image: "/img/bougainvillea-hedge.jpg",
    alt: "Dense bougainvillea hedge flowering in Dubai climate",
    content: {
      intro:
        "Designing outdoor spaces across the UAE requires engineering beyond aesthetic appeal. In a region where peak summer ambient temperatures exceed 48 °C and relative humidity swings drastically, botanical selection dictates not only landscape survival but also operational sustainability and municipal irrigation compliance.",
      sections: [
        {
          heading: "The Evolutionary Resilience of UAE Native Flora",
          paragraphs: [
            "Indigenous species like the Prosopis cineraria (National Ghaf Tree), Acacia tortilis (Samr), and Ziziphus spina-christi (Sidr) have evolved over millennia to withstand extreme solar radiation and high substrate salinity.",
            "Their deep taproot systems reach subsurface moisture reserves, requiring minimal supplemental irrigation once established compared to exotic imported ornamentals.",
          ],
          keyTakeaways: [
            "Taproot penetration exceeds 15 meters for mature native Ghaf specimens.",
            "Water consumption drops by up to 65% when replacing imported sod with xeriscape groundcovers.",
            "Natural resistance to regional fungal pathogens and micro-scale pests.",
          ],
        },
        {
          heading: "Flowering Canopy & High-Vibrancy Desert Hedges",
          paragraphs: [
            "Bougainvillea glabra and spectabilis varieties represent the gold standard for flowering privacy screens and boundary walls across Emirates Hills, Arabian Ranches, and Palm Jumeirah.",
            "When strategically combined with Tecoma stans and Plumbago auriculata, these species provide uninterrupted year-round floral coloration without demanding daily potable water soaking.",
          ],
        },
        {
          heading: "Smart Microclimate Layering",
          paragraphs: [
            "Sustainable landscape architecture relies on vertical stratification: tall shade-casting date palms (Phoenix dactylifera) filter direct midday UV, creating sheltered understory microclimates where delicate flowering perennials and outdoor living zones flourish.",
          ],
        },
      ],
      conclusion:
        "Sustainable desert landscaping is an engineering discipline that balances botanical resilience with luxurious aesthetic execution. Through deliberate species selection and certified horticultural care, property owners enjoy lush outdoor spaces that respect regional water resources.",
    },
  },
  {
    id: 2,
    slug: "smart-irrigation-drip-automation-dubai",
    title: "Smart Irrigation & Drip Automation: Cutting Outdoor Water Consumption by 40%",
    excerpt:
      "Modern flow sensors, sub-surface drip lines, and night-cycle controllers engineered to safeguard Dubai's precious water resources.",
    date: "SEP 2026",
    readTime: "5 MIN READ",
    category: "Irrigation",
    author: {
      name: "Vikram Rathore",
      role: "Senior Irrigation Systems Engineer",
    },
    image: "/img/team-planting.jpg",
    alt: "Landscaping team installing automated drip irrigation",
    content: {
      intro:
        "Water conservation in hyper-arid landscapes is both an environmental priority and an economic imperative. Modern automated smart irrigation merges meteorological telemetry with precision sub-surface delivery to eliminate waste.",
      sections: [
        {
          heading: "Subsurface Pressure-Compensating Drip Architecture",
          paragraphs: [
            "Traditional surface broadcast sprinklers lose between 30% to 50% of discharged water volume to instant midday evaporative loss and wind drift in the Gulf. Subsurface pressure-compensating drip tubing (PC lines) delivers measured water volumes directly to root zones.",
            "Integrated copper root-intrusion barriers and check valves ensure consistent distribution uniformity regardless of elevation variance across sloped landscapes.",
          ],
          keyTakeaways: [
            "Zero wind-drift evaporation when operating subsurface emitters.",
            "Pressure-compensating membranes ensure identical flow from emitter 1 to emitter 500.",
            "Substantial reduction in weed germination between planted clusters.",
          ],
        },
        {
          heading: "IoT Smart Controllers & Evapotranspiration Telemetry",
          paragraphs: [
            "Modern commercial and residential estates utilize smart controllers connected to on-site micro-weather sensors. Watering runtimes dynamically calculate local Evapotranspiration (ET) rates, adjusting duration down during humid winter weeks and scaling appropriately ahead of dry shamal wind conditions.",
          ],
        },
      ],
      conclusion:
        "Upgrading to automated weather-synchronized drip networks yields water savings of 35% to 45%, paying for system retrofits within one operational season while keeping landscapes at peak vitality.",
    },
  },
  {
    id: 3,
    slug: "architectural-hardscaping-pool-decks-materials",
    title: "Architectural Hardscaping & Pool Decks: Heat-Reflective Materials Guide",
    excerpt:
      "Selecting pavers, stone inlays, and shaded pergolas that remain cool to the touch throughout scorching summer afternoons.",
    date: "AUG 2026",
    readTime: "6 MIN READ",
    category: "Design & Build",
    author: {
      name: "Marcus Chen",
      role: "Principal Landscape Architect",
    },
    image: "/img/palm-pool.jpg",
    alt: "Reflective pool deck with palm islands and pavers",
    content: {
      intro:
        "In the Arabian Gulf, hardscape surfaces absorb extreme solar radiation. Without careful material selection, stone terraces and pool coping become uncomfortably hot to walk on barefoot. Engineering barefoot-safe, durable outdoor spaces requires strict thermal specification.",
      sections: [
        {
          heading: "Solar Reflectance Index (SRI) in Stone Selection",
          paragraphs: [
            "High Solar Reflectance Index (SRI) stones, such as light travertine, honed French limestone, and dense white quartz-sandstone, reflect rather than absorb thermal radiation.",
            "Travertine's natural porous honeycomb matrix allows heat dissipation, retaining lower surface temperatures than dense dark granite or concrete pavers.",
          ],
          keyTakeaways: [
            "Aim for SRI values > 78 for barefoot-contact pool surroundings.",
            "Avoid dark basalt or non-porous unsealed granite in unshaded zones.",
            "Honed, non-slip finishes ensure safety when surfaces are wet.",
          ],
        },
        {
          heading: "Integrating Passive Shade: Pergolas & Architectural Canopies",
          paragraphs: [
            "Bioclimatic motorized louver pergolas combined with climbing bougainvillea or jasmine trellises provide essential sun-path control, extending comfortable terrace usage through extended daytime hours.",
          ],
        },
      ],
      conclusion:
        "Selecting heat-engineered masonry combined with smart architectural shading produces resort-grade outdoor living rooms tailored to the Middle Eastern climate.",
    },
  },
  {
    id: 4,
    slug: "soil-conditioning-salinity-management-uae",
    title: "Soil Conditioning & Salinity Management in Coastal UAE Landscapes",
    excerpt:
      "Overcoming sandy soil structures, high salinity levels, and nutrient leaching with targeted organic amendments and mycorrhizal inoculants.",
    date: "JUL 2026",
    readTime: "5 MIN READ",
    category: "Horticulture",
    author: {
      name: "Dr. Laila Al Harthy",
      role: "Soil Scientist & Horticultural Consultant",
    },
    image: "/img/drip-planting-poster.jpg",
    alt: "Landscape horticulturist preparing soil mix with drip irrigation",
    content: {
      intro:
        "Native Gulf soil consists primarily of loose calcareous sand with low cation-exchange capacity (CEC), negligible organic matter (<0.2%), and elevated electrical conductivity (EC). Establishing premium lawns and floral beds requires proactive pedological intervention.",
      sections: [
        {
          heading: "Rebuilding Soil Structure with Organic Amendments",
          paragraphs: [
            "Incorporating composted biological mulch, aged peat, and biochar stabilizes sandy substrates. Biochar acts as a permanent micro-sponge, retaining moisture and slow-release fertilizers in the upper 40 cm root zone.",
          ],
          keyTakeaways: [
            "Increases soil water-holding capacity by up to 250%.",
            "Slows nutrient leaching from irrigation runoff.",
            "Buffers root systems against rapid soil temperature spikes.",
          ],
        },
        {
          heading: "Managing Salinity & Hard Water Leaching",
          paragraphs: [
            "Treated Sewage Effluent (TSE) and deep borehole water frequently carry elevated total dissolved solids (TDS). Periodic gypsum applications and calculated leaching fractions displace sodium ions with calcium, keeping soil permeable.",
          ],
        },
      ],
      conclusion:
        "Healthy desert gardens start subterranean. Regular lab soil testing and organic conditioning guarantee lush growth even in harsh coastal environments.",
    },
  },
  {
    id: 5,
    slug: "commercial-grounds-masterplan-maintenance",
    title: "Commercial Grounds & Community Masterplan Landscape Maintenance",
    excerpt:
      "How scheduled seasonal pruning, crown thinning, and preventative turf aeration preserve multi-hectare community landscapes year-round.",
    date: "JUN 2026",
    readTime: "7 MIN READ",
    category: "Maintenance",
    author: {
      name: "Eng. Tariq Al Mansoori",
      role: "Lead Arid Horticulturist · Opal Landscaping",
    },
    image: "/img/community-avenue.jpg",
    alt: "Tree-lined boulevard in high-end Dubai residential community",
    content: {
      intro:
        "Maintaining master-planned communities, business parks, and diplomatic compounds requires strict operational regimens, certified safety standards, and synchronized horticultural calendars.",
      sections: [
        {
          heading: "Palm Sanitation & Seasonal Pruning Regimens",
          paragraphs: [
            "Over 10,000 palms across our managed developments undergo biannual frond thinning, crown cleaning, and preventative red palm weevil (Rhynchophorus ferrugineus) acoustic monitoring and targeted micro-injection.",
          ],
          keyTakeaways: [
            "Early acoustic detection of wood-boring larvae before frond collapse.",
            "Sterilization of pruning equipment between trees prevents fungal transmission.",
            "Certified aerial boom operations adhering to ISO 45001 safety codes.",
          ],
        },
        {
          heading: "Turf Care in Extreme Heat",
          paragraphs: [
            "Warm-season hybrid Bermuda (Tifway 419) and Paspalum vaginatum require regular core aeration, topdressing with sand-organic blends, and precision morning mowing to prevent heat stress and scalping.",
          ],
        },
      ],
      conclusion:
        "Systematic planned maintenance ensures commercial landscape assets mature into prestigious, high-value community amenities.",
    },
  },
  {
    id: 6,
    slug: "nightscape-architecture-led-lighting-gardens",
    title: "Nightscape Architecture: Low-Voltage LED Lighting for Luxury Gardens",
    excerpt:
      "Designing glare-free uplighting, step illumination, and ambient tree silhouettes to transform villas into evening sanctuaries.",
    date: "MAY 2026",
    readTime: "4 MIN READ",
    category: "Garden Lighting",
    author: {
      name: "Marcus Chen",
      role: "Principal Landscape Architect",
    },
    image: "/img/lit-steps.jpg",
    alt: "Illuminated garden stairs and low-voltage outdoor lighting",
    content: {
      intro:
        "Because summer outdoor living in Dubai truly comes alive after sundown, garden illumination is as vital as daylight landscape architecture. Professional low-voltage illumination emphasizes texture, depth, and safety without light pollution.",
      sections: [
        {
          heading: "Warm Color Temperatures & Anti-Glare Optics",
          paragraphs: [
            "Cool white light feels clinical and harsh. We calibrate garden illumination between 2700K and 3000K warm-amber spectrum, replicating natural candle and sunset tones.",
            "Fixtures feature honeycomb hex-louvers and deep-baffle cowls to shield direct view of LED diodes, creating subtle pools of radiance rather than glaring hotspots.",
          ],
          keyTakeaways: [
            "2700K color temperature complements stone pavers and green foliage.",
            "IP68 waterproof brass and marine-grade anodized aluminum resist humidity.",
            "Smart automated astronomical timers align with seasonal dusk shifts.",
          ],
        },
        {
          heading: "Silhouetting, Moonlighting & Safety Illumination",
          paragraphs: [
            "Mounting diffused soft floodlights high in palm crowns casts gentle, natural dappled shadows across lawns and water features, while recessed step strip lights prevent trip hazards.",
          ],
        },
      ],
      conclusion:
        "Thoughtful nightscape design extends villa living outdoors into magical after-dark environments for family gatherings and entertaining.",
    },
  },
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return BLOG_POSTS.find((p) => p.slug === slug);
};

