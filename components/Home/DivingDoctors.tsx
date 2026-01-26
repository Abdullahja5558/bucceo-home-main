'use client';

import React from 'react';
import { Stethoscope, MapPin, Phone } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

/**
 * Interface for Doctor data structure
 */
interface Doctor {
  name: string;
  location: string;
  specialties: string[];
  phone: string;
}

const doctors: Doctor[] = [
  {
    name: "Dr. Maria Santos",
    location: "Maldives",
    specialties: ["Hyperbaric Medicine", "Dive Fitness Assessments"],
    phone: "+960-123-4567",
  },
  {
    name: "Dr. James Wilson",
    location: "Sharm El Sheikh, Egypt",
    specialties: ["Decompression Illness", "Diving Medical Exams"],
    phone: "+20-123-456-789",
  },
  {
    name: "Dr. Lin Chen",
    location: "Koh Tao, Thailand",
    specialties: ["Marine Injuries", "Fitness to Dive Certificates"],
    phone: "+66-123-456-78",
  },
  {
    name: "Dr. Carlos Mendez",
    location: "Cozumel, Mexico",
    specialties: ["Dive Emergency Care", "Medical Clearances"],
    phone: "+52-123-456-7890",
  },
];

/**
 * Animation Variants
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

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

/**
 * Reusable DoctorCard Component for performance and cleanliness
 */
const DoctorCard = ({ doc }: { doc: Doctor }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ 
      y: -10, 
      boxShadow: "0 25px 50px -12px rgba(0, 174, 239, 0.15)",
      borderColor: "rgba(0, 174, 239, 0.3)"
    }}
    className="bg-[#F0F9FF] rounded-3xl p-8 flex flex-col items-center text-center border border-transparent transition-all duration-300 h-full"
  >
    {/* Profile Icon Container */}
    <motion.div 
      whileHover={{ rotate: 15, scale: 1.1 }}
      className="bg-[#00AEEF] p-4 rounded-full text-white mb-6 shadow-md shadow-blue-200 transition-transform"
    >
      <Stethoscope size={28} />
    </motion.div>

    {/* Doctor Info */}
    <h3 className="text-[#1B365D] text-xl font-bold mb-2">
      {doc.name}
    </h3>
    
    <div className="flex items-center gap-1.5 text-gray-400 text-sm font-medium mb-6">
      <MapPin size={14} className="text-[#00AEEF]" />
      {doc.location}
    </div>

    {/* Specialties Section */}
    <div className="w-full pt-6 border-t border-gray-100 grow">
      <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-3">
        Specialties:
      </p>
      <ul className="space-y-2 mb-8">
        {doc.specialties.map((spec, sIdx) => (
          <li key={sIdx} className="text-[#1B365D] text-sm font-medium flex items-center justify-center gap-1">
            <span className="text-[#00AEEF]">•</span> {spec}
          </li>
        ))}
      </ul>
    </div>

    {/* Phone Action */}
    <motion.a 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href={`tel:${doc.phone}`}
      className="flex items-center gap-2 text-[#00AEEF] font-bold text-sm hover:underline"
    >
      <Phone size={16} />
      {doc.phone}
    </motion.a>
  </motion.div>
);

const DivingDoctors = () => {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-8 lg:px-16 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={headerVariants}
          className="text-center mb-16 space-y-4"
        >
          <div className="flex justify-center items-center gap-2 text-[#00AEEF]">
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <Stethoscope size={32} strokeWidth={2.5} />
            </motion.div>
            <h2 className="text-[#1B365D] text-3xl md:text-4xl font-bold">
              Diving Doctors
            </h2>
          </div>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto font-medium">
            Certified diving medical professionals for health assessments and emergency care
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {doctors.map((doc, index) => (
            <DoctorCard key={index} doc={doc} />
          ))}
        </motion.div>

        {/* Global CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <motion.button 
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "#0096D6",
              boxShadow: "0 20px 25px -5px rgba(0, 174, 239, 0.4)" 
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#00AEEF] text-white px-10 py-4 rounded-xl font-bold text-base shadow-lg shadow-blue-100 transition-all cursor-pointer"
          >
            Find Diving Doctors Worldwide
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default DivingDoctors;