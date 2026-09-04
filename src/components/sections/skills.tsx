"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { StaggeredContainer, StaggerItem, CountUp } from "@/components/motion";
import { SKILL_CATEGORIES } from "@/lib/constants";

function SkillCard({ category, index }: { category: typeof SKILL_CATEGORIES[0]; index: number }) {
  const Icon = category.icon;
  const isLarge = index === 0 || index === 1;

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
          
          <StaggeredContainer className="flex flex-wrap gap-2 pt-2">
            {category.skills.map((skill) => (
              <StaggerItem key={skill}>
                <span className="inline-block rounded-lg bg-secondary/80 px-2.5 py-1 text-xs font-medium text-secondary-foreground transition-colors hover:bg-primary/20 hover:text-primary cursor-default border border-transparent hover:border-primary/20">
                  {skill}
                </span>
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
