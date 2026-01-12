  'use client';

import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-[url('/hero.jpeg')] bg-cover bg-center bg-no-repeat"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="max-w-5xl mx-auto text-center relative z-10 px-6 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-[family-name:var(--font-poppins)] tracking-tight leading-tight">
          Supporting Children <br className="hidden md:block" /> Through 
          <span className="block text-[#FF007F] mt-2">
             Their Healthcare Journey.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-10 font-[family-name:var(--font-inter)] leading-relaxed">
          Millions of underprivileged children in Nigeria need pediatric oncology healthcare. Taweret ensures they do not have to walk alone.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link href="/donate" className="w-full sm:w-auto">
            <button className="px-8 py-4 bg-[#FFD6DA] text-gray-900 font-extrabold rounded-full text-lg hover:shadow-xl hover:scale-105 transition-all w-full">
              Make a Donation
            </button>
          </Link>
          <Link href="/about" className="w-full sm:w-auto">
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white hover:text-gray-900 transition-all w-full">
              Learn Our Story
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}