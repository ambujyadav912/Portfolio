"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import Image from "next/image";

const links = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "WORK", href: "#work" },
  { name: "SKILLS", href: "#skills" },
  { name: "ACHIEVEMENTS", href: "#achievements" },
  { name: "ARCHIVE", href: "#archive" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 transition-all duration-300",
        scrolled ? "bg-black/50 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      )}
    >
      <Link href="#home" className="flex items-center gap-2 group">
        <motion.div 
          animate={{
            rotateY: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="relative w-10 h-10 rounded-full border border-white/20 shadow-[0_0_15px_rgba(128,82,255,0.8)] overflow-hidden"
          style={{ transformStyle: "preserve-3d" }}
        >
          <Image src="/images/abzy-logo.jpg" alt="ABZY Logo" fill className="object-cover" />
        </motion.div>
        <span className="text-xl font-bold tracking-tighter text-white group-hover:text-primary transition-colors drop-shadow-[0_0_8px_rgba(128,82,255,0.5)]">ABZY</span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-xs font-medium tracking-widest text-muted hover:text-white transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <Link
        href="#contact"
        className="px-5 py-2 text-xs font-bold tracking-widest text-black bg-white rounded-full hover:bg-primary hover:text-white transition-all hover:scale-105"
      >
        LET'S BUILD
      </Link>
    </motion.nav>
  );
}
