'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Menu, X, ShieldCheck, Award } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [currency, setCurrency] = useState('USD');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const languages = ['EN', 'FR', 'DE', 'ES'];
  const currencies = ['USD', 'EUR', 'GBP', 'AUD'];

  const dropdownVariants: Variants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } },
    exit: { opacity: 0, y: 5, scale: 0.95, transition: { duration: 0.15 } }
  };

  return (
    <nav className="w-full font-sans antialiased">
      
      <div className="bg-[#1B365D] text-white px-4 py-3 md:px-8 lg:px-12 flex items-center justify-between relative z-50">
        <Link href="/" className="relative w-40 h-10 transition-transform hover:scale-[1.02]">
          <Image src="/logo.png" alt="BUCCEO" fill className="object-contain object-left" priority />
        </Link>

     
        <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-gray-200">
          {['Dive Shops', 'Liveaboards', 'Gear shops', 'Insurance'].map((item) => (
            <Link key={item} href="#" className="hover:text-white transition-colors duration-300 relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00AEEF] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        
        <div className="hidden lg:flex items-center gap-6">
          <Link href="#" className="text-[15px] font-medium text-gray-200 hover:text-white transition-colors">Special Offers</Link>

          {[ { id: 'lang', val: language, list: languages, set: setLanguage }, 
             { id: 'curr', val: currency, list: currencies, set: setCurrency } 
          ].map((drop) => (
            <div key={drop.id} className="relative" onMouseEnter={() => setActiveDropdown(drop.id)} onMouseLeave={() => setActiveDropdown(null)}>
              <button className="flex items-center gap-1 text-[15px] font-medium hover:text-white transition-colors py-2 cursor-pointer">
                {drop.val} <motion.div animate={{ rotate: activeDropdown === drop.id ? 180 : 0 }}><ChevronDown size={14} /></motion.div>
              </button>
              <AnimatePresence>
                {activeDropdown === drop.id && (
                  <motion.div variants={dropdownVariants} initial="hidden" animate="visible" exit="exit" className="absolute top-full right-0 bg-white text-gray-800 rounded-xl shadow-2xl py-2 w-28 border border-gray-100 overflow-hidden">
                    {drop.list.map((item) => (
                      <button key={item} onClick={() => { drop.set(item); setActiveDropdown(null); }} className="w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-[#0081C9] transition-colors text-sm font-medium cursor-pointer">
                        {item}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <Link href="#" className="text-[15px] font-medium text-gray-200 hover:text-white">Sign In</Link>

          <motion.button 
            animate={{ backgroundColor: "#0081C9" }}
            whileHover={{ 
              backgroundColor: "#00AEEF", 
              scale: 1.05,
              y: -2,
              boxShadow: "0 10px 25px -5px rgba(0, 174, 239, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="text-white px-7 py-2.5 rounded-lg font-bold text-[15px] shadow-md cursor-pointer"
          >
            Get Started
          </motion.button>
        </div>

        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={28} /> : <Menu size={28} />}</button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="lg:hidden bg-[#1B365D] border-t border-white/10 px-6 py-8 flex flex-col gap-6 overflow-hidden">
            {['Dive Shops', 'Liveaboards', 'Gear shops', 'Insurance'].map((link) => (
              <Link key={link} href="#" className="text-white font-medium">{link}</Link>
            ))}
            <button className="bg-[#0081C9] text-white py-3.5 rounded-xl font-bold cursor-pointer">Get Started</button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-[#F8FAFC] py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-2 md:gap-10">
          <span className="text-gray-400 text-[11px] font-bold uppercase tracking-widest hidden sm:block">Trusted by leading dive organization:</span>
          <div className="flex gap-2">
            <motion.div whileHover={{ y: -2 }} className="flex items-center gap-2 bg-white px-5 py-2 rounded-xl shadow-sm border border-gray-100">
              <ShieldCheck className="text-blue-600" size={18} />
              <span className="font-black text-[#1B365D] text-sm">PADI</span>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} className="flex items-center gap-2 bg-white px-5 py-2 rounded-xl shadow-sm border border-gray-100">
              <Award className="text-blue-400" size={18} />
              <span className="font-black text-[#1B365D] text-sm">SSI</span>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;