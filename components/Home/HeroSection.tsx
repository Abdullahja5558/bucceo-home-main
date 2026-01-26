'use client';
import React, { useState } from 'react';
import { Ship, Compass, MapPin, Calendar, Search, ChevronDown, Loader2 } from 'lucide-react';
import { motion, Variants, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const stats = [
    { icon: <Ship size={18} />, text: "5,000+ Liveaboards" },
    { icon: <Ship size={18} />, text: "10,000+ Dive Schools" },
    { icon: <Compass size={18} />, text: "17,000+ Dive Spots" },
  ];

  const handleSearch = () => {
    if (!location && !date) return;
    
    setIsSearching(true);
    
    // Clear inputs immediately
    setLocation('');
    setDate('');

    // Simulate search delay for visual feedback
    setTimeout(() => {
      setIsSearching(false);
    }, 2000);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const inputBaseStyles = `
    w-full bg-slate-50/50 border border-slate-200 rounded-2xl py-5 pl-14 pr-6 
    text-slate-800 font-semibold outline-none transition-all duration-300 ease-out 
    placeholder:text-slate-400 placeholder:font-medium
    hover:border-slate-300 hover:bg-slate-50/80
    focus:bg-white focus:border-[#0081C9]/60 focus:ring-[6px] focus:ring-[#0081C9]/5 
    shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]
  `;

  return (
    <section className="relative min-h-[95vh] w-full flex flex-col items-center justify-center px-4 overflow-hidden bg-slate-900">
      
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute inset-[-10%] w-[120%] h-[120%] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero.png')" }}
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -20, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/20 to-slate-900/40" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center"
      >
        <motion.p
          variants={fadeUpVariants}
          className="text-cyan-400 text-xs md:text-sm font-bold mb-4 tracking-[0.3em] uppercase pt-3"
        >
          We Simplify Diving
        </motion.p>

        <motion.h1
          variants={fadeUpVariants}
          className="text-white text-sm md:text-sm font-bold leading-[1.1] mb-8 max-w-4xl tracking-tight drop-shadow-2xl"
        >
          Discover and book from 10,000+ dive schools and explore 17,000+ dive spots worldwide
        </motion.h1>

        <motion.div
          variants={fadeUpVariants}
          className="hidden md:flex items-center gap-8 text-white/90 text-[14px] font-medium mb-12 backdrop-blur-md bg-white/10 py-3 px-8 rounded-full border border-white/20 shadow-2xl"
        >
          {stats.map((stat, idx) => (
            <React.Fragment key={idx}>
              <div className="flex items-center gap-2.5 group cursor-default">
                <span className="text-cyan-400 group-hover:rotate-12 transition-transform duration-500">
                  {stat.icon}
                </span>
                <span className="tracking-wide">{stat.text}</span>
              </div>
              {idx < stats.length - 1 && <span className="text-white/20">|</span>}
            </React.Fragment>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUpVariants}
          className="bg-white/95 backdrop-blur-2xl rounded-[40px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)] p-8 md:p-12 w-full max-w-4xl text-left border border-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            <div className="space-y-4">
              <label className="text-slate-500 text-[11px] uppercase tracking-[0.2em] font-bold ml-1">Location</label>
              <div className="relative group">
                <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0081C9] transition-colors duration-300 z-10" size={20} />
                <input
                  type="text"
                  placeholder="City, country, or dive spot"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className={inputBaseStyles}
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-slate-500 text-[11px] uppercase tracking-[0.2em] font-bold ml-1">When</label>
              <div className="relative group">
                <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0081C9] transition-colors duration-300 z-10" size={20} />
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className={`${inputBaseStyles} cursor-pointer`}
                />
              </div>
            </div>
          </div>

          <motion.button
            onClick={handleSearch}
            disabled={isSearching}
            whileHover={{ scale: 1.02, backgroundColor: "#0072b3" }}
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden flex items-center justify-center gap-3 bg-[#0081C9] text-white w-full md:w-70 h-17 rounded-2xl font-black text-lg shadow-xl shadow-blue-500/20 cursor-pointer disabled:cursor-wait"
          >
            <AnimatePresence mode="wait">
              {!isSearching ? (
                <motion.div 
                  key="idle"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-3"
                >
                  <Search size={20} strokeWidth={3} />
                  <span className="tracking-tight">Search Dive Shops</span>
                </motion.div>
              ) : (
                <motion.div 
                  key="loading"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-3"
                >
                  <Loader2 size={24} className="animate-spin" />
                  <span className="tracking-tight">Searching...</span>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Glossy overlay effect kept exactly as original */}
            <motion.div 
              animate={{ x: ['-100%', '200%'] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", repeatDelay: 1 }}
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent pointer-events-none" 
            />
          </motion.button>
        </motion.div>

        <motion.div
          variants={fadeUpVariants}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-white text-[15px] font-bold mt-12"
        >
          {stats.map((stat, idx) => (
            <React.Fragment key={idx}>
              <motion.div whileHover={{ y: -5 }} className="flex items-center gap-3 group cursor-default">
                <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md text-cyan-400 border border-white/10 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                  {stat.icon}
                </div>
                <span className="tracking-tight drop-shadow-md">{stat.text}</span>
              </motion.div>
              {idx < stats.length - 1 && <span className="hidden md:block text-white/20 font-extralight">/</span>}
            </React.Fragment>
          ))}
        </motion.div>

        <motion.div variants={fadeUpVariants} className="mt-16 group cursor-pointer">
          <span className="text-white/40 font-bold text-[11px] uppercase tracking-[0.3em] block mb-3">Discover More</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
            <ChevronDown className="mx-auto text-white/30 group-hover:text-cyan-400" size={32} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;