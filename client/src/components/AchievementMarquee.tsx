"use client"

import React from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';

export default function AchievementMarquee() {
  const items = [
    "2X HACKATHON WINNER",
    "OPEN SOURCE CONTRIBUTOR",
    "5+ CERTIFICATIONS",
    "DISTRIBUTED SYSTEMS",
    "RAG + LLM APPS"
  ];
  
  // Duplicate array multiple times for seamless infinite scroll on ultra-wide monitors
  const repeatedItems = [...items, ...items, ...items, ...items, ...items];

  return (
    <Link href="/achievements" className="block w-full bg-black text-white py-4 overflow-hidden border-y-[4px] border-black hover:bg-red-600 transition-colors cursor-pointer group">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 35
        }}
      >
        {repeatedItems.map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.25em] px-8 group-hover:text-black transition-colors">
              {item}
            </span>
            <span className="text-red-600 group-hover:text-black transition-colors">✦</span>
          </div>
        ))}
      </motion.div>
    </Link>
  );
}
