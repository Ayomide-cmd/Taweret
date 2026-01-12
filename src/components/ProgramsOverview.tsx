import React from 'react';
import { Program } from '../../lib/types';

const programs: Program[] = [
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
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-4 font-(family-name:--font-poppins)">
          Our Programs
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto font-(family-name:--font-inter)">
          Comprehensive services designed to support every aspect of a child's healthcare journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="p-8 bg-charity-gray border-t-4 border-charity-yellow rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3 font-(family-name:--font-poppins)">
                {program.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-(family-name:--font-inter)">
                {program.description}
              </p>
              <div className="mt-6 w-12 h-1 bg-charity-pink group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}