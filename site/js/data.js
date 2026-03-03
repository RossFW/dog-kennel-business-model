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
    driveTime: { offPeak: "4–6 min", amRush: "6–8 min", pmRush: "8–12 min", note: "Same neighborhood — Peachtree Blvd corridor" },
    pricing: {
      daycare: "$35/day",
      boarding: "$65/night (standard 5×5 suite) · $75/night (luxury 5×8 suite)",
      notes: "Multi-dog discounts: 2 dogs $115/night, 3 dogs $180/night. All boarding includes daycare. $25 late pickup (after 12pm), $38 re-eval fee."
    },
    services: ["Daycare", "Boarding", "Webcams", "Playgroups"],
    hours: "M–F 7:30am–7pm | Sat 10am–3:30pm | Sun 4–6pm",
    rating: 4.7,
    reviews: 20,
    reviewSource: "Yelp",
    notes: "Closest facility competitor — same Peachtree corridor, 1 mile. Limited Sunday hours (4–6pm only) = clear gap. Boarding pricing confirmed: $65–75/night.",
    color: "#c0392b"
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
    driveTime: { offPeak: "2–3 min", amRush: "3–4 min", pmRush: "4–5 min", note: "Same street — negligible traffic impact" },
    pricing: {
      daycare: "N/A",
      boarding: "Not listed",
      notes: "Medical-grade boarding only; not a true daycare competitor"
    },
    services: ["Veterinary", "Medical Boarding"],
    hours: "Standard vet hours",
    rating: null,
    reviews: null,
    notes: "On same road, 0.5 mi. Medical boarding niche — not direct daycare competition. Potential referral partner.",
    color: "#2980b9"
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
    driveTime: { offPeak: "15–18 min", amRush: "25–35 min", pmRush: "30–45 min", note: "Via Peachtree Rd + Ashford Dunwoody — heavy rush hour corridor" },
    pricing: {
      daycare: "$42/day (1x/wk) → $99/mo unlimited",
      boarding: "$40–$85/night (enrolled pricing)",
      notes: "Membership enrollment model. Suite room $85/night non-enrolled."
    },
    services: ["Daycare", "Boarding", "Spa", "Grooming"],
    hours: "Standard daycare hours",
    rating: null,
    reviews: null,
    notes: "National franchise (Dogtopia). Membership/enrollment model creates recurring revenue. Boarding dogs in open-play (no kennel runs). PM rush drive = 30–45 min from our property.",
    color: "#c0392b"
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
    driveTime: { offPeak: "14–18 min", amRush: "25–35 min", pmRush: "30–45 min", note: "South on Peachtree Rd through Brookhaven — gridlock at 5–7pm" },
    pricing: {
      daycare: "$37/day full · $25/half-day · 10-pack $32.50/day · 20-pack $30.50/day",
      boarding: "$50/night standard · $60/night luxury (webcam) · $70/night presidential",
      notes: "$99 unlimited first 30 days (intro). Add-ons: Special Treat $5, Enrichment $10–20, Private Care +$15/day. Climate-controlled private rooms; Luxury & Presidential include webcam."
    },
    services: ["Daycare", "Boarding", "Grooming", "Retail"],
    hours: "Standard daycare hours",
    rating: null,
    reviews: 360,
    reviewSource: "Birdeye",
    reviewUrl: "https://birdeye.com/bark-and-board-brookhaven-153936656938623",
    notes: "Full pricing confirmed from website (March 2026). 2 Atlanta locations. Walk-up $37/day, volume down to $30.50. Boarding $50–70 with upsell add-ons. PM rush = 30–45 min.",
    color: "#c0392b"
  },
  {
    id: "puppy-haven-brookhaven",
    name: "Puppy Haven Brookhaven",
    type: "daycare-boarding",
    tier: "local-premium",
    lat: 33.8600,
    lng: -84.3420,
    address: "2740 Caldwell Rd NE, Brookhaven GA 30319",
    url: "https://www.puppyhaven.com/locations/brookhaven/",
    distanceMi: 3.8,
    driveTime: { offPeak: "12–16 min", amRush: "22–30 min", pmRush: "28–40 min", note: "South on Peachtree then west — moderate surface-street congestion" },
    pricing: {
      daycare: "$44.95/day (group) · $49.95/day (private 1-on-1)",
      boarding: "$49.95/night base · add Bronze $24.95 (7am–1pm play) · Silver $29.95 (all-day play) · Gold $39.95 (all-day + treat) — max $89.90/night all-in",
      notes: "Tiered upsell model: overnight base + optional day package. Evaluation: $29.95 (first boarding night free). Rewards points program."
    },
    services: ["Daycare", "Boarding", "Grooming", "Training"],
    hours: "M–Th 7am–7:30pm | F 7am–7pm | Sat 8am–4pm | Sun 12pm–7pm",
    rating: null,
    reviews: 125,
    reviewSource: "Yelp",
    reviewUrl: "https://www.yelp.com/biz/puppy-haven-brookhaven-brookhaven",
    notes: "Pricing confirmed via phone call (March 2026). Group daycare $44.95/day = above-market rate. Smart upsell: sell the overnight cheap ($49.95), then upsell day activities. Multi-location (Buckhead + Chastain). 125+ Yelp reviews.",
    color: "#c0392b"
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
    driveTime: { offPeak: "20–25 min", amRush: "35–50 min", pmRush: "45–60 min", note: "Via I-285 W or Peachtree Rd — worst during PM rush" },
    pricing: {
      daycare: "Not listed",
      boarding: "Standard / Junior / Suite / Presidential tiers",
      notes: "Book via app"
    },
    services: ["Daycare", "Boarding", "Grooming", "Training"],
    hours: "Extended hours",
    rating: null,
    reviews: null,
    notes: "Part of BHV — 7 Atlanta locations. NO location in Chamblee/north DeKalb. PM rush drive = 45–60 min from our property.",
    color: "#c0392b"
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
    driveTime: { offPeak: "22–30 min", amRush: "40–55 min", pmRush: "50–70 min", note: "Peachtree Rd Buckhead corridor notorious for PM gridlock" },
    pricing: {
      daycare: "Not listed",
      boarding: "Tiered suite model",
      notes: "Climate-controlled indoor play yards"
    },
    services: ["Daycare", "Boarding", "Grooming", "Training"],
    hours: "Extended hours",
    rating: null,
    reviews: null,
    notes: "BHV's premium Buckhead location. Indoor climate-controlled play yard. PM rush = 50–70 min from Chamblee.",
    color: "#c0392b"
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
    driveTime: { offPeak: "28–38 min", amRush: "50–65 min", pmRush: "60–80 min", note: "Longest drive — Cheshire Bridge congested day and night" },
    pricing: { daycare: "Not listed", boarding: "Tiered suite model", notes: "" },
    services: ["Daycare", "Boarding", "Grooming", "Training"],
    hours: "Extended hours",
    rating: null,
    reviews: null,
    notes: "BHV chain location. Effectively 60–80 min round trip during PM rush for Chamblee residents.",
    color: "#c0392b"
  },
  {
    id: "camp-run-a-mutt",
    name: "Camp Run-A-Mutt Dunwoody",
    type: "daycare-boarding",
    tier: "franchise",
    lat: 33.9272,
    lng: -84.3080,
    address: "5486 Chamblee Dunwoody Rd, Suite 16C, Dunwoody GA 30338",
    url: "https://www.camprunamutt.com/dunwoody/",
    distanceMi: 4.5,
    driveTime: { offPeak: "12–16 min", amRush: "20–28 min", pmRush: "25–35 min", note: "Via Chamblee Tucker Rd + Chamblee Dunwoody Rd — moderate congestion" },
    pricing: {
      daycare: "$43/day · $38.80 (5-day pkg) · ~$19.67/day unlimited",
      boarding: "$65/night standard · $75/night holiday",
      notes: "No Sunday daycare (boarding pickup 10am–3pm only)."
    },
    services: ["Daycare", "Boarding", "Grooming", "Training", "Cage-Free"],
    hours: "M–F 7am–7pm | Sat 8am–4pm | Sun CLOSED (boarding pickup only)",
    rating: null,
    reviews: null,
    notes: "National franchise. 100% cage-free, Muttcam livestream. Pricing confirmed. No Sunday daycare = gap for our facility.",
    color: "#c0392b"
  },
  {
    id: "atlanta-pet-resort-dunwoody",
    name: "Atlanta Pet Resort — Dunwoody",
    type: "daycare-boarding",
    tier: "local-premium",
    lat: 33.9310,
    lng: -84.3120,
    address: "4343 Dunwoody Park, Suite G, Dunwoody GA 30338",
    url: "https://www.atlpetdunwoody.com/",
    distanceMi: 5.0,
    driveTime: { offPeak: "14–18 min", amRush: "22–30 min", pmRush: "28–38 min", note: "Via Chamblee Tucker Rd — same corridor as Camp Run-A-Mutt" },
    pricing: {
      daycare: "$32/day full · $20/half-day",
      boarding: "From $51/night",
      notes: "Puppy socialization classes. Sat hours 10am–2pm only."
    },
    services: ["Daycare", "Boarding", "Grooming", "Training", "Pet Sitting"],
    hours: "M–F 7am–7pm | Sat 10am–2pm | Sun 12pm–6pm",
    rating: null,
    reviews: null,
    notes: "Value pricing ($32/day daycare). Limited Saturday hours (10am–2pm). Pricing confirmed.",
    color: "#c0392b"
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
    driveTime: { offPeak: "25–32 min", amRush: "45–60 min", pmRush: "50–65 min", note: "South on Peachtree through multiple congested zones" },
    pricing: {
      daycare: "Not publicly listed",
      boarding: "Not publicly listed",
      notes: "Enrichment-focused positioning"
    },
    services: ["Enrichment Daycare", "Boarding", "Grooming"],
    hours: "Standard daycare hours",
    rating: null,
    reviews: null,
    notes: "Positioning around 'enrichment daycare' — structured activities vs. free play. Rush drive = 50–65 min.",
    color: "#c0392b"
  },
  {
    id: "shaggy-and-scrub",
    name: "Shaggy and Scrub LLC",
    type: "daycare-boarding",
    tier: "micro-operator",
    lat: 33.9042,
    lng: -84.2792,
    address: "2300 Global Forum Blvd, Doraville GA",
    url: "https://shaggyandscrubllc.com/",
    reviewUrl: "https://www.yelp.com/biz/shaggy-and-scrub-doraville",
    distanceMi: 1.8,
    driveTime: { offPeak: "7–9 min", amRush: "10–14 min", pmRush: "12–16 min", note: "Via Peachtree Blvd north to Doraville — short surface street run" },
    pricing: {
      daycare: "Not listed (call for rates)",
      boarding: "Not listed (call for rates)",
      notes: "Individual operator. Accepts Venmo/Apple Pay/Cash. Meet & greet required. $10 late fee."
    },
    services: ["Daycare", "Boarding", "Dog Walking", "Grooming"],
    hours: "7 days/week",
    rating: null,
    reviews: null,
    notes: "Individual operator (est. 2022). Small-scale, home/suite-based — NOT facility-level competition, but serves same catchment and is open 7 days. Closest competitor with Sunday availability.",
    color: "#95a5a6"
  },
  {
    id: "camp-woof-tucker",
    name: "Camp Woof Tucker",
    type: "daycare-boarding",
    tier: "local-chain",
    lat: 33.8488,
    lng: -84.1872,
    address: "4143 Hugh Howell Rd, Tucker GA 30084",
    url: "https://www.campwoof.com/camp-woof-tucker",
    distanceMi: 6.5,
    driveTime: { offPeak: "20–25 min", amRush: "28–38 min", pmRush: "32–42 min", note: "East via I-285 or surface streets — serves Tucker/Stone Mountain catchment" },
    pricing: {
      daycare: "$26/day full · $20/half-day (6 hrs) · +$20 sibling · $10/dog weekends 9am–5pm",
      boarding: "$45/night (1st dog) · $35/night (sibling sharing kennel)",
      notes: "Boarding includes full day daycare if dogs meet group play requirements. Volume daycare discounts available (call). Long-stay boarding: $3 off/night (8–14 nights), $5 off/night (15+). Baths from $20. $15 late fee after 6pm. Rates effective March 2025."
    },
    services: ["Daycare", "Boarding"],
    hours: "M–F 7am–7pm | Sat 9am–6pm | Sun 9am–6pm",
    rating: null,
    reviews: null,
    notes: "Full pricing confirmed from website (March 2026). CHEAPEST daycare in market at $26/day — $6 less than Atlanta Pet Resort ($32). Multi-location (Tucker + Norcross + Toco Hills). Full Sunday hours (9am–6pm). 6.5 mi east.",
    color: "#c0392b"
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
  camp_run_mutt: {
    label: "Camp Run-A-Mutt Dunwoody — Pricing & Info",
    url: "https://www.camprunamutt.com/dunwoody/",
    notes: "Daycare $43/day single, $65/night boarding, cage-free, Muttcam, grooming"
  },
  atlanta_pet_resort: {
    label: "Atlanta Pet Resort — Dunwoody",
    url: "https://www.atlpetdunwoody.com/",
    notes: "Daycare $32/day, boarding from $51/night"
  },
  puppy_haven_brookhaven: {
    label: "Puppy Haven — Brookhaven (Yelp)",
    url: "https://www.yelp.com/biz/puppy-haven-brookhaven-brookhaven",
    notes: "125+ reviews, 2740 Caldwell Rd NE, Brookhaven GA 30319"
  },
  dekalb_animal: {
    label: "DeKalb County Animal Services",
    url: "https://www.dekalbcountyga.gov/animal-services/home",
    notes: "County animal control, shelter, ordinance enforcement"
  },
  shaggy_scrub: {
    label: "Shaggy and Scrub LLC — Yelp",
    url: "https://www.yelp.com/biz/shaggy-and-scrub-doraville",
    notes: "Individual operator, 2300 Global Forum Blvd Doraville, open 7 days, daycare/boarding/grooming/walking"
  },
  camp_woof_tucker: {
    label: "Camp Woof Tucker — Pricing & Info",
    url: "https://www.campwoof.com/camp-woof-tucker",
    notes: "4143 Hugh Howell Rd Tucker GA, $45/night boarding, open Sunday 9am-6pm, 3 Atlanta locations"
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
