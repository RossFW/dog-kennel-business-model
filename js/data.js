// ============================================================
// Business & Competitor Data
// ============================================================

const OUR_PROPERTY = {
  name: "4829 Peachtree Blvd",
  subtitle: "Former Greenwood Ice Cream Factory",
  lat: 33.8927,
  lng: -84.2978,
  listingUrl: "https://realnex.com/listings/860580/greenwood-ice-cream-factory",
  details: {
    sf: "14,612 SF",
    lot: "1.0 acre",
    zoning: "VC (Village Commercial)",
    traffic: "35,000+ vehicles/day",
    built: "1974",
    taxes: "~$40,000/yr (family-owned)",
    note: "No mortgage. No rent. Family owns the property."
  }
};

const COMPETITORS = [
  {
    id: "dogphoria",
    name: "DogPhoria",
    type: "daycare-boarding",
    tier: "local-premium",
    lat: 33.8897,
    lng: -84.3055,
    address: "3571 Broad St, Chamblee GA 30341",
    url: "https://dogphoria.net/",
    reviewUrl: "https://www.yelp.com/biz/dogphoria-chamblee",
    distanceMi: 1.0,
    pricing: {
      daycare: "$35/day",
      boarding: "Not listed publicly",
      notes: "$25 late pickup (after 12pm), $38 re-eval fee"
    },
    services: ["Daycare", "Boarding", "Webcams", "Playgroups"],
    hours: "M–F 7:30am–7pm | Sat 10am–3:30pm | Sun 4–6pm",
    rating: 4.7,
    reviews: 20,
    reviewSource: "Yelp",
    notes: "Closest competitor. Limited Sunday hours = gap opportunity.",
    color: "#e74c3c"
  },
  {
    id: "vca",
    name: "VCA Pets Are People Too",
    type: "vet-boarding",
    tier: "medical",
    lat: 33.8965,
    lng: -84.2992,
    address: "4280 N Peachtree Rd, Chamblee GA 30341",
    url: "https://vcahospitals.com/pets-are-people-too-chamblee/services/pet-boarding/dog-boarding",
    distanceMi: 0.5,
    pricing: {
      daycare: "N/A",
      boarding: "Not listed",
      notes: "Medical-grade boarding only; not a true daycare competitor"
    },
    services: ["Veterinary", "Medical Boarding"],
    hours: "Standard vet hours",
    rating: null,
    reviews: null,
    notes: "On same road. Medical boarding niche — not direct daycare competition. Potential referral partner.",
    color: "#3498db"
  },
  {
    id: "dogtopia-brookhaven",
    name: "Dogtopia of North Brookhaven",
    type: "daycare-boarding",
    tier: "franchise",
    lat: 33.9006,
    lng: -84.3568,
    address: "2152 Johnson Ferry Rd NE, Atlanta GA 30319",
    url: "https://www.dogtopia.com/atlanta-northbrookhaven/",
    pricingUrl: "https://www.dogtopia.com/atlanta-northbrookhaven/pricing/",
    distanceMi: 4.2,
    pricing: {
      daycare: "$42/day (1x/wk) → $99/mo unlimited",
      boarding: "$40–$85/night (enrolled pricing)",
      notes: "Membership enrollment model. Suite room $85/night non-enrolled."
    },
    services: ["Daycare", "Boarding", "Spa", "Grooming"],
    hours: "Standard daycare hours",
    rating: null,
    reviews: null,
    notes: "National franchise (Dogtopia). Membership/enrollment model creates recurring revenue and priority booking. Boarding dogs in open-play (no kennel runs).",
    color: "#9b59b6"
  },
  {
    id: "bark-board-brookhaven",
    name: "Bark & Board",
    type: "daycare-boarding",
    tier: "local-premium",
    lat: 33.8668,
    lng: -84.3369,
    address: "Brookhaven, GA 30319",
    url: "https://www.barkandboard.com/",
    pricingUrl: "https://www.barkandboard.com/rates",
    distanceMi: 4.5,
    pricing: {
      daycare: "$99/mo unlimited (intro offer)",
      boarding: "Large kennels (not crates); 28-hr rate",
      notes: "First day free. 360+ reviews."
    },
    services: ["Daycare", "Boarding", "Grooming", "Specialty Food"],
    hours: "Standard daycare hours",
    rating: null,
    reviews: 360,
    reviewSource: "Birdeye",
    reviewUrl: "https://birdeye.com/bark-and-board-brookhaven-153936656938623",
    notes: "Locally owned, 2 Atlanta locations. Known for large kennels, not crates.",
    color: "#e67e22"
  },
  {
    id: "bhv-sandy-springs",
    name: "Barking Hound Village — Sandy Springs",
    type: "daycare-boarding",
    tier: "local-chain",
    lat: 33.9387,
    lng: -84.3540,
    address: "Sandy Springs, GA",
    url: "https://www.barkinghoundvillage.com/",
    distanceMi: 6.5,
    pricing: {
      daycare: "Not listed",
      boarding: "Standard / Junior / Suite / Presidential tiers",
      notes: "Book via app"
    },
    services: ["Daycare", "Boarding", "Grooming", "Training"],
    hours: "Extended hours",
    rating: null,
    reviews: null,
    notes: "Part of BHV — 7 Atlanta locations. NO location in Chamblee/north DeKalb. Gap in market.",
    color: "#27ae60"
  },
  {
    id: "bhv-buckhead",
    name: "Barking Hound Village — Buckhead",
    type: "daycare-boarding",
    tier: "local-chain",
    lat: 33.8459,
    lng: -84.3736,
    address: "Pharr Rd NW, Atlanta GA (Buckhead)",
    url: "https://www.barkinghoundvillage.com/pharr-road-buckhead/",
    distanceMi: 7.0,
    pricing: {
      daycare: "Not listed",
      boarding: "Tiered suite model",
      notes: "Climate-controlled indoor play yards"
    },
    services: ["Daycare", "Boarding", "Grooming", "Training"],
    hours: "Extended hours",
    rating: null,
    reviews: null,
    notes: "BHV's premium Buckhead location. Indoor climate-controlled play yard.",
    color: "#27ae60"
  },
  {
    id: "bhv-cheshire",
    name: "Barking Hound Village — Cheshire Bridge",
    type: "daycare-boarding",
    tier: "local-chain",
    lat: 33.8133,
    lng: -84.3648,
    address: "Cheshire Bridge Rd NE, Atlanta GA",
    url: "https://www.barkinghoundvillage.com/",
    distanceMi: 9.0,
    pricing: { daycare: "Not listed", boarding: "Tiered suite model", notes: "" },
    services: ["Daycare", "Boarding", "Grooming", "Training"],
    hours: "Extended hours",
    rating: null,
    reviews: null,
    notes: "BHV chain location.",
    color: "#27ae60"
  },
  {
    id: "central-bark",
    name: "Central Bark Atlanta",
    type: "daycare-boarding",
    tier: "local-premium",
    lat: 33.8125,
    lng: -84.3250,
    address: "Atlanta / Brookhaven / Druid Hills",
    url: "https://www.centralbarkusa.com/atlanta/",
    distanceMi: 8.0,
    pricing: {
      daycare: "Not publicly listed",
      boarding: "Not publicly listed",
      notes: "Enrichment-focused positioning"
    },
    services: ["Enrichment Daycare", "Boarding", "Grooming"],
    hours: "Standard daycare hours",
    rating: null,
    reviews: null,
    notes: "Positioning around 'enrichment daycare' — structured activities vs. free play.",
    color: "#f39c12"
  }
];

