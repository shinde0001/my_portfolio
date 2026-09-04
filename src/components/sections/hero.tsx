"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import { TextReveal, MagneticButton } from "@/components/motion";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="grain-overlay relative flex min-h-[85vh] items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated mesh gradient and grid */}
      <div className="pointer-events-none absolute inset-0 mesh-gradient" />
      <div className="pointer-events-none absolute inset-0 grid-bg" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Open to opportunities
          </span>
        </motion.div>

        {/* Name */}
        <h1 className="mt-10 text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Hi, I&apos;m{" "}
          </motion.span>
          <TextReveal
            text={SITE_CONFIG.name}
            className="gradient-text"
            delay={0.4}
          />
        </h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 flex justify-center"
        >
          <motion.div
            initial={{ maxWidth: 0 }}
            animate={{ maxWidth: "100%" }}
            transition={{ duration: 1.2, delay: 1.0, ease: "easeInOut" }}
            className="overflow-hidden whitespace-nowrap"
          >
            <p className="text-lg font-medium text-primary sm:text-xl px-2">
              {SITE_CONFIG.title}
            </p>
          </motion.div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mx-auto mt-12 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {SITE_CONFIG.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
            <Button asChild size="lg" className="glow-border rounded-full gap-2 px-8 shadow-lg shadow-primary/25">
              <a href="#projects">
                View My Work
                <ArrowDown className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>
          <motion.div transition={{ type: "spring", stiffness: 400, damping: 17 }}>
            <Button asChild variant="outline" size="lg" className="glow-border rounded-full gap-2 px-8 hover:border-primary/50 transition-colors">
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          {[
            { Icon: GithubIcon, href: SITE_CONFIG.github, label: "GitHub" },
            { Icon: LinkedinIcon, href: SITE_CONFIG.linkedin, label: "LinkedIn" },
          ].map(({ Icon, href, label }) => (
            <MagneticButton key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-card/50 text-muted-foreground backdrop-blur-sm transition-all hover:border-primary/50 hover:text-primary hover:shadow-lg hover:shadow-primary/10"
              >
                <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
              </a>
            </MagneticButton>
          ))}
          <MagneticButton>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              aria-label="Email"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-card/50 text-muted-foreground backdrop-blur-sm transition-all hover:border-primary/50 hover:text-primary hover:shadow-lg hover:shadow-primary/10"
            >
              <Mail className="h-5 w-5 transition-transform group-hover:scale-110" />
            </a>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="relative flex flex-col items-center justify-center h-16 w-16 text-muted-foreground/50"
        >
          <span className="absolute inset-0 rounded-full border border-primary/30 animate-ping" />
          <span className="text-[10px] tracking-widest uppercase mb-1">Scroll</span>
          <ArrowDown className="h-3 w-3" />
        </motion.div>
      </motion.div>
    </section>
  );
}
