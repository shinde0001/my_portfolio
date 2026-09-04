"use client";

import { Calendar, Award, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedSection } from "@/components/motion";
import { EDUCATION } from "@/lib/constants";

const RoboticsIcon = () => (
  <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shrink-0 rounded-2xl bg-cyan-500/10 text-cyan-500 overflow-hidden">
    <svg viewBox="0 0 100 100" className="w-full h-full text-current p-1" fill="none">
      
      {/* Tables at Bottom */}
      <rect x="0" y="80" width="40" height="20" fill="currentColor" opacity="0.2" />
      <rect x="60" y="80" width="40" height="20" fill="currentColor" opacity="0.2" />
      
      {/* Flared KUKA Base */}
      <path d="M 38 80 L 62 80 L 56 60 L 44 60 Z" fill="currentColor" opacity="0.9" />
      <rect x="42" y="76" width="16" height="4" fill="#000" opacity="0.25" />
      
      {/* Pick & Place Cubes */}
      <motion.rect x="80" y="72" width="8" height="8" fill="currentColor" opacity="1" rx="1"
        animate={{ opacity: [1, 1, 0, 0, 0, 0, 0, 1] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.15, 0.25, 0.45, 0.55, 0.65, 0.85, 1] }}
      />
      <motion.rect x="12" y="72" width="8" height="8" fill="currentColor" opacity="1" rx="1"
        animate={{ opacity: [0, 0, 0, 0, 1, 1, 0, 0] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.15, 0.25, 0.45, 0.55, 0.65, 0.85, 1] }}
      />

      {/* KUKA KINEMATIC ROBOT ARM */}
      {/* Shoulder Joint Origin at (50, 60) */}
      <g transform="translate(50, 60)">
        {/* Base Shoulder Joint Housing */}
        <circle cx="0" cy="0" r="9" fill="currentColor" />
        <circle cx="0" cy="0" r="3.5" fill="#000" opacity="0.3" />

        <motion.g
          animate={{ rotate: [40, 75, 40, -40, -75, -40, 40, 40] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.15, 0.25, 0.45, 0.55, 0.65, 0.85, 1] }}
          style={{ originX: "50%", originY: "50%" }}
        >
          {/* BULLETPROOF SVG FIX: Invisible circle to force the bounding box center to be EXACTLY (0,0) */}
          <circle cx="0" cy="0" r="80" opacity="0" pointerEvents="none" />

          {/* Upper Arm Capsule Body (100% Solid) */}
          <rect x="-7.5" y="-24" width="15" height="24" rx="7.5" fill="currentColor" />
          {/* KUKA Accent Band */}
          <rect x="-7.5" y="-17" width="15" height="6" fill="#fff" opacity="0.25" />

          {/* Elbow Joint Origin at (0, -22) */}
          <g transform="translate(0, -22)">
            {/* Elbow Joint Housing */}
            <circle cx="0" cy="0" r="7.5" fill="currentColor" />
            <circle cx="0" cy="0" r="2.5" fill="#000" opacity="0.3" />

            <motion.g
              animate={{ rotate: [35, 45, 35, -35, -45, -35, 35, 35] }}
              transition={{ duration: 4, repeat: Infinity, times: [0, 0.15, 0.25, 0.45, 0.55, 0.65, 0.85, 1] }}
              style={{ originX: "50%", originY: "50%" }}
            >
              {/* BULLETPROOF SVG FIX: Invisible circle to force the bounding box center to be EXACTLY (0,0) */}
              <circle cx="0" cy="0" r="60" opacity="0" pointerEvents="none" />

              {/* Forearm Capsule Body (100% Solid) */}
              <rect x="-5.5" y="-20" width="11" height="20" rx="5.5" fill="currentColor" />
              {/* KUKA Accent Band */}
              <rect x="-5.5" y="-14" width="11" height="5" fill="#fff" opacity="0.25" />

              {/* Wrist & Gripper Origin at (0, -18) */}
              <g transform="translate(0, -18)">
                {/* Wrist Joint Bearing */}
                <circle cx="0" cy="0" r="5.5" fill="currentColor" />
                <circle cx="0" cy="0" r="2" fill="#000" opacity="0.3" />
                
                {/* Industrial U-Gripper Base */}
                <rect x="-7" y="-6" width="14" height="6" rx="1" fill="currentColor" />
                {/* Gripper Fingers */}
                <rect x="-7" y="-15" width="3" height="10" fill="currentColor" />
                <rect x="4" y="-15" width="3" height="10" fill="currentColor" />

                {/* Held Cube in Gripper */}
                <motion.rect x="-4" y="-15" width="8" height="8" fill="currentColor" opacity="0.9" rx="1"
                  animate={{ opacity: [0, 0, 1, 1, 0, 0, 0, 0] }}
                  transition={{ duration: 4, repeat: Infinity, times: [0, 0.15, 0.25, 0.45, 0.55, 0.65, 0.85, 1] }}
                />
              </g>
            </motion.g>
          </g>
        </motion.g>
      </g>
    </svg>
  </div>
);

const MechatronicsIcon = () => (
  <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shrink-0 rounded-2xl bg-amber-500/10 text-amber-500 overflow-hidden">
    {/* Big Gear */}
    <motion.div
      className="absolute right-2 bottom-2 sm:right-3 sm:bottom-3"
      animate={{ rotate: 360 }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
    >
      <Settings className="w-9 h-9 sm:w-11 sm:h-11" />
    </motion.div>
    {/* Small Gear */}
    <motion.div
      className="absolute left-2 top-2 sm:left-3 sm:top-3"
      animate={{ rotate: -360 }}
      transition={{ duration: 3.42, repeat: Infinity, ease: "linear" }}
    >
      <Settings className="w-5 h-5 sm:w-7 sm:h-7" />
    </motion.div>
  </div>
);

export function EducationSection() {
  return (
    <section id="education" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Education"
          title="Academic Background"
          description="My formal education in robotics, automation, and mechatronics."
        />

        <div className="space-y-6">
          {EDUCATION.map((edu, i) => {
            const isRobotics = edu.degree.toLowerCase().includes("robotics");
            
            return (
              <AnimatedSection key={edu.institution} delay={i * 0.15}>
                <div className="glass-card glow-border group overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  {/* Top gradient accent */}
                  <div className={`h-1 w-full bg-gradient-to-r ${isRobotics ? "from-cyan-500 via-cyan-400 to-cyan-500" : "from-amber-500 via-amber-400 to-amber-500"} bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]`} />

                  <div className="p-6 md:p-8">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-4">
                        {isRobotics ? <RoboticsIcon /> : <MechatronicsIcon />}
                        <div>
                          <h3 className="text-lg font-bold">{edu.degree}</h3>
                          <p className={`mt-1 text-sm font-medium ${isRobotics ? "text-cyan-500" : "text-amber-500"}`}>
                            {edu.institution}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-row sm:flex-col flex-wrap sm:flex-nowrap items-center sm:items-end gap-2 sm:gap-3 shrink-0 mt-2 sm:mt-0">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                          <Calendar className="h-3 w-3" />
                          {edu.period}
                        </span>
                        {edu.grade && (
                          <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 ${isRobotics ? "bg-cyan-500/10 text-cyan-500 ring-cyan-500/20" : "bg-amber-500/10 text-amber-500 ring-amber-500/20"}`}>
                            <Award className="h-3 w-3" />
                            {edu.grade}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
