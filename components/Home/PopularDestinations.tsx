'use client';

import React, { useState, useCallback, memo } from 'react';
import { motion, Variants } from 'framer-motion';

interface Destination {
  id: number;
  name: string;
  country: string;
  spots: number;
  imageUrl: string;
}

const destinations: Destination[] = [
  { id: 1, name: 'Maldives', country: 'Indian Ocean', spots: 234, imageUrl: '/Maldive.jpg' },
  { id: 2, name: 'Red Sea', country: 'Egypt', spots: 189, imageUrl: '/red-sea.jpg' },
  { id: 3, name: 'Great Barrier Reef', country: 'Australia', spots: 312, imageUrl: '/great.jpg' },
  { id: 4, name: 'Raja Ampat', country: 'Indonesia', spots: 178, imageUrl: '/ra.jpg' },
  { id: 5, name: 'Palau', country: 'Micronesia', spots: 145, imageUrl: '/palau.jpg' },
  { id: 6, name: 'Galápagos Islands', country: 'Ecuador', spots: 98, imageUrl: '/galapagos.jpg' },
  { id: 7, name: 'Sipadan', country: 'Malaysia', spots: 167, imageUrl: '/sipadan.jpg' },
  { id: 8, name: 'Cozumel', country: 'Mexico', spots: 221, imageUrl: '/couzumel.jpg' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Memoized DestinationCard to prevent unnecessary re-renders during scroll/parent updates
const DestinationCard = memo(({ destination }: { destination: Destination }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="relative group cursor-pointer"
      style={{ backfaceVisibility: 'hidden' }} // Improves mobile rendering
    >
      <div className="relative overflow-hidden rounded-3xl aspect-4/3 shadow-md transition-all duration-500 group-hover:shadow-[0_25px_50px_rgba(0,0,0,0.35)] group-hover:-translate-y-3 will-change-transform">
        <img
          src={destination.imageUrl}
          alt={destination.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 will-change-transform"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Text Content */}
        <div className="absolute bottom-0 left-0 p-6 w-full text-white pointer-events-none">
          <motion.h3 
            className="text-xl md:text-2xl font-bold mb-1 tracking-tight drop-shadow-md"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {destination.name}
          </motion.h3>
          <p className="text-white/80 text-sm font-medium mb-1 drop-shadow-sm">
            {destination.country}
          </p>
          <p className="text-white/60 text-[11px] uppercase tracking-widest font-bold drop-shadow-sm">
            {destination.spots} dive spots
          </p>
        </div>
      </div>
    </motion.div>
  );
});

DestinationCard.displayName = 'DestinationCard';

const PopularDestinations = () => {
  // Memoize click handler to avoid function recreation
  const handleExploreClick = useCallback(() => {
    console.log("Navigating to all destinations...");
  }, []);

  return (
    <section className="w-full py-24 px-6 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} // Optimization: only trigger once for scroll performance
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1B2B3C] mb-4 tracking-tight">
            Popular Dive Destinations
          </h2>
          <p className="text-slate-500 text-base md:text-lg font-medium max-w-2xl mx-auto">
            Explore the world's most spectacular underwater locations through our curated selection.
          </p>
        </motion.div>

        {/* Responsive Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Increased performance by not repeating entrance animations
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20"
        >
          {destinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </motion.div>

        {/* Button */}
        <div className="flex justify-center">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: '#f8fafc',
              boxShadow: "0 10px 25px -5px rgba(0, 129, 201, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleExploreClick}
            className="px-12 py-4 rounded-2xl border border-blue-100 text-[#0081C9] font-bold text-[15px] tracking-wide bg-white shadow-sm transition-all duration-300 active:bg-blue-50 outline-none will-change-transform"
          >
            Explore All Destinations
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;