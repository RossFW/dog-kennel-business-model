# data/ — Raw Data Layer

This folder holds structured, flat-file data for use in Excel, analysis tools, or as source-of-record for the site.

## Files

### competitors.csv
Every identified competitor with all known fields. Empty cells = data gap / not yet found.

**Key columns:**
- `pricing_confirmed` — was pricing verified from an official source or screenshot?
- `data_confidence` — High / Medium / Low based on source quality
- `drive_*_min` — estimated drive time from 4829 Peachtree Blvd under different traffic conditions

**Open pricing gaps (as of March 2026):**
- Puppy Haven Brookhaven — call 404-885-8788
- Barking Hound Village — book via app, pricing not public
- Bark & Board — intro pricing known, standard rates unclear
- Central Bark — not publicly listed

### demand-catchment.csv
Spatial demand data: apartment complexes, zip code demographics, estimated dog-owning households by zone.

**Key insight:** 971 apartment units within 0.5 miles of the property, all pet-friendly, all 2017–2024. This cluster alone could generate ~47 dogs/day in daycare demand.

## How This Relates to Other Files

```
data/*.csv           ← raw facts (this folder)
    ↓ analysis
docs/*.md            ← what does this mean?
    ↓ visualization
site/js/data.js      ← rendered on GitHub Pages site
```

The site's data.js is maintained separately and may have more detail (lat/lng, colors, etc.) than the CSV files. Treat CSV as the "research record" and data.js as the "site record."
