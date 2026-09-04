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
                      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_8px_rgba(var(--primary),0.5)]">
                        {/* Arm links */}
                        <path d="M22 2L15 9" />
                        <path d="M15 9L11 13" />
                        {/* Joints */}
                        <circle cx="15" cy="9" r="1.5" fill="currentColor" />
                        <circle cx="22" cy="2" r="1.5" fill="currentColor" />
                        {/* Claw */}
                        <path d="M11 13L8 12" />
                        <path d="M11 13L12 16" />
                        <path d="M8 12L7 14" />
                        <path d="M12 16L10 17" />
                        <circle cx="11" cy="13" r="1" fill="currentColor" />
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
