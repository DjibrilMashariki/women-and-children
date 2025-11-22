// Organization Constants
export const ORG_NAME = "Women & Children's Voice";
export const ORG_TAGLINE = "Empowering lives, building futures";
export const ORG_EMAIL = "info@womenandchildren.org";
export const ORG_PHONE = "+1 (555) 000-0000";
export const ORG_ADDRESS = "123 Compassion Lane, Hope City, HC 12345";

// Site URLs and Routes
export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  PROGRAMS: "/programs",
  STORIES: "/stories",
  DONATE: "/donate",
  CONTACT: "/contact",
  PRIVACY: "/privacy",
  TERMS: "/terms",
  GET_INVOLVED: "/get-involved",
  VOLUNTEERS: "/volunteers",
  TEAM: "/team",
} as const;

// Program Categories
export const PROGRAM_CATEGORIES = [
  { id: "education", label: "Education & Empowerment", icon: "GraduationCap" },
  { id: "health", label: "Health & Wellness", icon: "Heart" },
  { id: "protection", label: "Safety & Protection", icon: "Shield" },
  { id: "economic", label: "Economic Opportunity", icon: "TrendingUp" },
] as const;

// Impact Story Categories
export const STORY_CATEGORIES = [
  { id: "women", label: "Women's Stories" },
  { id: "children", label: "Children's Stories" },
  { id: "community", label: "Community Impact" },
] as const;

// Contact Form Types
export const CONTACT_TYPES = [
  { id: "general", label: "General Inquiry" },
  { id: "partnership", label: "Partnership Opportunity" },
  { id: "volunteer", label: "Volunteer Interest" },
  { id: "feedback", label: "Feedback" },
] as const;

// Donation Tiers
export const DONATION_TIERS = [
  { amount: 25, label: "Supporter", description: "Provides essential supplies" },
  { amount: 50, label: "Champion", description: "Funds skill training sessions" },
  { amount: 100, label: "Guardian", description: "Supports a child for a month" },
  { amount: 250, label: "Advocate", description: "Funds community programs" },
  { amount: 500, label: "Partner", description: "Creates lasting impact" },
] as const;

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/womenandchildren",
  twitter: "https://twitter.com/womenandchildren",
  instagram: "https://instagram.com/womenandchildren",
  linkedin: "https://linkedin.com/company/womenandchildren",
  youtube: "https://youtube.com/@womenandchildren",
} as const;

// Testimonials (Demo Data)
export const DEMO_TESTIMONIALS = [
  {
    name: "Maria Garcia",
    role: "Program Beneficiary",
    content:
      "This organization changed my life. I went from struggling to providing for my family and pursuing my dreams.",
    rating: 5,
  },
  {
    name: "James Okonkwo",
    role: "Volunteer",
    content:
      "Volunteering here has been incredibly rewarding. Seeing the direct impact on people's lives is truly inspiring.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Donor",
    content:
      "I'm confident that my donations go directly to helping those who need it most. Transparent and impactful work.",
    rating: 5,
  },
] as const;

// Team Members (Demo Data)
export const TEAM_DATA = [
  {
    name: "Dr. Amelia Hart",
    role: "Executive Director",
    bio: "30+ years of experience in international development and social impact.",
    initials: "AH",
  },
  {
    name: "James Okonkwo",
    role: "Programs Director",
    bio: "Leading our education and economic empowerment initiatives across regions.",
    initials: "JO",
  },
  {
    name: "Sarah Chen",
    role: "Director of Operations",
    bio: "Ensuring transparency, efficiency, and accountability in all our operations.",
    initials: "SC",
  },
] as const;
