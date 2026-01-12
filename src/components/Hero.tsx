'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFD6DA] to-white py-24 px-4 min-h-[85vh] flex items-center">
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[10%] text-6xl opacity-40 select-none hidden lg:block"
      >
        🎈
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-40 right-[15%] text-6xl opacity-40 select-none hidden lg:block"
      >
        🎈
      </motion.div>
      <div className="absolute top-40 right-[10%] w-32 h-32 bg-[#FFE082] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 left-[15%] w-40 h-40 bg-[#A8E6CF] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight font-(family-name:--font-poppins)">
            Supporting Children Through <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-charity-pink to-[#db9ba6]">
              Their Healthcare Journey
            </span>
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto font-(family-name:--font-inter) leading-relaxed"
        >
          Providing essential resources, emotional support, and practical assistance 
          to underpriviledged families through pediatric healthcare.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link 
            href="/donate"
            className="w-full sm:w-auto px-10 py-5 bg-charity-yellow text-gray-800 font-bold rounded-full text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Make a Donation
          </Link>
          <Link 
            href="/about"
            className="w-full sm:w-auto px-10 py-5 bg-white text-gray-700 font-bold rounded-full text-lg border-2 border-charity-pink hover:bg-charity-pink-light transition-all duration-300 shadow-sm"
          >
            Learn Our Story
          </Link>
        </motion.div>
      </div>
    </section>
  );
}