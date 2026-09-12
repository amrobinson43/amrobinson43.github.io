/*
 * Bike geometry database for the cockpit matcher.
 *
 * Each entry is one bike (make, model, year) with per-size frame geometry:
 *   reach (mm), stack (mm), hta (head tube angle, degrees from horizontal).
 *   Optional, used by the whole-bike view: sta (seat tube angle deg),
 *   cs (chainstay mm), wb (wheelbase mm), drop (bottom bracket drop mm).
 *   A size without cs/wb/drop is drawn with just its stack and reach.
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
      "XXS": { reach: 378, stack: 509, hta: 71, sta: 75.5, cs: 410, wb: 980, drop: 73, st: 453, ht: 109 },
      "XS":  { reach: 383, stack: 515, hta: 73, sta: 74, cs: 410, wb: 978, drop: 70, st: 463, ht: 114 },
      "S":   { reach: 386, stack: 531, hta: 73, sta: 74, cs: 410, wb: 979, drop: 67, st: 473, ht: 131 },
      "M":   { reach: 388, stack: 546, hta: 73, sta: 73.5, cs: 410, wb: 986, drop: 67, st: 483, ht: 147 },
      "L":   { reach: 396, stack: 572, hta: 73, sta: 73.5, cs: 410, wb: 1002, drop: 67, st: 513, ht: 174 },
      "XL":  { reach: 408, stack: 596, hta: 73, sta: 73.5, cs: 410, wb: 1022, drop: 67, st: 543, ht: 199 }
    }
  },
  {
    make: "Specialized", model: "Tarmac SL8", year: 2024,
    source: "https://bikeinsights.com/bikes/64d218305cc094001b34f10c-specialized-bicycles-tarmac-sl8?version=2024&build=expert",
    sizes: {
      "44": { reach: 366, stack: 501, hta: 70.5, sta: 75.5, cs: 410, wb: 970, drop: 74, st: 433, ht: 99 },
      "49": { reach: 375, stack: 514, hta: 71.8, sta: 75.5, cs: 410, wb: 973, drop: 74, st: 445, ht: 109 },
      "52": { reach: 380, stack: 527, hta: 72.5, sta: 74, cs: 410, wb: 975, drop: 74, st: 456, ht: 120 },
      "54": { reach: 384, stack: 544, hta: 73, sta: 74, cs: 410, wb: 978, drop: 72, st: 473, ht: 137 },
      "56": { reach: 395, stack: 565, hta: 73.5, sta: 73.5, cs: 410, wb: 991, drop: 72, st: 494, ht: 157 },
      "58": { reach: 402, stack: 591, hta: 73.5, sta: 73.5, cs: 410, wb: 1006, drop: 72, st: 515, ht: 184 },
      "61": { reach: 408, stack: 612, hta: 74, sta: 73, cs: 410, wb: 1013, drop: 72, st: 545, ht: 204 }
    }
  },
  {
    make: "Trek", model: "Madone SLR Gen 8", year: 2024,
    source: "https://bikeinsights.com/bikes/5afb497d4cb7640014ce45e3-trek-bikes-madone?version=2024&build=slr-gen-8",
    sizes: {
      "XS": { reach: 370, stack: 507, hta: 71.6, sta: 73.8, cs: 410, wb: 971, drop: 72, st: 404, ht: 100 },
      "S":  { reach: 378, stack: 530, hta: 72.2, sta: 73.8, cs: 410, wb: 976, drop: 72, st: 440, ht: 121 },
      "M":  { reach: 384, stack: 546, hta: 72.9, sta: 73.6, cs: 410, wb: 981, drop: 70, st: 476, ht: 136 },
      "ML": { reach: 389, stack: 562, hta: 73.5, sta: 73.4, cs: 410, wb: 980, drop: 70, st: 512, ht: 150 },
      "L":  { reach: 394, stack: 582, hta: 73.8, sta: 73.4, cs: 411, wb: 990, drop: 68, st: 548, ht: 172 },
      "XL": { reach: 402, stack: 610, hta: 73.9, sta: 73.4, cs: 412, wb: 1007, drop: 68, st: 609, ht: 201 }
    }
  },
  {
    make: "Giant", model: "TCR Advanced SL", year: 2024,
    source: "https://bikeinsights.com/bikes/5ec58ac612391b00171718bd-giant-bicycles-tcr-advanced?version=2024&build=base",
    sizes: {
      "S":  { reach: 383, stack: 528, hta: 72.3, sta: 74, cs: 405, wb: 977, drop: 69.5, st: 445, ht: 130 },
      "M":  { reach: 388, stack: 545, hta: 73.5, sta: 73.5, cs: 405, wb: 980, drop: 69.5, st: 470, ht: 145 },
      "ML": { reach: 393, stack: 562, hta: 73, sta: 73, cs: 405, wb: 991, drop: 67, st: 500, ht: 165 },
      "L":  { reach: 402, stack: 581, hta: 73, sta: 73, cs: 405, wb: 1006, drop: 67, st: 530, ht: 185 },
      "XL": { reach: 412, stack: 596, hta: 72.5, sta: 72.5, cs: 405, wb: 1020, drop: 67, st: 560, ht: 200 }
    }
  },
  {
    make: "Cannondale", model: "SuperSix EVO", year: 2023,
    source: "https://bikeinsights.com/bikes/5b48e33f73697a0014037051-cannondale-bikes-supersix-evo?version=2023&build=base",
    sizes: {
      "44": { reach: 370, stack: 505, hta: 70.9, sta: 74.3, cs: 410, wb: 981, drop: 74, st: 400, ht: 100 },
      "48": { reach: 374, stack: 520, hta: 71.2, sta: 74.3, cs: 410, wb: 987, drop: 74, st: 438, ht: 114 },
      "51": { reach: 378, stack: 535, hta: 71.2, sta: 74.3, cs: 410, wb: 996, drop: 74, st: 477, ht: 130 },
      "54": { reach: 384, stack: 555, hta: 71.2, sta: 73.7, cs: 410, wb: 1010, drop: 72, st: 515, ht: 154 },
      "56": { reach: 389, stack: 575, hta: 73, sta: 73.3, cs: 410, wb: 994, drop: 72, st: 534, ht: 165 },
      "58": { reach: 395, stack: 595, hta: 73, sta: 72.9, cs: 410, wb: 1007, drop: 69, st: 567, ht: 188 },
      "61": { reach: 403, stack: 625, hta: 73, sta: 72.3, cs: 410, wb: 1024, drop: 69, st: 600, ht: 220 }
    }
  },
  {
    make: "Cervélo", model: "R5", year: 2024,
    source: "https://bikeinsights.com/bikes/626f6fdb439858002590d99f-cervelo-cycles-r5?build=base&version=2024",
    sizes: {
      "48": { reach: 363, stack: 497, hta: 71, sta: 73, cs: 410, wb: 972, drop: 74.5, ht: 93 },
      "51": { reach: 371, stack: 522, hta: 72, sta: 73, cs: 410, wb: 974, drop: 74.5, ht: 114 },
      "54": { reach: 380, stack: 547, hta: 73, sta: 73, cs: 410, wb: 977, drop: 72, ht: 137 },
      "56": { reach: 389, stack: 572, hta: 73, sta: 73, cs: 410, wb: 994, drop: 72, ht: 163 },
      "58": { reach: 398, stack: 597, hta: 73, sta: 73, cs: 410, wb: 1011, drop: 69.5, ht: 192 },
      "61": { reach: 407, stack: 622, hta: 73, sta: 73, cs: 410, wb: 1028, drop: 69.5, ht: 218 }
    }
  },
  {
    make: "Ventum", model: "NS1", year: 2020,
    source: "https://bikeinsights.com/bikes/5e5ff9a292ca070017ea4dfb-ventum-racing-ns1?version=2020&build=base",
    sizes: {
      "XS": { reach: 365, stack: 490, hta: 71, sta: 73.5, cs: 410, wb: 972, drop: 69, st: 447, ht: 82 },
      "S":  { reach: 378, stack: 510, hta: 72, sta: 73.5, cs: 410, wb: 975, drop: 69, st: 467, ht: 110 },
      "M":  { reach: 388, stack: 536, hta: 73, sta: 73, cs: 410, wb: 984, drop: 69, st: 493, ht: 134 },
      "ML": { reach: 395, stack: 552, hta: 73, sta: 73, cs: 410, wb: 996, drop: 69, st: 514, ht: 151 },
      "L":  { reach: 405, stack: 585, hta: 73, sta: 73, cs: 410, wb: 1014, drop: 69, st: 546, ht: 185 },
      "XL": { reach: 413, stack: 604, hta: 73, sta: 73, cs: 410, wb: 1030, drop: 69, st: 568, ht: 205 }
    }
  },
  {
    make: "Ventum", model: "NS1", year: 2026,
    source: "https://bikeinsights.com/bikes/5e5ff9a292ca070017ea4dfb-ventum-racing-ns1?version=2026&build=base",
    sizes: {
      "XS": { reach: 370, stack: 493, hta: 71, sta: 73.5, cs: 410, wb: 968, drop: 69, st: 439, ht: 90 },
      "S":  { reach: 378, stack: 515, hta: 72, sta: 73.5, cs: 410, wb: 974, drop: 69, st: 448, ht: 110 },
      "M":  { reach: 388, stack: 541, hta: 73, sta: 73, cs: 410, wb: 984, drop: 69, st: 473, ht: 133 },
      "ML": { reach: 397, stack: 565, hta: 73, sta: 73, cs: 410, wb: 1000, drop: 69, st: 490, ht: 158 },
      "L":  { reach: 405, stack: 590, hta: 73, sta: 73, cs: 410, wb: 1015, drop: 69, st: 527, ht: 185 },
      "XL": { reach: 413, stack: 615, hta: 73, sta: 73, cs: 410, wb: 1031, drop: 69, st: 543, ht: 211 }
    }
  },
  {
    make: "Ventum", model: "GS1", year: 2025,
    source: "https://bikeinsights.com/bikes/60b3fc4158bffe0026d6fce9-ventum-racing-gs1?version=2025&build=frameset (geometry unchanged from 2022)",
    sizes: {
      "XS": { reach: 369, stack: 506, hta: 69, sta: 74, cs: 420, wb: 1004, drop: 70, st: 485, ht: 90 },
      "S":  { reach: 375, stack: 522, hta: 69.5, sta: 74, cs: 420, wb: 1012, drop: 70, st: 502, ht: 105 },
      "M":  { reach: 384, stack: 545, hta: 70, sta: 73.5, cs: 420, wb: 1024, drop: 70, st: 525, ht: 128 },
      "ML": { reach: 393, stack: 570, hta: 71, sta: 73.5, cs: 420, wb: 1032, drop: 70, st: 550, ht: 150 },
      "L":  { reach: 402, stack: 589, hta: 72, sta: 73, cs: 420, wb: 1037, drop: 70, st: 569, ht: 166 },
      "XL": { reach: 411, stack: 604, hta: 72.5, sta: 73, cs: 420, wb: 1046, drop: 70, st: 584, ht: 180 }
    }
  },
  {
    make: "Factor", model: "Ostro VAM", year: 2024,
    source: "https://bikeinsights.com/bikes/6046c9288b335100177c4c7f-factor-bikes-ostro-vam?version=2024&build=base",
    sizes: {
      "45": { reach: 360, stack: 502, hta: 71.1, sta: 75.5, cs: 405, wb: 970, drop: 72, st: 405 },
      "49": { reach: 370, stack: 503, hta: 71.1, sta: 74.5, cs: 405, wb: 969, drop: 72, st: 425 },
      "52": { reach: 376, stack: 523, hta: 72.5, sta: 74, cs: 405, wb: 971, drop: 72, st: 465 },
      "54": { reach: 384, stack: 542, hta: 72.5, sta: 74, cs: 405, wb: 985, drop: 70, st: 495 },
      "56": { reach: 392, stack: 565, hta: 73.3, sta: 73.5, cs: 405, wb: 987, drop: 70, st: 525 },
      "58": { reach: 401, stack: 587, hta: 73.3, sta: 73.5, cs: 408, wb: 1006, drop: 70, st: 545 },
      "61": { reach: 409, stack: 611, hta: 73.3, sta: 73.5, cs: 410, wb: 1022, drop: 70, st: 570 }
    }
  },
  {
    make: "BMC", model: "Teammachine R 01", year: 2024,
    source: "https://bikeinsights.com/bikes/6601449fc40586001a71d21d-bmc-switzerland-teammachine-r?version=2024&build=base",
    sizes: {
      "47": { reach: 368, stack: 504, hta: 71.5, sta: 74, cs: 410, wb: 968, drop: 69, st: 418, ht: 108 },
      "51": { reach: 378, stack: 528, hta: 71.5, sta: 74, cs: 410, wb: 986, drop: 69, st: 463, ht: 133 },
      "54": { reach: 387, stack: 548, hta: 72.3, sta: 73.5, cs: 410, wb: 989, drop: 69, st: 499, ht: 149 },
      "56": { reach: 393, stack: 563, hta: 72.3, sta: 73.5, cs: 410, wb: 999, drop: 69, st: 519, ht: 165 },
      "58": { reach: 402, stack: 582, hta: 72.3, sta: 73, cs: 410, wb: 1015, drop: 69, st: 541, ht: 185 },
      "61": { reach: 409, stack: 606, hta: 72.3, sta: 73, cs: 410, wb: 1030, drop: 69, st: 570, ht: 211 }
    }
  },
  {
    make: "BMC", model: "Roadmachine", year: 2024,
    source: "https://bikeinsights.com/bikes/5d10d300818fde001707e313-bmc-switzerland-roadmachine?version=2024&build=base",
    sizes: {
      "47": { reach: 370, stack: 525, hta: 71.4, sta: 74.2, cs: 415, wb: 982, drop: 75, st: 414, ht: 112 },
      "51": { reach: 379, stack: 550, hta: 71.4, sta: 74.2, cs: 415, wb: 1000, drop: 75, st: 461, ht: 138 },
      "54": { reach: 383, stack: 570, hta: 72.2, sta: 74.2, cs: 415, wb: 997, drop: 75, st: 488, ht: 154 },
      "56": { reach: 388, stack: 595, hta: 72.2, sta: 74.2, cs: 415, wb: 1010, drop: 75, st: 508, ht: 181 },
      "58": { reach: 393, stack: 620, hta: 72.2, sta: 74.2, cs: 415, wb: 1023, drop: 75, st: 529, ht: 207 },
      "61": { reach: 398, stack: 645, hta: 72.2, sta: 74.2, cs: 415, wb: 1036, drop: 75, st: 550, ht: 233 }
    }
  },
  {
    make: "BMC", model: "Trackmachine 01", year: 2020,
    source: "https://bikeinsights.com/bikes/5d1fb658c9e24d0017f62b7b-bmc-switzerland-trackmachine-01?version=2019&build=frameset",
    sizes: {
      "S": { reach: 390, stack: 471, hta: 72, sta: 74, cs: 390, wb: 963, drop: 50, st: 505, ht: 94 },
      "M": { reach: 408, stack: 506, hta: 72, sta: 74, cs: 390, wb: 981, drop: 58, st: 542, ht: 134 },
      "L": { reach: 430, stack: 544, hta: 72, sta: 74, cs: 390, wb: 1003, drop: 58, st: 582, ht: 163 }
    }
  },
  {
    make: "Orbea", model: "Orca", year: 2024,
    source: "https://bikeinsights.com/bikes/5df941a2af64310017ada3cb-orbea-orca?version=2024&build=omx",
    sizes: {
      "47": { reach: 370, stack: 506, hta: 71, sta: 74.5, cs: 408, wb: 972, drop: 72, st: 440, ht: 111 },
      "49": { reach: 375, stack: 515, hta: 71.5, sta: 74, cs: 408, wb: 975, drop: 72, st: 460, ht: 118 },
      "51": { reach: 380, stack: 533, hta: 72.2, sta: 73.7, cs: 408, wb: 980, drop: 72, st: 480, ht: 135 },
      "53": { reach: 385, stack: 552, hta: 72.8, sta: 73.5, cs: 408, wb: 981, drop: 70, st: 500, ht: 153 },
      "55": { reach: 391, stack: 572, hta: 73, sta: 73.5, cs: 408, wb: 991, drop: 70, st: 520, ht: 173 },
      "57": { reach: 398, stack: 590, hta: 73.2, sta: 73.2, cs: 408, wb: 1002, drop: 70, st: 540, ht: 191 },
      "60": { reach: 404, stack: 616, hta: 73.2, sta: 73.2, cs: 408, wb: 1016, drop: 70, st: 570, ht: 218 }
    }
  },
  {
    make: "Orbea", model: "Orca Aero", year: 2023,
    source: "https://bikeinsights.com/bikes/5e9744465396a50017429b7b-orbea-orca-aero?version=2023&build=m31-eltd",
    sizes: {
      "47": { reach: 370, stack: 496, hta: 71, sta: 74.5, cs: 408, wb: 966, drop: 76, st: 459, ht: 93 },
      "49": { reach: 376, stack: 505, hta: 71.5, sta: 74, cs: 408, wb: 971, drop: 76, st: 474, ht: 101 },
      "51": { reach: 380, stack: 523, hta: 72.2, sta: 73.7, cs: 408, wb: 975, drop: 76, st: 499, ht: 117 },
      "53": { reach: 385, stack: 542, hta: 72.8, sta: 73.5, cs: 408, wb: 976, drop: 74, st: 524, ht: 135 },
      "55": { reach: 391, stack: 562, hta: 73, sta: 73.5, cs: 408, wb: 986, drop: 74, st: 544, ht: 155 },
      "57": { reach: 398, stack: 580, hta: 73.2, sta: 73.2, cs: 408, wb: 997, drop: 74, st: 564, ht: 173 },
      "60": { reach: 404, stack: 606, hta: 73.2, sta: 73.2, cs: 408, wb: 1011, drop: 74, st: 589, ht: 200 }
    }
  },
  {
    make: "Orbea", model: "Orca Aero", year: 2027,
    source: "https://bikeinsights.com/bikes/5e9744465396a50017429b7b-orbea-orca-aero",
    sizes: {
      "47": { reach: 370, stack: 495, hta: 70.8, sta: 74.5, cs: 408, wb: 966, drop: 78, st: 459, ht: 84 },
      "49": { reach: 375, stack: 504, hta: 71.3, sta: 74, cs: 408, wb: 971, drop: 78, st: 474, ht: 92 },
      "51": { reach: 380, stack: 520, hta: 72.2, sta: 73.7, cs: 408, wb: 973, drop: 78, st: 499, ht: 107 },
      "53": { reach: 385, stack: 540, hta: 72.8, sta: 73.5, cs: 408, wb: 974, drop: 78, st: 524, ht: 122 },
      "55": { reach: 390, stack: 560, hta: 73, sta: 73.5, cs: 408, wb: 985, drop: 76, st: 545, ht: 145 },
      "57": { reach: 397, stack: 578, hta: 73.2, sta: 73.2, cs: 408, wb: 995, drop: 76, st: 565, ht: 163 },
      "60": { reach: 404, stack: 604, hta: 73.2, sta: 73.2, cs: 408, wb: 1009, drop: 76, st: 592, ht: 190 }
    }
  },
  {
    make: "Specialized", model: "Tarmac SL9", year: 2026,
    source: "bikeinsights.com (SL9 shares the Tarmac SL8 frame geometry: reach/stack identical, angles carried over)",
    sizes: {
      "44": { reach: 366, stack: 501, hta: 70.5, sta: 75.5, cs: 410, wb: 970, drop: 74, st: 433, ht: 99 },
      "49": { reach: 375, stack: 514, hta: 71.8, sta: 75.5, cs: 410, wb: 973, drop: 74, st: 445, ht: 109 },
      "52": { reach: 380, stack: 527, hta: 72.5, sta: 74, cs: 410, wb: 975, drop: 74, st: 456, ht: 120 },
      "54": { reach: 384, stack: 544, hta: 73, sta: 74, cs: 410, wb: 978, drop: 72, st: 473, ht: 137 },
      "56": { reach: 395, stack: 565, hta: 73.5, sta: 73.5, cs: 410, wb: 991, drop: 72, st: 494, ht: 157 },
      "58": { reach: 402, stack: 591, hta: 73.5, sta: 73.5, cs: 410, wb: 1006, drop: 72, st: 515, ht: 184 },
      "61": { reach: 408, stack: 612, hta: 74, sta: 73, cs: 410, wb: 1013, drop: 72, st: 545, ht: 204 }
    }
  },
  {
    make: "Cannondale", model: "SuperSix EVO", year: 2026,
    source: "https://bikeinsights.com/bikes/5b48e33f73697a0014037051-cannondale-bikes-supersix-evo?version=2026&build=base",
    sizes: {
      "44": { reach: 373, stack: 495, hta: 70.9, sta: 74.5, cs: 410, wb: 980, drop: 74, st: 400, ht: 89 },
      "48": { reach: 376, stack: 508, hta: 71.2, sta: 74, cs: 410, wb: 985, drop: 74, st: 429, ht: 101 },
      "50": { reach: 379, stack: 520, hta: 71.2, sta: 74, cs: 410, wb: 993, drop: 74, st: 448, ht: 114 },
      "52": { reach: 383, stack: 532, hta: 71.2, sta: 74, cs: 410, wb: 1002, drop: 72, st: 467, ht: 130 },
      "54": { reach: 387, stack: 545, hta: 71.2, sta: 74, cs: 410, wb: 1010, drop: 72, st: 490, ht: 143 },
      "56": { reach: 393, stack: 565, hta: 73, sta: 73.5, cs: 410, wb: 995, drop: 69, st: 510, ht: 154 },
      "58": { reach: 398, stack: 585, hta: 73, sta: 73, cs: 410, wb: 1007, drop: 69, st: 532, ht: 178 },
      "61": { reach: 406, stack: 615, hta: 73, sta: 72.5, cs: 410, wb: 1024, drop: 69, st: 570, ht: 209 }
    }
  },
  {
    make: "Factor", model: "Ostro VAM", year: 2021,
    source: "https://bikeinsights.com/bikes/6046c9288b335100177c4c7f-factor-bikes-ostro-vam?version=2021&build=base",
    sizes: {
      "49": { reach: 370, stack: 503, hta: 71.7, sta: 74.5, cs: 390, wb: 968, drop: 72, st: 456, ht: 82 },
      "52": { reach: 376, stack: 523, hta: 72.5, sta: 74, cs: 390, wb: 968, drop: 72, st: 480, ht: 98 },
      "54": { reach: 384, stack: 542, hta: 72.5, sta: 73, cs: 395, wb: 982, drop: 70, st: 502, ht: 120 },
      "56": { reach: 392, stack: 565, hta: 73.3, sta: 73, cs: 395, wb: 985, drop: 70, st: 525, ht: 139 },
      "58": { reach: 401, stack: 587, hta: 73.3, sta: 73, cs: 395, wb: 1005, drop: 70, st: 548, ht: 162 }
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
      "XS":  { reach: 365, stack: 517, hta: 70.8, sta: 75, cs: 410, wb: 972, drop: 71, st: 420, ht: 116 },
      "S":   { reach: 372, stack: 526, hta: 71.4, sta: 74.5, cs: 410, wb: 976, drop: 71, st: 450, ht: 123 },
      "M":   { reach: 380, stack: 538, hta: 72, sta: 74, cs: 410, wb: 983, drop: 71, st: 480, ht: 134 },
      "L":   { reach: 388, stack: 554, hta: 72.8, sta: 73.5, cs: 410, wb: 989, drop: 70, st: 510, ht: 149 },
      "XL":  { reach: 396, stack: 576, hta: 73, sta: 73, cs: 410, wb: 1002, drop: 70, st: 540, ht: 172 },
      "XXL": { reach: 407, stack: 604, hta: 73, sta: 73, cs: 410, wb: 1021, drop: 70, st: 580, ht: 201 }
    }
  },
  {
    make: "Tavelo", model: "Grow", year: 2026,
    source: "https://bikeinsights.com/bikes/6973ab68acd000001aa810a8-tavelo-grow",
    sizes: {
      "XS":  { reach: 368, stack: 530, hta: 70.5, sta: 74, cs: 423, wb: 998, drop: 80, st: 430, ht: 95 },
      "S":   { reach: 375, stack: 540, hta: 71, sta: 74, cs: 423, wb: 1008, drop: 80, st: 460, ht: 106 },
      "M":   { reach: 385, stack: 558, hta: 71, sta: 73.5, cs: 423, wb: 1025, drop: 78, st: 490, ht: 127 },
      "L":   { reach: 395, stack: 579, hta: 71.3, sta: 73.5, cs: 423, wb: 1033, drop: 78, st: 515, ht: 146 },
      "XL":  { reach: 406, stack: 603, hta: 71.3, sta: 73, cs: 423, wb: 1054, drop: 75, st: 540, ht: 174 },
      "XXL": { reach: 414, stack: 627, hta: 71.6, sta: 73, cs: 423, wb: 1064, drop: 75, st: 570, ht: 197 }
    }
  },
  {
    make: "Trek", model: "Checkpoint ALR Gen 3", year: 2026,
    source: "https://bikeinsights.com/bikes/5afb51844cb7640014ce4612-trek-bikes-checkpoint?version=2026&build=alr-gen-3",
    sizes: {
      "XS": { reach: 380, stack: 545, hta: 71.2, sta: 74.1, cs: 435, wb: 1025, drop: 78, st: 490, ht: 96 },
      "S":  { reach: 385, stack: 566, hta: 71.6, sta: 73.7, cs: 435, wb: 1033, drop: 78, st: 520, ht: 117 },
      "M":  { reach: 391, stack: 589, hta: 71.8, sta: 73.2, cs: 435, wb: 1041, drop: 76, st: 540, ht: 140 },
      "ML": { reach: 397, stack: 608, hta: 72.5, sta: 72.8, cs: 435, wb: 1048, drop: 76, st: 560, ht: 162 },
      "L":  { reach: 402, stack: 630, hta: 72.3, sta: 72.5, cs: 435, wb: 1058, drop: 74, st: 580, ht: 181 },
      "XL": { reach: 408, stack: 650, hta: 72.6, sta: 72.1, cs: 435, wb: 1070, drop: 74, st: 610, ht: 201 }
    }
  },
  {
    make: "BMC", model: "Trackmachine TR01", year: 2024,
    source: "BMC official geometry/size chart (rider height: S <173cm, M 170-185cm, L >183cm). HTA not on that chart; 72 carried from Bike Insights.",
    sizes: {
      "S": { reach: 434, stack: 436, hta: 72, sta: 75.5, cs: 375, wb: 971, drop: 64, st: 484, ht: 41 },
      "M": { reach: 459, stack: 471, hta: 72, sta: 75.5, cs: 375, wb: 1008, drop: 64, st: 521, ht: 78 },
      "L": { reach: 452, stack: 526, hta: 72, sta: 75.5, cs: 375, wb: 1019, drop: 64, st: 577, ht: 135 }
    }
  },
  {
    make: "Factor", model: "Raiden", year: 2025,
    source: "https://bikeinsights.com/bikes/6762e4a975943b001b55ab3a-factor-bikes-raiden",
    sizes: {
      "XS": { reach: 390, stack: 475, hta: 73.3, sta: 75, cs: 375, wb: 930, drop: 50, st: 465 },
      "S":  { reach: 410, stack: 495, hta: 73.3, sta: 75, cs: 375, wb: 957, drop: 50, st: 485 },
      "M":  { reach: 435, stack: 515, hta: 73.3, sta: 75, cs: 375, wb: 988, drop: 50, st: 504 },
      "L":  { reach: 454, stack: 530, hta: 73.3, sta: 75, cs: 375, wb: 1011, drop: 50, st: 519 }
    }
  }
];
