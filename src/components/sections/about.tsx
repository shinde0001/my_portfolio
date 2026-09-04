"use client";

import { Bot, MapPin, Globe2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedSection, StaggeredContainer, StaggerItem } from "@/components/motion";
import { ABOUT_TEXT, LANGUAGES } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

export function AboutSection() {
  return (
    <section id="about" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About"
          title="Who I Am"
          description="A brief introduction to my background and passion."
        />

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Main text */}
          <AnimatedSection className="lg:col-span-7 relative pl-6">
            {/* Vertical accent line */}
            <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full" />
            
            <div className="space-y-6">
              {ABOUT_TEXT.map((paragraph, i) => (
                <p
                  key={i}
                  className={`leading-relaxed text-muted-foreground ${
                    i === 0 ? "text-lg md:text-xl font-medium text-foreground/90" : "text-base md:text-lg"
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>

          {/* Quick facts cards */}
          <AnimatedSection delay={0.2} className="lg:col-span-5 space-y-4">
            {[
              {
                icon: Bot,
                title: "Specialization",
                value: "Robotics & Autonomous Systems",
                colorClass: "bg-blue-500/10 text-blue-500",
              },
              {
                icon: MapPin,
                title: "Location",
                value: "Karnataka, India",
                colorClass: "bg-amber-500/10 text-amber-500",
              },
              {
                icon: Globe2,
                title: "Languages",
                value: LANGUAGES.join(", "),
                colorClass: "bg-emerald-500/10 text-emerald-500",
              },
            ].map(({ icon: Icon, title, value, colorClass }) => (
              <div
                key={title}
                className="glass-card flex items-start gap-4 rounded-xl p-4 transition-all hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-[2px]"
              >
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${colorClass}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {title}
                  </p>
                  <p className="mt-0.5 text-sm font-medium">{value}</p>
                </div>
              </div>
            ))}

            {/* Tech tags */}
            <StaggeredContainer className="flex flex-wrap gap-2 pt-4">
              {["AGV Systems", "SLAM", "Drone Swarms", "Computer Vision", "ROS 2"].map(
                (tag) => (
                  <StaggerItem key={tag}>
                    <Badge
                      variant="secondary"
                      className="rounded-full px-3 py-1 text-xs transition-all hover:bg-primary/20 hover:text-primary cursor-default"
                    >
                      {tag}
                    </Badge>
                  </StaggerItem>
                )
              )}
            </StaggeredContainer>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
