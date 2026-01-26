'use client';

import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

/**
 * Interface for Equipment Shop data structure
 */
interface EquipmentShop {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  tags: string[];
  image: string;
}

const equipmentShops: EquipmentShop[] = [
  {
    id: 1,
    name: 'DiveGear Pro',
    location: 'Miami, USA',
    rating: 4.8,
    reviews: 342,
    tags: ['BCDs', 'Regulators', 'Computers'],
    image: '/dive-gear-pro.png',
  },
  {
    id: 2,
    name: 'Ocean Equipment',
    location: 'Sydney, Australia',
    rating: 4.9,
    reviews: 289,
    tags: ['Wetsuits', 'Fins', 'Masks'],
    image: '/ocean-equipment.png',
  },
  {
    id: 3,
    name: 'Aqua Shop',
    location: 'Bali, Indonesia',
    rating: 4.7,
    reviews: 198,
    tags: ['Full Gear Sets', 'Accessories'],
    image: '/aqua-plast.png',
  }
];

/**
 * Animation Variants
 * Designed for a premium, smooth, and peaceful feel.
 */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for "premium" deceleration
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" }
  }
};

/**
 * Reusable Shop Card Component
 */
const ShopCard = ({ shop }: { shop: EquipmentShop }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ y: -10 }}
    className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.06)] group cursor-pointer"
  >
    {/* Card Image */}
    <div className="relative h-56 w-full overflow-hidden">
      <img
        src={shop.image}
        alt={shop.name}
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
    </div>

    {/* Card Content */}
    <div className="p-7 space-y-4">
      <div className="space-y-1">
        <h3 className="text-[#1B365D] text-2xl font-bold group-hover:text-[#00AEEF] transition-colors duration-300">
          {shop.name}
        </h3>
        <p className="text-gray-400 text-sm font-medium">
          {shop.location}
        </p>
      </div>

      <div className="flex items-center gap-1.5">
        <Star size={18} className="text-[#FFB800]" fill="#FFB800" />
        <span className="font-bold text-[#1B365D]">{shop.rating}</span>
        <span className="text-gray-400 text-sm">({shop.reviews} reviews)</span>
      </div>

      {/* Category Chips */}
      <div className="flex flex-wrap gap-2 pt-2">
        {shop.tags.map((tag) => (
          <motion.span
            key={tag}
            whileHover={{ scale: 1.05, backgroundColor: "#E0F2FE" }}
            className="bg-[#F0F9FF] text-[#00AEEF] text-[11px] font-bold px-3 py-1.5 rounded-lg border border-[#E0F2FE] transition-colors"
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </div>
  </motion.div>
);

const EquipmentShops = () => {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-8 lg:px-16 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={headerVariants}
          className="flex flex-col items-center text-center mb-14 space-y-3"
        >
          <motion.div 
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: false }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="bg-[#E0F2FE] p-3 rounded-xl text-[#00AEEF]"
          >
            <ShoppingBag size={32} strokeWidth={2.5} />
          </motion.div>
          <h2 className="text-[#1B365D] text-3xl md:text-4xl font-bold">
            Equipment Shops
          </h2>
          <p className="text-gray-500 text-base md:text-lg font-medium max-w-lg leading-relaxed">
            Buy quality diving gear from trusted retailers worldwide
          </p>
        </motion.div>

        {/* Equipment Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {equipmentShops.map((shop) => (
            <ShopCard key={shop.id} shop={shop} />
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#0096ce",
              boxShadow: "0 20px 25px -5px rgba(0, 174, 239, 0.4)" 
            }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#00AEEF] text-white px-10 py-4 rounded-xl font-bold text-base shadow-lg shadow-blue-500/20 transition-all duration-300 flex items-center gap-2"
          >
            Browse All Equipment Shops
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default EquipmentShops;