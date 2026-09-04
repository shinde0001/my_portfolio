"use client";

import { AnimatedSection } from "@/components/motion";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

/** Consistent heading for every portfolio section. */
export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <AnimatedSection className="mb-12 text-center md:mb-16 flex flex-col items-center">
      <div className="flex items-center gap-4 mb-3">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 40 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-px bg-primary/50 hidden sm:block"
        />
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
          {label}
        </span>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 40 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-px bg-primary/50 hidden sm:block"
        />
      </div>
      
      <div className="relative inline-block">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl text-balance">
          {title}
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-[2px] w-16 bg-gradient-to-r from-primary via-accent to-primary origin-center rounded-full"
        />
      </div>
      
      {description && (
        <p className="mx-auto mt-8 max-w-2xl text-muted-foreground text-balance">
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}
