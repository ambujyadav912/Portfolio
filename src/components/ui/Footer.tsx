"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 md:px-12 border-t border-white/5 bg-black flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <div className="flex items-center gap-3">
          <motion.div 
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="relative w-8 h-8 rounded-full border border-white/20 shadow-[0_0_15px_rgba(128,82,255,0.8)] overflow-hidden"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Image src="/images/abzy-logo.jpg" alt="ABZY Logo" fill className="object-cover" />
          </motion.div>
          <span className="text-white font-bold tracking-widest text-lg drop-shadow-[0_0_8px_rgba(128,82,255,0.5)]">ABZY</span>
        </div>
        <span className="text-muted text-xs tracking-widest uppercase hidden md:block">
          Build and archive with ABZY
        </span>
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-muted text-sm font-medium">
          © {new Date().getFullYear()} Ambuj Shyampat Yadav
        </span>
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-2 h-2 rounded-full bg-primary ml-2"
        />
      </div>
    </footer>
  );
}
