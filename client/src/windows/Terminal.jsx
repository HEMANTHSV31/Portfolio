import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useWindowStore from '../store/window';

const TERMINAL_LINES = [
  { text: "hemanth@macbook-pro ~ % ./fetch_skills.sh", type: "command", delay: 600 },
  { text: "[+] Compiling Elite Skill Matrix...", type: "system", delay: 400 },
  
  { text: ">>> BACKEND ENGINEERING", type: "category", delay: 400 },
  { text: "    - API Design & Styles, Security, Asynchronous Processing", type: "output", delay: 100 },
  { text: "    - Monolith & Microservices, Multi-tenant Architecture", type: "output", delay: 100 },
  { text: "    - Distributed Systems", type: "output", delay: 100 },

  { text: ">>> PROGRAMMING LANGUAGES", type: "category", delay: 400 },
  { text: "    - C, JavaScript, Java, Rust, Python", type: "output", delay: 100 },

  { text: ">>> DATABASES", type: "category", delay: 400 },
  { text: "    - PostgreSQL, MySQL, MongoDB, Redis", type: "output", delay: 100 },

  { text: ">>> CLOUD INFRASTRUCTURE", type: "category", delay: 400 },
  { text: "    - AWS: S3, EC2, VPC, IAM, SES, Route53", type: "output", delay: 100 },
  { text: "    - GCP: Cloud Storage Buckets", type: "output", delay: 100 },
  { text: "    - Azure: Blob Storage", type: "output", delay: 100 },

  { text: ">>> DEVOPS & FUNDAMENTALS", type: "category", delay: 400 },
  { text: "    - Docker, Docker Compose, CI/CD with Jenkins", type: "output", delay: 100 },
  { text: "    - Linux, Git, GitHub, Postman", type: "output", delay: 100 },

  { text: ">>> GENERATIVE AI & CRYPTOGRAPHY", type: "category", delay: 400 },
  { text: "    - LLMs, RAG Architectures, Vector DBs, LangChain", type: "output", delay: 100 },
  { text: "    - SHA-256, AES-GCM, Zero-Knowledge Proofs", type: "output", delay: 100 },

  { text: "[+] System Status: ELITE ENGINEER READY", type: "success", delay: 500 },
  { text: "hemanth@macbook-pro ~ % ", type: "prompt", delay: 0 },
];

const Terminal = () => {
  const { windows, closeWindow, openWindow } = useWindowStore();
  const isOpen = windows['terminal']?.isOpen;
  const zIndex = windows['terminal']?.zIndex;

  const [visibleLines, setVisibleLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      // Reset when closed
      setVisibleLines([]);
      setCurrentLineIndex(0);
      return;
    }

    if (currentLineIndex < TERMINAL_LINES.length) {
      const line = TERMINAL_LINES[currentLineIndex];
      const timer = setTimeout(() => {
        setVisibleLines(prev => [...prev, line]);
        setCurrentLineIndex(prev => prev + 1);
      }, line.delay);

      return () => clearTimeout(timer);
    }
  }, [isOpen, currentLineIndex]);

  if (!isOpen) return null;

  const getLineColor = (type) => {
    switch(type) {
      case 'command': return 'text-white font-bold';
      case 'system': return 'text-blue-400 font-semibold';
      case 'category': return 'text-fuchsia-400 font-bold mt-2';
      case 'output': return 'text-gray-300';
      case 'success': return 'text-green-400 font-bold mt-2';
      case 'prompt': return 'text-white font-bold';
      default: return 'text-gray-300';
    }
  };

  return (
    <motion.div
      drag
      dragMomentum={false}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="absolute top-24 left-24 w-[42rem] max-w-[90vw] h-[28rem] max-h-[80vh] flex flex-col bg-[#1c1c1e]/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl overflow-hidden"
      style={{ zIndex }}
      onMouseDown={() => openWindow('terminal')} // Bring to front on click
    >
      {/* Window Header */}
      <div className="h-10 flex items-center px-4 bg-[#2d2d2f]/90 border-b border-black/40 cursor-grab active:cursor-grabbing select-none">
        <div className="flex gap-2 w-20">
          <button 
            onClick={(e) => { e.stopPropagation(); closeWindow('terminal'); }}
            className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] border border-[#e0443e] flex items-center justify-center group"
          >
            <span className="text-[9px] text-black/60 opacity-0 group-hover:opacity-100">x</span>
          </button>
          <button className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] border border-[#dea123] flex items-center justify-center group">
            <span className="text-[9px] text-black/60 opacity-0 group-hover:opacity-100">-</span>
          </button>
          <button className="w-3.5 h-3.5 rounded-full bg-[#27c93f] border border-[#1aab29] flex items-center justify-center group">
            <span className="text-[9px] text-black/60 opacity-0 group-hover:opacity-100">+</span>
          </button>
        </div>
        <div className="flex-1 text-center text-xs font-semibold text-gray-400 pointer-events-none">
          hemanth — -zsh — 80x24
        </div>
        <div className="w-20" /> {/* Spacer for centering */}
      </div>

      {/* Terminal Content */}
      <div className="flex-1 p-4 font-mono text-sm overflow-y-auto" style={{ fontFamily: '"Fira Code", "JetBrains Mono", "Roboto Mono", monospace' }}>
        {visibleLines.map((line, idx) => (
          <div key={idx} className={`mb-1.5 ${getLineColor(line.type)}`}>
            {line.type === 'prompt' ? (
              <span>
                {line.text}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8, ease: "steps(2)" }}
                  className="inline-block w-2.5 h-4 bg-gray-400 align-middle ml-1"
                />
              </span>
            ) : (
              line.text
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Terminal;
