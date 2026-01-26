"use client";

import React, { useState } from 'react';
import { MapPin, Star, Anchor } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const liveaboards = [
  {
    id: 1,
    name: 'Maldives Explorer',
    location: 'Maldives',
    rating: 4.9,
    reviews: 178,
    duration: '7-14 days',
    price: '2,450',
    image: '/maldives2.jpg',
    isFeatured: true,
  },
  {
    id: 2,
    name: 'Red Sea Master',
    location: 'Egypt',
    rating: 4.8,
    reviews: 203,
    duration: '7 days',
    price: '1,890',
    image: '/red-sea2.jpg',
    isFeatured: true,
  },
  {
    id: 3,
    name: 'Raja Ampat Voyager',
    location: 'Indonesia',
    rating: 4.9,
    reviews: 156,
    duration: '10-12 days',
    price: '3,200',
    image: '/raja-ampat2.jpg',
    isFeatured: true,
  },
];


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  }
};

const headerVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const Liveaboard = () => {
  const [activeTab, setActiveTab] = useState('Featured');

  return (
    <section className="w-full bg-[#F9FBFF] py-20 px-4 md:px-8 lg:px-16 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={headerVariants}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div className="space-y-3">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1B365D] tracking-tight">
              Liveaboard Diving
            </h2>
            <p className="text-gray-500 text-lg md:text-xl font-medium">
              Multi-day diving adventures on comfortable vessels
            </p>
          </div>

         
          <div className="flex bg-white p-1.5 rounded-2xl border border-gray-100 shadow-sm w-fit relative">
            {['Featured', 'All Liveaboards'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-8 py-3 rounded-xl text-sm font-bold transition-colors duration-500 z-10 ${
                  activeTab === tab ? 'text-white' : 'text-gray-400 hover:text-[#1B365D]'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#00AEEF] rounded-xl shadow-lg -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

      
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {liveaboards
              .filter(item => activeTab === 'All Liveaboards' || item.isFeatured)
              .map((item) => (
              <motion.div
                layout
                key={item.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -12,
                  transition: { duration: 0.4, ease: "circOut" }
                }}
                className="bg-white rounded-4xl overflow-hidden border border-gray-100 shadow-[0_15px_35px_-15px_rgba(27,54,93,0.08)] group cursor-pointer"
              >
                <div className="relative h-72 w-full overflow-hidden">
                  <div className="inset-0 bg-gray-100 group-hover:hidden" />
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  />
                  {item.isFeatured && (
                    <motion.div 
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="absolute top-5 left-5 bg-[#FF9F00] text-white px-4 py-2 rounded-xl flex items-center gap-2 shadow-xl backdrop-blur-md"
                    >
                      <Star size={14} fill="white" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Featured</span>
                    </motion.div>
                  )}
              
                  <div className="absolute inset-0 bg-linear-to-t from-[#1B365D]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

              
                <div className="p-8 space-y-5">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-[#1B365D] group-hover:text-[#00AEEF] transition-colors duration-300">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-gray-400">
                      <MapPin size={18} className="text-[#00AEEF]/60" />
                      <span className="text-sm font-semibold tracking-tight">{item.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-lg">
                      <Star size={16} className="text-[#FF9F00]" fill="#FF9F00" />
                      <span className="font-bold text-[#1B365D] text-sm">{item.rating}</span>
                    </div>
                    <span className="text-gray-400 text-sm font-medium">({item.reviews} reviews)</span>
                  </div>

                  <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2.5 text-gray-500">
                      <div className="p-2 bg-blue-50 rounded-lg text-[#00AEEF]">
                        <Anchor size={18} />
                      </div>
                      <span className="text-sm font-bold">{item.duration}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-[10px] font-bold uppercase tracking-tighter mb-0.5">Starting From</p>
                      <div className="flex items-baseline justify-end gap-0.5">
                        <span className="text-xs font-bold text-[#00AEEF]">$</span>
                        <span className="text-2xl font-black text-[#00AEEF] tracking-tighter">{item.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3 }}
          className="mt-20 flex justify-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "#f0f9ff",
              boxShadow: "0 20px 40px -15px rgba(0, 174, 239, 0.3)" 
            }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-3 px-12 py-5 bg-white border-2 border-[#00AEEF]/10 text-[#00AEEF] rounded-2xl font-black text-base shadow-sm transition-all duration-300"
          >
            View All Liveaboards
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Anchor size={20} className="rotate-45" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Liveaboard;