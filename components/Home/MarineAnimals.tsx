'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface MarineAnimal {
  id: number;
  animal: string;
  locations: string;
  availability: string;
  image: string;
}

const marineAnimals: MarineAnimal[] = [
  {
    id: 1,
    animal: 'Manta Rays',
    locations: 'Maldives, Indonesia, Mexico',
    availability: 'Year-round',
    image: '/matana-rays.jpg',
  },
  {
    id: 2,
    animal: 'Whale Sharks',
    locations: 'Philippines, Thailand, Australia',
    availability: 'Nov - May',
    image: '/shark.jpg',
  },
  {
    id: 3,
    animal: 'Hammerhead Sharks',
    locations: 'Galápagos, Costa Rica, Egypt',
    availability: 'Jun - Nov',
    image: '/shark2.png',
  },
  {
    id: 4,
    animal: 'Dolphins',
    locations: 'Red Sea, Caribbean, Azores',
    availability: 'Year-round',
    image: '/dolphin.jpg',
  },
  {
    id: 5,
    animal: 'Sea Turtles',
    locations: 'Hawaii, Malaysia, Cyprus',
    availability: 'Year-round',
    image: '/turtule.jpg',
  },
  {
    id: 6,
    animal: 'Reef Sharks',
    locations: 'Bahamas, Fiji, French Polynesia',
    availability: 'Year-round',
    image: '/reef.jpg',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // Premium cubic-bezier
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
};

/**
 * Reusable Animal Card Component
 */
const AnimalCard = ({ item }: { item: MarineAnimal }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -10 }}
    className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] border border-gray-100 group cursor-pointer"
  >
    {/* Image Container */}
    <div className="relative h-56 w-full overflow-hidden">
      <img
        src={item.image}
        alt={item.animal}
        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
      />
      {/* Availability Badge */}
      <motion.div 
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-100 shadow-sm"
      >
        <span className="text-[#1B365D] text-[11px] font-bold uppercase tracking-wide">
          {item.availability}
        </span>
      </motion.div>
    </div>

    {/* Content Area */}
    <div className="p-6">
      <h3 className="text-[#1B365D] text-2xl font-bold mb-2 group-hover:text-[#00AEEF] transition-colors duration-300">
        {item.animal}
      </h3>
      <p className="text-gray-400 text-sm font-medium">
        {item.locations}
      </p>
    </div>
  </motion.div>
);

const MarineAnimals = () => {
  return (
    <section className="w-full bg-[#F8FBFF] py-20 px-4 md:px-8 lg:px-16 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={headerVariants}
          className="text-center mb-14"
        >
          <h2 className="text-[#1B365D] text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Dive with Marine Animals
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Find dive destinations based on the marine life you want to encounter
          </p>
        </motion.div>

        {/* Animals Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {marineAnimals.map((item) => (
            <AnimalCard key={item.id} item={item} />
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 flex justify-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#0096ce",
              boxShadow: "0 10px 25px -5px rgba(0, 174, 239, 0.4)" 
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#00AEEF] text-white px-10 py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-md flex items-center gap-2"
          >
            View All Marine Life
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default MarineAnimals;