"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function ScrollCar() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Spring to make the car drive smoothly without jitter
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  // Map the smooth progress from 0 to 1 directly to 0% to 100%
  const yOffset = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  // Fix hydration issues by only rendering after mount
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="fixed top-0 right-0 bottom-0 w-5 md:w-7 z-[9999] pointer-events-none">
      {/* Dashed track representing the road */}
      <div className="absolute inset-y-0 right-0 w-full border-l border-r border-dashed border-cyan-500/20 bg-background/20 backdrop-blur-sm" />
      
      {/* Container constrained so 100% doesn't push the car off screen */}
      <div className="absolute top-0 right-0 w-full bottom-[48px] md:bottom-[56px]">
        {/* The AGV Car */}
        <motion.div 
          className="absolute right-0 w-full flex justify-center drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]"
          style={{ top: yOffset }}
        >
          <svg viewBox="0 0 14 28" className="w-[20px] h-[40px] md:w-[28px] md:h-[56px] text-cyan-500" fill="currentColor">
            {/* Base Chassis */}
            <rect x="3" y="4" width="8" height="18" rx="2" fill="currentColor" />
            
            {/* Wheels */}
            <rect x="1" y="6" width="2" height="5" rx="1" fill="#111" />
            <rect x="11" y="6" width="2" height="5" rx="1" fill="#111" />
            <rect x="1" y="16" width="2" height="5" rx="1" fill="#111" />
            <rect x="11" y="16" width="2" height="5" rx="1" fill="#111" />
            
            {/* Windows / Sensors */}
            <rect x="4" y="7" width="6" height="2" rx="0.5" fill="#fff" opacity="0.9" />
            <rect x="4" y="15" width="6" height="4" rx="1" fill="#fff" opacity="0.9" />
            
            {/* Taillights */}
            <rect x="4.5" y="4" width="1.5" height="1" fill="#ef4444" />
            <rect x="8" y="4" width="1.5" height="1" fill="#ef4444" />
            
            {/* Headlights (pointing down) */}
            <rect x="4.5" y="21" width="1.5" height="1.5" fill="#fef08a" />
            <rect x="8" y="21" width="1.5" height="1.5" fill="#fef08a" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
