"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 1000 }) {
  const mesh = useRef<THREE.InstancedMesh>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = Math.random() * 100;
      const speed = Math.random() * 0.01 + 0.005;
      const x = Math.random() * 200 - 100;
      const y = Math.random() * 200 - 100;
      const z = Math.random() * 200 - 100;
      temp.push({ time, speed, x, y, z });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    particles.forEach((particle, i) => {
      let { time } = particle;
      const { speed, x, y, z } = particle;
      time = particle.time += speed / 2;
      const a = Math.cos(time) + Math.sin(time * 1) / 10;
      const b = Math.sin(time) + Math.cos(time * 2) / 10;
      const c = Math.cos(time) + Math.sin(time * 3) / 10;

      dummy.position.set(
        x + a * 10,
        y + b * 10,
        z + c * 10
      );
      dummy.scale.setScalar(Math.max(0.1, Math.sin(time) * 1.5));
      dummy.updateMatrix();
      
      if (mesh.current) {
        mesh.current.setMatrixAt(i, dummy.matrix);
      }
    });
    if (mesh.current) {
      mesh.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.08, 16, 16]} />
      <meshPhysicalMaterial 
        color="#ffffff" 
        emissive="#8052FF"
        emissiveIntensity={1.5}
        roughness={0.2}
        metalness={0.8}
      />
    </instancedMesh>
  );
}

export default function ParticleField() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-black">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.2} />
        <Particles count={1500} />
      </Canvas>
    </div>
  );
}
