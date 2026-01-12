 'use client';

import React, { useState } from 'react';

export default function VolunteerPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-20">
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('/children.jpeg')] bg-cover bg-center bg-no-repeat"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/60 to-[#0F172A]/40" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-poppins)]">
            Our Volunteers Make <br /> the Difference<span className="text-[#FF69B4]">.</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-[family-name:var(--font-inter)]">
            Behind every child we support is a community of dedicated volunteers.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Treatment Support", desc: "Helped families access critical oncology care.", borderColor: "border-[#FF69B4]" },
              { title: "Hospital Support", desc: "Assisted public hospitals with non-medical needs.", borderColor: "border-[#FFE082]" },
              { title: "Family Relief", desc: "Supported caregivers during long treatment periods.", borderColor: "border-[#FFD6DA]" },
              { title: "Community Outreach", desc: "Raised awareness for early diagnosis.", borderColor: "border-[#FF69B4]" }
            ].map((card, i) => (
              <div key={i} className={`p-8 rounded-3xl border-2 ${card.borderColor} hover:shadow-lg transition-shadow bg-[#F9F9F9]/50`}>
                <h3 className="text-xl font-bold mb-3 text-[#0F172A] font-[family-name:var(--font-poppins)]">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-[family-name:var(--font-inter)]">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 text-center bg-[#FFD6DA]/20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-[#0F172A] font-[family-name:var(--font-poppins)]">we need YOU, and so do the children.</h2>
          <p className="text-gray-600 text-lg font-[family-name:var(--font-inter)]">
            We’re always looking for compassionate people who want to support children and families facing cancer. You don’t need a medical background.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-xl mx-auto bg-white p-8 md:p-12 rounded-[2rem] border-2 border-[#FF69B4] shadow-xl">
          {!submitted ? (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF69B4] outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF69B4] outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Area of Interest</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF69B4] outline-none bg-white">
                    <option>Hospital Support</option>
                    <option>Community Outreach</option>
                    <option>Fundraising & Events</option>
                    <option>Administrative Support</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Commitment Level</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF69B4] outline-none bg-white">
                    <option>One-time</option>
                    <option>Short-term</option>
                    <option>Ongoing</option>
                  </select>
                </div>
              </div>

              <label className="flex items-start gap-3 cursor-pointer group pt-2">
                <input type="checkbox" required className="mt-1 accent-[#FF69B4]" />
                <span className="text-sm text-gray-500">I understand this is a volunteer role and I may be contacted.</span>
              </label>

              <button type="submit" className="w-full py-4 bg-[#FFE082] text-gray-800 font-extrabold rounded-full text-lg hover:bg-[#ffd54f] transition-all active:scale-95 shadow-md">
                Join Us.
              </button>
              
              <p className="text-center text-xs text-gray-400 italic">
                We respect your time and will only reach out with relevant opportunities.
              </p>
            </form>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-[#0F172A] mb-2 font-[family-name:var(--font-poppins)]">Thank You</h3>
              <p className="text-gray-600 font-[family-name:var(--font-inter)]">Thank you for your interest. We will be in touch.</p>
              <button onClick={() => setSubmitted(false)} className="mt-8 text-[#FF69B4] font-bold hover:underline">
                Send another message
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}