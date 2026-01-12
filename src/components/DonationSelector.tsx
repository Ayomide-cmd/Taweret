  'use client';

import React, { useState } from 'react';

const amounts = [5000, 10000, 25000, 50000];

export default function DonationSelector() {
  const [selected, setSelected] = useState(10000);
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#FFD6DA]">
      <div className="flex bg-[#F9F9F9] p-1 rounded-full mb-8">
        <button 
          onClick={() => setFrequency('once')}
          className={`flex-1 py-2 rounded-full font-bold transition-all ${frequency === 'once' ? 'bg-[#FFC0CB] text-white' : 'text-gray-500'}`}
        > One-time </button>
        <button 
          onClick={() => setFrequency('monthly')}
          className={`flex-1 py-2 rounded-full font-bold transition-all ${frequency === 'monthly' ? 'bg-[#FFC0CB] text-white' : 'text-gray-500'}`}
        > Monthly </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {amounts.map((amt) => (
          <button
            key={amt}
            onClick={() => setSelected(amt)}
            className={`py-4 rounded-2xl border-2 font-bold text-xl transition-all ${selected === amt ? 'border-[#FFE082] bg-[#FFE082]/10 text-gray-900' : 'border-gray-100 text-gray-400 hover:border-[#FFC0CB]'}`}
          > ₦{amt.toLocaleString()} </button>
        ))}
      </div>

      <div className="relative mb-8">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">₦</span>
        <input 
          type="number" 
          placeholder="Custom amount"
          className="w-full pl-8 pr-4 py-4 rounded-2xl border-2 border-gray-100 focus:border-[#FFC0CB] outline-none font-bold text-lg"
          onChange={(e) => setSelected(Number(e.target.value))}
        />
      </div>

      <button className="w-full py-5 bg-[#FFE082] text-gray-800 font-extrabold rounded-full text-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all">
        Donate Now
      </button>
    </div>
  );
}