// ============================================================
// All Primary Sources — used for citations throughout the site
// ============================================================
const SOURCES = {
  property: {
    label: "Property Listing — RealNex (Greenwood Ice Cream Factory)",
    url: "https://realnex.com/listings/860580/greenwood-ice-cream-factory",
    notes: "Source for SF, lot size, zoning, traffic count, asking price, construction details"
  },
  dekalb_tax: {
    label: "DeKalb County Tax Commissioner",
    url: "https://dekalbtax.org/property-tax",
    notes: "Property tax payment & assessment info for DeKalb County"
  },
  dekalb_tax_calc: {
    label: "DeKalb County Property Tax Calculator — SmartAsset",
    url: "https://smartasset.com/taxes/dekalb-county-georgia-property-tax-calculator",
    notes: "Millage rate reference for DeKalb/Chamblee commercial properties"
  },
  chamblee_tax: {
    label: "City of Chamblee Property Tax Info",
    url: "https://www.chambleega.com/finance/property_taxes.php",
    notes: "City of Chamblee millage and assessment info"
  },
  market_gminsights: {
    label: "U.S. Pet Daycare Market Size & Share — GM Insights",
    url: "https://www.gminsights.com/industry-analysis/us-pet-daycare-market",
    notes: "Source for $1.85B market size (2024), $4.3B projection (2034), 8.6% CAGR"
  },
  market_grandview: {
    label: "U.S. Pet Daycare Market Report — Grand View Research",
    url: "https://www.grandviewresearch.com/industry-analysis/us-pet-daycare-market-report",
    notes: "Corroborating source for market sizing"
  },
  appa_stats: {
    label: "APPA National Pet Owners Survey & Industry Stats",
    url: "https://americanpetproducts.org/industry-trends-and-stats",
    notes: "Source for dog ownership rate (45.5%), avg annual spend ($2,524)"
  },
  chamblee_demographics: {
    label: "Chamblee, GA Demographics — City-Data",
    url: "https://www.city-data.com/city/Chamblee-Georgia.html",
    notes: "Population, median age, income, racial composition"
  },
  chamblee_zip: {
    label: "30341 Zip Code Demographics — NameCensus",
    url: "https://namecensus.com/demographics/georgia/30341/",
    notes: "Median household income $75,104 for 30341"
  },
  chamblee_datausa: {
    label: "Chamblee, GA Profile — Data USA",
    url: "https://datausa.io/profile/geo/chamblee-ga",
    notes: "Median age 33.6, income, demographic breakdown"
  },
  gda_kennel_license: {
    label: "Georgia Dept. of Agriculture — Kennel Licenses",
    url: "https://agr.georgia.gov/kennel-licenses",
    notes: "State kennel licensing requirements, fees, process"
  },
  gda_kennel_info: {
    label: "Georgia Dept. of Agriculture — Kennel Information Sheet",
    url: "https://agr.georgia.gov/kennel-information-sheet",
    notes: "Facility standards, record-keeping requirements"
  },
  ga_statute: {
    label: "Georgia Code § 4-11-3 — Kennel Operator Licenses",
    url: "https://law.justia.com/codes/georgia/title-4/chapter-11/article-1/section-4-11-3/",
    notes: "Georgia Animal Protection Act statutory text"
  },
  chamblee_zoning: {
    label: "Chamblee Code of Ordinances — Base Zoning Districts",
    url: "https://library.municode.com/ga/chamblee/codes/code_of_ordinances?nodeId=PTIICOOR_APXAUNDEOR_TIT2LAUSZO_CH210BAZODI",
    notes: "VC (Village Commercial) zoning district permitted uses"
  },
  chamblee_planning: {
    label: "City of Chamblee — Planning & Development",
    url: "https://www.chambleega.com/planning_and_development/zoning.php",
    notes: "Zoning maps, development review, UDO"
  },
  staff_ratios: {
    label: "Staff-to-Dog Ratios: Best Practices — WagBar",
    url: "https://www.wagbar.com/staff-to-dog-ratios-best-practices-for-safety-in-dog-care-facilities",
    notes: "IBPSA 1:10 ratio standard, safety guidelines for group play"
  },
  startup_costs: {
    label: "Dog Daycare Startup Costs — Upmetrics",
    url: "https://upmetrics.co/startup-costs/dog-daycare",
    notes: "Buildout cost ranges, facility investment benchmarks"
  },
  rover_pricing: {
    label: "Rover — Doggy Daycare in Chamblee, GA",
    url: "https://www.rover.com/chamblee--ga--doggy-day-care/",
    notes: "Median daycare price ~$35/day in Chamblee (Sept 2025)"
  },
  dogphoria_yelp: {
    label: "DogPhoria — Yelp Reviews",
    url: "https://www.yelp.com/biz/dogphoria-chamblee",
    notes: "4.7 stars, 20 reviews, address, hours"
  },
  dogtopia_pricing: {
    label: "Dogtopia North Brookhaven — Pricing",
    url: "https://www.dogtopia.com/atlanta-northbrookhaven/pricing/",
    notes: "Full pricing: daycare plans, boarding tiers, spa"
  },
  bark_board_rates: {
    label: "Bark & Board — Rates",
    url: "https://www.barkandboard.com/rates",
    notes: "Pricing page (some data requires direct contact)"
  },
  bhv_main: {
    label: "Barking Hound Village — Atlanta's Largest Locally-Owned",
    url: "https://www.barkinghoundvillage.com/",
    notes: "7 locations, 25+ years, service overview"
  },
  pet_industry_ga: {
    label: "Georgia Economic Impact of the Pet Industry — APPA",
    url: "https://americanpetproducts.org/economic-impact/georgia",
    notes: "Georgia-specific pet industry economic data"
  }
};

