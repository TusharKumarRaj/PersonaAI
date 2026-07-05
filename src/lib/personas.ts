import type { StaticImageData } from "next/image";
import hiteshImage from "../../assets/hitesh.jpg";
import piyushImage from "../../assets/piyush.jpg";

export type PersonaColor = "royal" | "orange";

export interface PersonaTopic {
  title: string;
  subtitle: string;
}

export interface Persona {
  id: string;
  name: string;
  role: string;
  bio: string;
  color: PersonaColor;
  image: StaticImageData;
  imageSide: "left" | "right";
  imageBg: string;
  topics: PersonaTopic[];
}

export interface Message {
  id: string;
  role: "user" | "persona";
  content: string;
  timestamp: Date;
}

export const PERSONAS: Persona[] = [
  {
    id: "hitesh-choudhary",
    name: "Hitesh Choudhary",
    role: "Developer & Educator",
    bio: "Talk to Hitesh about coding, tech careers, and building real-world projects — practical advice with a friendly, no-nonsense vibe.",
    color: "royal",
    image: hiteshImage,
    imageSide: "left",
    imageBg: "from-[#5b4fcf] to-[#3b59ff]",
    topics: [
      { title: "Learn by building", subtitle: "Code that sticks" },
      { title: "Break into tech", subtitle: "Jobs, interviews & reality" },
      { title: "Ship real projects", subtitle: "Beyond tutorials" },
    ],
  },
  {
    id: "piyush-garg",
    name: "Piyush Garg",
    role: "Entrepreneur & Educator",
    bio: "Chat with Piyush about mindset, entrepreneurship, and life — raw, honest conversations with real-world wisdom.",
    color: "orange",
    image: piyushImage,
    imageSide: "right",
    imageBg: "from-[#ff922b] to-[#ff7a00]",
    topics: [
      { title: "Think like a builder", subtitle: "Mindset that compounds" },
      { title: "Start something", subtitle: "From idea to execution" },
      { title: "Ask anything", subtitle: "Honest, unfiltered chat" },
    ],
  },
];

export const COLOR_MAP: Record<
  PersonaColor,
  {
    badge: string;
    accent: string;
    ring: string;
    border: string;
    btn: string;
    topicBg: string;
    topicIcon: string;
  }
> = {
  royal: {
    badge: "bg-brand-blue",
    accent: "text-brand-blue",
    ring: "ring-brand-blue/30",
    border: "border-brand-blue/20",
    btn: "bg-brand-blue hover:bg-[#2f4de0]",
    topicBg: "bg-brand-blue/5",
    topicIcon: "text-brand-blue",
  },
  orange: {
    badge: "bg-brand-orange",
    accent: "text-brand-orange",
    ring: "ring-brand-orange/30",
    border: "border-brand-orange/20",
    btn: "bg-brand-orange hover:bg-[#e66d00]",
    topicBg: "bg-brand-orange/5",
    topicIcon: "text-brand-orange",
  },
};
