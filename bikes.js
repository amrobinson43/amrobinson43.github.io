/*
 * Bike geometry database for the cockpit matcher.
 *
 * Each entry is one bike (make, model, year) with per-size frame geometry:
 *   reach (mm), stack (mm), hta (head tube angle, degrees from horizontal).
 *
 * Rules:
 *   - Only bikes that have reach + stack + head tube angle are listed. Anything
 *     missing one of those three is left out, so the tool falls back to manual entry.
 *   - One entry per bike (duplicates collapsed).
 *   - Stem, spacer, and handlebar numbers are rider choices, not frame geometry,
 *     so they are not stored here. You set those yourself after picking a frame.
 *
 * Numbers are frame geometry pulled from the per-bike source URL and rounded to the
 * nearest millimetre (reach/stack) or 0.1 degree (hta). These come from a third-party
 * aggregator (bikeinsights.com); they are a good starting point but worth a spot-check
 * against the manufacturer's own geometry chart, especially the head tube angle, which
 * can vary by size.
 *
 * To add a bike: copy any entry, change make/model/year/source, and fill the sizes
 * from the manufacturer's geometry chart. Keep sizes ordered smallest to largest.
 */
window.BIKE_DB = [
  {
    make: "Van Rysel", model: "RCR Pro", year: 2024,
    source: "https://bikeinsights.com/bikes/644a1a94d73bb7001afbbd69-van-rysel-rcr?version=2024&build=pro",
    sizes: {
      "XXS": { reach: 378, stack: 509, hta: 71 },
      "XS":  { reach: 383, stack: 515, hta: 73 },
      "S":   { reach: 386, stack: 531, hta: 73 },
      "M":   { reach: 388, stack: 546, hta: 73 },
      "L":   { reach: 396, stack: 572, hta: 73 },
      "XL":  { reach: 408, stack: 596, hta: 73 }
    }
  },
  {
    make: "Specialized", model: "Tarmac SL8", year: 2024,
    source: "https://bikeinsights.com/bikes/64d218305cc094001b34f10c-specialized-bicycles-tarmac-sl8?version=2024&build=expert",
    sizes: {
      "44": { reach: 366, stack: 501, hta: 70.5 },
      "49": { reach: 375, stack: 514, hta: 71.8 },
      "52": { reach: 380, stack: 527, hta: 72.5 },
      "54": { reach: 384, stack: 544, hta: 73 },
      "56": { reach: 395, stack: 565, hta: 73.5 },
      "58": { reach: 402, stack: 591, hta: 73.5 },
      "61": { reach: 408, stack: 612, hta: 74 }
    }
  },
  {
    make: "Trek", model: "Madone SLR Gen 8", year: 2024,
    source: "https://bikeinsights.com/bikes/5afb497d4cb7640014ce45e3-trek-bikes-madone?version=2024&build=slr-gen-8",
    sizes: {
      "XS": { reach: 370, stack: 507, hta: 71.6 },
      "S":  { reach: 378, stack: 530, hta: 72.2 },
      "M":  { reach: 384, stack: 546, hta: 72.9 },
      "ML": { reach: 389, stack: 562, hta: 73.5 },
      "L":  { reach: 394, stack: 582, hta: 73.8 },
      "XL": { reach: 402, stack: 610, hta: 73.9 }
    }
  },
  {
    make: "Giant", model: "TCR Advanced SL", year: 2024,
    source: "https://bikeinsights.com/bikes/5ec58ac612391b00171718bd-giant-bicycles-tcr-advanced?version=2024&build=base",
    sizes: {
      "S":  { reach: 383, stack: 528, hta: 72.3 },
      "M":  { reach: 388, stack: 545, hta: 73.5 },
      "ML": { reach: 393, stack: 562, hta: 73 },
      "L":  { reach: 402, stack: 581, hta: 73 },
      "XL": { reach: 412, stack: 596, hta: 72.5 }
    }
  },
  {
    make: "Cannondale", model: "SuperSix EVO", year: 2023,
    source: "https://bikeinsights.com/bikes/5b48e33f73697a0014037051-cannondale-bikes-supersix-evo?version=2023&build=base",
    sizes: {
      "44": { reach: 370, stack: 505, hta: 70.9 },
      "48": { reach: 374, stack: 520, hta: 71.2 },
      "51": { reach: 378, stack: 535, hta: 71.2 },
      "54": { reach: 384, stack: 555, hta: 71.2 },
      "56": { reach: 389, stack: 575, hta: 73 },
      "58": { reach: 395, stack: 595, hta: 73 },
      "61": { reach: 403, stack: 625, hta: 73 }
    }
  },
  {
    make: "Cervélo", model: "R5", year: 2024,
    source: "https://bikeinsights.com/bikes/626f6fdb439858002590d99f-cervelo-cycles-r5?build=base&version=2024",
    sizes: {
      "48": { reach: 363, stack: 497, hta: 71 },
      "51": { reach: 371, stack: 522, hta: 72 },
      "54": { reach: 380, stack: 547, hta: 73 },
      "56": { reach: 389, stack: 572, hta: 73 },
      "58": { reach: 398, stack: 597, hta: 73 },
      "61": { reach: 407, stack: 622, hta: 73 }
    }
  },
  {
    make: "Ventum", model: "NS1", year: 2020,
    source: "https://bikeinsights.com/bikes/5e5ff9a292ca070017ea4dfb-ventum-racing-ns1?version=2020&build=base",
    sizes: {
      "XS": { reach: 365, stack: 490, hta: 71 },
      "S":  { reach: 378, stack: 510, hta: 72 },
      "M":  { reach: 388, stack: 536, hta: 73 },
      "ML": { reach: 395, stack: 552, hta: 73 },
      "L":  { reach: 405, stack: 585, hta: 73 },
      "XL": { reach: 413, stack: 604, hta: 73 }
    }
  },
  {
    make: "Ventum", model: "NS1", year: 2026,
    source: "https://bikeinsights.com/bikes/5e5ff9a292ca070017ea4dfb-ventum-racing-ns1?version=2026&build=base",
    sizes: {
      "XS": { reach: 370, stack: 493, hta: 71 },
      "S":  { reach: 378, stack: 515, hta: 72 },
      "M":  { reach: 388, stack: 541, hta: 73 },
      "ML": { reach: 397, stack: 565, hta: 73 },
      "L":  { reach: 405, stack: 590, hta: 73 },
      "XL": { reach: 413, stack: 615, hta: 73 }
    }
  },
  {
    make: "Ventum", model: "GS1", year: 2025,
    source: "https://bikeinsights.com/bikes/60b3fc4158bffe0026d6fce9-ventum-racing-gs1?version=2025&build=frameset (geometry unchanged from 2022)",
    sizes: {
      "XS": { reach: 369, stack: 506, hta: 69 },
      "S":  { reach: 375, stack: 522, hta: 69.5 },
      "M":  { reach: 384, stack: 545, hta: 70 },
      "ML": { reach: 393, stack: 570, hta: 71 },
      "L":  { reach: 402, stack: 589, hta: 72 },
      "XL": { reach: 411, stack: 604, hta: 72.5 }
    }
  },
  {
    make: "Factor", model: "Ostro VAM", year: 2024,
    source: "https://bikeinsights.com/bikes/6046c9288b335100177c4c7f-factor-bikes-ostro-vam?version=2024&build=base",
    sizes: {
      "45": { reach: 360, stack: 502, hta: 71.1 },
      "49": { reach: 370, stack: 503, hta: 71.1 },
      "52": { reach: 376, stack: 523, hta: 72.5 },
      "54": { reach: 384, stack: 542, hta: 72.5 },
      "56": { reach: 392, stack: 565, hta: 73.3 },
      "58": { reach: 401, stack: 587, hta: 73.3 },
      "61": { reach: 409, stack: 611, hta: 73.3 }
    }
  },
  {
    make: "BMC", model: "Teammachine R 01", year: 2024,
    source: "https://bikeinsights.com/bikes/6601449fc40586001a71d21d-bmc-switzerland-teammachine-r?version=2024&build=base",
    sizes: {
      "47": { reach: 368, stack: 504, hta: 71.5 },
      "51": { reach: 378, stack: 528, hta: 71.5 },
      "54": { reach: 387, stack: 548, hta: 72.3 },
      "56": { reach: 393, stack: 563, hta: 72.3 },
      "58": { reach: 402, stack: 582, hta: 72.3 },
      "61": { reach: 409, stack: 606, hta: 72.3 }
    }
  },
  {
    make: "BMC", model: "Roadmachine", year: 2024,
    source: "https://bikeinsights.com/bikes/5d10d300818fde001707e313-bmc-switzerland-roadmachine?version=2024&build=base",
    sizes: {
      "47": { reach: 370, stack: 525, hta: 71.4 },
      "51": { reach: 379, stack: 550, hta: 71.4 },
      "54": { reach: 383, stack: 570, hta: 72.2 },
      "56": { reach: 388, stack: 595, hta: 72.2 },
      "58": { reach: 393, stack: 620, hta: 72.2 },
      "61": { reach: 398, stack: 645, hta: 72.2 }
    }
  },
  {
    make: "BMC", model: "Trackmachine 01", year: 2020,
    source: "https://bikeinsights.com/bikes/5d1fb658c9e24d0017f62b7b-bmc-switzerland-trackmachine-01?version=2019&build=frameset",
    sizes: {
      "S": { reach: 390, stack: 471, hta: 72 },
      "M": { reach: 408, stack: 506, hta: 72 },
      "L": { reach: 430, stack: 544, hta: 72 }
    }
  },
  {
    make: "Orbea", model: "Orca", year: 2024,
    source: "https://bikeinsights.com/bikes/5df941a2af64310017ada3cb-orbea-orca?version=2024&build=omx",
    sizes: {
      "47": { reach: 370, stack: 506, hta: 71 },
      "49": { reach: 375, stack: 515, hta: 71.5 },
      "51": { reach: 380, stack: 533, hta: 72.2 },
      "53": { reach: 385, stack: 552, hta: 72.8 },
      "55": { reach: 391, stack: 572, hta: 73 },
      "57": { reach: 398, stack: 590, hta: 73.2 },
      "60": { reach: 404, stack: 616, hta: 73.2 }
    }
  },
  {
    make: "Orbea", model: "Orca Aero", year: 2023,
    source: "https://bikeinsights.com/bikes/5e9744465396a50017429b7b-orbea-orca-aero?version=2023&build=m31-eltd",
    sizes: {
      "47": { reach: 370, stack: 496, hta: 71 },
      "49": { reach: 376, stack: 505, hta: 71.5 },
      "51": { reach: 380, stack: 523, hta: 72.2 },
      "53": { reach: 385, stack: 542, hta: 72.8 },
      "55": { reach: 391, stack: 562, hta: 73 },
      "57": { reach: 398, stack: 580, hta: 73.2 },
      "60": { reach: 404, stack: 606, hta: 73.2 }
    }
  },
  {
    make: "Orbea", model: "Orca Aero", year: 2027,
    source: "https://bikeinsights.com/bikes/5e9744465396a50017429b7b-orbea-orca-aero",
    sizes: {
      "47": { reach: 370, stack: 495, hta: 70.8 },
      "49": { reach: 375, stack: 504, hta: 71.3 },
      "51": { reach: 380, stack: 520, hta: 72.2 },
      "53": { reach: 385, stack: 540, hta: 72.8 },
      "55": { reach: 390, stack: 560, hta: 73 },
      "57": { reach: 397, stack: 578, hta: 73.2 },
      "60": { reach: 404, stack: 604, hta: 73.2 }
    }
  },
  {
    make: "Specialized", model: "Tarmac SL9", year: 2026,
    source: "bikeinsights.com (SL9 shares the Tarmac SL8 frame geometry: reach/stack identical, angles carried over)",
    sizes: {
      "44": { reach: 366, stack: 501, hta: 70.5 },
      "49": { reach: 375, stack: 514, hta: 71.8 },
      "52": { reach: 380, stack: 527, hta: 72.5 },
      "54": { reach: 384, stack: 544, hta: 73 },
      "56": { reach: 395, stack: 565, hta: 73.5 },
      "58": { reach: 402, stack: 591, hta: 73.5 },
      "61": { reach: 408, stack: 612, hta: 74 }
    }
  },
  {
    make: "Cannondale", model: "SuperSix EVO", year: 2026,
    source: "https://bikeinsights.com/bikes/5b48e33f73697a0014037051-cannondale-bikes-supersix-evo?version=2026&build=base",
    sizes: {
      "44": { reach: 373, stack: 495, hta: 70.9 },
      "48": { reach: 376, stack: 508, hta: 71.2 },
      "50": { reach: 379, stack: 520, hta: 71.2 },
      "52": { reach: 383, stack: 532, hta: 71.2 },
      "54": { reach: 387, stack: 545, hta: 71.2 },
      "56": { reach: 393, stack: 565, hta: 73 },
      "58": { reach: 398, stack: 585, hta: 73 },
      "61": { reach: 406, stack: 615, hta: 73 }
    }
  },
  {
    make: "Factor", model: "Ostro VAM", year: 2021,
    source: "https://bikeinsights.com/bikes/6046c9288b335100177c4c7f-factor-bikes-ostro-vam?version=2021&build=base",
    sizes: {
      "49": { reach: 370, stack: 503, hta: 71.7 },
      "52": { reach: 376, stack: 523, hta: 72.5 },
      "54": { reach: 384, stack: 542, hta: 72.5 },
      "56": { reach: 392, stack: 565, hta: 73.3 },
      "58": { reach: 401, stack: 587, hta: 73.3 }
    }
  },
  {
    make: "Factor", model: "One", year: 2026,
    source: "https://bikeinsights.com/compare?geometries=693a978c85491b001b673fa6 (2026 Factor One; steering geometry held constant across sizes)",
    sizes: {
      "47": { reach: 390, stack: 503, hta: 72.5 },
      "52": { reach: 396, stack: 523, hta: 73.3 },
      "54": { reach: 404, stack: 542, hta: 73.3 },
      "56": { reach: 412, stack: 565, hta: 73.3 },
      "58": { reach: 421, stack: 587, hta: 73.3 }
    }
  },
  {
    make: "Tavelo", model: "Arow", year: 2025,
    source: "https://bikeinsights.com/bikes/6669ccefb8e6d4001be251d3-tavelo-arow",
    sizes: {
      "XS":  { reach: 365, stack: 517, hta: 70.8 },
      "S":   { reach: 372, stack: 526, hta: 71.4 },
      "M":   { reach: 380, stack: 538, hta: 72 },
      "L":   { reach: 388, stack: 554, hta: 72.8 },
      "XL":  { reach: 396, stack: 576, hta: 73 },
      "XXL": { reach: 407, stack: 604, hta: 73 }
    }
  },
  {
    make: "Tavelo", model: "Grow", year: 2026,
    source: "https://bikeinsights.com/bikes/6973ab68acd000001aa810a8-tavelo-grow",
    sizes: {
      "XS":  { reach: 368, stack: 530, hta: 70.5 },
      "S":   { reach: 375, stack: 540, hta: 71 },
      "M":   { reach: 385, stack: 558, hta: 71 },
      "L":   { reach: 395, stack: 579, hta: 71.3 },
      "XL":  { reach: 406, stack: 603, hta: 71.3 },
      "XXL": { reach: 414, stack: 627, hta: 71.6 }
    }
  },
  {
    make: "Trek", model: "Checkpoint ALR Gen 3", year: 2026,
    source: "https://bikeinsights.com/bikes/5afb51844cb7640014ce4612-trek-bikes-checkpoint?version=2026&build=alr-gen-3",
    sizes: {
      "XS": { reach: 380, stack: 545, hta: 71.2 },
      "S":  { reach: 385, stack: 566, hta: 71.6 },
      "M":  { reach: 391, stack: 589, hta: 71.8 },
      "ML": { reach: 397, stack: 608, hta: 72.5 },
      "L":  { reach: 402, stack: 630, hta: 72.3 },
      "XL": { reach: 408, stack: 650, hta: 72.6 }
    }
  }
];
