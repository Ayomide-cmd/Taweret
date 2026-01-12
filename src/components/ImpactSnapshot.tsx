import React from 'react';
import { ImpactStat } from '../../lib/types';


const impactStats: ImpactStat[] = [
  { value: '15,000+', label: 'Children Supported'},
  { value: '120+', label: 'Hospital Partners' },
  { value: '45', label: 'Active Programs'},
  { value: '3,500+', label: 'Volunteers'}
];

export default function ImpactSnapshot() {
  return (
    <section className="bg-charity-gray py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-4 font-(family-name:--font-poppins)">
          Our Impact
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto font-(family-name:--font-inter)">
          Working alongside families, healthcare providers, and communities to deliver meaningful support.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactStats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm text-center border-b-4 border-charity-pink hover:scale-105 transition-transform duration-300"
            >
    
              <div className="text-3xl font-bold text-gray-900 mb-2 font-(family-name:--font-poppins)">
                {stat.value}
              </div>
              <div className="text-gray-500 font-medium font-(family-name:--font-inter)">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}