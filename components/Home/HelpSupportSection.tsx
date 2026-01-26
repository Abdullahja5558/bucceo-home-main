"use client";

import React from 'react';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

/**
 * Animation Variants for high-quality, premium feel
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

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // Premium cubic-bezier
    },
  },
};

const iconVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

const HelpSupportSection = () => {
  const supportOptions = [
    {
      title: "Live Chat",
      description: "Chat with our support team",
      actionText: "Start Chat →",
      link: "#",
      icon: <MessageCircle size={28} className="text-[#00AEEF]" />,
    },
    {
      title: "Call Us",
      description: "Mon-Fri, 9AM-6PM CET",
      actionText: "+1 (234) 567-890",
      link: "tel:+1234567890",
      icon: <Phone size={28} className="text-[#00AEEF]" />,
    },
    {
      title: "Email Support",
      description: "Response within 24 hours",
      actionText: "support@bucceo.com",
      link: "mailto:support@bucceo.com",
      icon: <Mail size={28} className="text-[#00AEEF]" />,
    },
  ];

  return (
    <section className="w-full bg-white py-24 px-4 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Text */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-[#1B365D] text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Help & Support
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
            We're here to help you plan the perfect diving experience
          </p>
        </motion.div>

        {/* Support Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {supportOptions.map((option, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ 
                y: -12, 
                boxShadow: "0 30px 60px -25px rgba(0, 174, 239, 0.2)",
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="bg-[#F0F9FF] rounded-[2.5rem] p-10 flex flex-col items-center text-center transition-all duration-300 border border-transparent hover:border-[#00AEEF]/20 group"
            >
              {/* Icon Container */}
              <motion.div 
                variants={iconVariants}
                className="bg-white p-5 rounded-full shadow-sm mb-6 group-hover:scale-110 group-hover:shadow-md transition-transform duration-500"
              >
                {option.icon}
              </motion.div>

              {/* Content */}
              <h3 className="text-[#1B365D] text-xl font-bold mb-2">
                {option.title}
              </h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                {option.description}
              </p>

              {/* Action Link */}
              <motion.a
                href={option.link}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-[#00AEEF] font-bold text-sm transition-all relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#00AEEF] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {option.actionText}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HelpSupportSection;