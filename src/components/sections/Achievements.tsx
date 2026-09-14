"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { X, ZoomIn } from "lucide-react";


const achievements = [
  {
    title: "India's Biggest AI Quiz",
    organization: "Unstop & CampusCrew",
    date: "19-JULY-2026",
    description: "Competed in QuizOff 2026, where 5,25,000+ students from 48,500+ institutions participated.",
    image: "/images/media_1789417046970.jpg",
  },
  {
    title: "Wrestling (65 to 70 kg)",
    organization: "IEDSSA Maharashtra State",
    date: "Recent",
    description: "Certificate of Merit representing Bhausaheb Vartak Polytechnic.",
    image: "/images/media_1789417148996.jpg",
  },
  {
    title: "Election Commission Volunteer",
    organization: "Sutantra Narayani Seva Trust",
    date: "November 20, 2024",
    description: "Demonstrated outstanding dedication as a volunteer for electoral participation.",
    image: "/images/media_1789417149062.jpg",
  },
  {
    title: "SPL Championship Trophy",
    organization: "Sports Participation",
    date: "Recent",
    description: "Proud moment holding the championship trophy for Avdhoot Indians.",
    image: "/images/media_1789417046928.jpg",
  },
  {
    title: "Award Recognition",
    organization: "Academic/Sports",
    date: "Recent",
    description: "Receiving a plaque of appreciation.",
    image: "/images/media_1789417149025.jpg",
  },
  {
    title: "Boxing (57 to 60 kg)",
    organization: "District Sports Council, Mumbai Suburbs",
    date: "Oct-Nov 2023",
    description: "Secured IIIrd place in the District Level School Sports Competition.",
    image: "/images/cert-boxing-new.jpg",
  },
  {
    title: "Freestyle Wrestling (Under 65 kg)",
    organization: "District Sports Council, Mumbai Suburbs",
    date: "Sept 2023",
    description: "Secured IInd place in the District Level School Sports Competition.",
    image: "/images/cert-wrestling.jpg",
  },
  {
    title: "100 Mtr Race",
    organization: "Municipal English Secondary School",
    date: "Dec 2023",
    description: "Secured IInd place in the 100 Mtr Race competition.",
    image: "/images/cert-100m-new.jpg",
  },
  {
    title: "Shoes Race",
    organization: "Municipal English Secondary School",
    date: "Dec 2023",
    description: "Secured Ist place in the Shoes Race competition.",
    image: "/images/cert-shoes-race.jpg",
  },
  {
    title: "Exploration & Travel",
    organization: "Beyond Code",
    date: "Recent",
    description: "Taking time outside of development to explore and experience new places.",
    image: "/images/monument.jpg",
  }
];

export default function Achievements() {
  const containerRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="achievements" ref={containerRef} className="relative w-full py-24 px-6 md:px-12 xl:px-24 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              ARCHIVED ACHIEVEMENTS
            </h2>
            <p className="text-muted text-lg max-w-2xl">
              A record of competitive participation, sportsmanship, and continuous effort outside the realm of programming.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"
            >
              <div 
                className="relative w-full aspect-[4/3] overflow-hidden cursor-pointer bg-black/50"
                onClick={() => setSelectedImage(item.image)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
                  <ZoomIn className="text-white w-10 h-10" />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white tracking-tight">{item.title}</h3>
                  <span className="text-xs font-mono text-primary px-3 py-1 bg-primary/10 rounded-full">
                    {item.date}
                  </span>
                </div>
                <h4 className="text-sm text-white/60 font-medium mb-4">{item.organization}</h4>
                <p className="text-muted text-sm leading-relaxed mt-auto">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-12">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 md:top-12 md:right-12 text-white/50 hover:text-white transition-colors"
          >
            <X size={32} />
          </button>
          <div className="relative w-full max-w-5xl h-full max-h-[80vh]">
            <Image
              src={selectedImage}
              alt="Achievement Document"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
