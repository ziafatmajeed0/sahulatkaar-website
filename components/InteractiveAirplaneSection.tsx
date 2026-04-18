'use client';

import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls, useTexture } from '@react-three/drei';

const PAK_CITIES = [
  { name: 'Karachi', lat: 24.86, lon: 67.0 },
  { name: 'Lahore', lat: 31.52, lon: 74.35 },
  { name: 'Islamabad', lat: 33.68, lon: 73.04 },
  { name: 'Peshawar', lat: 34.01, lon: 71.52 },
  { name: 'Quetta', lat: 30.17, lon: 66.97 },
  { name: 'Multan', lat: 30.15, lon: 71.52 },
  { name: 'Faisalabad', lat: 31.45, lon: 73.13 }
];

function CityPins({ radius }: { radius: number }) {
  return (
    <group>
      {PAK_CITIES.map((city) => {
        const phi = (90 - city.lat) * (Math.PI / 180);
        const theta = (city.lon + 180) * (Math.PI / 180);

        const x = -(radius * Math.sin(phi) * Math.cos(theta));
        const z = (radius * Math.sin(phi) * Math.sin(theta));
        const y = (radius * Math.cos(phi));

        return (
          <group key={city.name} position={[x, y, z]}>
            <mesh>
              <sphereGeometry args={[0.06, 16, 16]} />
              <meshBasicMaterial color="#22c55e" />
            </mesh>
            <mesh>
              <sphereGeometry args={[0.1, 16, 16]} />
              <meshBasicMaterial color="#4ade80" transparent opacity={0.5} blending={THREE.AdditiveBlending} depthWrite={false} />
            </mesh>
            {/* simple pulsing dot effect can be added here if needed */}
          </group>
        );
      })}
    </group>
  );
}

function OrbitingAirplane({ radius }: { radius: number }) {
  const orbitGroup = useRef<THREE.Group>(null);
  const time = useRef(0);

  useFrame((state, delta) => {
    if (orbitGroup.current) {
      time.current += delta;
      orbitGroup.current.rotation.y -= delta * 0.4;
      orbitGroup.current.rotation.z = Math.sin(time.current * 1.5) * 0.2; 
    }
  });

  return (
    <group ref={orbitGroup}>
      <group position={[0, 0, radius + 0.6]}>
        <group rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={0.6}>
          {/* Fuselage */}
          <mesh>
            <cylinderGeometry args={[0.08, 0.08, 0.6, 8]} />
            <meshStandardMaterial color="#f97316" emissive="#ea580c" emissiveIntensity={0.8} />
          </mesh>
          {/* Cockpit nose */}
          <mesh position={[0, 0.35, 0]}>
            <sphereGeometry args={[0.08, 8, 8]} />
            <meshStandardMaterial color="#f97316" />
          </mesh>
          {/* Main Wings */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.8, 0.05, 0.15]} />
            <meshStandardMaterial color="#f97316" emissive="#ea580c" emissiveIntensity={0.8} />
          </mesh>
          {/* Tail */}
          <mesh position={[0, -0.28, 0.08]}>
            <boxGeometry args={[0.05, 0.15, 0.2]} />
            <meshStandardMaterial color="#f97316" />
          </mesh>
        </group>
      </group>
    </group>
  );
}

function MainSceneGroup() {
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
      if (cloudsRef.current) {
        cloudsRef.current.rotation.y = time.current * 0.02;
      }
    }
  });

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[4, 64, 64]} />
        <meshStandardMaterial 
          map={albedo} 
          bumpMap={bump}
          bumpScale={0.05}
          emissiveMap={night}
          emissive={new THREE.Color(0x88ccff)}
          emissiveIntensity={0.6}
          roughness={0.6}
        />
      </mesh>
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[4.04, 64, 64]} />
        <meshStandardMaterial 
          map={clouds}
          transparent={true}
          opacity={0.4}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      <CityPins radius={4.01} />
      <OrbitingAirplane radius={4} />
    </group>
  );
}

// Approximate position for the camera to look straight at Pakistan (Lat 30°, Lon 70°)
// phi = 60deg, theta = 250deg. Distance ~9.
const startX = -(9 * Math.sin(Math.PI/3) * Math.cos(250 * Math.PI/180));
const startY = (9 * Math.cos(Math.PI/3));
const startZ = (9 * Math.sin(Math.PI/3) * Math.sin(250 * Math.PI/180));

export default function InteractiveAirplaneSection() {
  return (
    <section className="section-shell bg-black/40 border-white/10 text-white my-16 overflow-hidden">
      <div className="container-custom grid gap-10 py-16 lg:grid-cols-2 items-center">
        <div className="space-y-6 z-10 pointer-events-none">
          <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            We cover major cities across Pakistan.
          </h2>
          <p className="text-lg leading-8 text-slate-200">
            Send us a task, and our network securely processes, completes, and follows up on your errands anywhere from Karachi to Islamabad.
          </p>
        </div>
        <div className="h-[400px] w-full relative z-20 cursor-grab active:cursor-grabbing">
          <Canvas camera={{ position: [startX, startY, startZ], fov: 60 }}>
            <ambientLight intensity={1.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} color="#00ffcc" />
            <Suspense fallback={null}>
              <MainSceneGroup />
            </Suspense>
            <OrbitControls 
              enableZoom={false} 
              enablePan={false} 
              enableDamping={true} 
              dampingFactor={0.05} 
            />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
