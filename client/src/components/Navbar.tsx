'use client';
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-md bg-gradient-to-r from-black via-zinc-900 to-red-900">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Hemanth&apos;s Portfolio
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
        
        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpenDrawer(!openDrawer)}
          aria-label="Toggle menu"
        >
          {openDrawer ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {openDrawer && (
        <div className="md:hidden bg-zinc-950 px-6 py-4 space-y-4 flex-col flex border-t border-zinc-800">
          <Link href="/" onClick={() => setOpenDrawer(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpenDrawer(false)}>About</Link>
          <Link href="/projects" onClick={() => setOpenDrawer(false)}>Projects</Link>
          <Link href="/contact" onClick={() => setOpenDrawer(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};
