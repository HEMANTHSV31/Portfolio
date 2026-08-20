"use client";
import { motion } from "framer-motion";

export default function ProjectPage() {
  return (
    <main className="min-h-screen px-6 py-20 flex items-start justify-center">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">My Projects</h2>
        
        {/* Project 1: CloudSync */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-red-500">
            CloudSync - File Management
          </h3>
          <p className="mt-4 text-lg text-muted-foreground">
            A secure, decentralized file storage platform utilizing Next.js and AWS S3. Features end-to-end encryption, fast uploads, and seamless sharing capabilities.
          </p>
          <a
            href="https://github.com/hemanth/cloudsync"
            className="mt-4 inline-block text-red-500 font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>

        {/* Project 2: VisionAI */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-red-500">
            VisionAI - Image Analysis
          </h3>
          <p className="mt-4 text-lg text-muted-foreground">
            A machine learning model and web interface built with PyTorch and React. It analyzes medical imagery to detect anomalies with 98% accuracy.
          </p>
          <a
            href="https://github.com/hemanth/vision-ai"
            className="mt-4 inline-block text-red-500 font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
        
        {/* Project 3: FlowState */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-red-500">
            FlowState - Productivity Tool
          </h3>
          <p className="mt-4 text-lg text-muted-foreground">
            A cross-platform desktop application written in Rust and Tauri. Helps users maintain deep focus using customizable Pomodoro sequences and ambient soundscapes.
          </p>
          <a
            href="https://github.com/hemanth/flowstate"
            className="mt-4 inline-block text-red-500 font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </motion.section>
    </main>
  );
}
