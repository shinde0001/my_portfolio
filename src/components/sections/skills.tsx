"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { StaggeredContainer, StaggerItem } from "@/components/motion";
import { SKILL_CATEGORIES } from "@/lib/constants";

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      {/* Subtle dot pattern background */}
      <div className="dot-pattern pointer-events-none absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Skills"
          title="Technical Arsenal"
          description="Technologies and tools I work with daily to build intelligent systems."
        />

        <StaggeredContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <StaggerItem key={category.title}>
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="glass-card group h-full rounded-2xl p-6 transition-shadow hover:shadow-xl"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm font-bold uppercase tracking-wider">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg bg-secondary/80 px-2.5 py-1 text-xs font-medium text-secondary-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggeredContainer>
      </div>
    </section>
  );
}
