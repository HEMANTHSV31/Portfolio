"use client";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="fixed inset-0 -z-10 w-full h-full top-0 left-0">
        <ParticlesBackground />
      </div>
      
      {/* hero section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center w-full min-h-screen flex flex-col justify-center bg-gradient-to-r from-black/10 via-zinc-900 to-red-900/60"
      >
        <motion.h1
          className="text-4xl sm:text-6xl font-bold tracking-tight"
          animate={{ y: [0,-9,0],
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
           }}
        >
          I Build Systems Where <br />{" "}
          <span className="bg-gradient-to-r from-red-500 to-zinc-500 bg-clip-text text-transparent">
            Crypto meets Gen AI
          </span>
        </motion.h1>
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
          Backend developer specializing in distributed systems. I build scalable infrastructure, Web3 protocols, and production-ready Generative AI architectures. Let&apos;s talk nodes, models, and robust APIs.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/projects"
            className="bg-red-500 hover:bg-red-600 font-semibold text-md rounded-xl px-5 py-2 transition text-white"
          >
            See My Projects
          </Link>
        </div>
      </motion.section>

      {/* about me section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-20 text-center max-w-3xl mx-auto px-4"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 "> <span className=" bg-gradient-to-r from-red-600 via-white/70 to-red-600 bg-clip-text text-transparent">About Me</span> </h2>
        <p className="text-lg sm:text-xl text-muted-foreground mb-6">
          I&apos;m a backend developer with a deep focus on crypto, distributed systems, and Generative AI. Currently building{" "}
          <strong>CloudSync</strong>, <strong>VisionAI</strong> &{" "}
          <strong>FlowState</strong> — blending infrastructure, security, and AI.
        </p>
        <Link
          href="/about"
          className="inline-block bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold text-sm rounded-xl px-5 py-2 transition"
        >
          More About Me
        </Link>
      </motion.section>

      {/* projects preview section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-20 text-center max-w-5xl mx-auto px-4"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-red-600 via-white/70 to-red-600 bg-clip-text text-transparent">Featured Projects</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <motion.section
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-lg p-6 hover:shadow-xl transition-shadow h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">CloudSync</h3>
                <p className="text-zinc-400 mb-4 text-left">
                  A secure, decentralized file storage platform utilizing AWS S3 and end-to-end encryption.
                </p>
              </div>
              <Link
                href="/projects"
                className="inline-block bg-red-500 text-white font-semibold text-sm rounded-xl px-5 py-2 transition hover:bg-red-600 text-center"
              >
                View Project
              </Link>
            </div>
          </motion.section>
          
          {/* Project 2 */}
          <motion.section
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-lg p-6 hover:shadow-xl transition-shadow h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">VisionAI</h3>
                <p className="text-zinc-400 mb-4 text-left">
                  A machine learning model built with PyTorch that analyzes medical imagery to detect anomalies.
                </p>
              </div>
              <Link
                href="/projects"
                className="inline-block bg-red-500 text-white font-semibold text-sm rounded-xl px-5 py-2 transition hover:bg-red-600 text-center"
              >
                View Project
              </Link>
            </div>
          </motion.section>

          {/* Project 3 */}
          <motion.section
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-lg p-6 hover:shadow-xl transition-shadow h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">FlowState</h3>
                <p className="text-zinc-400 mb-4 text-left">
                  A cross-platform productivity application written in Rust and Tauri for deep focus.
                </p>
              </div>
              <Link
                href="/projects"
                className="inline-block bg-red-500 text-white font-semibold text-sm rounded-xl px-5 py-2 transition hover:bg-red-600 text-center"
              >
                View Project
              </Link>
            </div>
          </motion.section>
        </div>
      </motion.section>

      {/* tech stack section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-20 py-10 mb-20 text-center max-w-4xl mx-auto w-full px-4"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-red-600 via-white/70 to-red-600 bg-clip-text text-transparent">Tech Stack</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          
          <div className="flex flex-col items-center text-center">
            <img src="/tech-icons/rust.svg" alt="Rust" className="w-16 h-16 mb-4" />
            <span className="font-semibold text-md text-white">Rust</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src="/tech-icons/python.svg" alt="Python" className="w-16 h-16 mb-4" />
            <span className="font-semibold text-md text-white">Python</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src="/tech-icons/javascript.svg" alt="JavaScript" className="w-16 h-16 mb-4" />
            <span className="font-semibold text-md text-white">JavaScript</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src="/tech-icons/nodejs.svg" alt="Node.js" className="w-16 h-16 mb-4" />
            <span className="font-semibold text-md text-white">Node.js</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src="/tech-icons/aws.svg" alt="AWS" className="w-16 h-16 mb-4" />
            <span className="font-semibold text-md text-white">AWS</span>
          </div>

          <div className="flex flex-col bg-white/5 text-black items-center text-center rounded-xl p-2 border border-white/10">
            <div className="w-16 h-16 bg-white p-2 rounded-xl flex items-center justify-center mb-2">
              <img src="/tech-icons/nextjs.svg" alt="Next.js" className="w-12 h-12" />
            </div>
            <span className="font-semibold text-md text-white">Next.js</span>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <img src="/tech-icons/react.svg" alt="React" className="w-16 h-16 mb-4" />
            <span className="font-semibold text-md text-white">React</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src="/tech-icons/tailwindcss.svg" alt="Tailwind CSS" className="w-16 h-16 mb-4" />
            <span className="font-semibold text-md text-white">Tailwind</span>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <img src="/tech-icons/git.svg" alt="Git" className="w-16 h-16 mb-4" />
            <span className="font-semibold text-md text-white">Git</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src="/tech-icons/github.svg" alt="GitHub" className="w-16 h-16 mb-4" />
            <span className="font-semibold text-md text-white">GitHub</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src="/tech-icons/ai.svg" alt="Gen AI" className="w-16 h-16 mb-4" />
            <span className="font-semibold text-md text-white">Gen AI</span>
          </div>

        </div>
      </motion.section>
    </main>
  );
}
