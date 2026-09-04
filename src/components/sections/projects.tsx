"use client";

import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { StaggeredContainer, StaggerItem } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/lib/constants";

// Helper for generating deterministic but varied gradients based on string
const getGradient = (title: string) => {
  const gradients = [
    "from-blue-500/20 to-purple-500/20",
    "from-emerald-500/20 to-teal-500/20",
    "from-amber-500/20 to-orange-500/20",
    "from-rose-500/20 to-pink-500/20",
    "from-indigo-500/20 to-cyan-500/20",
  ];
  const index = title.length % gradients.length;
  return gradients[index];
};

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-16 md:py-20 overflow-hidden">
      <div className="dot-pattern pointer-events-none absolute inset-0 opacity-40" />
      
      {/* Animated Background Drone - Bouncing DVD Screensaver Effect */}
      <motion.div
        className="pointer-events-none absolute z-0 opacity-10 text-primary"
        animate={{
          x: ["0vw", "calc(100vw - 120px)"],
          y: ["0%", "calc(100% - 120px)"],
        }}
        transition={{
          x: {
            duration: 22,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "linear",
          },
          y: {
            duration: 15,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "linear",
          },
        }}
        style={{ left: 0, top: 0 }}
      >
        <motion.div
          animate={{ rotate: [-3, 3, -3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-24 h-24 md:w-[120px] md:h-[120px]">
            {/* Quadcopter Body */}
            <rect x="9" y="10" width="6" height="4" rx="1" fill="currentColor" fillOpacity="0.2" />
            {/* Arms */}
            <path d="M9 10L5 6" />
            <path d="M15 10L19 6" />
            <path d="M9 14L5 18" />
            <path d="M15 14L19 18" />
            {/* Propellers */}
            <circle cx="5" cy="6" r="3" strokeDasharray="2 2" className="animate-spin" style={{ transformOrigin: '5px 6px' }} />
            <circle cx="19" cy="6" r="3" strokeDasharray="2 2" className="animate-spin" style={{ transformOrigin: '19px 6px' }} />
            <circle cx="5" cy="18" r="3" strokeDasharray="2 2" className="animate-spin" style={{ transformOrigin: '5px 18px' }} />
            <circle cx="19" cy="18" r="3" strokeDasharray="2 2" className="animate-spin" style={{ transformOrigin: '19px 18px' }} />
            {/* Camera Payload */}
            <path d="M12 14v2" />
            <circle cx="12" cy="17" r="1.5" />
          </svg>
        </motion.div>
      </motion.div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Projects"
          title="Featured Work"
          description="Autonomous systems, drones, and AI-powered solutions I've built."
        />

        <StaggeredContainer className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => {
            const isFeatured = i === 0 || i === 1;
            
            return (
              <StaggerItem key={project.title} className={isFeatured ? "md:col-span-2" : "col-span-1"}>
                <motion.div
                  whileHover={{ y: -8, transition: { duration: 0.25 } }}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl bg-card transition-all hover:shadow-2xl hover:shadow-primary/10 ${
                    isFeatured ? "gradient-border" : "border border-border/50 hover:border-primary/30"
                  }`}
                >
                  {/* Media (Video or Image) or Placeholder */}
                  <div className={`w-full ${isFeatured ? "h-48 md:h-64" : "h-40"} bg-gradient-to-br ${getGradient(project.title)} relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500`}>
                    {project.previewVideo ? (
                      <>
                        <video 
                          src={project.previewVideo} 
                          autoPlay 
                          loop 
                          muted 
                          playsInline 
                          className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
                        />
                        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-card to-transparent pointer-events-none" />
                      </>
                    ) : project.previewImage ? (
                      <>
                        <img 
                          src={project.previewImage} 
                          alt={project.title}
                          className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
                        />
                        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-card to-transparent pointer-events-none" />
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 grid-bg opacity-30" />
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-card to-transparent pointer-events-none" />
                      </>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`flex flex-1 flex-col ${isFeatured ? "p-8" : "p-6"}`}>
                    {/* Project number badge & Links */}
                    <div className="mb-4 flex items-center justify-between relative z-10 -mt-12">
                      <span className={`font-bold ${isFeatured ? "text-2xl gradient-text bg-card rounded-lg px-2" : "text-sm text-muted-foreground/60 bg-card rounded-md px-1.5"}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`GitHub: ${project.title}`}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-card/80 backdrop-blur-sm text-muted-foreground transition-all hover:border-primary/50 hover:text-primary hover:shadow-md"
                          >
                            <GithubIcon className="h-4 w-4" />
                          </a>
                        )}
                        {project.video && (
                          <a
                            href={project.video}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Demo: ${project.title}`}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-card/80 backdrop-blur-sm text-muted-foreground transition-all hover:border-accent/50 hover:text-accent hover:shadow-md"
                          >
                            <Play className="h-4 w-4 ml-0.5" />
                          </a>
                        )}
                        {project.video2 && (
                          <a
                            href={project.video2}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Demo 2: ${project.title}`}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-card/80 backdrop-blur-sm text-muted-foreground transition-all hover:border-accent/50 hover:text-accent hover:shadow-md"
                          >
                            <Play className="h-4 w-4 ml-0.5" />
                          </a>
                        )}
                      </div>
                    </div>

                    <h3 className={`${isFeatured ? "text-2xl" : "text-xl"} font-bold leading-tight transition-colors group-hover:text-primary mt-2`}>
                      {project.title}
                    </h3>

                    <p className={`mt-4 flex-1 leading-relaxed text-muted-foreground ${isFeatured ? "text-base" : "text-sm"}`}>
                      {project.description}
                    </p>

                    {project.highlights && (
                      <ul className={`mt-4 space-y-2 ${isFeatured ? "text-sm" : "text-xs"} text-muted-foreground`}>
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                            <span className="leading-snug">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {project.impact && (
                      <div className={`mt-4 font-medium text-primary ${isFeatured ? "text-sm" : "text-xs"} bg-primary/5 p-3 rounded-lg border border-primary/10`}>
                        🚀 {project.impact}
                      </div>
                    )}

                    {/* Tech stack */}
                    <div className="relative mt-6 overflow-hidden rounded-lg">
                      <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      <div className="relative flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <Badge
                            key={t}
                            variant="secondary"
                            className="rounded-md px-2.5 py-1 text-xs font-medium"
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* CTA row */}
                    {(project.github || project.video || project.video2) && (
                      <div className="mt-6 flex flex-wrap gap-3 border-t border-border/30 pt-6">
                        {project.github && (
                          <Button asChild variant="outline" size={isFeatured ? "default" : "sm"} className="flex-1 gap-2 rounded-full font-medium">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <GithubIcon className="h-4 w-4" />
                              Source Code
                            </a>
                          </Button>
                        )}
                        {project.video && (
                          <Button asChild size={isFeatured ? "default" : "sm"} className="flex-1 gap-2 rounded-full font-medium">
                            <a href={project.video} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                              {project.video2 ? "Demo 1" : "Live Demo"}
                            </a>
                          </Button>
                        )}
                        {project.video2 && (
                          <Button asChild size={isFeatured ? "default" : "sm"} className="flex-1 gap-2 rounded-full font-medium">
                            <a href={project.video2} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                              Demo 2
                            </a>
                          </Button>
                        )}
                      </div>
                    )}
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
