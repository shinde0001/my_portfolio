"use client";

import { motion } from "framer-motion";

/**
 * Detailed humanoid robot climbing an 18-step staircase.
 * Sequence (16s loop):
 *  0 - 10s : Climbs 18 steps (step by step)
 * 10 - 12s : Waves "Hi" (right arm)
 * 12 - 13s : Falls face-forward to sleep
 * 13 - 15s : Sleeps (2 seconds exactly)
 * 15 - 16s : Fades out and resets to bottom
 */
export function RobotAnimation() {
  const DURATION = 16;
  const TOTAL_STEPS = 18;
  
  // Define the bounds of the staircase
  const MAX_X_VW = 70;
  const MAX_Y_PX = 320;

  // Generate keyframes for the step-by-step climb
  const xFrames: string[] = [];
  const yFrames: string[] = [];
  const tFrames: number[] = [];

  const CLIMB_END = 10 / DURATION; // 0.625

  for (let i = 0; i <= TOTAL_STEPS; i++) {
    const x = `${i * (MAX_X_VW / TOTAL_STEPS)}vw`;
    const y = `${i * (-MAX_Y_PX / TOTAL_STEPS)}px`;
    
    const arriveTime = (i / TOTAL_STEPS) * CLIMB_END;
    const leaveTime = arriveTime + (0.8 * CLIMB_END / TOTAL_STEPS); // pause for most of the step
    
    xFrames.push(x, x);
    yFrames.push(y, y);
    tFrames.push(arriveTime, Math.min(leaveTime, CLIMB_END));
  }

  // After reaching top:
  // Wave Hi (10s - 12s) -> stay in place
  xFrames.push(`${MAX_X_VW}vw`, `${MAX_X_VW}vw`);
  yFrames.push(`-${MAX_Y_PX}px`, `-${MAX_Y_PX}px`);
  tFrames.push(12 / DURATION, 15 / DURATION); // stay until fade out at 15s

  // Fade/Snap back to start (15s - 16s)
  xFrames.push("0vw", "0vw");
  yFrames.push("0px", "0px");
  tFrames.push(15.5 / DURATION, 1.0);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* ── 18-STEP VISUAL STAIRCASE ── */}
      <div className="absolute bottom-0 left-0 w-full h-full opacity-30">
        {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
          <div
            key={i}
            className="absolute border-t-2 border-l-2 border-cyan-500/40"
            style={{
              left: `${i * (MAX_X_VW / TOTAL_STEPS)}vw`,
              bottom: `${i * (MAX_Y_PX / TOTAL_STEPS)}px`,
              width: `${MAX_X_VW / TOTAL_STEPS}vw`,
              height: `${MAX_Y_PX / TOTAL_STEPS}px`,
            }}
          />
        ))}
        {/* Landing pad at the top */}
        <div 
          className="absolute border-t-2 border-cyan-500/40"
          style={{
            left: `${MAX_X_VW}vw`,
            bottom: `${MAX_Y_PX}px`,
            width: '30vw',
            height: '2px',
          }}
        />
      </div>

      {/* ── HUMANOID ROBOT ── */}
      <motion.div
        className="absolute bottom-0 left-0 text-cyan-500/30 md:text-cyan-500/20"
        animate={{
          x: xFrames,
          y: yFrames,
          opacity: [0, 1, 1, 0, 0], // Fade out at 15s (15/16 = 0.9375)
          rotate: [0, 0, 0, 0, 0, 0] // Stays upright (no sleep)
        }}
        transition={{
          duration: DURATION,
          repeat: Infinity,
          ease: "linear",
          x: { duration: DURATION, repeat: Infinity, times: tFrames, ease: "linear" },
          y: { duration: DURATION, repeat: Infinity, times: tFrames, ease: "linear" },
          opacity: { duration: DURATION, repeat: Infinity, times: [0, 0.05, 15/16, 15.5/16, 1], ease: "linear" },
          rotate: { 
            duration: DURATION, 
            repeat: Infinity, 
            times: [0, 12/16, 13/16, 15/16, 15.5/16, 1], 
            ease: "easeInOut" 
          }
        }}
        // origin at bottom center-right so it falls forward naturally
        style={{ paddingBottom: '30px', marginLeft: '-20px', transformOrigin: '80% 100%' }} 
      >
        <svg viewBox="0 0 120 180" fill="currentColor" className="w-24 h-36 md:w-[150px] md:h-[200px]" style={{ overflow: "visible" }}>
          
          {/* ── UPPER BODY (Head, Torso, Arms) ── */}
          <motion.g
            animate={{
              y: [0, 0, -8, 4, -8, 4, -8, 4, -8, 4, -8, 4, -8, 4, 0, 0] // Bop up and down during dance
            }}
            transition={{
              duration: DURATION,
              repeat: Infinity,
              times: [0, 10/16, 10.4/16, 10.8/16, 11.2/16, 11.6/16, 12.0/16, 12.4/16, 12.8/16, 13.2/16, 13.6/16, 14.0/16, 14.4/16, 14.8/16, 15.0/16, 1],
              ease: "easeInOut"
            }}
          >
            {/* ── HEAD (Bops side to side during dance) ── */}
            <motion.g
              animate={{
                rotate: [0, 0, 15, -15, 15, -15, 15, -15, 15, -15, 15, -15, 15, -15, 0, 0]
              }}
              transition={{
                duration: DURATION,
                repeat: Infinity,
                times: [0, 10/16, 10.4/16, 10.8/16, 11.2/16, 11.6/16, 12.0/16, 12.4/16, 12.8/16, 13.2/16, 13.6/16, 14.0/16, 14.4/16, 14.8/16, 15.0/16, 1],
                ease: "easeInOut"
              }}
              style={{ transformOrigin: "60px 31px" }}
            >
              <rect x="38" y="12" width="44" height="38" rx="12" fillOpacity="0.9" />
              <rect x="42" y="18" width="36" height="26" rx="8" fillOpacity="0.3" />
              
              {/* Eyes — remain bright */}
              <g>
                <rect x="48" y="26" width="10" height="4" rx="2" fill="#ffffff" opacity="0.85" />
                <rect x="62" y="26" width="10" height="4" rx="2" fill="#ffffff" opacity="0.85" />
                <rect x="49" y="27" width="8" height="2" rx="1" fill="#67e8f9" opacity="0.6" />
                <rect x="63" y="27" width="8" height="2" rx="1" fill="#67e8f9" opacity="0.6" />
              </g>

              <line x1="52" y1="36" x2="68" y2="36" stroke="#ffffff" strokeWidth="0.8" opacity="0.3" />
              <line x1="54" y1="38" x2="66" y2="38" stroke="#ffffff" strokeWidth="0.6" opacity="0.2" />
              <path d="M60 12L60 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <circle cx="60" cy="3" r="2" fillOpacity="0.5" />
            </motion.g>

            {/* ── NECK ── */}
            <rect x="52" y="50" width="16" height="8" rx="3" fillOpacity="0.7" />
            <ellipse cx="60" cy="51" rx="10" ry="2" fillOpacity="0.2" />
            <ellipse cx="60" cy="56" rx="10" ry="2" fillOpacity="0.2" />

            {/* ── TORSO ── */}
            <rect x="32" y="58" width="56" height="62" rx="8" fillOpacity="0.85" />
            <rect x="38" y="64" width="44" height="24" rx="5" fillOpacity="0.15" />
            <circle cx="60" cy="76" r="8" fillOpacity="0.1" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <circle cx="60" cy="76" r="5" fillOpacity="0.15" stroke="currentColor" strokeWidth="0.3" fill="none" />
            
            {/* Arc Reactor — remains bright */}
            <circle cx="60" cy="76" r="2.5" fill="#67e8f9" opacity="0.4" />

            <line x1="40" y1="92" x2="80" y2="92" stroke="currentColor" strokeWidth="0.4" opacity="0.2" fill="none" />
            <line x1="42" y1="98" x2="78" y2="98" stroke="currentColor" strokeWidth="0.4" opacity="0.2" fill="none" />
            <line x1="44" y1="104" x2="76" y2="104" stroke="currentColor" strokeWidth="0.4" opacity="0.2" fill="none" />
            <rect x="33" y="70" width="3" height="12" rx="1" fillOpacity="0.2" />
            <rect x="84" y="70" width="3" height="12" rx="1" fillOpacity="0.2" />

            {/* ── LEFT ARM (Dancing) ── */}
            <motion.g
              animate={{
                rotate: [0, 0, 135, -30, 135, -30, 135, -30, 135, -30, 135, -30, 135, -30, 0, 0],
              }}
              transition={{
                duration: DURATION,
                repeat: Infinity,
                times: [0, 10/16, 10.4/16, 10.8/16, 11.2/16, 11.6/16, 12.0/16, 12.4/16, 12.8/16, 13.2/16, 13.6/16, 14.0/16, 14.4/16, 14.8/16, 15.0/16, 1],
                ease: "easeInOut"
              }}
              style={{ transformOrigin: "28px 66px" }}
            >
              <circle cx="28" cy="66" r="5" fillOpacity="0.3" />
              <circle cx="28" cy="66" r="2.5" fillOpacity="0.5" />
              <rect x="16" y="66" width="12" height="28" rx="4" fillOpacity="0.8" />
              <rect x="18" y="74" width="8" height="6" rx="2" fillOpacity="0.15" />
              <circle cx="22" cy="96" r="3.5" fillOpacity="0.3" />
              <rect x="16" y="96" width="12" height="22" rx="4" fillOpacity="0.75" />
              <rect x="14" y="118" width="14" height="8" rx="3" fillOpacity="0.6" />
            </motion.g>

            {/* ── RIGHT ARM (Dancing) ── */}
            <motion.g
              animate={{
                rotate: [0, 0, -30, -135, -30, -135, -30, -135, -30, -135, -30, -135, -30, -135, 0, 0],
              }}
              transition={{
                duration: DURATION,
                repeat: Infinity,
                times: [0, 10/16, 10.4/16, 10.8/16, 11.2/16, 11.6/16, 12.0/16, 12.4/16, 12.8/16, 13.2/16, 13.6/16, 14.0/16, 14.4/16, 14.8/16, 15.0/16, 1],
                ease: "easeInOut"
              }}
              style={{ transformOrigin: "92px 66px" }}
            >
              <circle cx="92" cy="66" r="5" fillOpacity="0.3" />
              <circle cx="92" cy="66" r="2.5" fillOpacity="0.5" />
              <rect x="92" y="66" width="12" height="28" rx="4" fillOpacity="0.8" />
              <rect x="94" y="74" width="8" height="6" rx="2" fillOpacity="0.15" />
              <circle cx="98" cy="96" r="3.5" fillOpacity="0.3" />
              <rect x="92" y="96" width="12" height="22" rx="4" fillOpacity="0.75" />
              <rect x="92" y="118" width="14" height="8" rx="3" fillOpacity="0.6" />
            </motion.g>
          </motion.g>

          {/* ── LEGS ── */}
          <g>
            {/* Left Leg */}
            <rect x="38" y="122" width="14" height="32" rx="5" fillOpacity="0.8" />
            <rect x="40" y="130" width="10" height="6" rx="2" fillOpacity="0.15" />
            <circle cx="45" cy="124" r="3" fillOpacity="0.2" />
            <rect x="35" y="154" width="18" height="8" rx="3" fillOpacity="0.9" />
            
            {/* Right Leg */}
            <rect x="68" y="122" width="14" height="32" rx="5" fillOpacity="0.8" />
            <rect x="70" y="130" width="10" height="6" rx="2" fillOpacity="0.15" />
            <circle cx="75" cy="124" r="3" fillOpacity="0.2" />
            <rect x="67" y="154" width="18" height="8" rx="3" fillOpacity="0.9" />
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
