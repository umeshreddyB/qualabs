import {
  Code2,
  PenTool,
  Megaphone,
  Smartphone,
  Search,
  Sparkles,
} from "lucide-react";

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const offerings = [
  "Brand Identity",
  "UI / UX Design",
  "Web Development",
  "Mobile Apps",
  "SEO & Growth",
  "Digital Marketing",
];

export const services = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Fast, scalable sites and web apps built with React, Next.js and modern tooling.",
    tags: ["React", "Next.js", "Node"],
  },
  {
    icon: PenTool,
    title: "UI / UX Design",
    desc: "Interfaces that feel effortless — from wireframes to pixel-perfect prototypes.",
    tags: ["Figma", "Design Systems", "Prototyping"],
  },
  {
    icon: Sparkles,
    title: "Brand Identity",
    desc: "Logos, typography and visual systems that make your brand impossible to ignore.",
    tags: ["Logo", "Guidelines", "Strategy"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Cross-platform iOS & Android apps with native feel and buttery performance.",
    tags: ["React Native", "Expo", "iOS / Android"],
  },
  {
    icon: Search,
    title: "SEO & Growth",
    desc: "Technical SEO, analytics and content strategy that compound traffic over time.",
    tags: ["SEO", "Analytics", "CRO"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Paid, social and email campaigns engineered to turn attention into revenue.",
    tags: ["Ads", "Social", "Email"],
  },
];

export const work = [
  {
    title: "Nirban Dham",
    category: "Website · Spiritual",
    image: "/projects/nirban-dham.png",
    desc: "A spiritual sanctuary site featuring events, initiatives and online donation support.",
    url: "https://serve-pro-eight.vercel.app/",
  },
  {
    title: "Aurum Retreats",
    category: "Web App · Hospitality",
    image: "/projects/aurum-retreats.png",
    desc: "A luxury resort booking platform with curated stays and a seamless reservation flow.",
    url: "https://family-resort.vercel.app/",
  },
];

export const processSteps = [
  {
    no: "01",
    title: "Discover",
    desc: "We dig into your goals, audience and competitors to find the real opportunity.",
  },
  {
    no: "02",
    title: "Design",
    desc: "Concepts, wireframes and prototypes refined together until it feels right.",
  },
  {
    no: "03",
    title: "Build",
    desc: "Clean, tested code shipped in fast iterations with full transparency.",
  },
  {
    no: "04",
    title: "Launch & Grow",
    desc: "We deploy, measure and keep optimizing long after go-live.",
  },
];
