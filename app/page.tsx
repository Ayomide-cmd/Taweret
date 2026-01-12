import React from 'react';
import Hero from '@/components/Hero';
import ImpactSnapshot from '@/components/ImpactSnapshot';
import ProgramsOverview from '@/components/ProgramsOverview';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <Hero />
      <ImpactSnapshot />
      <ProgramsOverview />
      <Testimonials />

      <Footer />
    </div>
  );
}