"use client";

import { AnimatedSection } from "@/components/motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

/** Consistent heading for every portfolio section. */
export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <AnimatedSection className="mb-12 text-center md:mb-16">
      <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
        {label}
      </span>
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}
