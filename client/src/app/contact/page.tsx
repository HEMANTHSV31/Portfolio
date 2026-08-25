"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Code2 } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    setStatus("TRANSMITTING...");
    
    try {
      // Connect to backend email server endpoint
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(Object.fromEntries(formData))
      });
      
      if (response.ok) {
        setStatus("TRANSMISSION SUCCESSFUL.");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("TRANSMISSION FAILED. RETRY.");
        setTimeout(() => setStatus(""), 5000);
      }
    } catch {
      setStatus("ERROR IN TRANSMISSION.");
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <main className="min-h-screen bg-white px-4 md:px-6 pt-8 pb-12 md:pt-16 md:pb-24 flex justify-center text-black font-inter selection:bg-black selection:text-white overflow-x-hidden">
      {/* HALFTONE TEXTURE */}
      <div
        className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#000 1.5px, transparent 0)`,
          backgroundSize: "12px 12px",
        }}
      />

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-[90%] grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16"
      >
        {/* LEFT — The Visual Record */}
        <div className="hidden lg:block lg:col-span-5 relative group h-full">
          <div className="absolute -inset-4 border-2 border-black rotate-[-2deg] group-hover:rotate-0 transition-transform h-full" />
          <div className="relative h-full border-[6px] border-black bg-white overflow-hidden shadow-[15px_15px_0px_black]">
            <img
              src="/images/contact.png"
              alt="Hemanth"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 right-0 bg-black text-white px-4 py-1 font-bebas text-xl italic uppercase">
              Hemanth
            </div>
          </div>
        </div>

        {/* RIGHT — The Terminal */}
        <div className="lg:col-span-7 space-y-7 md:space-y-12">
          <header className="border-b-[6px] md:border-b-[8px] border-black pb-6 md:pb-8">
            <div className="inline-block bg-black text-white px-3 py-1 text-[9px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.4em] mb-4 uppercase italic">
              CONTACT // COLLABORATION
            </div>
            <h1 className="text-6xl sm:text-7xl md:text-9xl font-bebas leading-[0.85] md:leading-[0.8] tracking-tighter italic uppercase">
              CON
              <span className="text-transparent [-webkit-text-stroke:1px_black] md:[-webkit-text-stroke:1.5px_black]">
                TACT
              </span>
            </h1>
          </header>

          <p className="text-lg md:text-xl font-bold leading-relaxed tracking-tight uppercase max-w-2xl">
            Designing systems where{" "}
            <span className="bg-black text-white px-2 italic">scalability</span>{" "}
            matters. Open to conversations around backend architectures, distributed computing, and engineering opportunities.
          </p>

          {/* Social Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
            <a
              href="https://leetcode.com/u/Hemanth-SV/"
              target="_blank"
              className="group border-2 md:border-[3px] border-black p-4 hover:bg-black transition-colors bg-white flex flex-col justify-between"
            >
              <div className="flex items-center gap-2 mb-1 md:mb-2">
                <Code2 className="w-5 h-5 group-hover:text-white transition-colors" />
                <span className="font-bebas text-xl md:text-2xl group-hover:text-white transition-colors">
                  LEETCODE
                </span>
              </div>
              <p className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-black/50 group-hover:text-white/50 leading-tight">
                Problem_Solving
              </p>
            </a>
            
            <a
              href="https://www.linkedin.com/in/hemanth-s-v"
              target="_blank"
              className="group border-2 md:border-[3px] border-black p-4 hover:bg-black transition-colors bg-white flex flex-col justify-between"
            >
              <div className="flex items-center gap-2 mb-1 md:mb-2">
                <Linkedin className="w-5 h-5 group-hover:text-white transition-colors" />
                <span className="font-bebas text-xl md:text-2xl group-hover:text-white transition-colors">
                  LINKEDIN
                </span>
              </div>
              <p className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-black/50 group-hover:text-white/50 leading-tight">
                Professional_Profile
              </p>
            </a>
           
            <a
              href="https://github.com/HEMANTHSV31"
              target="_blank"
              className="group border-2 md:border-[3px] border-black p-4 hover:bg-black transition-colors bg-white flex flex-col justify-between"
            >
              <div className="flex items-center gap-2 mb-1 md:mb-2">
                <Github className="w-5 h-5 group-hover:text-white transition-colors" />
                <span className="font-bebas text-xl md:text-2xl group-hover:text-white transition-colors">
                  GITHUB
                </span>
              </div>
              <p className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-black/50 group-hover:text-white/50 leading-tight">
                Projects_&_Source
              </p>
            </a>
          </div>

          <form className="space-y-6 flex flex-col pt-8 border-t border-black/10" onSubmit={handleSubmit}>
              <h3 className="font-bebas text-3xl italic mb-2">EMAIL TRANSMISSION</h3>
              
              {status && status !== "TRANSMITTING..." && (
                <div className={`p-4 border-[3px] border-black text-center font-bold uppercase tracking-[0.2em] text-xs md:text-sm ${
                  status.includes("SUCCESS") ? "bg-[#e8f5e9] text-green-800" : "bg-[#ffebee] text-red-800"
                }`}>
                  {status}
                </div>
              )}
              
              <div className="flex flex-col gap-2">
                  <label className="font-black text-[10px] uppercase tracking-widest text-black/60">IDENTIFIER [NAME]</label>
                  <input type="text" name="name" required className="bg-white border-2 border-black p-3 text-black font-bold outline-none focus:border-red-600 transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                  <label className="font-black text-[10px] uppercase tracking-widest text-black/60">ROUTE [EMAIL]</label>
                  <input type="email" name="email" required className="bg-white border-2 border-black p-3 text-black font-bold outline-none focus:border-red-600 transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                  <label className="font-black text-[10px] uppercase tracking-widest text-black/60">PAYLOAD [MESSAGE]</label>
                  <textarea rows={4} name="message" required className="bg-white border-2 border-black p-3 text-black font-bold outline-none focus:border-red-600 transition-colors resize-none"></textarea>
              </div>
              <button type="submit" disabled={status === "TRANSMITTING..."} className="bg-black text-white font-bebas text-3xl italic py-4 hover:bg-red-600 transition-colors border-2 border-black disabled:opacity-50 text-center uppercase tracking-widest">
                  {status || "TRANSMIT →"}
              </button>
          </form>



          {/* Editorial Detail */}
          <div className="pt-8 md:pt-12 flex justify-between items-center text-[9px] md:text-[10px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-black/30 border-t border-black/10">
            <span>Bangalore // 12.97° N</span>
            <span>END_OF_TRANS</span>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
