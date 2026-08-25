"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "Sri Bhuvaneshwari Plastics",
    id: "spb-plastics",
    category: "Workflow Automation",
    description:
      "Automated their billing system to accelerate approvals, successfully digitizing their entire paper-based workflow into robust software.",
    focus: "Digitizing paper-based workflows & streamlining approvals",
    tech: ["Web App", "Digitization", "Billing System", "Automation"],
    link: "https://github.com/HEMANTHSV31/sri_bhuvaneshwari_plastics.git",
    images: ["/projects/spb.png"], 
  },
  {
    name: "Stream Forge",
    id: "stream-forge",
    category: "Video Streaming Platform",
    description:
      "A SaaS streaming platform for organizations and individuals to store videos in the cloud with CDN integration for high-performance streaming.",
    focus: "High-performance video delivery & Cloud Storage",
    tech: ["Video Streaming", "CDN", "Cloud Storage", "SaaS"],
    link: "https://github.com/HEMANTHSV31/StreamForge.git",
    images: ["/images/contact.png"], // Placeholder image
  },
  {
    name: "Ticket Booking System",
    id: "ticket-booking",
    category: "Booking Engine",
    description:
      "A comprehensive ticket reservation system handling real-time availability, secure user bookings, and transaction management.",
    focus: "Handling concurrent user bookings reliably",
    tech: ["Web App", "Booking Engine", "Database Management"],
    link: "https://github.com/HEMANTHSV31/TicketBooking.git",
    images: ["/images/contact.png"], // Placeholder image
  },
  {
    name: "Plantera",
    id: "plantera",
    category: "Environmental Monitoring",
    description:
      "A comprehensive web application for real-time deforestation detection and environmental monitoring using satellite imagery and machine learning.",
    focus: "Real-time detection and analysis using ML",
    tech: ["Satellite Imagery", "Machine Learning", "Web App"],
    link: "https://github.com/The-Plantera/Plantera-Web.git",
    images: ["/projects/plantera.png"], // Updated to use the actual image
  },
];

export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-stone-950 px-4 md:px-6 py-12 md:py-24 text-stone-100 font-inter overflow-x-hidden">
      {/* 1. BACKGROUND TEXTURE */}
      <div
        className="fixed inset-0 z-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#fff 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* 2. SECTION HEADER */}
      <header className="relative z-10 w-full max-w-[90%] mx-auto mb-16 md:mb-40 border-l-[8px] md:border-l-[12px] border-stone-100 pl-5 md:pl-8">
        <h1 className="text-6xl sm:text-7xl md:text-[10rem] font-bebas leading-[0.85] md:leading-[0.8] tracking-tighter italic uppercase">
          PROJECT <br />
          <span className="text-transparent [-webkit-text-stroke:1px_#f5f5f4] md:[-webkit-text-stroke:2px_#f5f5f4]">
            ARCHIVES
          </span>
        </h1>
        <p className="text-stone-500 font-black uppercase tracking-[0.2em] md:tracking-[0.4em] mt-4 md:mt-6 text-[9px] md:text-xs italic">
          AI Systems // Automation // Research Projects
        </p>
      </header>


      {/* 3. PROJECT LIST */}
      <div className="relative z-10 w-full max-w-[90%] mx-auto space-y-32 md:space-y-64">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            id={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            /* FIX: Added scroll-mt-[25vh] (or adjust to your preference) 
         to center the project vertically when linked from landing 
      */
            className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 items-center group scroll-mt-[20vh] md:scroll-mt-[25vh]"
          >
            {/* IMAGE PANEL */}
            <div
              className={`md:col-span-7 relative order-1 ${index % 2 !== 0 ? "md:order-2" : ""}`}
            >
              {/* Decorative Frame */}
              <div className="absolute -inset-2 md:-inset-4 border-1 border-stone-800 rotate-[-1.5deg] group-hover:rotate-0 transition-transform duration-500" />

              <div className="relative aspect-video border-[2px] md:border-[8px] border-stone-100 bg-stone-900 overflow-hidden shadow-[20px_20px_0px_rgba(255,255,255,0.02)]">
                <img
                  src={project.images[0]}
                  className="object-cover w-full h-full opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  alt={project.name}
                />
              </div>
            </div>

            {/* TEXT PANEL */}
            <div
              className={`md:col-span-5 space-y-6 md:space-y-8 order-2 ${index % 2 !== 0 ? "md:order-1" : ""}`}
            >
              <div className="space-y-2">
                <div className="inline-block bg-stone-100 text-stone-950 px-2 py-0.5 text-[9px] font-black tracking-widest uppercase italic">
                  PROJECT_0{index + 1}
                </div>
                <h2 className="font-bebas text-5xl md:text-7xl leading-none tracking-tighter uppercase italic text-stone-100">
                  {project.name}
                </h2>
                <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-stone-500">
                  Category: {project.category}
                </p>
              </div>

              <p className="text-base md:text-xl font-medium leading-tight text-stone-400 border-l-4 border-stone-800 pl-4 italic">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="border border-stone-700 text-stone-300 text-[8px] md:text-[10px] font-black px-2 py-1 uppercase tracking-tighter hover:bg-stone-100 hover:text-stone-950 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-6 border-t border-stone-800/50">
                <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-4 text-stone-600">
                  Core_Focus //{" "}
                  <span className="text-stone-100 italic">{project.focus}</span>
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  className="inline-flex items-center gap-4 font-bebas text-2xl md:text-2xl text-stone-100 hover:italic hover:pl-4 transition-all group"
                >
                  OPEN_GITHUB →{" "}
                  <span className="group-hover:translate-x-2 transition-transform text-red-900">
                    →
                  </span>
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* 4. FINAL CTA (System Exit) */}
      <section className="relative z-10 w-full max-w-[90%] mx-auto mt-40 md:mt-80 mb-20">
        <div className="border-[10px] border-stone-100 p-8 md:p-24 relative overflow-hidden bg-stone-100">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(#000 2px, transparent 0)`,
              backgroundSize: "12px 12px",
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="max-w-2xl">
              <h2 className="font-bebas text-6xl md:text-[10rem] leading-[0.8] italic mb-8 text-stone-950 uppercase tracking-tighter">
                LET&apos;S BUILD<br /> SOMETHING COOL.
              </h2>
              <p className="text-xs md:text-sm font-black uppercase tracking-[0.4em] text-stone-600">
                Open to collaborations in AI, automation, and real-time systems engineering.
              </p>
            </div>
            <a
              href="/contact"
              className="w-full md:w-auto text-center bg-stone-950 text-stone-100 px-12 py-6 font-bebas text-4xl italic tracking-tighter hover:bg-red-900 transition-all shadow-[10px_10px_0px_#444]"
            >
              GET_IN_TOUCH →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
