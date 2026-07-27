"use client";

import { Bot, MapPin, Globe2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedSection } from "@/components/motion";
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

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Main text */}
          <AnimatedSection className="lg:col-span-3 space-y-6">
            {ABOUT_TEXT.map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-muted-foreground md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </AnimatedSection>

          {/* Quick facts cards */}
          <AnimatedSection delay={0.2} className="lg:col-span-2 space-y-4">
            {[
              {
                icon: Bot,
                title: "Specialization",
                value: "Robotics & Autonomous Systems",
              },
              {
                icon: MapPin,
                title: "Location",
                value: "Karnataka, India",
              },
              {
                icon: Globe2,
                title: "Languages",
                value: LANGUAGES.join(", "),
              },
            ].map(({ icon: Icon, title, value }) => (
              <div
                key={title}
                className="glass-card flex items-start gap-4 rounded-xl p-4 transition-all hover:shadow-lg"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
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
            <div className="flex flex-wrap gap-2 pt-2">
              {["AGV Systems", "SLAM", "Drone Swarms", "Computer Vision", "ROS 2"].map(
                (tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="rounded-full px-3 py-1 text-xs"
                  >
                    {tag}
                  </Badge>
                )
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
