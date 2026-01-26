"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Search, ShieldCheck, Globe, Headset } from 'lucide-react';


interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "Discover",
    description: "Search 10,000+ dive schools and 17,000+ dive spots worldwide in one place",
    icon: <Search className="w-8 h-8 text-white" />,
  },
  {
    title: "Trust",
    description: "All partners are verified and certified by leading dive organizations",
    icon: <ShieldCheck className="text-white w-8 h-8" />,
  },
  {
    title: "Global Network",
    description: "Connect with the worldwide diving community and share your experiences",
    icon: <Globe className="text-white w-8 h-8" />,
  },
  {
    title: "Support",
    description: "24/7 customer service to help you plan the perfect diving adventure",
    icon: <Headset className="text-white w-8 h-8" />,
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};


const FeatureCard = ({ feature }: { feature: Feature }) => (
  <motion.div 
    variants={fadeInUp}
    className="flex flex-col items-center group cursor-default text-center"
  >
    
    <motion.div 
      whileHover={{ 
        rotate: [0, -5, 5, 0],
        transition: { duration: 0.5 }
      }}
      className="bg-white/20 backdrop-blur-md p-5 rounded-2xl mb-8 border border-white/30 shadow-xl transition-all duration-500 group-hover:bg-white/40 group-hover:scale-110 group-hover:shadow-white/10"
    >
      {feature.icon}
    </motion.div>

    <h3 className="text-2xl font-bold mb-4 tracking-tight">
      {feature.title}
    </h3>
    <p className="text-sm md:text-base opacity-80 leading-relaxed font-medium px-2">
      {feature.description}
    </p>
  </motion.div>
);

const WhatWeDo = () => {
  return (
    <section className="relative w-full overflow-hidden font-sans">
      
      <div className="bg-linear-to-r from-[#00AEEF] via-[#0096D6] to-[#0081C9] py-24 text-center text-white">
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              What We Do
            </h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl opacity-90 leading-relaxed font-medium">
              Bucceo connects divers with the world's best diving experiences, making it simple to discover, compare, and book your next underwater adventure.
            </p>
          </motion.div>

         
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 items-start"
          >
            {features.map((feature, index) => (
              <FeatureCard key={`${feature.title}-${index}`} feature={feature} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;