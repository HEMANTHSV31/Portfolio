"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-20 flex items-start justify-center">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Who the hell is Hemanth?
        </h2>
        <p className="mb-6 text-lg text-muted-foreground">
          I&apos;m a backend developer with a deep focus on crypto, distributed systems, and Generative AI. 
          I specialize in building scalable, robust architectures that can handle intense loads and complex data flows.
        </p>
        <p className="mb-6 text-lg text-muted-foreground">
          I&apos;ve engineered systems leveraging <span className="font-medium">distributed computing</span>, 
          built smart contracts and infrastructure in the <span className="font-medium">crypto space</span>, 
          and integrated cutting-edge <span className="font-medium">Gen AI models</span> into production environments. 
          My stack revolves around heavy-duty backend languages, cloud infrastructure, and modern AI tooling.
        </p>
        <p className="mb-6 text-lg text-muted-foreground">
          Currently, I&apos;m building resilient decentralized applications and exploring new paradigms in 
          large-scale system design. On the side, I&apos;m diving deep into{" "}
          <span className="text-red-500 font-semibold">LLM orchestration</span>{" "}
          to push the boundaries of what AI can automate.
        </p>
        <p className="text-lg text-muted-foreground">
          I&apos;m that guy who mixes{" "}
          <span className="italic">distributed nodes + smart contracts + AI pipelines</span>. If 
          it&apos;s highly available, fault-tolerant, and intelligent—I&apos;m building it.
        </p>
      </motion.section>
    </main>
  );
}
