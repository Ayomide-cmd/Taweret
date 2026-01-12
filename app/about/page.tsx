  'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, Activity, Home, Search, CheckCircle } from 'lucide-react';

const scopeItems = [
  { icon: Activity, title: "Medical Fees", desc: "Assistance with hospital bills and specialized treatment fees." },
  { icon: Search, title: "Diagnostics", desc: "Funding for essential diagnostic tests and prescribed medications." },
  { icon: Home, title: "Logistics", desc: "Transportation and accommodation support for families during hospital stays." },
  { icon: Heart, title: "Holistic Care", desc: "Essential non-medical care and emotional support during treatment." }
];

const values = [
  { label: "Compassion", desc: "Leading with heart in every family interaction." },
  { label: "Transparency", desc: "Complete openness in how funds are utilized." },
  { label: "Dignity", desc: "Respecting the humanity of every child in our care." },
  { label: "Accountability", desc: "Taking full responsibility for our impact." }
];

export default function AboutPage() {
  return (
    <main className="bg-white">
     
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('/about-hero.jpeg')] bg-cover bg-center bg-no-repeat"
        />
        <div className="absolute inset-0 bg-[#FFD6DA]/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-[family-name:var(--font-poppins)] tracking-tighter">
            Our Story<span className="text-[#FF007F]">.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white font-medium max-w-2xl mx-auto font-[family-name:var(--font-inter)] leading-relaxed">
            How we support underprivileged Nigerian children facing cancer.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          <div>
            <h2 className="text-xs uppercase tracking-[0.3em] font-black text-[#FF007F] mb-8 font-[family-name:var(--font-inter)]">
              The Challenge
            </h2>
            <div className="space-y-6 text-xl text-gray-600 font-[family-name:var(--font-inter)] leading-relaxed">
              <p>
                Pediatric cancer treatment is exceptionally costly, often placing an impossible burden on families. In Nigeria, public hospitals frequently require immediate out-of-pocket payments for life-saving care.
              </p>
              <p>
                Without external support, many underprivileged families struggle to cover even the most basic treatment expenses, leading to delayed care or abandoned treatments.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-[0.3em] font-black text-[#FF007F] mb-8 font-[family-name:var(--font-inter)]">
              Why We Exist
            </h2>
            <div className="space-y-6 text-xl text-gray-900 font-[family-name:var(--font-inter)] leading-relaxed font-medium">
              <p>
                We believe that no child should ever be denied life-saving medical care simply due to the cost of treatment. 
              </p>
              <p>
                Families should be allowed to focus entirely on the emotional care of their child, while community support helps close the financial and logistical gaps in the healthcare journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-16 font-[family-name:var(--font-poppins)] tracking-tight">
            Our Scope of Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 border border-gray-100">
            {scopeItems.map((item, i) => (
              <div key={i} className="bg-white p-12 group hover:bg-gray-50 transition-colors">
                <div className="text-[#FF007F] mb-6">
                  <item.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-[family-name:var(--font-poppins)]">{item.title}</h3>
                <p className="text-gray-500 text-lg font-[family-name:var(--font-inter)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-24 px-6 bg-[#0F172A] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 font-[family-name:var(--font-poppins)] tracking-tight">
            Empowering the Journey
          </h2>
          <p className="text-xl text-gray-300 mb-12 font-[family-name:var(--font-inter)] leading-relaxed">
            Donations help offset treatment costs while volunteers help families navigate complex care paths. Both are essential and complementary in ensuring no family walks this road alone.
          </p>
          <div className="inline-flex flex-col md:flex-row gap-8 text-left border-t border-white/10 pt-12">
            <div className="flex-1">
              <h4 className="text-[#FF007F] font-bold mb-2 uppercase tracking-widest text-xs">Who we serve</h4>
              <p className="text-lg">Underprivileged children and families receiving oncology care in Nigerian public hospitals.</p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs uppercase tracking-[0.3em] font-black text-gray-400 mb-16 text-center font-[family-name:var(--font-inter)]">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {values.map((value, i) => (
              <div key={i} className="text-center">
                <div className="text-[#FF007F] mb-4 flex justify-center">
                  <CheckCircle size={20} />
                </div>
                <h4 className="text-xl font-bold mb-2 font-[family-name:var(--font-poppins)]">{value.label}</h4>
                <p className="text-gray-500 font-[family-name:var(--font-inter)]">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-24 px-6 text-center border-t border-gray-100">
        <h2 className="text-4xl font-bold mb-8 font-[family-name:var(--font-poppins)] tracking-tight">Ready to help?</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/donate" className="px-8 py-4 bg-[#FFD6DA] text-gray-900 font-extrabold rounded-full text-lg hover:scale-105 transition-all">
            Make a Donation
          </Link>
          <Link href="/volunteer" className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-bold rounded-full text-lg hover:bg-gray-900 hover:text-white transition-all">
            Join as Volunteer
          </Link>
        </div>
      </section>
    </main>
  );
}