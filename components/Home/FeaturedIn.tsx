"use client";

import React from 'react';
import { motion } from 'framer-motion';

/**
 * FeaturedIn Component
 * An infinite marquee scroll for brand trust logos.
 * Implementation follows image_69d465.png exactly.
 */
const FeaturedIn = () => {
  const partners = [
    "FORBES",
    "TechCrunch",
    "BBC TRAVEL",
    "NAT GEO",
    "CONDÉ NAST",
    "THE GUARDIAN",
  ];

  // Doubling the array to create a seamless infinite loop
  const doublePartners = [...partners, ...partners];

  return (
    <section className="w-full bg-[#F8FBFF] py-16 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Label */}
        <div className="text-center mb-10">
          <p className="text-[#8E9AAF] text-xs md:text-sm font-bold uppercase tracking-[0.3em]">
            Featured In
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative flex items-center">
          {/* Gradient Masks for a premium "fade-in/out" edge look */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-linear-to-r from-[#F8FBFF] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-linear-to-l from-[#F8FBFF] to-transparent z-10" />

          {/* Infinite Motion Track */}
          <motion.div 
            className="flex whitespace-nowrap gap-16 md:gap-32 items-center"
            animate={{ x: [0, -1000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {doublePartners.map((partner, index) => (
              <span 
                key={index}
                className="text-[#8E9AAF] text-sm md:text-base font-bold tracking-widest opacity-60 hover:opacity-100 transition-opacity cursor-default select-none"
              >
                {partner}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;