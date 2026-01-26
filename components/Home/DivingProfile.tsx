"use client";

import React from 'react';
import { 
  BookOpen, 
  Users, 
  CheckCircle, 
  Settings, 
  Shield, 
  FileText, 
  Award, 
  Stethoscope 
} from 'lucide-react';
import { motion } from 'framer-motion';

const DivingProfile = () => {
  const topFeatures = [
    {
      title: "Book, Log & Track Your Dives",
      description: "Manage your entire diving journey in one place. Book dive trips, log your dives, and compare experiences with your dive buddies.",
      icon: <BookOpen className="text-blue-600" size={24} />,
      bgColor: "bg-blue-50"
    },
    {
      title: "Expert Diver Support",
      description: "Get help from experienced divers and professionals. Our community is here to answer your questions and guide your journey.",
      icon: <Users className="text-blue-500" size={24} />,
      bgColor: "bg-blue-50"
    }
  ];

  const profileFeatures = [
    { title: "Log & Compare Dives", desc: "Track your dives and compare with buddies", icon: <BookOpen size={20} /> },
    { title: "Equipment Preferences", desc: "Save your gear preferences and view stores", icon: <Settings size={20} /> },
    { title: "Insurance Management", desc: "Keep your dive insurance up to date", icon: <Shield size={20} /> },
    { title: "Add Licenses", desc: "Store all your certifications digitally", icon: <Award size={20} /> },
    { title: "Find Diving Doctors", desc: "Book appointments with diving specialists", icon: <Stethoscope size={20} /> },
    { title: "All Your Documents", desc: "Medical forms, waivers, and records", icon: <FileText size={20} /> },
  ];

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header 1 */}
        <div className="text-center mb-16">
          <p className="text-black font-bold text-lg mb-3">Everything You Need in One Place</p>
          <h2 className="text-[#1B365D] text-sm md:text-sm font-medium max-w-2xl mx-auto leading-snug">
            Create your diving profile and access all the tools you need to plan, track, and enhance your diving experience
          </h2>
        </div>

        {/* Top Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {topFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-5 transition-all"
            >
              <div className={`${feature.bgColor} p-4 rounded-xl shrink-0`}>
                {feature.icon}
              </div>
              <div>
                <h3 className="text-[#1B365D] font-bold text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Blue Profile Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#1E50E1] rounded-4xl p-8 md:p-16 text-white text-center relative overflow-hidden"
        >
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          </div>

          <div className="relative z-10">
            <p className="text-blue-100 font-medium text-sm mb-4">Your Complete Diving Profile</p>
            <h2 className="text-2xl md:text-3xl font-medium mb-12">
              Create your profile and unlock powerful features designed for serious divers
            </h2>

            {/* Grid of Profile Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-8 text-left mb-12">
              {profileFeatures.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="bg-white/20 p-2.5 rounded-lg group-hover:bg-white/30 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[15px] mb-1">{item.title}</h4>
                    <p className="text-blue-100 text-[13px] leading-tight">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-[#1E50E1] px-10 py-4 rounded-xl font-bold text-base transition-all shadow-xl"
            >
              Create Your Profile
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default DivingProfile;