 'use client';

import React from 'react';

const impactStats = [
  { value: '15,000+', label: 'Children Supported' },
  { value: '120+', label: 'Hospital Partners' },
  { value: '45', label: 'Active Programs' },
  { value: '3,500+', label: 'Volunteers' }
];

export default function ImpactSnapshot() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-6xl font-bold text-[#0F172A] mb-6 font-[family-name:var(--font-poppins)] tracking-tighter">
              Our Impact<span className="text-[#FF007F]">.</span>
            </h2>
            <p className="text-xl text-gray-500 font-[family-name:var(--font-inter)] leading-relaxed">
              Working alongside families, healthcare providers, and communities to deliver meaningful support across Nigeria.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-gray-100">
          {impactStats.map((stat, index) => (
            <div 
              key={index}
              className="py-12 pr-8 border-b border-gray-100 lg:border-b-0 group"
            >
              <div className="text-5xl md:text-6xl font-bold text-[#0F172A] mb-4 font-[family-name:var(--font-poppins)] tracking-tight group-hover:text-[#FF007F] transition-colors duration-300">
                {stat.value}
              </div>
              <div className="uppercase tracking-[0.2em] text-xs font-black text-gray-400 font-[family-name:var(--font-inter)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}