import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useWindowStore from '../store/window';

const Contact = () => {
  const { windows, closeWindow, openWindow } = useWindowStore();
  const isOpen = windows['contact']?.isOpen;
  const zIndex = windows['contact']?.zIndex;

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ loading: false, error: null, success: false });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ loading: false, error: null, success: true });
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
        
        // Hide success message after 3 seconds
        setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 3000);
      } else {
        setStatus({ loading: false, error: data.error || 'Failed to send message', success: false });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus({ loading: false, error: 'Cannot connect to backend server. Is it running on port 5000?', success: false });
    }
  };



  return (
    <motion.div
      drag
      dragMomentum={false}
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="absolute top-20 left-40 w-[52rem] max-w-[95vw] h-[34rem] max-h-[85vh] flex flex-col bg-[#1e1e1e]/95 backdrop-blur-3xl border border-white/20 rounded-xl shadow-2xl overflow-hidden"
      style={{ zIndex }}
      onMouseDown={() => openWindow('contact')} // Bring to front on click
    >
      {/* macOS Window Header (Mail App Style) */}
      <div className="h-14 flex items-center px-4 bg-[#2d2d2f]/80 border-b border-black/40 cursor-grab active:cursor-grabbing select-none shrink-0 relative overflow-hidden">
        {/* Animated background gradient line */}
        <motion.div 
          animate={{ x: ['-100%', '100%'] }} 
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 left-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"
        />

        <div className="flex gap-2 w-20">
          <button 
            onClick={(e) => { e.stopPropagation(); closeWindow('contact'); }}
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
        <div className="flex-1 flex justify-center items-center gap-3 pointer-events-none">
            <img src="/icons/work.svg" alt="Mail" className="w-4 h-4 opacity-70" />
            <span className="text-sm font-semibold text-gray-300">Secure Dispatch</span>
        </div>
        <div className="w-20 flex justify-end">
          <motion.button 
            type="submit" 
            form="contact-form"
            disabled={status.loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider transition-colors disabled:opacity-50 cursor-pointer overflow-hidden group"
          >
            <AnimatePresence mode="wait">
              {status.loading ? (
                <motion.span 
                  key="loading"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                >
                  Sending
                </motion.span>
              ) : (
                <motion.div key="send" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex items-center gap-1.5">
                  <span>Send</span>
                  <svg className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Two-Pane Layout */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Sidebar (Socials & Availability) */}
        <div className="w-48 bg-black/20 border-r border-white/5 p-4 flex flex-col gap-6 hidden sm:flex shrink-0 select-none">
          <div>
            <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3 px-2">Network</h3>
            <ul className="space-y-1">
              <a href="https://github.com/HEMANTHSV31" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-2 py-2 text-gray-300 hover:bg-white/10 rounded-md cursor-pointer transition-all hover:translate-x-1 group">
                <img src="/icons/github.svg" alt="GitHub" className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/hemanth-s-v" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-2 py-2 text-gray-300 hover:bg-white/10 rounded-md cursor-pointer transition-all hover:translate-x-1 group">
                <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a href="https://medium.com/@svhemanth747" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-2 py-2 text-gray-300 hover:bg-white/10 rounded-md cursor-pointer transition-all hover:translate-x-1 group">
                <img src="/icons/medium.svg" alt="Medium" className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                <span className="text-sm font-medium">Medium</span>
              </a>
              <a href="https://leetcode.com/u/Hemanth-SV/" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-2 py-2 text-gray-300 hover:bg-white/10 rounded-md cursor-pointer transition-all hover:translate-x-1 group">
                <img src="/icons/leetcode.svg" alt="LeetCode" className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                <span className="text-sm font-medium">LeetCode</span>
              </a>
            </ul>
          </div>

          <div>
             <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3 px-2">Status</h3>
             <div className="px-3 py-2.5 flex items-center gap-3 bg-green-500/10 border border-green-500/20 rounded-md relative overflow-hidden group cursor-default">
                <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                </span>
                <span className="text-xs font-bold text-green-400 uppercase tracking-wider">Open to Work</span>
             </div>
          </div>
        </div>

        {/* Right Pane: Composition Form */}
        <div className="flex-1 flex flex-col bg-transparent relative">
          
          {/* Status Messages overlay */}
          <AnimatePresence>
            {status.error && (
              <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="absolute top-0 left-0 right-0 bg-red-500/90 backdrop-blur-md px-4 py-2 text-xs font-semibold text-white text-center z-10 shadow-lg">
                {status.error}
              </motion.div>
            )}
            {status.success && (
              <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="absolute top-0 left-0 right-0 bg-green-500/90 backdrop-blur-md px-4 py-2 text-xs font-semibold text-white text-center z-10 shadow-lg">
                Email dispatched successfully via secure protocol!
              </motion.div>
            )}
          </AnimatePresence>

          <form id="contact-form" onSubmit={handleSubmit} className="flex-1 flex flex-col h-full z-0">
            {/* Headers */}
            <div className="flex flex-col border-b border-white/10 px-8 py-3 shrink-0">
              <div className="flex items-center border-b border-white/5 py-2">
                <label className="w-16 text-gray-500 text-sm font-medium">To:</label>
                <div className="flex-1 flex items-center">
                    <span className="bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded text-sm border border-blue-500/20 font-medium">
                        svhemanth747@gmail.com
                    </span>
                </div>
              </div>
              <div className="flex items-center border-b border-white/5 py-2 group">
                <label className="w-16 text-gray-500 text-sm font-medium transition-colors group-focus-within:text-blue-400">From:</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@gmail.com"
                  className="flex-1 bg-transparent border-none outline-none text-white text-sm placeholder:text-white/30 focus:ring-0"
                />
              </div>
              <div className="flex items-center border-b border-white/5 py-2 group">
                <label className="w-16 text-gray-500 text-sm font-medium transition-colors group-focus-within:text-blue-400">Name:</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="flex-1 bg-transparent border-none outline-none text-white text-sm placeholder:text-white/30 focus:ring-0"
                />
              </div>
              <div className="flex items-center py-2 group">
                <label className="w-16 text-gray-500 text-sm font-medium transition-colors group-focus-within:text-blue-400">Subject:</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Opportunity / Collaboration"
                  className="flex-1 bg-transparent border-none outline-none text-white font-semibold text-sm placeholder:text-white/30 placeholder:font-normal focus:ring-0"
                />
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 p-8 relative group">
              {/* Subtle grid background for the textarea to give it a techy feel */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Type your message here."
                className="w-full h-full bg-transparent border-none outline-none text-white text-sm resize-none placeholder:text-white/30 relative z-10 font-mono leading-relaxed focus:ring-0"
              />
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
