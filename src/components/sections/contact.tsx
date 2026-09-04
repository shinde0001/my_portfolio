"use client";

import { useState, type FormEvent } from "react";
import { Send, Mail, Phone, MapPin, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedSection } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

type FormStatus = "idle" | "sending" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: FormData = { name: "", email: "", subject: "", message: "" };

/** Validates email format. */
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function ContactSection() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  function validate(): boolean {
    const next: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!isValidEmail(form.email)) next.email = "Enter a valid email";
    if (!form.message.trim()) next.message = "Message is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    const mailtoUrl = `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(
      form.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;

    window.open(mailtoUrl, "_blank");
    setStatus("success");
    setForm(INITIAL_FORM);
    setTimeout(() => setStatus("idle"), 4000);
  }

  function handleChange(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  return (
    <section id="contact" className="relative py-16 md:py-20 overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-20" />
      
      {/* Decorative lines */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-px w-1/3 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="pointer-events-none absolute right-0 bottom-1/4 h-px w-1/3 bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Let's Connect"
          description="Got a project idea or just want to chat about robotics? Reach out!"
        />

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact info */}
          <AnimatedSection className="lg:col-span-2 space-y-8" direction="left">
            <p className="text-muted-foreground leading-relaxed text-lg">
              I&apos;m always excited to discuss new opportunities in robotics,
              autonomous systems, and AI. Feel free to get in touch.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
                { icon: Phone, label: "Phone", value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone.replace(/\s/g, "")}` },
                { icon: MapPin, label: "Location", value: "Karnataka, India" },
              ].map(({ icon: Icon, label, value, href }) => (
                <motion.div 
                  key={label}
                  whileHover={{ x: 4 }}
                  className="group flex items-center gap-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {label}
                    </p>
                    {href ? (
                      <a href={href} className="text-sm font-semibold hover:text-primary transition-colors mt-0.5 inline-block">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold mt-0.5">{value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social */}
            <div className="pt-6 border-t border-border/50">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Find me on
              </p>
              <div className="flex gap-4">
                <a
                  href={SITE_CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-card/50 text-muted-foreground backdrop-blur-sm transition-all hover:border-primary/50 hover:text-primary hover:shadow-lg glow-border"
                >
                  <GithubIcon className="h-5 w-5 transition-transform group-hover:scale-110" />
                </a>
                <a
                  href={SITE_CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-card/50 text-muted-foreground backdrop-blur-sm transition-all hover:border-primary/50 hover:text-primary hover:shadow-lg glow-border"
                >
                  <LinkedinIcon className="h-5 w-5 transition-transform group-hover:scale-110" />
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  aria-label="Email"
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-card/50 text-muted-foreground backdrop-blur-sm transition-all hover:border-primary/50 hover:text-primary hover:shadow-lg glow-border"
                >
                  <Mail className="h-5 w-5 transition-transform group-hover:scale-110" />
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection delay={0.2} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glass-card space-y-6 rounded-3xl p-8 md:p-10"
              noValidate
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <InputField
                  id="contact-name"
                  label="Name"
                  value={form.name}
                  error={errors.name}
                  onChange={(v) => handleChange("name", v)}
                  placeholder="Your name"
                />
                <InputField
                  id="contact-email"
                  label="Email"
                  type="email"
                  value={form.email}
                  error={errors.email}
                  onChange={(v) => handleChange("email", v)}
                  placeholder="you@example.com"
                />
              </div>
              <InputField
                id="contact-subject"
                label="Subject"
                value={form.subject}
                onChange={(v) => handleChange("subject", v)}
                placeholder="What's this about?"
              />
              <div>
                <label htmlFor="contact-message" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Message {errors.message && <span className="normal-case text-destructive">— {errors.message}</span>}
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Tell me about your project..."
                  className={`w-full resize-none rounded-2xl border bg-secondary/30 px-5 py-3.5 text-sm transition-all duration-300 placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-[3px] focus:ring-primary/15 ${
                    errors.message ? "border-destructive focus:ring-destructive/15" : "border-border/50"
                  }`}
                />
              </div>

              <motion.div
                whileHover={status === "idle" ? { scale: 1.02 } : {}}
                whileTap={status === "idle" ? { scale: 0.98 } : {}}
                animate={status === "success" ? { scale: [1, 1.05, 1] } : {}}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "sending"}
                  className="w-full gap-2 rounded-full glow-border py-6 text-base"
                >
                  <AnimatePresence mode="wait">
                    {status === "sending" && (
                      <motion.div key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                        <Loader2 className="h-5 w-5 animate-spin" /> Sending...
                      </motion.div>
                    )}
                    {status === "success" && (
                      <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5" /> Message Sent!
                      </motion.div>
                    )}
                    {status === "error" && (
                      <motion.div key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                        <AlertCircle className="h-5 w-5" /> Failed — Try Again
                      </motion.div>
                    )}
                    {status === "idle" && (
                      <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                        <Send className="h-5 w-5" /> Send Message
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ── Small inline input component ── */

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

function InputField({ id, label, type = "text", value, error, onChange, placeholder }: InputFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label} {error && <span className="normal-case text-destructive">— {error}</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full rounded-2xl border bg-secondary/30 px-5 py-3.5 text-sm transition-all duration-300 placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-[3px] focus:ring-primary/15 ${
          error ? "border-destructive focus:ring-destructive/15" : "border-border/50"
        }`}
      />
    </div>
  );
}
