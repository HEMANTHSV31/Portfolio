"use client"

import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative min-h-[83vh] flex flex-col justify-start md:justify-center overflow-hidden bg-white text-black font-inter border-[7px] border-black m-2 md:m-2">

      {/* HALFTONE TEXTURE */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#000 1.5px, transparent 0)",
          backgroundSize: "6px 6px",
        }}
      />

      <div className="relative z-20 w-full px-8 md:px-24 pt-12 md:pt-0">

        {/* HERO CONTENT */}
        <div className="max-w-5xl space-y-8">

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-7xl md:text-[11rem] font-bebas leading-[0.82] tracking-tighter italic">
              HEMANTH <br />
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-5"
          >

            {/* ROLE */}
            <div className="inline-block bg-black text-white px-6 py-3 text-lg md:text-xl font-bold uppercase tracking-tight rotate-[-1deg]">
              Backend Developer
            </div>

            {/* DESCRIPTION */}
            <div className="max-w-2xl space-y-4">
              <p className="text-lg md:text-xl font-medium leading-relaxed text-black/75 tracking-tight">
                I am a backend developer building distributed systems,
                automation infrastructure, and high-performance
                applications using Node.js, Next.js, and
                real-time data workflows.
              </p>

              {/* METRICS */}
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  "1000+ Commits on GitHub",
                  "Distributed Systems",
                  "RAG + LLM Apps",
                  "Node.js + AWS Cloud",
                ].map((item) => (
                  <span
                    key={item}
                    className="border-2 border-black px-4 py-2 text-xs md:text-sm font-black uppercase tracking-[0.18em]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* LOCATION */}
              <p className="text-xs font-black tracking-[0.25em] uppercase text-black/40 pt-2">
                Based in Bangalore, India
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CHARACTER IMAGE */}
      <div className="absolute bottom-0 right-0 w-full md:w-3/4 lg:w-1/2 z-10 pointer-events-none">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative flex items-end justify-end"
        >

          {/* INK SPLASH */}
          <img
            src="/images/splash.png"
            className="absolute right-40 w-[150%] max-w-none opacity-25 scale-x-[-1] translate-x-1/4"
            alt=""
          />

          {/* MAIN IMAGE */}
          <img
            src="/images/hero.png"
            alt="Hemanth portrait"
            className="relative z-20 w-full object-bottom top-8 select-none"
          />
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-10 z-30 hidden md:block">
        <div className="flex flex-col items-center gap-4">
          <span className="[writing-mode:vertical-lr] font-black text-[10px] tracking-[0.5em] uppercase opacity-40">
            Explore Work
          </span>

          <div className="w-[2px] h-20 bg-gradient-to-b from-black to-transparent" />
        </div>
      </div>
    </section>
  )
}
