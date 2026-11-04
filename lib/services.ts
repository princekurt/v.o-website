export type ServiceBullet = { title: string; copy: string };
export type ServiceFaq = { q: string; a: string };

export type ServiceContent = {
  slug: string;
  no: string;
  title: string;
  navTitle: string;
  meta: string;
  short: string;
  intro: string;
  image: string;
  imagePosition?: string;
  bullets: ServiceBullet[];
  scope: string[];
  scopeNote: string;
  relatedProjects: string[];
  faqs: ServiceFaq[];
};

export const servicePages: ServiceContent[] = [
  {
    slug: "residential-solar",
    no: "01",
    title: "Residential Solar",
    navTitle: "Residential",
    meta: "Rooftop · grid-tied · battery-ready",
    short: "A rooftop system sized to your household's actual load, installed without disrupting the home.",
    intro:
      "Most homes start with the monthly bill. We look at what you actually use, the roof you have, and how much of it is usable, then design a system around that — not a generic package.",
    image: "/services/residential-solar.jpg",
    bullets: [
      {
        title: "Roof and load assessment",
        copy: "We check orientation, shading, roof condition, and your consumption profile before recommending a system size.",
      },
      {
        title: "System design and written quote",
        copy: "You get the panel layout, inverter and protection, scope of work, and terms in writing before anything is ordered.",
      },
      {
        title: "Installation and commissioning",
        copy: "Our crew mounts the array, runs the wiring, tests the system, and hands it over with the monitoring app set up.",
      },
      {
        title: "Net metering guidance",
        copy: "We explain what your distribution utility requires and prepare the documents you need for the application.",
      },
      {
        title: "Battery-ready options",
        copy: "Choose a hybrid inverter now if you plan to add storage later, so the system does not need to be re-engineered.",
      },
      {
        title: "After-sales support",
        copy: "After turn-over we stay reachable for questions, performance checks, and service. Terms are confirmed in your quote.",
      },
    ],
    scope: ["Tile, metal, and concrete roofs", "Grid-tied, hybrid, or battery-ready", "Inverter and wiring included", "Homes and small properties"],
    scopeNote: "System size is designed around your load and usable roof area. We confirm the final scope after the site survey.",
    relatedProjects: ["home-solar", "commercial-rooftop-arrays", "ground-mounted-solar"],
    faqs: [
      {
        q: "How long does a home installation take?",
        a: "It depends on the system size, roof access, and weather. We confirm the schedule in writing after the site survey so you know what to expect.",
      },
      {
        q: "Will the system run during a brownout?",
        a: "A standard grid-tied system shuts down during an outage for safety. If you need backup, ask for a hybrid or battery-backed design.",
      },
      {
        q: "Do you handle the net metering application?",
        a: "We explain the requirements and prepare the documents. Approval and the bi-directional meter are handled by your distribution utility.",
      },
    ],
  },
  {
    slug: "commercial-industrial",
    no: "02",
    title: "Commercial & Industrial Solar",
    navTitle: "Commercial & industrial",
    meta: "Multi-building · factories · offices",
    short: "Larger arrays for businesses that want predictable energy costs across one roof or a whole site.",
    intro:
      "Commercial solar is a capital project before it is an energy bill. We study the load, roof condition, and operations, then phase the work so the site keeps running while we install.",
    image: "/services/commercial-industrial.jpg",
    bullets: [
      {
        title: "Load and roof study",
        copy: "We review consumption, demand profile, roof structure, shading, and available area across the site.",
      },
      {
        title: "Multi-building arrays",
        copy: "Single roofs or phased rollouts across several buildings, planned around access and operations.",
      },
      {
        title: "Industrial racking and wiring",
        copy: "Mounting, array wiring, protection, and grounding designed for the site's conditions and equipment.",
      },
      {
        title: "Monitoring and reporting",
        copy: "System performance is visible after handover, with generation data you can review with your team.",
      },
      {
        title: "Zero-upfront options",
        copy: "Ask about commercial structures where the upfront cost is reduced. Availability depends on project review.",
      },
      {
        title: "Testing and handover",
        copy: "Commissioning, documentation, and a walkthrough with the people who will operate the system.",
      },
    ],
    scope: ["Factories, warehouses, offices", "Single or multi-building sites", "Rooftop and ground mount", "Private and government projects"],
    scopeNote: "Commercial scopes are quoted per site. Phasing and access are agreed with your operations team before work starts.",
    relatedProjects: ["commercial-rooftop-arrays", "industrial-solar-set-up", "gold-refinery-solar", "75kva-transformer-denr-r12"],
    faqs: [
      {
        q: "Can you work around our operations?",
        a: "Yes. We agree the sequence, access, and working hours with your team so the site keeps running while the array is installed.",
      },
      {
        q: "Do you handle government projects?",
        a: "Yes. We accept private and government projects with complete documents and are PHILGEPS-ready for public bidding.",
      },
      {
        q: "Is zero-upfront available?",
        a: "On request, subject to a project review. Tell us the site, load, and goals and we will confirm what options apply.",
      },
    ],
  },
  {
    slug: "farms-agriculture",
    no: "03",
    title: "Farms & Agriculture",
    navTitle: "Farms & agriculture",
    meta: "Off-grid · hybrid · pump loads",
    short: "Power where the grid is thin — pumps, processing, lighting, and site power built around how the farm runs.",
    intro:
      "Farm power is different: the load is seasonal, the site is remote, and the work cannot wait for the grid. We design around the way the farm actually operates.",
    image: "/services/farms-agriculture.jpg",
    bullets: [
      {
        title: "Site and load survey",
        copy: "We map the pumps, motors, processing equipment, lighting, and any existing generator use.",
      },
      {
        title: "Off-grid and hybrid systems",
        copy: "Standalone solar, solar-plus-battery, or hybrid with the grid or a generator for continuity.",
      },
      {
        title: "Pump and motor loads",
        copy: "Starting currents and duty cycles are considered so the array and inverter are sized correctly.",
      },
      {
        title: "Site-specific mounting",
        copy: "Ground-mounted racking designed for open land, wind exposure, and access for maintenance.",
      },
      {
        title: "Storage where it matters",
        copy: "Battery capacity is matched to the loads you need to keep running after dark.",
      },
      {
        title: "Operator handover",
        copy: "We walk your people through the controls, basic checks, and what to do if something trips.",
      },
    ],
    scope: ["Off-grid and hybrid systems", "Pumps, motors, processing", "Ground-mounted arrays", "Remote and island sites"],
    scopeNote: "Farm systems are sized from measured loads and the site's water or power demand — not from a standard package.",
    relatedProjects: ["ground-mounted-solar", "solar-powered-irrigation", "luzon-solar-farm"],
    faqs: [
      {
        q: "Can solar replace our diesel generator?",
        a: "In many cases it can carry the daytime load, with the generator kept for backup or night work. We size it around your actual usage.",
      },
      {
        q: "Do you install on remote sites?",
        a: "Yes. We have installed in Luzon and Mindanao. Tell us the location and access conditions and we will confirm coverage.",
      },
      {
        q: "What about maintenance?",
        a: "Solar has no moving parts. We recommend periodic cleaning and visual checks; after-sales terms are confirmed in your quote.",
      },
    ],
  },
  {
    slug: "solar-irrigation",
    no: "04",
    title: "Solar Irrigation",
    navTitle: "Solar irrigation",
    meta: "Pumps · controls · commissioning",
    short: "Water, pumped by sunlight. No fuel to haul and no diesel bill — installed and tested in the field.",
    intro:
      "A solar pump is only as good as its sizing. We start with the water source, the head, and the flow you need, then build the array and controls around that.",
    image: "/services/solar-irrigation.jpg",
    imagePosition: "50% 18%",
    bullets: [
      {
        title: "Water source and head",
        copy: "We measure the source, lift, run, and required flow before selecting a pump.",
      },
      {
        title: "Pump sizing",
        copy: "Surface or submersible, AC or DC — matched to the field, not picked from a catalogue.",
      },
      {
        title: "Solar array and mounting",
        copy: "Array size and ground mounting designed for the site and the pumping window.",
      },
      {
        title: "Controls and protection",
        copy: "Dry-run protection, surge protection, and controls that are simple for the operator.",
      },
      {
        title: "Testing and commissioning",
        copy: "We run the system in the field, confirm flow and pressure, and fix what needs fixing before handover.",
      },
      {
        title: "Operator handover",
        copy: "Your people are shown how to start, stop, and check the system day to day.",
      },
    ],
    scope: ["Surface and submersible pumps", "Controls and protection", "Field testing and commissioning", "Operator handover"],
    scopeNote: "Bring us the water source, area to irrigate, and pump details. We will tell you what else is needed for a proper design.",
    relatedProjects: ["solar-powered-irrigation", "ground-mounted-solar", "luzon-solar-farm"],
    faqs: [
      {
        q: "What do you need to size a pump?",
        a: "The water source, total head, required flow, area and crop, and how many hours a day you need to pump. Photos of the site help.",
      },
      {
        q: "Can it run without batteries?",
        a: "Yes. Many irrigation systems pump directly during the day into a storage tank, which is simpler and costs less than a battery system.",
      },
      {
        q: "Do you test before handover?",
        a: "Yes. We test the pump, controls, and protection in the field and confirm the flow before turning it over.",
      },
    ],
  },
  {
    slug: "solar-street-lighting",
    no: "05",
    title: "Solar Street Lighting",
    navTitle: "Solar street lighting",
    meta: "ECO V.O 300 W · poles · road studs",
    short: "Solar street lights, poles, and road studs supplied from our own stock and installed on site.",
    intro:
      "Street lighting is a layout problem before it is a product problem. We plan pole spacing, light levels, and autonomy around the road or site, then supply and install.",
    image: "/services/solar-street-lighting.jpg",
    imagePosition: "50% 22%",
    bullets: [
      {
        title: "Lighting layout",
        copy: "Pole positions, spacing, and mounting heights planned around the road, path, or site.",
      },
      {
        title: "ECO V.O 300 W lights",
        copy: "Our own line of solar street lights, supplied in batches for private and government rollouts.",
      },
      {
        title: "Poles and road studs",
        copy: "Hot-dip galvanised poles in 6 m and 8 m, plus solar road studs for night visibility.",
      },
      {
        title: "Autonomy and battery",
        copy: "Battery capacity is matched to the number of rainy or cloudy days the site needs to ride through.",
      },
      {
        title: "Government documentation",
        copy: "Complete documents and PHILGEPS-ready for public bidding and LGU projects.",
      },
      {
        title: "Installation and commissioning",
        copy: "Poles set, heads mounted, and every unit tested before handover.",
      },
    ],
    scope: ["ECO V.O 300 W solar lights", "6 m and 8 m poles", "Solar road studs", "Private and government projects"],
    scopeNote: "We can supply only, or supply and install. Delivery is nationwide; installation coverage is confirmed per site.",
    relatedProjects: ["eco-vo-300w-street-lights", "solar-street-lights-government", "ufo-solar-street-lights", "street-light-poles"],
    faqs: [
      {
        q: "Can we order lights without installation?",
        a: "Yes. Lights, poles, and road studs can be supplied and delivered on their own. Bulk orders are welcome.",
      },
      {
        q: "Do you handle government procurement?",
        a: "Yes. We are PHILGEPS-ready and can provide complete documents for public bidding and LGU projects.",
      },
      {
        q: "How many hours of light do the units provide?",
        a: "It depends on the model and battery configuration. Tell us the required operating hours and rainy-day autonomy and we will recommend a specification.",
      },
    ],
  },
  {
    slug: "electrical-supply-works",
    no: "06",
    title: "Electrical Supply & Works",
    navTitle: "Electrical supply",
    meta: "Stock · delivery · installation",
    short: "The trading house behind the solar work — transformers, generators, CCTV, FDAS, and bulk materials.",
    intro:
      "V.O is an electrical trading company first. The stock, the warehouse, and the crews behind the solar work are the same ones behind our supply and electrical projects.",
    image: "/services/electrical-supply-works.jpg",
    bullets: [
      {
        title: "Transformers",
        copy: "Supply, installation, testing, and commissioning for the capacity your site requires.",
      },
      {
        title: "Generator sets",
        copy: "Backup and site power, supplied for private and government clients.",
      },
      {
        title: "CCTV and FDAS",
        copy: "Surveillance and fire detection and alarm systems, installed and commissioned.",
      },
      {
        title: "LED walls and lighting",
        copy: "LED walls for events and venues, plus LED and flood lighting for sites and streets.",
      },
      {
        title: "Wires, switches, breakers",
        copy: "Everyday electrical materials from stock, including bulk orders for contractors.",
      },
      {
        title: "Nationwide delivery",
        copy: "Poles, lights, and electrical materials delivered outside our installation areas.",
      },
    ],
    scope: ["Transformers and generators", "CCTV and fire alarm (FDAS)", "LED walls and lighting", "Bulk orders and delivery"],
    scopeNote: "Stock changes with supply. Ask us for current availability, capacities, and bulk pricing before committing.",
    relatedProjects: ["75kva-transformer-denr-r12", "cctv-maguindanao-police-station", "fdas-government-project", "led-wall-supply", "solar-road-studs"],
    faqs: [
      {
        q: "Can I order materials without installation?",
        a: "Yes. Solar panels, inverters, lights, poles, wires, switches, and breakers can be supplied on their own. Bulk orders are welcome.",
      },
      {
        q: "Do you install what you supply?",
        a: "Yes, for the categories we install — transformers, generators, CCTV, FDAS, LED walls, lighting, and street lights.",
      },
      {
        q: "Do you deliver nationwide?",
        a: "Our equipment — street light poles, solar lights, and electrical materials — is delivered nationwide. Installation coverage is confirmed per site.",
      },
    ],
  },
];

export function getService(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
