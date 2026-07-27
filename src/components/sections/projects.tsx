"use client";

import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { StaggeredContainer, StaggerItem } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/lib/constants";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-16 md:py-20">
      <div className="dot-pattern pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Projects"
          title="Featured Work"
          description="Autonomous systems, drones, and AI-powered solutions I've built."
        />

        <StaggeredContainer className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <StaggerItem key={project.title}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-card transition-all hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5"
              >
                {/* Gradient accent top bar */}
                <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-primary" />

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  {/* Project number badge */}
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-bold text-muted-foreground/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub: ${project.title}`}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary hover:shadow-md"
                        >
                          <GithubIcon className="h-3.5 w-3.5" />
                        </a>
                      )}
                      {project.video && (
                        <a
                          href={project.video}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Demo: ${project.title}`}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-all hover:border-accent/50 hover:text-accent hover:shadow-md"
                        >
                          <Play className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold leading-tight transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="rounded-md px-2 py-0.5 text-[10px] font-medium"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>

                  {/* CTA row */}
                  {(project.github || project.video) && (
                    <div className="mt-5 flex gap-3 border-t border-border/30 pt-5">
                      {project.github && (
                        <Button asChild variant="outline" size="sm" className="flex-1 gap-2 rounded-full text-xs">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <GithubIcon className="h-3.5 w-3.5" />
                            Source Code
                          </a>
                        </Button>
                      )}
                      {project.video && (
                        <Button asChild size="sm" className="flex-1 gap-2 rounded-full text-xs">
                          <a href={project.video} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3.5 w-3.5" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggeredContainer>
      </div>
    </section>
  );
}
