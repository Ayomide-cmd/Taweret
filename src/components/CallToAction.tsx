import React from 'react';
import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-[#F9F9F9] py-20 px-4">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FFC0CB] via-[#FFE082] to-[#A8E6CF]" />
      
      <div className="max-w-4xl mx-auto text-center bg-white p-12 rounded-[2rem] shadow-sm border-2 border-[#FFD6DA]">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 font-[family-name:var(--font-poppins)]">
          Join Our Mission
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-[family-name:var(--font-inter)]">
          Your support enables us to provide critical services to children and families facing health challenges.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link 
            href="/donate"
            className="w-full sm:w-auto px-10 py-4 bg-[#FFE082] text-gray-800 font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-md"
          >
            Make a Donation
          </Link>
          <Link 
            href="/volunteer"
            className="w-full sm:w-auto px-10 py-4 bg-white text-gray-700 border-2 border-[#FFC0CB] font-bold rounded-full hover:bg-[#FFD6DA] transition-all duration-300"
          >
            Volunteer With Us
          </Link>
        </div>
      </div>

      <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#A8E6CF] rounded-full opacity-20 blur-2xl" />
      <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#FFE082] rounded-full opacity-20 blur-2xl" />
    </section>
  );
}