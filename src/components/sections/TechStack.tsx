"use client";

import { motion } from "framer-motion";

const technologies = [
  { category: "FRONTEND", items: ["HTML", "CSS", "JavaScript", "React"] },
  { category: "MOBILE", items: ["React Native"] },
  { category: "PROGRAMMING", items: ["Java", "Python", "C", "C++"] },
  { category: "BACKEND & DB", items: ["SQL", "Supabase", "API Integration", "Auth"] },
  { category: "AI & SYSTEMS", items: ["Generative AI", "Background Jobs"] },
];

export default function TechStack() {
  return (
    <section id="skills" className="relative w-full py-24 px-6 md:px-12 xl:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center md:text-left">
            TECHNOLOGY ARCHIVE
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, idx) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col border border-white/10 rounded-2xl p-8 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              <h3 className="text-sm font-bold tracking-[0.2em] text-primary mb-6">
                {tech.category}
              </h3>
              <div className="flex flex-col gap-4">
                {tech.items.map((item) => (
                  <div
                    key={item}
                    className="group flex items-center gap-3 cursor-default"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-secondary group-hover:scale-150 transition-all duration-300" />
                    <span className="text-xl font-medium text-muted group-hover:text-white transition-colors duration-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
