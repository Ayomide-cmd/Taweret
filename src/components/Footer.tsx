import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#F9F9F9] text-gray-700 py-16 px-4 border-t border-[#FFD6DA]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold font-[family-name:var(--font-poppins)] text-gray-900">
            Taweret<span className="text-[#FFC0CB]">.</span>
          </h3>
          <p className="text-gray-500 leading-relaxed font-[family-name:var(--font-inter)]">
            Supporting children's healthcare with dignity, compassion, and professional care. Making every recovery journey a little brighter.
          </p>
          <div className="flex gap-4">

            <div className="w-8 h-8 rounded-full bg-[#FFE082] opacity-80" />
            <div className="w-8 h-8 rounded-full bg-[#FFC0CB] opacity-80" />
            <div className="w-8 h-8 rounded-full bg-[#A8E6CF] opacity-80" />
          </div>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-6 font-[family-name:var(--font-poppins)]">About</h4>
          <ul className="space-y-3 font-[family-name:var(--font-inter)]">
            <li><Link href="/about" className="hover:text-[#FFC0CB] transition-colors">Our Story</Link></li>
            <li><Link href="/programs" className="hover:text-[#FFC0CB] transition-colors">Programs</Link></li>
            <li><Link href="/impact" className="hover:text-[#FFC0CB] transition-colors">Impact Reports</Link></li>
            <li><Link href="/team" className="hover:text-[#FFC0CB] transition-colors">Our Team</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-6 font-[family-name:var(--font-poppins)]">Get Involved</h4>
          <ul className="space-y-3 font-[family-name:var(--font-inter)]">
            <li><Link href="/donate" className="hover:text-[#FFE082] transition-colors font-semibold">Donate Now</Link></li>
            <li><Link href="/volunteer" className="hover:text-[#FFC0CB] transition-colors">Volunteer</Link></li>
            <li><Link href="/partner" className="hover:text-[#FFC0CB] transition-colors">Partner With Us</Link></li>
            <li><Link href="/fundraise" className="hover:text-[#FFC0CB] transition-colors">Fundraise</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-6 font-[family-name:var(--font-poppins)]">Contact</h4>
          <ul className="space-y-3 font-[family-name:var(--font-inter)] text-gray-500">
            <li className="flex items-center gap-2">
              <span className="text-[#A8E6CF]">✉</span> info@taweret.ng
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#FFE082]">📞</span> (234) 91909090
            </li>
            <li>
              <Link href="/contact" className="inline-block mt-2 px-4 py-2 bg-white border border-[#FFD6DA] rounded-lg hover:bg-[#FFD6DA] transition-all">
                Contact Form
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-200 text-center text-gray-400 text-sm font-[family-name:var(--font-inter)]">
        <p>&copy; 2026 Taweret for Children. All rights reserved.</p>
      </div>
    </footer>
  );
}