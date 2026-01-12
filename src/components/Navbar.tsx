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
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold font-(family-name:--font-poppins) text-[#0F172A] tracking-tight">
            Taweret<span className="text-charity-pink">.</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 font-(family-name:--font-inter)">
          <Link href="/about" className="text-gray-600 hover:text-charity-pink font-medium transition-colors">Our Story</Link>
          <Link href="/programs" className="text-gray-600 hover:text-charity-pink font-medium transition-colors">Programs</Link>
          <Link href="/volunteer" className="text-gray-600 hover:text-charity-pink font-medium transition-colors">Volunteer</Link>
          <Link 
            href="/donate" 
            className="ml-4 px-6 py-2 bg-charity-yellow text-gray-800 font-bold rounded-full hover:shadow-md hover:scale-105 transition-all"
          >
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
}