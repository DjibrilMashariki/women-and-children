// Common types used throughout the Women & Children NGO website

export interface Organization {
  name: string;
  mission: string;
  vision: string;
  founded: number;
  headquarters: string;
  website: string;
  email: string;
  phone: string;
  socialLinks: Record<string, string>;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: "education" | "health" | "protection" | "economic";
  image: string;
  beneficiaries: number;
  impact: string;
  status: "active" | "planned" | "completed";
  startDate: string;
  endDate?: string;
}

export interface ImpactStory {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: "women" | "children" | "community";
  author: string;
  publishedAt: string;
  featured: boolean;
  views: number;
}

export interface Donation {
  id: string;
  amount: number;
  currency: string;
  donorName: string;
  donorEmail: string;
  donorPhone?: string;
  message?: string;
  programId?: string;
  isAnonymous: boolean;
  status: "pending" | "completed" | "failed";
  createdAt: string;
  updatedAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  type: "general" | "partnership" | "volunteer" | "feedback";
  status: "new" | "read" | "responded";
  createdAt: string;
}

export interface Volunteer {
  id: string;
  name: string;
  email: string;
  phone: string;
  skills: string[];
  availability: string;
  interests: string[];
  about: string;
  status: "pending" | "approved" | "active" | "inactive";
  createdAt: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  email?: string;
  socialLinks?: Record<string, string>;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image?: string;
  rating: number;
}