const MARKET_DATA = {
  usPetDaycare: {
    market2024: 1.85,
    market2034: 4.30,
    cagr: 8.6,
    unit: "billion USD",
    source: "market_gminsights"
  },
  chamblee: {
    population: 32321,
    medianAge: 33.6,
    medianHHIncome: 75104,
    dogOwnershipRate: 0.455,
    estimatedDogHouseholds: Math.round(32321 * 0.455 * 2.5),
    source: "chamblee_demographics"
  },
  pricing: {
    daycarePerDay: { low: 25, mid: 40, high: 45, source: "rover_pricing" },
    boardingPerNight: { low: 40, mid: 65, high: 85, source: "dogtopia_pricing" },
    monthlyUnlimited: { low: 99, mid: 270, high: 400, source: "dogtopia_pricing" },
    groomingPerSession: { low: 35, mid: 50, high: 85 },
    boardAndTrain: { low: 1500, mid: 2000, high: 2500 }
  }
};

const FINANCIAL_SNAPSHOT = {
  property: {
    sf: 14612,
    acreage: 1.0,
    annualTaxes: 40000,
    status: "Family-owned — no mortgage, no rent",
    source: "property"
  },
  buildout: {
    low: 354000,
    mid: 600000,
    high: 978000,
    source: "startup_costs"
  },
  revenue: {
    year1: { low: 700000, high: 900000 },
    stabilized: { low: 1500000, high: 2100000 }
  },
  opex: {
    stabilized: { low: 580000, high: 820000 }
  },
  staffing: {
    fte: { low: 8, high: 12 },
    annualPayroll: { low: 380000, high: 580000 },
    source: "staff_ratios"
  }
};
