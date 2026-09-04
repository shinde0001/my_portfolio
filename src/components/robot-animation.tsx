"use client";

import { motion } from "framer-motion";

/**
 * Single humanoid robot that paces left→right doing Hi and Namaste poses.
 * Sequence (20s loop):
 *  0-10%  : Idle at left
 * 10-20%  : Wave "Hi" (right arm)
 * 20-50%  : Walk left → right
 * 50-60%  : Namaste pose (both arms)
 * 60-90%  : Walk right → left
 * 90-100% : Return to idle
 */
export function RobotAnimation() {
  const DURATION = 20;

  return (
    <motion.div
      className="absolute bottom-0 left-0 text-cyan-500/25 md:text-cyan-500/12 pointer-events-none z-0"
      animate={{
        x: [
          "5vw",   // 0%   idle left
          "5vw",   // 20%  done waving, start walk
          "calc(100vw - 220px)", // 50%  arrive right
          "calc(100vw - 220px)", // 60%  done namaste
          "5vw",   // 90%  arrive left
          "5vw",   // 100% idle
        ],
      }}
      transition={{
        duration: DURATION,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.6, 0.9, 1],
      }}
    >
      <svg viewBox="0 0 100 150" fill="currentColor" className="w-28 h-40 md:w-[180px] md:h-[230px]">
        {/* Head */}
        <rect x="35" y="20" width="30" height="30" rx="8" />
        {/* Eyes */}
        <circle cx="43" cy="32" r="3" fill="#ffffff" opacity="0.8" />
        <circle cx="57" cy="32" r="3" fill="#ffffff" opacity="0.8" />

        {/* Body */}
        <rect x="30" y="55" width="40" height="55" rx="6" />

        {/* Legs */}
        <rect x="36" y="115" width="10" height="35" rx="4" />
        <rect x="54" y="115" width="10" height="35" rx="4" />

        {/* Left Arm — joins for Namaste at right side */}
        <motion.g
          animate={{
            rotate: [
              0,    // 0%   idle
              0,    // 20%  still idle (right arm waving)
              0,    // 48%  walking
              60,   // 52%  namaste
              60,   // 58%  hold
              0,    // 62%  relax
              0,    // 100%
            ],
          }}
          transition={{
            duration: DURATION,
            repeat: Infinity,
            times: [0, 0.2, 0.48, 0.52, 0.58, 0.62, 1],
          }}
          style={{ transformOrigin: "19px 65px" }}
        >
          <rect x="14" y="60" width="10" height="40" rx="4" />
        </motion.g>

        {/* Right Arm — waves Hi at left, joins Namaste at right */}
        <motion.g
          animate={{
            rotate: [
              0,     // 0%   idle
              -130,  // 10%  wave up
              -90,   // 12%  wave down
              -130,  // 14%  wave up
              -90,   // 16%  wave down
              -130,  // 18%  wave up
              0,     // 20%  relax, start walk
              0,     // 48%  walking
              -60,   // 52%  namaste
              -60,   // 58%  hold
              0,     // 62%  relax
              0,     // 100%
            ],
          }}
          transition={{
            duration: DURATION,
            repeat: Infinity,
            times: [0, 0.10, 0.12, 0.14, 0.16, 0.18, 0.20, 0.48, 0.52, 0.58, 0.62, 1],
          }}
          style={{ transformOrigin: "81px 65px" }}
        >
          <rect x="76" y="60" width="10" height="40" rx="4" />
        </motion.g>
      </svg>
    </motion.div>
  );
}
