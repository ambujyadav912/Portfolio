"use client";

import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";

function BrandGeometry() {
    return (
        <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
            <mesh>
                <torusKnotGeometry args={[1.5, 0.4, 128, 16]} />
                <meshStandardMaterial color="#000000" roughness={0.1} metalness={0.8} />
                {/* Glow outline effect */}
                <meshBasicMaterial color="#8052FF" wireframe />
            </mesh>
        </Float>
    )
}


export default function Brand() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black py-24">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <ambientLight intensity={0.2} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <pointLight position={[-5, -5, -5]} color="#FFB829" intensity={2} />
          <BrandGeometry />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative perspective-1000"
        >
          <motion.h2 
            animate={{ 
              rotateX: [0, 10, -10, 0],
              rotateY: [0, -10, 10, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="text-6xl md:text-8xl lg:text-[12rem] font-black tracking-tighter text-transparent drop-shadow-[0_0_30px_rgba(128,82,255,0.4)]" 
            style={{ WebkitTextStroke: '3px rgba(255,255,255,0.9)', transformStyle: "preserve-3d" }}
          >
            ABZY
          </motion.h2>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-xl md:text-3xl font-bold tracking-[0.2em] mt-4"
        >
          BUILD AND ARCHIVE
        </motion.p>
        
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.5 }}
           className="absolute w-[180vw] md:w-[120vw] h-[180vw] md:h-[120vw] border-[1px] border-white/10 rounded-full animate-[spin_40s_linear_infinite] flex items-center justify-between pointer-events-none"
        >
           <span className="text-base md:text-xl font-bold tracking-[0.3em] text-white/40 px-12 drop-shadow-md">ABZY</span>
           <span className="text-base md:text-xl font-bold tracking-[0.3em] text-white/40 px-12 drop-shadow-md">FOUNDER</span>
           <span className="text-base md:text-xl font-bold tracking-[0.3em] text-white/40 px-12 drop-shadow-md">AMBUJ YADAV</span>
           <span className="text-base md:text-xl font-bold tracking-[0.3em] text-white/40 px-12 drop-shadow-md">ABZY</span>
        </motion.div>
      </div>
    </section>
  );
}
