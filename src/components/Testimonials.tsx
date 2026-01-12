 'use client';

import React, { useState } from 'react';
import { Testimonial } from '@/lib/types';

const testimonials: Testimonial[] = [
  {
    quote: "Taweret provided our family with essential support during our daughter's treatment. Their team helped us navigate the overwhelming process with compassion and practical assistance.",
    author: "Sarah Martinez",
    role: "Parent"
  },
  {
    quote: "The programs Taweret brings to our hospital make a tangible difference in patient outcomes and family wellbeing. Their professional approach and dedication are exemplary.",
    author: "Dr. James Nwobu",
    role: "Pediatric Oncologist"
  },
  {
    quote: "Volunteering with Taweret has shown me the profound impact that organized, thoughtful support can have on families during the most challenging times.",
    author: "OLayiwola Lateef",
    role: "Volunteer"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="bg-charity-gray py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-4 font-[family-name:var(--font-poppins)]">
          Stories from Our Community
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Perspectives from families, healthcare professionals, and volunteers.
        </p>
        
        <div className="relative bg-white p-8 md:p-12 rounded-2xl shadow-sm border-l-8 border-[#FFC0CB]">
          <p className="text-xl text-gray-700 mb-6 italic leading-relaxed">
            "{testimonials[current].quote}"
          </p>
          <div className="border-t border-gray-100 pt-6">
            <p className="font-bold text-gray-900 text-lg">
              {testimonials[current].author}
            </p>
            <p className="text-gray-500 font-medium">{testimonials[current].role}</p>
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                current === index 
                  ? 'bg-[#FFE082] scale-125 shadow-md' 
                  : 'bg-gray-300 hover:bg-[#FFC0CB]'
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 