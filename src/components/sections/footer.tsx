"use client";

import { Heart, Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";
import { AnimatedSection } from "@/components/motion";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card/30 backdrop-blur-sm">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <AnimatedSection className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-black">
                PS
              </span>
              <span className="text-lg font-bold">{SITE_CONFIG.name}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {SITE_CONFIG.title} building intelligent autonomous systems with modern
              robotics and AI technologies.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Connect
            </h4>
            <div className="flex gap-3">
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-all hover:border-foreground/50 hover:text-foreground"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-all hover:border-[#0A66C2]/50 hover:text-[#0A66C2]"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-all hover:border-accent/50 hover:text-accent"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/30 pt-8 sm:flex-row">
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            © {currentYear} {SITE_CONFIG.name}. Built with
            <Heart className="h-3 w-3 fill-destructive text-destructive" />
            using Next.js
          </p>

          {/* Back to top */}
          <motion.a
            href="#hero"
            whileHover={{ y: -2 }}
            className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Back to top
            <ArrowUp className="h-3 w-3" />
          </motion.a>
        </div>
      </AnimatedSection>
    </footer>
  );
}
