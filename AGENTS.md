# Dog Kennel Business Model — Navigation

**Property:** 4829 Peachtree Rd (Peachtree Blvd), Chamblee, GA 30341
**Former use:** Greenwood Ice Cream Factory (closed 2022)
**Owner:** Family-owned (father) — no mortgage, no rent. ~$40K/yr property taxes.
**Goal:** Evaluate viability of converting to a dog kennel / daycare facility

## Data Layer (raw facts → open in Excel)

- [data/competitors.csv](data/competitors.csv) — All 11 competitors, all known fields, empty cells = pricing gaps
- [data/demand-catchment.csv](data/demand-catchment.csv) — Apartment complexes, zip demographics, dog HH estimates
- [data/README.md](data/README.md) — How the data layer relates to docs/ and site/

## Analysis Layer (docs/)

- [docs/property.md](docs/property.md) — Physical specs, zoning, property taxes, ownership advantage
- [docs/competitive-analysis.md](docs/competitive-analysis.md) — Geospatial competitor map, pricing, service matrix (references data/competitors.csv)
- [docs/demand-spatial.md](docs/demand-spatial.md) — Apartment density, dog HH estimates, traffic as demand proxy, research gaps
- [docs/market.md](docs/market.md) — Market sizing, CAGR explained, demographics, demand drivers
- [docs/financials.md](docs/financials.md) — Startup costs, revenue model, unit economics, projections
- [docs/regulations.md](docs/regulations.md) — State/county/city licensing, GDA requirements, zoning, timeline
- [docs/operations.md](docs/operations.md) — Daycare vs. boarding, daily schedule, staffing, facility layout, KPIs

## Website (visual layer)

- [site/index.html](site/index.html) — GitHub Pages site with interactive Leaflet competitor map + drive times
- Live: https://rossfw.github.io/dog-kennel-business-model/
- See [site/README.md](site/README.md) for GitHub Pages deployment instructions

## Key Demand Signal (NEW)
**971 pet-friendly apartment units on same road within 0.5 miles** (Windsor Parkview 303 + The Oliver 283 + Manor Chamblee 385, all built 2017–2024). Estimated ~388 dog-owning HH. Apartment dogs use daycare at higher rates (no yard). This cluster alone could generate ~47 dogs/day without broader marketing.

## Key Numbers (as of March 2026)
- Property taxes: **~$40K/year** (family owns — sunk cost regardless)
- Building: **14,612 SF** on **1.0 acre** | Zoning: **VC (Village Commercial)**
- Daily traffic: **35,000+ vehicles/day** on Peachtree Blvd
- Chamblee median HH income: **~$75-82K** (catchment extends to $120K+)
- Market daycare rate: **$35-45/dog/day**
- US pet daycare market CAGR: **8.6%** ($1.85B → $4.3B by 2034)
- Est. buildout: **~$600K** (range $354K–$978K)
- Stabilized revenue potential: **$1.5M–$2.1M/yr**

## Biggest Open Questions
1. Does VC zoning allow kennel/boarding? → Call Chamblee Planning: (770) 986-5010
2. Floor drain cost into 1974 slab? → Get contractor bid
3. MARTA noise impact on dogs / outdoor yard?
4. Opportunity cost: lease to commercial tenant (~$320K/yr NNN) vs. operate kennel
