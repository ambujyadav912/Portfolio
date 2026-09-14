"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Removed timeline array

export default function About() {
  return (
    <section id="about" className="relative w-full py-24 px-6 md:px-12 xl:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        
        {/* Left - Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold tracking-tighter mb-8"
          >
            THE PERSON BEHIND ABZY
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-muted text-lg leading-relaxed font-medium"
          >
            <p>
              I am <span className="text-white font-bold">Ambuj Shyampat Yadav</span>, a Computer Engineering student and developer. 
              My journey is defined by a passion for building practical digital experiences and turning complex ideas into functional realities.
            </p>
            <p>
              I am deeply interested in software development, web and mobile technologies, and the intersection of UI/UX design. 
              Exploring AI-assisted development and experimenting with new paradigms allows me to stay at the cutting edge of what's possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12"
          >
            <h3 className="text-sm tracking-widest text-primary uppercase font-bold mb-6">
              Sports & Hobbies
            </h3>
            <p className="text-muted text-lg leading-relaxed font-medium">
              Apart from studies and technology, I enjoy playing sports. <span className="text-white font-bold">Cricket</span> is one of my favorite hobbies, and I also have an interest in <span className="text-white font-bold">boxing</span> and <span className="text-white font-bold">wrestling</span>. I like these sports because they keep me active, disciplined, and focused. Playing sports has also taught me the importance of teamwork, confidence, practice, and never giving up. I enjoy spending my free time improving my skills and challenging myself in different sports.
            </p>
          </motion.div>
        </div>

        {/* Right - Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-full aspect-[3/4] max-w-md rounded-2xl overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all duration-700"
          >
            <Image
              src="/images/award.jpg" 
              alt="Ambuj Activity"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
