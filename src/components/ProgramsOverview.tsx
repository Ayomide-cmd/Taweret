 'use client';

import React from 'react';

const programs = [
  {
    title: 'Medical Support',
    description: 'Financial assistance for treatments, medications, and specialized care needs.',
  },
  {
    title: 'Family Services',
    description: 'Counseling, accommodation support, and resources for families during treatment.',
  },
  {
    title: 'Hospital Programs',
    description: 'Educational activities and support services to improve the hospital experience.',
  },
  {
    title: 'Wellness Support',
    description: 'Therapeutic activities and programs that promote emotional and physical wellbeing.',
  },
  {
    title: 'Community Education',
    description: 'Health awareness initiatives and preventive care education in local communities.',
  },
  {
    title: 'Research Funding',
    description: 'Supporting pediatric healthcare research to advance treatment outcomes.',
  }
];

export default function ProgramsOverview() {
  return (
    <section className="bg-white py-24 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-[#0F172A] mb-6 font-[family-name:var(--font-poppins)] tracking-tighter">
            Our Programs<span className="text-[#FF007F]">.</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl font-[family-name:var(--font-inter)]">
            Comprehensive services designed to support every aspect of a child's healthcare journey across Nigeria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="flex gap-6 group border-b border-gray-50 pb-12"
            >
              <div className="text-xl font-black text-[#FF007F]/20 group-hover:text-[#FF007F] transition-colors duration-300 font-[family-name:var(--font-poppins)]">
                {(index + 1).toString().padStart(2, '0')}
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#0F172A] mb-3 font-[family-name:var(--font-poppins)]">
                  {program.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-[family-name:var(--font-inter)] text-lg">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}