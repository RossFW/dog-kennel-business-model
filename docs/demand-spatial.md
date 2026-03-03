# Demand Spatial Analysis — Who Lives Where & What's the Dog Population

*Raw data: see [data/demand-catchment.csv](../data/demand-catchment.csv)*

---

## The Apartment Cluster on Peachtree Blvd — Immediate Demand Signal

Three large, new apartment complexes sit **on the same road, within 0.4–0.5 miles of our property**. All are explicitly pet-friendly and advertise dog-specific amenities.

| Complex | Address | Units | Built | Dog Amenity |
|---|---|---|---|---|
| Windsor Parkview | 5070 Peachtree Blvd | 303 | 2017 | Pet-friendly, $500 dog fee |
| The Oliver Chamblee | 5193 Peachtree Blvd | 283 | 2017 | **Pup Wash station** |
| Manor Chamblee | 5180 Peachtree Blvd | 385 | 2024 | **Pet spa + dog run on-site** |
| Attiva Peachtree (55+) | 5255 Peachtree Blvd | 205 | 2019 | Dog-friendly (senior demo) |

**971 apartment units** (excluding 55+) within a 0.5-mile radius, all built 2017–2024, all explicitly dog-friendly.

### Why Apartment Dogs Are Better Daycare Customers

Apartment dogs use daycare at **significantly higher rates** than suburban homeowners with yards:
- No yard = dog needs structured exercise and socialization
- Owner gone 8–10 hrs/day = dog left alone in small unit = behavior problems if no daycare
- Young professionals (Chamblee median age: 33.6) have income to spend but no yard
- The apartment complex *already advertising dog amenities* means the building is actively marketing to dog owners

### Demand Estimate — Peachtree Blvd Apartment Cluster

| Variable | Estimate | Basis |
|---|---|---|
| Apartment units within 0.5 mi | 971 | Confirmed unit counts |
| % with dogs | ~40% | Lower than 45.5% national (apartment weight/breed restrictions) |
| Estimated dog-owning HH | **~388** | 971 × 40% |
| % using professional daycare | ~35% (apartment owners higher than national ~25%) | Apartment owners can't "just let them out" |
| Potential daycare customers from this cluster alone | **~136 households** | 388 × 35% |
| Days/week they use daycare | ~2.5 days avg | Part-time users mix |
| Average daily demand contribution | **~47 dogs/day** | 136 × 2.5 / 7.2 working days |

> **Implication:** The apartment cluster on our same street could represent ~47 dogs/day in stable demand — nearly half our breakeven target (~70–80 dogs/day) without drawing a single customer from the broader zip codes.

---

## Broader Catchment Zones

| Zone | Est. Households | Est. Dog HH (40%) | Median HH Income | Catchment Relevance |
|---|---|---|---|---|
| 30341 (Chamblee core) | 13,850 | ~5,540 | $75,104 | Primary — same zip |
| 30319 (Brookhaven) | 18,200 | ~7,280 | $95,000+ | Secondary — higher income, 3–4 mi |
| 30338 (Dunwoody) | 20,100 | ~8,040 | $120,000+ | Tertiary — 4–5 mi, high spend |
| 30340 (Doraville/Tucker) | 8,600 | ~3,440 | Mixed | Tertiary — east/northeast |

**Total addressable dog-owning households within 5 miles: ~24,300**

---

## Questions We Need to Answer (Research Gaps)

### Pricing & Dog Ownership by Apartment Complex
- [ ] Do Windsor Parkview, The Oliver, Manor Chamblee have weight limits that exclude large dogs?
  - If 35-lb limit → mostly small breeds → smaller kennel sizes → affects facility layout
  - If no limit → full range of breeds → more typical daycare mix
- [ ] Can we get occupancy rates? (% of 971 units actually occupied)
- [ ] Do any of these buildings ALREADY offer "in-building" pet care or have a partnership?

### Buford Highway Corridor
The Buford Highway corridor runs parallel to Peachtree Blvd, about 1 mile east. It has:
- Dense apartment housing (many older, lower-cost complexes)
- Significant immigrant population (30340, 30341 zip overlap)
- Dog ownership rates in recent immigrant communities often differ from national average
- This population is less likely to be a daycare customer (lower income, different cultural norms around pet care spending)
- **However:** this population DOES use boarding for travel (many travel internationally) — potential boarding demand

### To Research:
- [ ] How many total apartment units exist along Peachtree Blvd between 4829 and I-285?
- [ ] Pet ownership rates in Chamblee's immigrant-heavy Buford Hwy submarket (likely different from 30341 median)
- [ ] Is there a dense residential neighborhood (SFH) between our property and Brookhaven?
- [ ] DeKalb County dog license registration data (if public) — would give actual dog population estimate

---

## What the User Provided (Screenshots)

The user conducted Google Maps visual sweeps and shared screenshots showing:
1. Competitor density across the 5-mile catchment
2. Specific named businesses previously missed by web search
3. DogPhoria's boarding pricing page ($65/$75/night)

**Key methodological lesson:** Google Maps visual search found ~6 competitors missed by keyword web searches. For geographic demand analysis, visual/spatial search always beats keyword search.

---

## Traffic as a Demand Proxy

**35,000+ vehicles/day on Peachtree Blvd** (GDOT, via property listing)

This is the same corridor these apartment complexes are on. The commuter flow:
- Northbound morning (heading toward I-285/Dunwoody/Perimeter): dog owners heading to work
- Our property at 4829 is a **natural right-turn stop** on the way out of the apartment cluster
- Evening southbound: pick up on the way home

This is how Starbucks thinks about location. Being at a logical inflection point on a commute route is worth more than any marketing spend.

---

## Recommended Next Data Pulls (User Can Help)

1. **Pet weight limits** for Windsor Parkview, The Oliver, Manor Chamblee — affects breed mix
2. **Any other apartment complexes** south of 4829 Peachtree toward Brookhaven (in the 4829–4400 range) — user might see these on Google Maps better than web search
3. **Dekalb County dog licenses** — DeKalb Animal Services may have public data
4. **Chamblee residential neighborhoods** — are there SFH neighborhoods east of Peachtree (between us and Buford Hwy) with family homeowners + yards + dogs?
