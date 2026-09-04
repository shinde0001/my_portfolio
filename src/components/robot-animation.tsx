"use client";

import { motion } from "framer-motion";

/**
 * Detailed humanoid robot that paces left→right doing Hi and Namaste poses.
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
      <svg viewBox="0 0 120 180" fill="currentColor" className="w-28 h-40 md:w-[180px] md:h-[230px]">
        {/* ── HEAD ── */}
        {/* Outer Shell */}
        <rect x="38" y="12" width="44" height="38" rx="12" fillOpacity="0.9" />
        {/* Inner Face Plate */}
        <rect x="42" y="18" width="36" height="26" rx="8" fillOpacity="0.3" />
        {/* Eyes — glowing visor style */}
        <rect x="48" y="26" width="10" height="4" rx="2" fill="#ffffff" opacity="0.85" />
        <rect x="62" y="26" width="10" height="4" rx="2" fill="#ffffff" opacity="0.85" />
        {/* Eye glow */}
        <rect x="49" y="27" width="8" height="2" rx="1" fill="#67e8f9" opacity="0.6" />
        <rect x="63" y="27" width="8" height="2" rx="1" fill="#67e8f9" opacity="0.6" />
        {/* Mouth/Speaker Grille */}
        <line x1="52" y1="36" x2="68" y2="36" stroke="#ffffff" strokeWidth="0.8" opacity="0.3" />
        <line x1="54" y1="38" x2="66" y2="38" stroke="#ffffff" strokeWidth="0.6" opacity="0.2" />
        {/* Antenna */}
        <path d="M60 12L60 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="60" cy="3" r="2" fillOpacity="0.5" />

        {/* ── NECK ── */}
        <rect x="52" y="50" width="16" height="8" rx="3" fillOpacity="0.7" />
        {/* Neck joint rings */}
        <ellipse cx="60" cy="51" rx="10" ry="2" fillOpacity="0.2" />
        <ellipse cx="60" cy="56" rx="10" ry="2" fillOpacity="0.2" />

        {/* ── TORSO ── */}
        {/* Main chassis */}
        <rect x="32" y="58" width="56" height="62" rx="8" fillOpacity="0.85" />
        {/* Chest plate detail */}
        <rect x="38" y="64" width="44" height="24" rx="5" fillOpacity="0.15" />
        {/* Arc reactor / power core */}
        <circle cx="60" cy="76" r="8" fillOpacity="0.1" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <circle cx="60" cy="76" r="5" fillOpacity="0.15" stroke="currentColor" strokeWidth="0.3" fill="none" />
        <circle cx="60" cy="76" r="2.5" fill="#67e8f9" opacity="0.4" />
        {/* Abdominal segments */}
        <line x1="40" y1="92" x2="80" y2="92" stroke="currentColor" strokeWidth="0.4" opacity="0.2" fill="none" />
        <line x1="42" y1="98" x2="78" y2="98" stroke="currentColor" strokeWidth="0.4" opacity="0.2" fill="none" />
        <line x1="44" y1="104" x2="76" y2="104" stroke="currentColor" strokeWidth="0.4" opacity="0.2" fill="none" />
        {/* Side vents */}
        <rect x="33" y="70" width="3" height="12" rx="1" fillOpacity="0.2" />
        <rect x="84" y="70" width="3" height="12" rx="1" fillOpacity="0.2" />

        {/* ── LEGS ── */}
        {/* Left Leg */}
        <rect x="38" y="122" width="14" height="32" rx="5" fillOpacity="0.8" />
        <rect x="40" y="130" width="10" height="6" rx="2" fillOpacity="0.15" />
        <circle cx="45" cy="124" r="3" fillOpacity="0.2" />
        {/* Left Foot */}
        <rect x="35" y="154" width="18" height="8" rx="3" fillOpacity="0.9" />
        <rect x="35" y="158" width="18" height="4" rx="2" fillOpacity="0.15" />

        {/* Right Leg */}
        <rect x="68" y="122" width="14" height="32" rx="5" fillOpacity="0.8" />
        <rect x="70" y="130" width="10" height="6" rx="2" fillOpacity="0.15" />
        <circle cx="75" cy="124" r="3" fillOpacity="0.2" />
        {/* Right Foot */}
        <rect x="67" y="154" width="18" height="8" rx="3" fillOpacity="0.9" />
        <rect x="67" y="158" width="18" height="4" rx="2" fillOpacity="0.15" />

        {/* ── LEFT ARM (Namaste at right side) ── */}
        <motion.g
          animate={{
            rotate: [0, 0, 0, 60, 60, 0, 0],
          }}
          transition={{
            duration: DURATION,
            repeat: Infinity,
            times: [0, 0.2, 0.48, 0.52, 0.58, 0.62, 1],
          }}
          style={{ transformOrigin: "28px 66px" }}
        >
          {/* Shoulder Joint */}
          <circle cx="28" cy="66" r="5" fillOpacity="0.3" />
          <circle cx="28" cy="66" r="2.5" fillOpacity="0.5" />
          {/* Upper Arm */}
          <rect x="16" y="66" width="12" height="28" rx="4" fillOpacity="0.8" />
          <rect x="18" y="74" width="8" height="6" rx="2" fillOpacity="0.15" />
          {/* Elbow Joint */}
          <circle cx="22" cy="96" r="3.5" fillOpacity="0.3" />
          {/* Forearm */}
          <rect x="16" y="96" width="12" height="22" rx="4" fillOpacity="0.75" />
          {/* Hand */}
          <rect x="14" y="118" width="14" height="8" rx="3" fillOpacity="0.6" />
          <rect x="15" y="126" width="4" height="4" rx="1.5" fillOpacity="0.4" />
          <rect x="20" y="126" width="4" height="5" rx="1.5" fillOpacity="0.4" />
          <rect x="25" y="126" width="3" height="3" rx="1" fillOpacity="0.3" />
        </motion.g>

        {/* ── RIGHT ARM (Waves Hi at left, Namaste at right) ── */}
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
          style={{ transformOrigin: "92px 66px" }}
        >
          {/* Shoulder Joint */}
          <circle cx="92" cy="66" r="5" fillOpacity="0.3" />
          <circle cx="92" cy="66" r="2.5" fillOpacity="0.5" />
          {/* Upper Arm */}
          <rect x="92" y="66" width="12" height="28" rx="4" fillOpacity="0.8" />
          <rect x="94" y="74" width="8" height="6" rx="2" fillOpacity="0.15" />
          {/* Elbow Joint */}
          <circle cx="98" cy="96" r="3.5" fillOpacity="0.3" />
          {/* Forearm */}
          <rect x="92" y="96" width="12" height="22" rx="4" fillOpacity="0.75" />
          {/* Hand */}
          <rect x="92" y="118" width="14" height="8" rx="3" fillOpacity="0.6" />
          <rect x="93" y="126" width="3" height="3" rx="1" fillOpacity="0.3" />
          <rect x="97" y="126" width="4" height="5" rx="1.5" fillOpacity="0.4" />
          <rect x="102" y="126" width="4" height="4" rx="1.5" fillOpacity="0.4" />
        </motion.g>
      </svg>
    </motion.div>
  );
}
