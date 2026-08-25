"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import Link from "next/link"; 

interface ProjectCardProps {
  title: string;
  id: string;
  desc: string;
  tech: string[];
  image?: string; 
}

const ProjectCard = ({ title, id, desc, tech, image }: ProjectCardProps) => (
  /* The entire card is now wrapped in a Link pointing to the specific project ID */
  <Link href={`/projects#${id}`} className="block group h-full">
    <motion.div 
      whileHover={{ y: -5 }}
      className="relative h-full flex flex-col border-[3px] md:border-[4px] border-black bg-white p-5 md:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all group-hover:shadow-none group-hover:translate-x-[3px] md:group-hover:translate-x-[4px] group-hover:translate-y-[3px] md:group-hover:translate-y-[4px]"
    >
      {/* PROJECT IMAGE PANEL */}
      <div className="relative w-full aspect-video bg-gray-50 border-b-[3px] md:border-b-[4px] border-black overflow-hidden mb-5 md:mb-6">
        <div className="absolute inset-0 opacity-5 md:opacity-10 group-hover:opacity-20 transition-opacity z-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 0)', backgroundSize: '8px 8px' }} />
        
        {image && (
          <img 
            src={image} 
            alt={`${title} Preview`}
            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
          />
        )}
        
        <div className="absolute top-0 right-0 w-8 md:w-12 h-8 md:h-12 bg-black skew-x-[45deg] translate-x-4 md:translate-x-6 -translate-y-4 md:-translate-y-6 z-30" />
      </div>

      {/* HEADER */}
      <div className="flex justify-between items-start mb-3 md:mb-4">
        <div>
          <h3 className="font-bebas text-3xl md:text-4xl text-black leading-none uppercase tracking-tighter group-hover:italic transition-all group-hover:underline decoration-red-600 underline-offset-4">
            {title}
          </h3>
        </div>
      </div>

      {/* DESCRIPTION */}
      <p className="text-xs md:text-sm font-bold leading-tight text-black/80 mb-5 md:mb-6 border-l-2 border-black pl-3 flex-grow">
        {desc}
      </p>

      {/* TECH STACK */}
      <div className="flex flex-wrap gap-1.5 md:gap-2 pt-4 border-t border-black/10 mt-auto">
        {tech.map((t) => (
          <span key={t} className="text-[8px] md:text-[9px] font-black uppercase tracking-tighter md:tracking-widest bg-black text-white px-1.5 md:px-2 py-0.5 skew-x-[-10deg]">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  </Link>
);

export default function FeaturesSection() {
  return (
    <section className="relative w-full max-w-[90%] mx-auto px-4 md:px-6 mt-16 md:mt-32 mb-24 md:mb-40 overflow-x-hidden">
      
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end gap-4 mb-12 md:mb-16">
        <motion.h2 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="font-bebas text-5xl sm:text-7xl md:text-9xl text-white/60 leading-none italic uppercase "
        >
          ACTIVE <br /> <span className="text-transparent [-webkit-text-stroke:1px_white] md:[-webkit-text-stroke:2px_white]">PROJECTS</span>
        </motion.h2>
        <div className="h-[2px] w-full md:flex-grow bg-black/10 mb-2 md:mb-4 relative overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="absolute top-0 left-0 h-full bg-red-600/50" 
          />
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        <ProjectCard
          title="Stream Forge"
          id="stream-forge"
          desc="A SaaS streaming platform for organizations and individuals to store videos in the cloud with CDN integration for high-performance streaming."
          tech={["Video Streaming", "CDN", "Cloud Storage", "SaaS"]}
        />

        <ProjectCard
          title="Bhuvaneswari Plastics"
          id="bhuvaneswari"
          desc="Automated their billing system to accelerate approvals, successfully digitizing their entire paper-based workflow into robust software."
          tech={["Workflow Automation", "Digitization", "Billing System"]}
        />

        <ProjectCard
          title="Plantera"
          id="plantera"
          desc="A comprehensive web application for real-time deforestation detection and environmental monitoring. Built with modern technologies to track and analyze deforestation through satellite imagery and machine learning."
          tech={["Satellite Imagery", "Machine Learning", "Web App"]}
        />
      </div>

      {/* FOOTER DETAIL */}
      <div className="mt-8 md:mt-12 flex justify-end">
        <div className="flex items-center gap-2 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-black/30">
          <Terminal size={12} /> Access_System_Logs // V.02
        </div>
      </div>
    </section>
  );
}
