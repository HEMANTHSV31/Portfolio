"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-20 flex items-start justify-center">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Contact Me</h2>
        <p className="mb-6 text-lg text-muted-foreground">
          Got a question, opportunity, or want to collaborate? Feel free to
          reach out!
        </p>

        <div className="space-y-6">
          {/* Email */}
          <div>
            <h3 className="text-xl font-semibold text-red-500">Email</h3>
            <p className="text-lg text-muted-foreground">
              You can reach me at{" "}
              <a
                href="mailto:hemanth@example.com"
                className="text-red-500 font-medium"
              >
                hemanth@gmail.com
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold text-gray-400">
              Connect with me
            </h3>
            <div className="space-x-6">
              <a
                href="https://www.linkedin.com/in/hemanth"
                className="text-lg text-red-500 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/hemanth"
                className="text-lg text-red-500 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
