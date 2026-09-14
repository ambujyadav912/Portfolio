"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "ABZY MESS",
    description: "A comprehensive digital solution for hostel and mess management, featuring dashboard analytics, attendance tracking, and penalty management.",
    problem: "Lack of cohesive systems for scaling mess administration.",
    solution: "Implemented a full-stack dashboard architecture focusing on real-time data.",
    tech: ["React", "Next.js", "Tailwind", "Supabase"],
    link: "#",
    image: "/images/media_1789417162715.png"
  },
  {
    title: "SafeSphere Mobile",
    description: "Cross-platform mobile application for emergency SOS and family safety tracking.",
    problem: "Poor cross-platform consistency in emergency apps.",
    solution: "Leveraged React Native to build a unified codebase with live location tracking.",
    tech: ["React Native", "TypeScript", "Maps API"],
    link: "#",
    image: "/images/project-safesphere-new.png"
  }
];

export default function Projects() {
  return (
    <section id="work" className="relative w-full py-24 px-6 md:px-12 xl:px-24 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tighter mb-16"
        >
          WHAT I'VE BUILT
        </motion.h2>

        <div className="flex flex-col gap-24">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="group flex flex-col md:flex-row gap-8 md:gap-16 items-start"
            >
              {/* Image */}
              <div className="w-full md:w-3/5 aspect-video bg-white/5 rounded-xl border border-white/10 relative overflow-hidden group-hover:border-primary/50 transition-colors duration-500">
                {project.image ? (
                  <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-white/20 font-mono text-sm">
                    [ Project Image Placeholder ]
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="w-full md:w-2/5 flex flex-col pt-4">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold tracking-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <a href={project.link} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                    <ArrowUpRight size={20} />
                  </a>
                </div>
                
                <p className="text-muted text-lg mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="text-xs font-bold text-white/50 tracking-widest mb-1">PROBLEM</h4>
                    <p className="text-sm text-white/80">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white/50 tracking-widest mb-1">SOLUTION</h4>
                    <p className="text-sm text-white/80">{project.solution}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs font-medium border border-white/10 rounded-full text-white/60">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
