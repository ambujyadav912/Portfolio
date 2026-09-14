"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial, Wireframe } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AbstractShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 1]} />
        <MeshDistortMaterial
          color="#8052FF"
          emissive="#FFB829"
          emissiveIntensity={0.2}
          wireframe
          distort={0.4}
          speed={2}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center pt-24 pb-12 overflow-hidden px-6 md:px-12 xl:px-24">
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col z-10 space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-primary text-sm font-bold tracking-[0.2em] uppercase"
        >
          SOFTWARE DEVELOPER / BUILDER / CREATOR
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-7xl lg:text-9xl font-black leading-[0.9] tracking-tighter text-white"
        >
          BUILD AND <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            ARCHIVE
          </span> <br />
          WITH ABZY.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-muted text-base md:text-lg max-w-xl font-medium leading-relaxed mt-4"
        >
          Hi, I'm Ambuj Shyampat Yadav — a computer engineering student and developer focused on building practical digital experiences, experimenting with technology, and turning ideas into real products.
        </motion.p>
      </div>

      {/* Right Content - 3D Visual & Portrait */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative flex items-center justify-center mt-12 md:mt-0 z-10">
        <div className="absolute inset-0 w-full h-full opacity-60 mix-blend-screen pointer-events-none">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <AbstractShape />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
          </Canvas>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative w-64 h-80 md:w-80 md:h-[28rem] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(128,82,255,0.2)] bg-black/50 backdrop-blur-sm"
        >
          <Image
            src="/images/portrait.jpg"
            alt="Ambuj Shyampat Yadav"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
