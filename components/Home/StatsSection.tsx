"use client";

import React, { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring, motion } from 'framer-motion';


const CountUp = ({ value }: { value: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  
  const motionValue = useMotionValue(0);
  
  const springValue = useSpring(motionValue, {
    damping: 45,   
    stiffness: 80,
    restDelta: 0.001
  });

  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    } else {
      motionValue.set(0);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Intl.NumberFormat("en-US").format(Math.floor(latest)));
    });
    return () => unsubscribe();
  }, [springValue]);

  return <span ref={ref} className="tabular-nums">{displayValue}</span>;
};

const StatsSection = () => {
  const stats = [
    { label: "Dive Schools", value: 10000, suffix: "+" },
    { label: "Dive Spots", value: 17000, suffix: "+" },
    { label: "Liveaboards", value: 5000, suffix: "+" },
    { label: "Countries", value: 150, suffix: "+" },
  ];

  return (
    <section className="w-full bg-white py-24 px-4 border-t border-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1, 
                ease: [0.21, 0.45, 0.32, 0.9] 
              }}
              className="flex flex-col items-center justify-center text-center space-y-3"
            >
             
              <div className="text-[#2563EB] text-4xl md:text-5xl font-medium tracking-tight flex items-baseline">
                <CountUp value={stat.value} />
                <span className="ml-0.5 opacity-90">{stat.suffix}</span>
              </div>
              
              <p className="text-gray-500 text-xs md:text-sm font-medium uppercase tracking-widest opacity-80">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;