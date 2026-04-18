'use client';

import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import Image from 'next/image';

const CITIES = [
  { id: 'lahore', name: 'Lahore', isMostActive: true },
  { id: 'faisalabad', name: 'Faisalabad', isMostActive: true },
  { id: 'multan', name: 'Multan', isMostActive: true },
];

export default function CitiesGridSection() {
  const [selectedCity, setSelectedCity] = useState<string | null>('lahore');

  return (
    <section className="relative bg-transparent py-24 overflow-hidden min-h-[60vh] flex items-center justify-center">
      
      {/* Background watermark removed as requested to show the globe through */}
      <div className="absolute inset-0 z-0 pointer-events-none" />

      <div className="container-custom relative z-10 max-w-6xl mx-auto px-4">
        
        {/* Header styling */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Choose Your City
          </h2>
          <p className="text-lg text-slate-400 font-medium">
            Select your city to get started with local services
          </p>
        </div>

        {/* 4-Column Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {CITIES.map((city) => {
            const isSelected = selectedCity === city.id;

            return (
              <div 
                key={city.id}
                onClick={() => setSelectedCity(city.id)}
                className={`group relative flex flex-col items-center justify-center rounded-3xl p-8 cursor-pointer transition-all duration-300 backdrop-blur-md ${
                  isSelected 
                    ? 'bg-blue-500/10 border-2 border-blue-500/30 shadow-[0_20px_40px_-10px_rgba(59,130,246,0.2)] scale-[1.05]' 
                    : 'bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-white/10 hover:-translate-y-1'
                }`}
              >
                
                {/* Top Left Icon */}
                <div className="absolute top-5 left-5">
                  <MapPin 
                    size={22} 
                    strokeWidth={2}
                    className={`transition-colors duration-300 ${isSelected ? 'text-blue-500' : 'text-slate-500 group-hover:text-slate-300'}`} 
                  />
                </div>

                {/* Top Right "Most Active" Badge */}
                {city.isMostActive && (
                  <div className="absolute top-5 right-5">
                    <span className="bg-blue-500/20 text-blue-400 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide border border-blue-500/20">
                      Most Active
                    </span>
                  </div>
                )}

                {/* Card Content Center */}
                <div className="text-center mt-8">
                  <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">
                    {city.name}
                  </h3>
                  <p className="text-[12px] font-medium text-slate-400">
                    Active Services Available
                  </p>
                </div>

              </div>
            );
          })}
          {/* Coming Soon Case */}
          <div className="group relative flex flex-col items-center justify-center rounded-3xl p-8 border border-dashed border-white/10 bg-white/5 opacity-60">
            <div className="text-center">
              <h3 className="text-xl font-bold text-slate-400 mb-1 tracking-tight">
                More Cities
              </h3>
              <p className="text-[12px] font-medium text-slate-500">
                Coming Soon
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
