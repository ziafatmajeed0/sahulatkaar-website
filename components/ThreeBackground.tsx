'use client';

import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTexture } from '@react-three/drei';

function Earth() {
  const group = useRef<THREE.Group>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);
  const time = useRef(0);
  
  const [albedo, bump, night, clouds] = useTexture([
    '/59_earth/textures/earth%20albedo_4k.jpg',
    '/59_earth/textures/earth%20bump_4k.jpg',
    '/59_earth/textures/earth%20night_lights_modified_4k.png',
    '/59_earth/textures/clouds%20earth_4k.png',
  ]);

  useFrame((state, delta) => {
    if (group.current) {
      time.current += delta;
      const baseSpeed = time.current * 0.05;
      const pointerX = state.pointer.x * 0.5;
      const pointerY = state.pointer.y * 0.5;
      // Grab window scroll for interaction
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const scrollRotation = scrollY * 0.002;

      group.current.rotation.y += (baseSpeed + pointerX + scrollRotation - group.current.rotation.y) * 0.1;
      group.current.rotation.x += (pointerY - group.current.rotation.x) * 0.1;

      if (cloudsRef.current) {
        cloudsRef.current.rotation.y = time.current * 0.03;
      }
    }
  });

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[5, 64, 64]} />
        <meshStandardMaterial 
          map={albedo} 
          bumpMap={bump}
          bumpScale={0.05}
          emissiveMap={night}
          emissive={new THREE.Color(0x88ccff)}
          emissiveIntensity={0.5}
          roughness={0.6}
          metalness={0.1}
        />
      </mesh>
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[5.05, 64, 64]} />
        <meshStandardMaterial 
          map={clouds}
          transparent={true}
          opacity={0.3}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

useTexture.preload('/59_earth/textures/earth%20albedo_4k.jpg');
useTexture.preload('/59_earth/textures/earth%20bump_4k.jpg');
useTexture.preload('/59_earth/textures/earth%20night_lights_modified_4k.png');
useTexture.preload('/59_earth/textures/clouds%20earth_4k.png');

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-50 bg-black overflow-hidden pointer-events-none">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={2.5} color="#00ffcc" />
        <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#38bdf8" />
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </div>
  );
}
