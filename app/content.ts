export const site = {
  name: "V.O Electrical Lights Trading",
  legalName: "Villanueva-Ong Electrical Lights Trading",
  phoneDisplay: "0992 659 5090",
  phone: "+639926595090",
  email: "villanuevaongtrading@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100070349910288",
  followers: "4.5K+ Facebook followers",
  // Replace every bracketed value before publishing. This is the single source for unknown business details.
  businessAddress: "[Business address]",
  mapEmbedUrl: "[Map embed URL]",
  serviceAreas: "[Service areas — confirm]",
  warranty: "[Warranty details — confirm]",
  installationTimeline: "[Typical installation timeline — confirm]",
  formEndpoint: "/api/quote", // Configure RESEND_API_KEY and RESEND_FROM_EMAIL to enable delivery.
  batterySolutionLabel: "Solar + Battery Backup [confirm]",
};

export type Project = { slug: string; title: string; category: string; image: string; description: string; status?: string };
export const projects: Project[] = [
  { slug: "residential-solar", title: "Residential solar system", category: "Home solar", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80", description: "Project details and photos coming soon.", status: "[Project details to be added]" },
  { slug: "farm-solar-irrigation", title: "Solar-powered irrigation", category: "Farm solar", image: "https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?auto=format&fit=crop&w=1400&q=80", description: "Project details and photos coming soon.", status: "[Project details to be added]" },
  { slug: "business-rooftop", title: "Business rooftop solar", category: "Commercial solar", image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1400&q=80", description: "Project details and photos coming soon.", status: "[Project details to be added]" },
  { slug: "solar-street-lighting", title: "Solar street lighting", category: "Community lighting", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=80", description: "Project details and photos coming soon.", status: "[Project details to be added]" },
  { slug: "ground-mounted-array", title: "Ground-mounted solar array", category: "Ground mount", image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1400&q=80", description: "Project details and photos coming soon.", status: "[Project details to be added]" },
  { slug: "solar-battery", title: "Solar + battery backup", category: "Energy storage", image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1400&q=80", description: "Project details and photos coming soon.", status: "[Project details to be added]" },
];

export const reviews = [
  { quote: "[Customer review to be added]", name: "[Customer name]", project: "[Project type]" },
  { quote: "[Customer review to be added]", name: "[Customer name]", project: "[Project type]" },
  { quote: "[Customer review to be added]", name: "[Customer name]", project: "[Project type]" },
];
