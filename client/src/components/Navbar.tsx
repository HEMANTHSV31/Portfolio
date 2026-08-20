"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

export const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-black/50 to-red-800/50 backdrop-blur-md w-[90%] max-w-4xl text-white px-8 py-3 rounded-2xl shadow-xl flex items-center justify-between z-50">
      {/* Logo / Name */}
      <Link href="/" className="text-lg font-bold tracking-wide">
        Hemanth
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8 font-medium">
        <Link href="/projects" className="hover:text-red-400 transition">
          Projects
        </Link>
        <Link href="/about" className="hover:text-red-400 transition">
          About
        </Link>
        <a
          href="/Hemanth_Resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-red-500 hover:bg-red-500 hover:text-white rounded-xl px-4 py-1.5 transition"
        >
          <Download size={16} /> Resume
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden"
        onClick={() => setOpenDrawer(!openDrawer)}
        aria-label="Toggle menu"
      >
        {openDrawer ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Drawer */}
      {openDrawer && (
        <div className="absolute top-16 right-4 bg-zinc-900/95 px-6 py-4 rounded-xl shadow-lg space-y-4 flex flex-col font-medium md:hidden">
          <Link href="/projects" onClick={() => setOpenDrawer(false)} className="hover:text-red-400">
            Projects
          </Link>
          <Link href="/about" onClick={() => setOpenDrawer(false)} className="hover:text-red-400">
            About
          </Link>
          <a
            href="/Hemanth_Resume.pdf"
            download
            target="_blank"
            onClick={() => setOpenDrawer(false)}
            className="flex items-center gap-2 border border-red-500 hover:bg-red-500 hover:text-white rounded-xl px-4 py-1.5 transition"
          >
            <Download size={16} /> Resume
          </a>
        </div>
      )}
    </nav>
  );
};
