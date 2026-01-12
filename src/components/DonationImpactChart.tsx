import React from 'react';

const impacts = [
  { label: 'Hospital Bills', percent: 40, color: 'bg-[#FFC0CB]' },
  { label: 'Oncology Tests', percent: 25, color: 'bg-[#FFE082]' },
  { label: 'Nutritional Meals', percent: 20, color: 'bg-[#A8E6CF]' },
  { label: 'Essential Medicine', percent: 15, color: 'bg-blue-200' },
];

export default function DonationImpactChart() {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm h-full">
      <h3 className="text-2xl font-bold mb-6 font-[family-name:var(--font-poppins)]">How your gift helps</h3>
      <div className="space-y-6">
        {impacts.map((item) => (
          <div key={item.label}>
            <div className="flex justify-between mb-2 font-medium">
              <span>{item.label}</span>
              <span>{item.percent}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden">
              <div 
                className={`h-full ${item.color} transition-all duration-1000`} 
                style={{ width: `${item.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 p-6 bg-[#F9F9F9] rounded-2xl italic text-gray-500 text-center">
        "Every Naira donated goes directly toward pediatric oncology initiatives including payment of hospital bills, feeding initatives etc."
      </div>
    </div>
  );
}