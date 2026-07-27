"use client";

import { useState, type FormEvent } from "react";
import { Send, Mail, Phone, MapPin, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedSection } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";

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
    <section id="contact" className="relative py-24 md:py-32">
      <div className="dot-pattern pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Let's Connect"
          description="Got a project idea or just want to chat about robotics? Reach out!"
        />

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact info */}
          <AnimatedSection className="lg:col-span-2 space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m always excited to discuss new opportunities in robotics,
              autonomous systems, and AI. Feel free to get in touch.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
                { icon: Phone, label: "Phone", value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone.replace(/\s/g, "")}` },
                { icon: MapPin, label: "Location", value: "Karnataka, India" },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {label}
                    </p>
                    {href ? (
                      <a href={href} className="text-sm font-medium hover:text-primary transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="pt-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Find me on
              </p>
              <div className="flex gap-3">
                <a
                  href={SITE_CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-card/50 text-muted-foreground backdrop-blur-sm transition-all hover:border-primary/50 hover:text-primary hover:shadow-lg"
                >
                  <GithubIcon className="h-4 w-4 transition-transform group-hover:scale-110" />
                </a>
                <a
                  href={SITE_CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-card/50 text-muted-foreground backdrop-blur-sm transition-all hover:border-primary/50 hover:text-primary hover:shadow-lg"
                >
                  <LinkedinIcon className="h-4 w-4 transition-transform group-hover:scale-110" />
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  aria-label="Email"
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-card/50 text-muted-foreground backdrop-blur-sm transition-all hover:border-primary/50 hover:text-primary hover:shadow-lg"
                >
                  <Mail className="h-4 w-4 transition-transform group-hover:scale-110" />
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection delay={0.2} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glass-card space-y-5 rounded-2xl p-6 md:p-8"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
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
                <label htmlFor="contact-message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Message {errors.message && <span className="normal-case text-destructive">— {errors.message}</span>}
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Tell me about your project..."
                  className={`w-full resize-none rounded-xl border bg-secondary/30 px-4 py-3 text-sm transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${
                    errors.message ? "border-destructive" : "border-border/50"
                  }`}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={status === "sending"}
                className="w-full gap-2 rounded-full"
              >
                {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" />}
                {status === "success" && <CheckCircle2 className="h-4 w-4" />}
                {status === "error" && <AlertCircle className="h-4 w-4" />}
                {status === "idle" && <Send className="h-4 w-4" />}
                {status === "idle" && "Send Message"}
                {status === "sending" && "Sending..."}
                {status === "success" && "Message Sent!"}
                {status === "error" && "Failed — Try Again"}
              </Button>
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
      <label htmlFor={id} className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label} {error && <span className="normal-case text-destructive">— {error}</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full rounded-xl border bg-secondary/30 px-4 py-3 text-sm transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${
          error ? "border-destructive" : "border-border/50"
        }`}
      />
    </div>
  );
}
