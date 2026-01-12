 'use client';

import React from 'react';
import DonationSelector from '@/components/DonationSelector';
import DonationImpactChart from '@/components/DonationImpactChart';
import TransparencyChart from '@/components/TransparencyChart';

export default function DonatePage() {
  return (
    <div className="pt-32 pb-20 px-4 min-h-screen bg-[#F9F9F9]">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-poppins)]">
          Make a Difference Today<span className="text-[#FFC0CB]">.</span>
        </h1>
        <p className="text-lg text-gray-600 font-[family-name:var(--font-inter)]">
          Your generosity provides life-saving treatments and essential support for children in need.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <DonationSelector />
          <TransparencyChart />
        </div>
        
        <div className="space-y-8">
          <DonationImpactChart />
        </div>
      </div>
    </div>
  );
}