'use client';

import React from 'react';
import { Globe, ChevronRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';


interface Region {
  name: string;
  count: string;
  countries: string[];
}

const regions: Region[] = [
  {
    name: "Asia & Pacific",
    count: "4200 dive shops",
    countries: ["Thailand", "Indonesia", "Philippines", "Malaysia", "Maldives", "Australia"]
  },
  {
    name: "Europe & Mediterranean",
    count: "2100 dive shops",
    countries: ["Spain", "Greece", "Croatia", "Malta", "Cyprus", "Italy"]
  },
  {
    name: "Americas",
    count: "1800 dive shops",
    countries: ["Mexico", "USA", "Caribbean Islands", "Ecuador", "Brazil", "Honduras"]
  },
  {
    name: "Middle East & Africa",
    count: "1400 dive shops",
    countries: ["Egypt", "Jordan", "South Africa", "Mozambique", "Tanzania", "Kenya"]
  },
  {
    name: "Indian Ocean",
    count: "520 freelancing shops",
    countries: ["Maldives", "Seychelles", "Mauritius", "Sri Lanka", "Madagascar"]
  },
  {
    name: "Pacific Islands",
    count: "380 dive shops",
    countries: ["Fiji", "Palau", "Solomon Islands", "Micronesia", "French Polynesia"]
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 25,
    scale: 0.98
  },
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
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};


const RegionCard = ({ region }: { region: Region }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ 
      y: -8,
      boxShadow: "0 20px 40px -12px rgba(0,0,0,0.08)",
      borderColor: "rgba(0, 174, 239, 0.2)"
    }}
    className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white transition-all cursor-pointer group"
  >
    <div className="flex items-start justify-between mb-6">
      <div className="flex items-start gap-4">
       
        <motion.div 
          whileHover={{ rotate: 15, scale: 1.1 }}
          className="bg-[#EAF5FF] p-3 rounded-xl text-[#00AEEF] transition-colors"
        >
          <Globe size={24} />
        </motion.div>
        <div>
          <h3 className="text-[#1B365D] text-xl font-bold group-hover:text-[#00AEEF] transition-colors duration-300">
            {region.name}
          </h3>
          <p className="text-gray-400 text-sm mt-1">{region.count}</p>
        </div>
      </div>
      <motion.div
        animate={{ x: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ChevronRight className="text-gray-300 group-hover:text-[#00AEEF] transition-colors duration-300" size={20} />
      </motion.div>
    </div>

    <div className="flex flex-wrap gap-2">
      {region.countries.map((country, cIdx) => (
        <motion.button
          key={cIdx}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#F8FBFF] hover:bg-[#00AEEF] hover:text-white text-gray-400 text-[12px] font-semibold px-4 py-2 rounded-lg transition-all border border-transparent hover:shadow-md"
        >
          {country}
        </motion.button>
      ))}
    </div>
  </motion.div>
);

const BrowseByRegion = () => {
  return (
    <section className="w-full bg-[#EAF5FF] py-20 px-4 md:px-8 lg:px-16 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={headerVariants}
        >
          <h2 className="text-[#1B365D] text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Browse by Region
          </h2>
          <p className="text-gray-500 text-lg font-medium">
            Find dive shops and spots in your preferred region
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {regions.map((region, index) => (
            <RegionCard key={index} region={region} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default BrowseByRegion;