 'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, Linkedin, Twitter, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-24 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
        
        
        <div className="md:col-span-5 space-y-8">
          <Link href="/" className="inline-block">
            <h3 className="text-3xl font-bold font-[family-name:var(--font-poppins)] text-[#0F172A] tracking-tighter">
              Taweret<span className="text-[#FF007F]">.</span>
            </h3>
          </Link>
          <p className="text-xl text-gray-500 leading-relaxed font-[family-name:var(--font-inter)] max-w-sm">
            Supporting children's healthcare with dignity, compassion, and professional care across Nigeria.
          </p>
          
          <div className="flex gap-5">
            <Link href="https://twitter.com" className="text-gray-400 hover:text-[#FF007F] transition-colors">
              <Twitter size={22} strokeWidth={1.5} />
            </Link>
            <Link href="https://linkedin.com" className="text-gray-400 hover:text-[#FF007F] transition-colors">
              <Linkedin size={22} strokeWidth={1.5} />
            </Link>
            <Link href="https://instagram.com" className="text-gray-400 hover:text-[#FF007F] transition-colors">
              <Instagram size={22} strokeWidth={1.5} />
            </Link>
          </div>
        </div>

        
        <div className="md:col-span-2">
          <h4 className="text-xs uppercase tracking-[0.2em] font-black text-gray-400 mb-8 font-[family-name:var(--font-inter)]">
            Organization
          </h4>
          <ul className="space-y-4 font-[family-name:var(--font-inter)] font-medium">
            <li><Link href="/about" className="hover:text-[#FF007F] transition-colors">Our Story</Link></li>
            <li><Link href="/programs" className="hover:text-[#FF007F] transition-colors">Programs</Link></li>
            <li><Link href="/impact" className="hover:text-[#FF007F] transition-colors">Impact Reports</Link></li>
            <li><Link href="/team" className="hover:text-[#FF007F] transition-colors">Our Team</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-xs uppercase tracking-[0.2em] font-black text-gray-400 mb-8 font-[family-name:var(--font-inter)]">
            Action
          </h4>
          <ul className="space-y-4 font-[family-name:var(--font-inter)] font-medium">
            <li><Link href="/donate" className="text-[#FF007F] font-bold hover:underline underline-offset-4">Donate Now</Link></li>
            <li><Link href="/volunteer" className="hover:text-[#FF007F] transition-colors">Volunteer</Link></li>
            <li><Link href="/partner" className="hover:text-[#FF007F] transition-colors">Partner With Us</Link></li>
            <li><Link href="/fundraise" className="hover:text-[#FF007F] transition-colors">Fundraise</Link></li>
          </ul>
        </div>

        
        <div className="md:col-span-3">
          <h4 className="text-xs uppercase tracking-[0.2em] font-black text-gray-400 mb-8 font-[family-name:var(--font-inter)]">
            Contact
          </h4>
          <ul className="space-y-6 font-[family-name:var(--font-inter)]">
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-[#FF007F]" strokeWidth={2} />
              <span className="text-gray-900 font-bold">info@taweret.ng</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-[#FF007F]" strokeWidth={2} />
              <span className="text-gray-500">(234) 919 090 90</span>
            </li>
            <li className="pt-2">
              <Link href="/contact" className="inline-block text-xs font-black uppercase tracking-widest pb-1 border-b-2 border-[#FF007F] hover:text-[#FF007F] transition-all">
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 text-[10px] md:text-xs font-[family-name:var(--font-inter)] uppercase tracking-widest font-bold">
        <p>&copy; 2026 Taweret for Children. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-gray-900 transition-colors">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}