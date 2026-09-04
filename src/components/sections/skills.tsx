"use client";

import { useState } from "react";
import { motion, useMotionTemplate, useMotionValue, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { StaggeredContainer, StaggerItem, CountUp } from "@/components/motion";
import { SKILL_CATEGORIES } from "@/lib/constants";

function SkillCard({ category, index }: { category: typeof SKILL_CATEGORIES[0]; index: number }) {
  const Icon = category.icon;
  const isLarge = index === 0 || index === 1;
  const [grabbedSkill, setGrabbedSkill] = useState<string | null>(null);

  const handleSkillClick = (skill: string) => {
    if (grabbedSkill) return;
    setGrabbedSkill(skill);
    setTimeout(() => setGrabbedSkill(null), 1500);
  };

  // 3D Tilt Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useMotionTemplate`${mouseY}deg`;
  const rotateY = useMotionTemplate`${mouseX}deg`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = -(e.clientY - top - height / 2) / 25;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <StaggerItem className={isLarge ? "lg:col-span-2" : "col-span-1"}>
      <div style={{ perspective: 800 }} className="h-full">
        <motion.div
          style={{ rotateX, rotateY }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="glass-card group h-full rounded-2xl p-6 transition-all duration-200 ease-out hover:shadow-2xl hover:shadow-primary/10 glow-border"
        >
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${category.colorClass}`}>
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground/90">
                {category.title}
              </h3>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/50 text-xs font-bold text-muted-foreground group-hover:text-foreground transition-colors">
              <CountUp target={category.skills.length} />
            </div>
          </div>
          
          <StaggeredContainer className="flex flex-wrap gap-2 pt-2 relative">
            {category.skills.map((skill) => (
              <StaggerItem key={skill} className="relative">
                <span 
                  onClick={() => handleSkillClick(skill)}
                  className={`inline-block rounded-lg px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer border relative z-10 ${
                    grabbedSkill === skill 
                      ? "bg-primary text-primary-foreground border-primary scale-110 shadow-lg shadow-primary/20" 
                      : "bg-secondary/80 text-secondary-foreground border-transparent hover:bg-primary/20 hover:text-primary hover:border-primary/20"
                  }`}
                >
                  {skill}
                </span>

                {/* Robotic Arm Animation */}
                <AnimatePresence>
                  {grabbedSkill === skill && (
                    <motion.div
                      initial={{ x: 100, y: -50, opacity: 0, scale: 0.5, rotate: -45 }}
                      animate={{ x: 0, y: -10, opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ x: 150, y: -50, opacity: 0, scale: 0.5, rotate: -45 }}
                      transition={{ 
                        duration: 0.6, 
                        type: "spring", 
                        bounce: 0.4,
                      }}
                      className="absolute top-1/2 left-1/2 pointer-events-none text-primary z-50 origin-bottom-right"
                    >
                      <svg width="80" height="80" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_12px_rgba(var(--primary),0.4)]">
                        {/* Base Platform */}
                        <rect x="44" y="2" width="18" height="6" rx="2" fill="currentColor" fillOpacity="0.15" />
                        <rect x="48" y="0" width="10" height="2" rx="1" fill="currentColor" fillOpacity="0.3" />
                        {/* Base Joint (Turret) */}
                        <circle cx="53" cy="8" r="4" fill="currentColor" fillOpacity="0.2" />
                        <circle cx="53" cy="8" r="2" fill="currentColor" fillOpacity="0.5" />
                        {/* Upper Arm */}
                        <path d="M53 8L40 22" strokeWidth="2.5" />
                        <path d="M51 9L38 23" strokeWidth="0.6" strokeDasharray="1 2" opacity="0.4" />
                        {/* Elbow Joint */}
                        <circle cx="40" cy="22" r="3" fill="currentColor" fillOpacity="0.2" />
                        <circle cx="40" cy="22" r="1.5" fill="currentColor" fillOpacity="0.6" />
                        {/* Forearm */}
                        <path d="M40 22L24 35" strokeWidth="2" />
                        <path d="M38 23L22 36" strokeWidth="0.6" strokeDasharray="1 2" opacity="0.4" />
                        {/* Hydraulic Piston Detail */}
                        <path d="M50 12L42 26" strokeWidth="0.8" opacity="0.3" />
                        {/* Wrist Joint */}
                        <circle cx="24" cy="35" r="2.5" fill="currentColor" fillOpacity="0.2" />
                        <circle cx="24" cy="35" r="1.2" fill="currentColor" fillOpacity="0.6" />
                        {/* Gripper Mount */}
                        <path d="M24 35L20 40" strokeWidth="1.5" />
                        {/* Gripper Fingers */}
                        <path d="M20 40L15 42L14 46" strokeWidth="1.2" />
                        <path d="M20 40L22 44L20 48" strokeWidth="1.2" />
                        <path d="M14 46L15 48" strokeWidth="1" />
                        <path d="M20 48L19 50" strokeWidth="1" />
                        {/* Gripper Joint Bolts */}
                        <circle cx="20" cy="40" r="1" fill="currentColor" fillOpacity="0.5" />
                        <circle cx="15" cy="42" r="0.7" fill="currentColor" fillOpacity="0.4" />
                        <circle cx="22" cy="44" r="0.7" fill="currentColor" fillOpacity="0.4" />
                        {/* Wiring Detail */}
                        <path d="M53 5C56 5 58 8 58 12C58 18 48 20 44 28" strokeWidth="0.5" opacity="0.25" fill="none" />
                      </svg>
                    </motion.div>
                  )}
                </AnimatePresence>
              </StaggerItem>
            ))}
          </StaggeredContainer>
        </motion.div>
      </div>
    </StaggerItem>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-16 md:py-20">
      {/* Subtle grid background */}
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Skills"
          title="Technical Arsenal"
          description="Technologies and tools I work with daily to build intelligent systems."
        />

        <StaggeredContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </StaggeredContainer>
      </div>
    </section>
  );
}
