"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { Dots, Design } from "@/component/design";
export default function AboutPage() {
  const SKILLS = {
    Frontend: [
      { name: "Next.js", level: 86 },
      { name: "React", level: 84 },
      { name: "JavaScript", level: 75 },
      { name: "Tailwind CSS", level: 96 },
      { name: "HTML & CSS", level: 98 },
    ],
    Backend: [
      { name: "Node.js", level: 92 },
      { name: "Express.js", level: 76 },
      { name: "MongoDB / Mongoose", level: 90 },
      { name: "REST & GraphQL APIs", level: 92 },
    ],
    DevOps: [
      { name: "Vercel / Netlify", level: 88 },
      { name: "CI/CD (GitHub Actions)", level: 76 },
    ],
    Tools: [
      { name: "Zustand / React Query", level: 84 },
      { name: "NextAuth / OAuth", level: 93 },
      { name: "ESLint / Prettier", level: 98 },
      { name: "Figma (handoff)", level: 72 },
    ],
  };

  const EXPERIENCE = [
    {
      title: "Full-Stack Developer — E-commerce Website",
      period: "2024 — Present",
      bullets: [
        "Built a production-level e-commerce platform inspired by Shooz.pk using Next.js, Node.js, and MongoDB.",
        "Implemented complete shopping flow — product listing, cart panel (slide-in), checkout, and order management dashboard.",
        "Developed secure authentication (NextAuth with Google OAuth) and admin-only access controls.",
        "Integrated server-side pagination, inventory management, and analytics dashboard for reporting.",
        "Optimized for SEO, accessibility, and performance with SSR and dynamic caching.",
      ],
    },
    {
      title: "Lead Developer — Xavique Brand Storefront",
      period: "2024",
      bullets: [
        "Designed a modern storefront with category filtering, wishlist, and dynamic product configuration system.",
        "Implemented reusable UI components using Tailwind CSS.",
        "Created headless-style content blocks for flexible homepage layouts.",
        "Optimized UX with PWA capabilities and client-side state via Zustand.",
        "Deployed production-ready architecture with CI/CD on Vercel.",
      ],
    },
    {
      title: "Full-Stack Engineer — Charsi Blog Platform",
      period: "2023 — 2024",
      bullets: [
        "Developed a Medium-like blog platform with full CRUD functionality, comment system, and like/unlike features.",
        "Built a modular, drag & drop editor for posts with image and text formatting support.",
        "Implemented infinite scroll and category-based blog feed with MongoDB aggregation.",
        "Created author dashboards for post analytics and editing.",
        "Used NextAuth for authentication with Google OAuth integration.",
      ],
    },
    {
      title: "Full-Stack Developer — Barber Appointment Website",
      period: "2023",
      bullets: [
        "Built a barber booking platform enabling users to book appointments by service and time.",
        "Developed real-time slot availability checking and admin dashboards.",
        "Implemented reminders, mobile-first design, and seamless UX.",
      ],
    },
  ];

  const FUN = [
    "I prefer monospace fonts while prototyping UI — it keeps things precise.",
    "I listen to history podcasts when designing architecture; it helps me think in timelines.",
    "I enjoy simplifying complex state into small, testable stores (Zustand).",
    "I iterate quickly with small, production-like prototypes before full builds.",
  ];

  // Animation presets
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-12 overflow-hidden">
      <div className="hidden [@media(min-width:1500px)]:block">
        <Dots
          position={{
            right: "60px",
            bottom: "30%",
            smright: "120px",
            smbottom: "55px",
          }}
        />
        <Dots
          position={{
            right: "0px",
            bottom: "0%",
            smright: "120px",
            smbottom: "55px",
          }}
        />
        <Dots
          position={{
            right: "12px",
            bottom: "-100%",
            smright: "120px",
            smbottom: "55px",
          }}
        />
        <Dots
          position={{
            right: "90%",
            bottom: "-60%",
            smright: "120px",
            smbottom: "55px",
          }}
        />
        <div className="w-32 h-32 border border-[var(--accent)] absolute bottom-[-105%] left-[-50px]" />
        <Design
          position={{ left: "-5%", top: "38%", smtop: "15%", smleft: "45%" }}
        />
      </div>

      {/* top hero */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
      >
        <div className="lg:col-span-2">
          <h1 className="text-4xl sm:text-5xl font-bold font-mono mb-4">
            Iftikhar Ali
          </h1>
          <p className="text-lg text-[var(--text)]/90 max-w-2xl leading-relaxed font-mono">
            I’m a Full-Stack Web Developer focused on modern, maintainable, and
            high-performance web applications. I build production experiences
            using Next.js, Node.js, MongoDB, and Tailwind CSS — balancing clean
            architecture with accessible, intuitive UIs.
          </p>

          <motion.div
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ifti.hazara205@gmail.com&su=Freelance%20Inquiry&body=Hi%20Iftikhar,%0A%0AI'd%20like%20to%20discuss%20a%20project%20with%20you."
              className="inline-flex items-center gap-2 px-4 py-2 rounded-sm border border-[var(--accent)] text-[var(--accent)] font-mono text-sm hover:bg-[var(--accent)] hover:text-white transition"
            >
              <Mail size={16} /> Email
            </a>
            <a
              href="https://github.com/321456987737"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-sm border border-[var(--muted)] text-sm font-mono hover:border-[var(--accent)] hover:text-[var(--accent)] transition"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/iftikhar-ali-61a210340/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-sm border border-[var(--muted)] text-sm font-mono hover:border-[var(--accent)] hover:text-[var(--accent)] transition"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </motion.div>
        </div>

        {/* Profile image + mini card */}
        <motion.aside
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="w-[260px] h-[340px] overflow-hidden relative">
            <Image
              src="/iftikhar.png"
              alt="Iftikhar Ali"
              fill
              sizes="(min-width: 1024px) 260px, 80vw"
              className="object-cover rounded-md"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-[260px] border border-[var(--text)]/20 rounded-sm p-3 text-center font-mono"
          >
            <div className="text-sm font-semibold">Full-Stack Developer</div>
            <div className="text-xs text-[var(--text)]/80 mt-1">
              Next.js • Node.js • MongoDB
            </div>
          </motion.div>
        </motion.aside>
      </motion.section>

      {/* Experience */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.7 }}
        className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-mono font-semibold mb-4">
            Professional — Experience & Approach
          </h2>

          <div className="space-y-6">
            {EXPERIENCE.map((ex, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                transition={{ delay: idx * 0.1 }}
                className="border-l-2 pl-4 border-[var(--muted,#e6e6e6)]"
              >
                <div className="font-mono font-semibold">{ex.title}</div>
                <div className="text-sm text-[var(--text)]/70 mt-1">
                  {ex.period}
                </div>
                <ul className="mt-2 list-disc ml-5 text-sm text-[var(--text)]/85 space-y-1">
                  {ex.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <motion.aside
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="border border-[var(--muted)] rounded-md p-4"
        >
          <h3 className="font-mono font-semibold mb-3">Skills</h3>
          {Object.entries(SKILLS).map(([group, list]) => (
            <div key={group} className="mb-4">
              <div className="text-xs font-mono font-semibold text-[var(--text)]/80 mb-2">
                {group}
              </div>
              {list.map((s) => (
                <div key={s.name} className="flex items-center gap-3 mb-2">
                  <div className="w-28 text-sm text-[var(--text)]/90 font-mono">
                    {s.name}
                  </div>
                  <div className="flex-1">
                    <div className="w-full h-2 bg-[var(--muted)] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        transition={{ duration: 0.6 }}
                        className="h-2 rounded-full bg-[var(--accent)]"
                      />
                    </div>
                  </div>
                  <div className="w-10 text-right text-xs text-[var(--text)]/60 font-mono">
                    {s.level}%
                  </div>
                </div>
              ))}
            </div>
          ))}
        </motion.aside>
      </motion.section>

      {/* Fun facts */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="mt-12"
      >
        <h2 className="text-2xl font-mono font-semibold mb-4">Fun facts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FUN.map((f, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ delay: i * 0.1 }}
              className="rounded-md border p-4 text-sm font-mono text-[var(--text)]/90 bg-[var(--bg)]"
            >
              {f}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.7 }}
        className="mt-12 border border-[var(--muted)] rounded-md p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <div>
          <div className="font-mono font-semibold">Looking to collaborate?</div>
          <div className="text-sm text-[var(--text)]/80">
            I’m available for freelance and contract work. Let’s discuss your
            project and how I can help.
          </div>
        </div>
        <div className="flex gap-3">
          <a
                       href="https://mail.google.com/mail/?view=cm&fs=1&to=ifti.hazara205@gmail.com&su=Freelance%20Inquiry&body=Hi%20Iftikhar,%0A%0AI'd%20like%20to%20discuss%20a%20project%20with%20you."
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[var(--accent)] text-[var(--accent)] font-mono hover:bg-[var(--accent)] hover:text-white transition"
          >
            <Mail size={16} /> Get in touch
          </a>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[var(--muted)] font-mono hover:border-[var(--accent)] hover:text-[var(--accent)] transition"
          >
            View projects
          </Link>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mt-12 text-center text-sm text-[var(--text)]/60"
      >
        © 2025 Iftikhar Ali • Built with Next.js and Tailwind CSS
      </motion.footer>
    </main>
  );
}
