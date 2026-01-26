'use client';

import React from 'react';
import { Wrench, MapPin, Clock, ChevronRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

/**
 * Data structures for the Service Center information
 */
interface ServiceCenter {
  name: string;
  location: string;
  hours: string;
  services: string[];
}

const serviceCenters: ServiceCenter[] = [
  {
    name: "DiveTech Service Center",
    location: "Barcelona, Spain",
    hours: "Mon-Sat 9AM-6PM",
    services: ["Regulator Service", "BCD Repair", "Computer Calibration"],
  },
  {
    name: "Aqua Repair & Maintenance",
    location: "Singapore",
    hours: "Mon-Fri 10AM-7PM",
    services: ["Full Equipment Service", "Annual Inspections", "Emergency Repairs"],
  },
  {
    name: "Ocean Tech Services",
    location: "San Diego, USA",
    hours: "Tue-Sun 8AM-5PM",
    services: ["Cylinder Testing", "Regulator Overhaul", "Wetsuit Repair"],
  },
  {
    name: "Reef Service Station",
    location: "Cairns, Australia",
    hours: "Daily 7AM-6PM",
    services: ["Equipment Servicing", "Gear Rental", "Pre-Dive Checks"],
  },
];

/**
 * Animation Variants for a premium, peaceful entrance
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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // Smooth cubic-bezier
    },
  },
};

const iconVariants: Variants = {
  hidden: { scale: 0.8, rotate: -10 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

/**
 * ServiceCard Component - Extracted for performance and readability
 */
const ServiceCard = ({ center }: { center: ServiceCenter }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -8 }}
    className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,174,239,0.1)] transition-all duration-300 group cursor-pointer"
  >
    <div className="flex justify-between items-start mb-6">
      <div>
        <h3 className="text-[#1B365D] text-xl md:text-2xl font-bold mb-3 group-hover:text-[#00AEEF] transition-colors">
          {center.name}
        </h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
            <MapPin size={16} className="text-[#00AEEF]" />
            {center.location}
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
            <Clock size={16} className="text-[#00AEEF]" />
            {center.hours}
          </div>
        </div>
      </div>
      <motion.div 
        whileHover={{ x: 3 }}
        className="bg-gray-50 p-2 rounded-full text-gray-300 group-hover:bg-[#00AEEF]/10 group-hover:text-[#00AEEF] transition-all"
      >
        <ChevronRight size={20} />
      </motion.div>
    </div>

    <div className="pt-6 border-t border-gray-50">
      <p className="text-[#1B365D] text-xs font-bold uppercase tracking-wider mb-4 opacity-60">
        Services Offered:
      </p>
      <div className="flex flex-wrap gap-2">
        {center.services.map((service, sIdx) => (
          <motion.span
            key={sIdx}
            whileHover={{ scale: 1.05 }}
            className="bg-[#F0F9FF] text-[#00AEEF] text-[11px] font-bold px-3 py-1.5 rounded-lg border border-[#E0F2FE] transition-colors"
          >
            {service}
          </motion.span>
        ))}
      </div>
    </div>
  </motion.div>
);

const ServiceRepair = () => {
  return (
    <section className="w-full bg-[#F8FBFF] py-20 px-4 md:px-8 lg:px-16 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={itemVariants}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <motion.div 
              variants={iconVariants}
              className="bg-white p-3 rounded-xl shadow-sm"
            >
              <Wrench className="text-[#00AEEF]" size={32} strokeWidth={2.5} />
            </motion.div>
          </div>
          <h2 className="text-[#1B365D] text-3xl md:text-4xl font-bold mb-4">
            Equipment Service & Repair
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            Find local service centers for equipment maintenance and repairs
          </p>
        </motion.div>

        {/* Centers Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {serviceCenters.map((center, index) => (
            <ServiceCard key={index} center={center} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <motion.button 
            whileHover={{ 
              scale: 1.02, 
              backgroundColor: "#00AEEF", 
              color: "#ffffff",
              borderColor: "#00AEEF"
            }}
            whileTap={{ scale: 0.97 }}
            className="bg-white border-2 border-[#00AEEF]/20 text-[#00AEEF] px-10 py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-sm"
          >
            Find Service Centers Near You
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceRepair;