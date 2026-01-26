"use client";

import React, { useState, memo } from 'react';
import { ChevronRight, MapPin, Star } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface DiveShop {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  badge: string;
  image: string;
}

const diveShops: DiveShop[] = [
  {
    id: 1,
    name: 'Blue Ocean Dive Center',
    location: 'Maldives',
    rating: 4.9,
    reviews: 256,
    badge: 'PADI 5 Star Resort',
    image: '/blue-ocean.jpg',
  },
  {
    id: 2,
    name: 'Red Sea Divers',
    location: 'Hurghada, Egypt',
    rating: 4.8,
    reviews: 189,
    badge: 'Wreck Diving Specialists',
    image: '/red-sea-3.jpg',
  },
  {
    id: 3,
    name: 'Bali Dive Paradise',
    location: 'Bali, Indonesia',
    rating: 4.9,
    reviews: 342,
    badge: 'Coral Reef Exploration',
    image: '/bile-paradise.jpg',
  }
];


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.23, 1, 0.32, 1], 
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};


const DiveShopCard = memo(({ shop }: { shop: DiveShop }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ y: -12, transition: { duration: 0.4, ease: "circOut" } }}
    className="bg-white rounded-4xl overflow-hidden border border-gray-100 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] group cursor-pointer h-full"
  >
    
    <div className="relative h-60 w-full overflow-hidden">
      <img
        src={shop.image}
        alt={shop.name}
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>

    
    <div className="p-7 space-y-4">
      <div className="space-y-1">
        <h3 className="text-2xl font-bold text-[#1B365D] transition-colors duration-300 group-hover:text-[#00AEEF]">
          {shop.name}
        </h3>
        <div className="flex items-center gap-1.5 text-gray-400">
          <MapPin size={16} className="shrink-0" />
          <span className="text-sm font-semibold">{shop.location}</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-1.5">
          <Star size={18} className="text-[#FFB800]" fill="#FFB800" />
          <span className="font-bold text-[#1B365D] text-lg">{shop.rating}</span>
          <span className="text-gray-400 text-sm font-medium">({shop.reviews})</span>
        </div>
        
        <div className="bg-[#F0F9FF] text-[#00AEEF] px-3.5 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider">
          {shop.badge}
        </div>
      </div>
    </div>
  </motion.div>
));

DiveShopCard.displayName = "DiveShopCard";

const DiveShops = () => {
  const [activeTab, setActiveTab] = useState('Featured');

  return (
    <section className="w-full bg-white py-20 px-4 md:px-8 lg:px-16 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={headerVariants}
        >
          <div className="space-y-3">
            <h2 className="text-4xl font-bold text-[#1B365D] tracking-tight">
              Dive Shops
            </h2>
            <p className="text-gray-500 text-lg">
              Explore top-rated dive centers from around the world
            </p>
          </div>

          <div className="flex bg-[#F1F5F9] p-1.5 rounded-xl border border-gray-100 shadow-inner w-fit relative">
            {['Featured', 'All Shops'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative z-10 px-8 py-2.5 rounded-lg text-sm font-bold transition-colors duration-500 ${
                  activeTab === tab ? 'text-white' : 'text-gray-500 hover:text-[#1B365D]'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabBackground"
                    className="absolute inset-0 bg-[#00AEEF] rounded-lg shadow-lg -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {diveShops.map((shop) => (
              <DiveShopCard key={shop.id} shop={shop} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div 
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.button
            whileHover={{ 
              scale: 1.02, 
              borderColor: "#00AEEF",
              boxShadow: "0 10px 25px -5px rgba(0, 174, 239, 0.25)"
            }}
            whileTap={{ scale: 0.97 }}
            className="px-12 py-4 bg-white border border-gray-200 text-[#00AEEF] rounded-2xl font-bold text-base shadow-sm transition-all flex items-center gap-2 group"
          >
            View All Dive Shops
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ChevronRight size={18} className="group-hover:text-[#00AEEF]" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default DiveShops;