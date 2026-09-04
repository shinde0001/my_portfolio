"use client";

import { GraduationCap, Calendar, Award } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedSection } from "@/components/motion";
import { EDUCATION } from "@/lib/constants";

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
          {EDUCATION.map((edu, i) => (
            <AnimatedSection key={edu.institution} delay={i * 0.15}>
              <div className="glass-card glow-border group overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                {/* Top gradient accent */}
                <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]" />

                <div className="p-6 md:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <GraduationCap className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{edu.degree}</h3>
                        <p className="mt-1 text-sm font-medium text-primary">
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
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-primary/20">
                          <Award className="h-3 w-3" />
                          {edu.grade}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
