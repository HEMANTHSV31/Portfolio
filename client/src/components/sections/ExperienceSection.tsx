"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  highlights: string[];
  footerNote?: string;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: "bhuvaneswari",
    company: "Bhuvaneswari Plastics",
    role: "Backend Developer",
    duration: "Feb 2026 - Present",
    highlights: [
      "Completely owned and engineered the backend architecture and database design.",
      "Developed automated billing systems to significantly accelerate approval times.",
      "Successfully digitized complex, manual paper-based workflows into robust software solutions."
    ]
  },
  {
    id: "pcdp",
    company: "PCDP BIT",
    role: "Backend Developer",
    duration: "Jan 2025 - Jan 2026",
    highlights: [
      "Developed backend services using Node.js and MySQL for core academic functionalities.",
      "Designed normalized relational database schemas for high data integrity and scalability.",
      "Built RESTful APIs for user management, authentication, and workflows.",
      "Collaborated with cross-functional teams to translate requirements into scalable solutions."
    ],
    footerNote: "Mentored 20+ Students in JS & Backend"
  }
];

const ExperienceCard = ({ item }: { item: ExperienceItem }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="border-[3px] md:border-[4px] border-black bg-white p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-6">
        <Terminal size={24} className="text-black" />
        <span className="bg-black text-white text-[10px] font-black uppercase tracking-widest px-2 py-1">
          {item.duration}
        </span>
      </div>
      
      <h3 className="font-bebas text-3xl md:text-4xl text-black uppercase tracking-tighter mb-1">
        {item.company}
      </h3>
      <p className="text-sm font-bold text-red-600 uppercase tracking-widest mb-6 border-b-2 border-black/10 pb-4">
        {item.role}
      </p>
      
      <ul className="text-xs md:text-sm font-bold leading-relaxed text-black/80 space-y-3 flex-grow mb-6">
        {item.highlights.map((highlight, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="text-red-600 font-black whitespace-nowrap mt-0.5">
              {"[+]"}
            </span> 
            {highlight}
          </li>
        ))}
      </ul>
      
      {item.footerNote && (
        <div className="mt-auto pt-4 border-t border-black/10">
          <span className="text-[10px] font-black uppercase tracking-widest bg-black text-white px-2 py-1 skew-x-[-10deg] inline-block">
            {item.footerNote}
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default function ExperienceSection() {
  return (
    <section className="relative w-full bg-white py-16 font-inter overflow-hidden border-y-[6px] border-black">
      <div className="max-w-[90%] mx-auto px-4 md:px-6">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end gap-4 mb-12 md:mb-16">
          <motion.h2 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="font-bebas text-5xl md:text-6xl text-black leading-none italic uppercase"
          >
            CAREER <span className="text-transparent [-webkit-text-stroke:2px_black]">DOSSIER</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {EXPERIENCES.map((item) => (
            <ExperienceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
