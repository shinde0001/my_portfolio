"use client";

import { Briefcase, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedSection } from "@/components/motion";
import { EXPERIENCES } from "@/lib/constants";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Experience"
          title="Work History"
          description="Professional roles where I've applied my robotics and automation expertise."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 hidden h-full w-0.5 bg-gradient-to-b from-primary via-primary/20 to-transparent md:block" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, i) => (
              <AnimatedSection key={exp.company} delay={i * 0.15} direction="left">
                <div className="group relative md:pl-16">
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-1 hidden h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-background md:flex">
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  </div>

                  <div className="glass-card glow-border rounded-2xl p-6 transition-all hover:shadow-xl md:p-8">
                    {/* Header */}
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary md:hidden">
                          <Briefcase className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold">{exp.role}</h3>
                          <p className="text-sm font-medium text-primary">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary transition-shadow hover:shadow-lg hover:shadow-primary/20">
                        {exp.period}
                      </span>
                    </div>

                    {/* Bullets */}
                    <ul className="mt-6 space-y-3">
                      {exp.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary/80" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
