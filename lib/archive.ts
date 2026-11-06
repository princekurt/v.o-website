export type ArchiveEntry = {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  year: number;
  capacity?: string;
  client?: string;
  location?: string;
  summary: string;
  description: string;
  caseStudy?: {
    challenge: string;
    approach: string;
    outcome: string;
  };
  featured?: boolean;
};

/**
 * Project archive. Each slug maps to a folder in public/archive/<slug> containing
 * the downloaded photos (01, 02, ...). Drop higher-resolution originals into the
 * same folders to replace any image without touching this file.
 */
export const archive: ArchiveEntry[] = [
  {
    slug: "luzon-solar-farm",
    title: "Luzon Solar Farm",
    category: "Solar farm",
    tags: ["Solar", "Utility"],
    year: 2025,
    summary: "A ground-mounted solar farm in Luzon — long rows of panels across open land, built by our own crew.",
    description:
      "One of our largest ground-mounted installations: hundreds of panels on steel racking across open land, delivered, installed, wired, and commissioned on site by the V.O crew.",
    caseStudy: {
      challenge:
        "Open land with no usable roof, and a site that needed a full ground-mounted array rather than a building-mounted system.",
      approach:
        "Our crew set the steel racking across the field, installed the panel rows, ran the wiring, and commissioned the array on site.",
      outcome:
        "A working ground-mounted solar farm, documented from the first row of racking through to commissioning.",
    },
    featured: true,
  },
  {
    slug: "365kw-rooftop-solar-lgu",
    title: "365 kW Rooftop Solar",
    category: "Government",
    tags: ["Government", "Solar"],
    year: 2025,
    capacity: "365 kW",
    client: "Local government unit",
    summary: "A 365 kW rooftop system for a local government unit, handed over with training for the staff who maintain it.",
    description:
      "Design, supply, and installation of a 365 kW rooftop solar system for a local government unit. The project closed with a handover session so the LGU's own people could look after the system day to day.",
    caseStudy: {
      challenge:
        "A local government unit needed a 365 kW rooftop system and a team that could keep it running after turnover.",
      approach:
        "We designed, supplied, and installed the rooftop array, then walked the LGU staff through the system and its day-to-day checks.",
      outcome:
        "A 365 kW installation handed over with training for the people responsible for operating and maintaining it.",
    },
    featured: true,
  },
  {
    slug: "commercial-rooftop-arrays",
    title: "Hundreds of Panels",
    category: "Commercial",
    tags: ["Commercial", "Solar"],
    year: 2025,
    summary: "Row after row of panels across factory and warehouse roofs, photographed from above during installation.",
    description:
      "A large commercial rollout seen from above: panels laid across multiple factory and warehouse roofs, with crews working building to building.",
    caseStudy: {
      challenge:
        "Multiple factory and warehouse roofs needed solar without stopping the businesses operating underneath.",
      approach:
        "Crews worked building to building, laying panels across the available roof areas and coordinating around each site's operations.",
      outcome:
        "A large commercial rollout delivered across several roofs as one coordinated programme.",
    },
    featured: true,
  },
  {
    slug: "gold-refinery-solar",
    title: "Gold Refinery Solar",
    category: "Industrial",
    tags: ["Industrial", "Solar"],
    year: 2025,
    summary: "Panels delivered and installed as a solar upgrade for a gold refinery.",
    description:
      "A solar upgrade for a gold refinery — from delivery of the panels through installation and a clean, completed handover.",
  },
  {
    slug: "industrial-solar-set-up",
    title: "Industrial Solar Set-Up",
    category: "Industrial",
    tags: ["Industrial", "Solar"],
    year: 2025,
    summary: "An elevated industrial array on open ground, wired and tested by our own crew.",
    description:
      "An industrial set-up on raised steel mounts, installed on site with the crew working through the array from racking to wiring.",
  },
  {
    slug: "ground-mounted-solar",
    title: "Ground-Mounted Array",
    category: "Commercial",
    tags: ["Commercial", "Solar"],
    year: 2025,
    summary: "Ground-mounted solar built by the crew that shows up — boots, hard hats, and hi-vis.",
    description:
      "A ground-mounted installation photographed with the team on site: elevated racking, open ground, and full protective gear from start to finish.",
  },
  {
    slug: "home-solar",
    title: "Home Solar",
    category: "Residential",
    tags: ["Residential", "Solar"],
    year: 2025,
    summary: "Panels on a residential roof, sized for a household that wanted to generate its own power.",
    description:
      "A residential rooftop array installed for a family ready to produce its own electricity and buy less from the grid.",
  },
  {
    slug: "solar-powered-irrigation",
    title: "Solar-Powered Irrigation",
    category: "Agriculture",
    tags: ["Agriculture", "Solar"],
    year: 2025,
    summary: "An irrigation system driven by sunlight, tested and commissioned on site.",
    description:
      "Solar-powered irrigation installed, pump-tested, and commissioned so the system is field-ready — no fuel to haul and no diesel bill.",
    featured: true,
  },
  {
    slug: "eco-vo-300w-street-lights",
    title: "ECO V.O 300 W Street Lights",
    category: "Supply & Delivery",
    tags: ["Supply", "Street Lighting"],
    year: 2025,
    summary: "A batch of our own ECO V.O 300 W solar street lights, boxed and ready for delivery.",
    description:
      "ECO V.O 300 W solar street lights fresh from the factory and prepared for a government client — supplied, boxed, and delivered.",
    featured: true,
  },
  {
    slug: "solar-street-lights-government",
    title: "300 W Street Light Rollout",
    category: "Street Lighting",
    tags: ["Street Lighting", "Government", "Supply"],
    year: 2023,
    client: "Government client",
    summary: "One hundred 300 W ECO V.O solar street lights supplied for a government programme.",
    description:
      "A hundred units of 300 W ECO V.O solar street lights supplied for a government street-lighting rollout.",
  },
  {
    slug: "ufo-solar-street-lights",
    title: "100-Unit UFO Street Lights",
    category: "Supply & Delivery",
    tags: ["Supply", "Street Lighting"],
    year: 2023,
    summary: "One hundred UFO-style solar street lights supplied and handed over to a client.",
    description:
      "A supply run of 100 UFO solar street lights, prepared and delivered against a client's street-lighting requirement.",
  },
  {
    slug: "street-light-poles",
    title: "Street Light Poles, 6 m & 8 m",
    category: "Supply & Delivery",
    tags: ["Supply", "Street Lighting"],
    year: 2024,
    summary: "Hot-dip galvanised, powder-coated poles in 6 m and 8 m, delivered nationwide.",
    description:
      "Street light poles in silver grey — hot-dip galvanised and powder-coated, available in 6 m and 8 m lengths and delivered nationwide.",
    featured: true,
  },
  {
    slug: "75kva-transformer-denr-r12",
    title: "75 kVA Transformer",
    category: "Electrical Works",
    tags: ["Electrical Works", "Government"],
    year: 2025,
    client: "DENR Region 12",
    summary: "A 75 kVA transformer installed, tested, and commissioned for DENR Region 12.",
    description:
      "Installation, testing, and commissioning of a new 75 kVA transformer for DENR Region 12, carried out by our electrical team.",
    featured: true,
  },
  {
    slug: "cctv-maguindanao-police-station",
    title: "CCTV for a Police Station",
    category: "Electrical Works",
    tags: ["Electrical Works", "Government"],
    year: 2023,
    location: "Northern Maguindanao",
    client: "Police station",
    summary: "Surveillance cameras installed at the Northern Maguindanao Police Station.",
    description:
      "CCTV installation at the Northern Maguindanao Police Station — security work we take on alongside solar and electrical projects.",
  },
  {
    slug: "fdas-government-project",
    title: "FDAS Government Project",
    category: "Electrical Works",
    tags: ["Electrical Works", "Government"],
    year: 2023,
    client: "Government client",
    summary: "Fire detection and alarm system works for a government project.",
    description:
      "FDAS installation for a government project — detection devices, wiring, and the panel work behind them.",
  },
  {
    slug: "led-wall-supply",
    title: "LED Wall Supply & Install",
    category: "Supply & Delivery",
    tags: ["Supply", "Electrical Works"],
    year: 2025,
    summary: "LED walls supplied and installed for events and venues.",
    description:
      "Supply and installation of LED walls for events — displays built, mounted, and commissioned by our team.",
  },
  {
    slug: "generator-sets-supply",
    title: "Generator Sets",
    category: "Supply & Delivery",
    tags: ["Supply"],
    year: 2023,
    client: "Government client",
    summary: "Generator sets supplied for a government client.",
    description:
      "Supply of generator sets — part of the wider electrical inventory we keep for private and government projects.",
  },
  {
    slug: "solar-road-studs",
    title: "Solar Road Studs",
    category: "Supply & Delivery",
    tags: ["Supply", "Street Lighting"],
    year: 2023,
    summary: "Solar road studs in aluminium housings — road marking that works at night.",
    description:
      "Solar-charged road studs supplied in quantity, with aluminium housings and built-in panels for night visibility.",
  },
];

export const credentials = [
  { title: "DOE-certified PV installer", copy: "The credential the company states on its own project posts." },
  { title: "PHILGEPS-ready", copy: "Complete documents for private and government projects." },
  { title: "Private + government", copy: "LGU rooftops, police stations, DENR works, homes, and businesses." },
  { title: "Nationwide delivery", copy: "Street light poles, solar lights, and electrical materials." },
];

export const stockGroups = [
  {
    title: "Solar equipment",
    items: ["Solar panels", "Inverters", "Solar street lights", "Solar road studs", "Street light poles", "ECO V.O 300 W"],
  },
  {
    title: "Electrical supplies",
    items: ["LED lights", "Flood lights", "Wires and cables", "Switches", "Breakers", "Bulk orders"],
  },
  {
    title: "Electrical works",
    items: ["Transformers", "Generator sets", "CCTV systems", "Fire detection & alarm", "LED walls", "Street lighting"],
  },
];
