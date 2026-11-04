export type InsightSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  imagePosition?: string;
  intro: string;
  sections: InsightSection[];
  relatedProjects: string[];
};

export const insights: Insight[] = [
  {
    slug: "solar-cost-philippines",
    title: "How much does a solar system cost in the Philippines?",
    excerpt:
      "Why two solar quotes for the same roof can differ by hundreds of thousands of pesos — and what to compare instead of a per-kWp number.",
    category: "Cost",
    date: "14 October 2026",
    readTime: "6 min",
    image: "/insights/solar-cost-philippines.jpg",
    intro:
      "There is no honest single price for solar. Two houses with the same floor area can need very different systems, and two quotes for the same roof can include very different scopes. Here is what actually moves the number.",
    sections: [
      {
        heading: "The six things that drive the price",
        paragraphs: [
          "System size is only one input. The rest of the cost sits in the equipment, the roof, the electrical work, and the paperwork around it.",
        ],
        list: [
          "System size — how much of your load you want to cover, and whether you want night backup.",
          "Panels and inverter — tier, efficiency, and whether the inverter is battery-ready.",
          "Roof type and access — tile, metal, or concrete; height, access, and how much mounting work is needed.",
          "Electrical scope — distance to the panel board, protection, grounding, and any upgrades.",
          "Battery — the largest optional line item, and the one most often left out of a headline price.",
          "Documents and after-sales — permits, utility applications, commissioning, and service terms.",
        ],
      },
      {
        heading: "Why a per-kWp price is not enough",
        paragraphs: [
          "A low per-kWp figure can hide a smaller inverter, thinner mounting, fewer protections, or a scope that stops at the panels. A higher figure may include a better inverter, proper grounding, and the utility paperwork.",
          "Compare itemized quotes: equipment brands and models, mounting, wiring and protection, labor, commissioning, documents, and what happens after handover. If one quote is much cheaper, find the line item that was removed.",
        ],
      },
      {
        heading: "What to send us for a useful estimate",
        paragraphs: [
          "We can give you a realistic starting point before a site visit if you send three things: your monthly electric bill, the address or municipality, and photos of the roof or open ground. From there we can recommend a size and explain the assumptions.",
          "The final number comes after a site survey. That is normal — and it protects you from a quote that was priced from a guess.",
        ],
      },
      {
        heading: "The bottom line",
        paragraphs: [
          "Ask for a written scope, a clear equipment list, and a savings estimate that shows its assumptions. Then compare quotes on what is included, not just the total. A solar system is a 20-year purchase; the cheapest quote is rarely the cheapest system.",
        ],
      },
    ],
    relatedProjects: ["commercial-rooftop-arrays", "home-solar", "365kw-rooftop-solar-lgu"],
  },
  {
    slug: "net-metering-philippines",
    title: "Net metering in the Philippines, explained",
    excerpt:
      "What net metering is, what your distribution utility will ask for, and the documents to prepare before you install.",
    category: "Guides",
    date: "2 October 2026",
    readTime: "5 min",
    image: "/insights/net-metering-philippines.jpg",
    intro:
      "Net metering is the arrangement that lets a grid-tied solar system send excess daytime power to the grid and receive a credit on your bill. The rules and forms vary by distribution utility, but the preparation is similar.",
    sections: [
      {
        heading: "What it actually does",
        paragraphs: [
          "During the day, your solar system serves your loads first. If it produces more than the site is using, the excess flows to the grid and is recorded by a bi-directional meter. The credit is applied against your consumption under the utility's net metering programme.",
          "It is not a cheque for every excess kilowatt-hour, and it is not the same as an off-grid system. The utility sets the rates, caps, and crediting rules.",
        ],
      },
      {
        heading: "What the utility usually asks for",
        paragraphs: [
          "Requirements differ, but most applications ask for the same categories of information. Confirm the exact list with your distribution utility before submitting.",
        ],
        list: [
          "Completed net metering application form and account details.",
          "Single-line diagram and system specifications from the installer.",
          "Inverter datasheet and proof of an approved grid-tie inverter.",
          "Electrical plan signed by a licensed electrical engineer, where required.",
          "Proof of a bi-directional meter or the request to install one.",
          "Any local building or electrical permit the utility requires.",
        ],
      },
      {
        heading: "The usual sequence",
        paragraphs: [
          "Installation does not automatically mean approval. A typical path is: design and quote, utility pre-assessment, installation, inspection, meter installation, then net metering activation. The order can change depending on the utility and the site.",
          "Plan for the utility's review time in your schedule. It is separate from the installation work and is not controlled by the installer.",
        ],
      },
      {
        heading: "How we help",
        paragraphs: [
          "We explain what your utility requires and prepare the technical documents that come from the installer: the system specifications, inverter details, and single-line diagram. The application and approval remain with the account holder and the utility.",
          "If net metering is not available or not practical for your site, we will say so and design the system around self-consumption instead.",
        ],
      },
    ],
    relatedProjects: ["365kw-rooftop-solar-lgu", "commercial-rooftop-arrays", "home-solar"],
  },
  {
    slug: "solar-irrigation-farm-checklist",
    title: "Solar irrigation: what a farm needs before installation",
    excerpt:
      "The measurements that decide whether a solar pump works — water source, head, flow, and the pumping window.",
    category: "Agriculture",
    date: "18 September 2026",
    readTime: "5 min",
    image: "/insights/solar-irrigation-farm-checklist.jpg",
    intro:
      "A solar pump is not a plug-and-play replacement for a diesel pump. The system has to match the water source and the field. These are the things to measure before anyone quotes you.",
    sections: [
      {
        heading: "1. The water source",
        paragraphs: [
          "Is it a well, a river, a canal, or a tank? How deep is the water level in the dry season? A source that looks reliable in June can behave very differently in April.",
          "Take photos of the source and note the distance from the pump location to the field.",
        ],
      },
      {
        heading: "2. Total head and flow",
        paragraphs: [
          "Head is the total vertical lift plus friction losses in the pipe run. Flow is how much water you need per hour. Together they decide the pump, and the pump decides the array.",
          "A pump sized only on horsepower is a guess. Ask for the duty point: flow at head, in cubic metres per hour and metres.",
        ],
        list: [
          "Static water level and drawdown.",
          "Delivery height and horizontal pipe run.",
          "Pipe diameter and fittings.",
          "Required flow and hours of pumping per day.",
          "Area, crop, and irrigation method.",
        ],
      },
      {
        heading: "3. The array and the pumping window",
        paragraphs: [
          "Solar pumping happens while the sun is up. If the field needs water early in the morning or at night, you need storage or a battery — and that changes the design. Many farms are better served by a day-filled tank than by a battery bank.",
          "The array is sized from the pump's duty point and the site's solar resource, not from a generic watts-per-horsepower rule.",
        ],
      },
      {
        heading: "4. Controls, protection, and handover",
        paragraphs: [
          "Dry-run protection protects the pump when the source drops. Surge protection protects the electronics. Simple controls matter more than a complicated panel your operator will not use.",
          "At handover, ask for a walkthrough: how to start and stop, what the fault lights mean, and who to call. A system your people understand is a system that lasts.",
        ],
      },
      {
        heading: "What to send us",
        paragraphs: [
          "Send the water source photos, the field area, the crop, the pump you have now (if any), and the hours you need to pump. We can tell you what is missing and whether a site visit is needed.",
        ],
      },
    ],
    relatedProjects: ["solar-powered-irrigation", "ground-mounted-solar", "luzon-solar-farm"],
  },
  {
    slug: "solar-street-lights-lgu",
    title: "Solar street lights for LGUs: what to prepare",
    excerpt:
      "A practical checklist for barangay, municipal, and provincial lighting projects — from pole spacing to documentation.",
    category: "Government",
    date: "5 September 2026",
    readTime: "5 min",
    image: "/insights/solar-street-lights-lgu.jpg",
    imagePosition: "50% 22%",
    intro:
      "Solar street lighting is one of the easiest government projects to get wrong, because the purchase is visible but the layout and battery autonomy are not. Here is what to settle before procurement.",
    sections: [
      {
        heading: "Start with the road, not the light",
        paragraphs: [
          "Walk the road and mark the poles: intersections, curves, school zones, dark stretches, and existing structures. Pole spacing depends on mounting height, light distribution, and what the road is used for.",
          "A common mistake is to buy a batch of lights and then decide where they go. The layout should come first.",
        ],
      },
      {
        heading: "Specify the operating requirement",
        paragraphs: [
          "Ask for the light output, the hours of operation, and the number of cloudy days the battery must carry. These three numbers determine the panel and battery size more than the wattage on the box.",
        ],
        list: [
          "Required operating hours per night.",
          "Rainy-day autonomy (how many consecutive cloudy nights).",
          "Mounting height and pole spacing.",
          "Light distribution and minimum illumination for the road class.",
          "Battery chemistry and expected service life.",
        ],
      },
      {
        heading: "Documentation for procurement",
        paragraphs: [
          "For public bidding, prepare the technical specifications, bill of quantities, and the required documents. We are PHILGEPS-ready and can provide complete documents for LGU projects.",
          "Decide early whether the scope is supply-only or supply-and-install. Delivery is nationwide; installation coverage is confirmed per site.",
        ],
      },
      {
        heading: "Plan for after-sales",
        paragraphs: [
          "Ask what happens when a battery reaches end of life or a controller fails. A lighting project is a maintenance commitment, not a one-time delivery.",
          "Ask for the warranty terms in writing and keep a small spare-parts allowance for controllers and batteries.",
        ],
      },
    ],
    relatedProjects: ["eco-vo-300w-street-lights", "solar-street-lights-government", "street-light-poles"],
  },
  {
    slug: "choosing-a-solar-installer",
    title: "Choosing a solar installer: eight checks",
    excerpt:
      "The questions that separate a real installer from a reseller with a subcontractor and a nice brochure.",
    category: "Guides",
    date: "21 August 2026",
    readTime: "6 min",
    image: "/insights/choosing-a-solar-installer.jpg",
    intro:
      "Solar is a construction project with a 20-year tail. The installer matters as much as the panels. These are the checks we would want if we were buying.",
    sections: [
      {
        heading: "1. Is the crew in-house?",
        paragraphs: [
          "Ask who will be on site. An in-house crew controls the workmanship and the schedule. If the installation is subcontracted, ask who supervises it and who handles defects after handover.",
        ],
      },
      {
        heading: "2. Can they show real projects?",
        paragraphs: [
          "Ask for addresses, capacities, and photos of completed work — not renderings. Look for projects similar to yours: same roof type, same scale, same site conditions.",
        ],
      },
      {
        heading: "3. Is the quote itemized?",
        paragraphs: [
          "A proper quote lists modules, inverter, mounting, wiring, protection, labor, commissioning, documents, and after-sales. A single lump sum makes it impossible to compare.",
        ],
      },
      {
        heading: "4. Who handles the utility and permits?",
        paragraphs: [
          "Net metering, building permits, and electrical inspections are part of the project. Confirm who prepares the documents and who pays for them.",
        ],
      },
      {
        heading: "5. What is the after-sales terms?",
        paragraphs: [
          "Ask for the warranty on panels, inverter, mounting, and workmanship — separately. Ask how a service call is handled and how long a response takes.",
        ],
      },
      {
        heading: "6. Do they size to your load?",
        paragraphs: [
          "A good installer asks for your bill and usage pattern before recommending a size. A bad one quotes the same package for every house.",
        ],
      },
      {
        heading: "7. Is safety visible?",
        paragraphs: [
          "Look for proper PPE in project photos, safe roof access, and a plan for working around live electrical equipment. Safety habits show up in workmanship.",
        ],
      },
      {
        heading: "8. Can they explain the system simply?",
        paragraphs: [
          "You will live with this system. If the installer cannot explain what the inverter does, what the monitoring shows, and what to do when something trips, keep looking.",
        ],
      },
    ],
    relatedProjects: ["luzon-solar-farm", "commercial-rooftop-arrays", "ground-mounted-solar"],
  },
];

export function getInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}
