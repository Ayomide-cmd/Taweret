import React from 'react';

export default function TransparencyChart() {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border-t-4 border-[#A8E6CF]">
      <h3 className="text-xl font-bold mb-4 font-[family-name:var(--font-poppins)]">Financial Transparency</h3>
      <div className="flex items-center gap-6">
        <div className="relative w-24 h-24 flex-shrink-0">
          <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
            <circle cx="18" cy="18" r="16" fill="none" stroke="#eee" strokeWidth="4" />
            <circle cx="18" cy="18" r="16" fill="none" stroke="#A8E6CF" strokeWidth="4" strokeDasharray="92, 100" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-sm font-bold">92%</div>
        </div>
        <div>
          <p className="font-bold text-gray-900">Direct Impact</p>
          <p className="text-sm text-gray-500 leading-snug">
            92% of every Naira goes directly to our healthcare programs. 8% covers administration and fundraising.
          </p>
        </div>
      </div>
    </div>
  );
}