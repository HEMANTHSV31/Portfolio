"use client"

import { motion } from "framer-motion"

type Item = {
  title: string
  date: string
  description: string
  image?: string
  bgPosition?: string
}

const ACHIEVEMENTS: Item[] = [
  {
    title: "Winner - Dev Spark National Hackathon",
    date: "2025",
    description: "Developed Plantera, an intelligent environmental monitoring platform utilizing satellite imagery and ML to detect deforestation in real-time.",
    image: "/achievements/Devspark.png",
    bgPosition: "top"
  },
  {
    title: "Runner Up - SNS Ideathon 2026",
    date: "2026",
    description: "Engineered a centralized inter-college event distribution platform, streamlining seamless cross-campus event sharing without individual verification barriers.",
    image: "/achievements/SnsIdeathon.png",
    bgPosition: "top"
  },
  {
    title: "Open Source Contributor - Medusa.js",
    date: "2026",
    description: "Active contributor to Medusa.js, an open-source headless commerce platform, optimizing backend architecture and data processing.",
    image: "/achievements/opensource.png",
    bgPosition: "top left"
  }
]

const CERTIFICATIONS: Item[] = [
  {
    title: "AWS Certified Developer",
    date: "2026",
    description: "Validated expertise in developing, deploying, and debugging cloud-based applications using AWS services.",
    image: "/certifications/aws.png"
  },
  {
    title: "Oracle Cloud Infrastructure",
    date: "2025",
    description: "Certified in designing and deploying secure, scalable, and highly available architectures on Oracle Cloud.",
    image: "/certifications/oci.png"
  },
  {
    title: "Cisco JavaScript Essentials",
    date: "2026",
    description: "Demonstrated strong foundational knowledge of JavaScript programming, DOM manipulation, and asynchronous logic.",
    image: "/certifications/ciscojs.png"
  },
  {
    title: "Cisco Operating Systems",
    date: "2026",
    description: "Mastered core concepts of operating systems, including process management, memory allocation, and system security.",
    image: "/certifications/ciscoos.png"
  }
]

export default function AchievementsPage() {
  return (
    <section className="w-full max-w-[90%] mx-auto px-4 md:px-6 py-12 md:py-20 bg-stone-950 font-inter overflow-hidden min-h-screen">
      
      {/* ACHIEVEMENTS SECTION */}
      <div className="mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-stone-800 pb-8 md:pb-12">
        <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-stone-100 italic uppercase leading-none">
          ACHIEVEMENTS
        </h2>
        <div className="text-left md:text-right mt-4 md:mt-0">
          <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-stone-500 italic">
            Milestones // Recognitions
          </p>
        </div>
      </div>

      <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-12 mb-20 md:mb-32 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {ACHIEVEMENTS.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
            className="relative overflow-hidden w-[85vw] md:w-[45vw] lg:w-[35vw] flex-shrink-0 snap-start p-6 md:p-8 bg-stone-900 border-2 border-stone-800 flex flex-col justify-between group min-h-[300px] md:h-[350px] transition-all"
          >
            {item.image && (
              <div 
                className="absolute inset-0 z-0 opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 bg-cover bg-no-repeat"
                style={{ 
                  backgroundImage: `url(${item.image})`,
                  backgroundPosition: item.bgPosition || 'center'
                }}
              />
            )}
            
            {/* Dark gradient overlay that appears on hover for perfect text contrast */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              {/* Top Header */}
              <div className="flex justify-between items-start">
                <span className="text-[9px] md:text-[10px] font-black text-stone-500 uppercase tracking-widest drop-shadow-md">
                  ACHIEVEMENT
                </span>
                <span className="text-[9px] md:text-[10px] font-black text-stone-100 uppercase tracking-widest italic drop-shadow-md">
                  {item.date}
                </span>
              </div>
              
              {/* Bottom Content */}
              <div className="flex flex-col justify-end mt-auto pt-8">
                <h3 className="font-bebas text-3xl md:text-4xl text-stone-100 leading-tight mb-2 group-hover:text-white transition-colors uppercase drop-shadow-lg">
                  {item.title}
                </h3>

                {/* Animated Description Box */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 overflow-hidden">
                  <p className="min-h-0 text-stone-300 text-xs md:text-sm font-medium leading-relaxed uppercase tracking-tight drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CERTIFICATIONS SECTION */}
      <div className="mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-stone-800 pb-8 md:pb-12">
        <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-stone-100 italic uppercase leading-none">
          CERTIFICATIONS
        </h2>
        <div className="text-left md:text-right mt-4 md:mt-0">
          <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-stone-500 italic">
            Verified // Credentials
          </p>
        </div>
      </div>

      <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {CERTIFICATIONS.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
            className="relative overflow-hidden w-[85vw] md:w-[45vw] lg:w-[35vw] flex-shrink-0 snap-start p-6 md:p-8 bg-stone-900 border-2 border-stone-800 flex flex-col justify-between group min-h-[300px] md:h-[350px] transition-all"
          >
            {item.image && (
              <div 
                className="absolute inset-0 z-0 opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 bg-cover bg-no-repeat"
                style={{ 
                  backgroundImage: `url(${item.image})`,
                  backgroundPosition: item.bgPosition || 'center'
                }}
              />
            )}
            
            {/* Dark gradient overlay that appears on hover for perfect text contrast */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              {/* Top Header */}
              <div className="flex justify-between items-start">
                <span className="text-[9px] md:text-[10px] font-black text-stone-500 uppercase tracking-widest drop-shadow-md">
                  CERTIFICATION
                </span>
                <span className="text-[9px] md:text-[10px] font-black text-stone-100 uppercase tracking-widest italic drop-shadow-md">
                  {item.date}
                </span>
              </div>
              
              {/* Bottom Content */}
              <div className="flex flex-col justify-end mt-auto pt-8">
                <h3 className="font-bebas text-3xl md:text-4xl text-stone-100 leading-tight mb-2 group-hover:text-white transition-colors uppercase drop-shadow-lg">
                  {item.title}
                </h3>

                {/* Animated Description Box */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 overflow-hidden">
                  <p className="min-h-0 text-stone-300 text-xs md:text-sm font-medium leading-relaxed uppercase tracking-tight drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {item.description}
                  </p>
                </div>
                
                <div className="flex items-center gap-4 text-[9px] md:text-[10px] font-black text-white uppercase tracking-[0.3em] mt-6 opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md">
                  VERIFIED <div className="h-[1px] w-6 md:w-8 bg-white group-hover:w-16 transition-all duration-500 shadow-md" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}