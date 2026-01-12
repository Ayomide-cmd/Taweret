 'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-xl md:text-2xl font-bold font-[family-name:var(--font-poppins)] text-[#0F172A] tracking-tight">
            Taweret<span className="text-[#FF007F]">.</span>
          </span>
        </Link>

        <div className="flex items-center font-[family-name:var(--font-inter)]">
          <Link 
            href="/volunteer" 
            className="px-4 py-2 md:px-6 md:py-2 bg-[#FF007F] text-white text-sm md:text-base font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all whitespace-nowrap"
          >
            <span className="hidden xs:inline">Make a Difference.</span>
            <span className="xs:hidden">Volunteer</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}