// components/Footer.jsx
"use client";
import React from "react";
import Link from "next/link";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t  border-[var(--muted,#e6e6e6)] bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Left: identity */}
        <div className="flex flex-col items-start gap-1">
          <span className="font-mono text-lg font-semibold text-[var(--text)]">Iftikhar Ali</span>
          <a
            href="mailto:iftikhar@example.com"
            className="text-sm font-mono text-[var(--text)]/70 hover:text-[var(--accent)] transition-colors"
          >
            <span className="inline-flex items-center gap-2">
              <Mail size={14} aria-hidden />
              iftikhar@example.com
            </span>
          </a>
          <p className="text-xs text-[var(--text)]/60 mt-2 max-w-xs">
            Full-Stack Web Developer — Next.js, Node.js, MongoDB. Building clean, accessible, production apps.
          </p>
        </div>

        {/* Middle: quick links */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-mono text-sm font-semibold text-[var(--text)]">Explore</span>
          <nav className="flex gap-4 mt-2">
            <Link href="/work" className="text-sm font-mono text-[var(--text)]/80 hover:text-[var(--accent)]">
              Projects
            </Link>
            {/* <Link href="/blog" className="text-sm font-mono text-[var(--text)]/80 hover:text-[var(--accent)]">
              Blog
            </Link> */}
            <Link href="/about-me" className="text-sm font-mono text-[var(--text)]/80 hover:text-[var(--accent)]">
              About
            </Link>
            <Link href="/contact" className="text-sm font-mono text-[var(--text)]/80 hover:text-[var(--accent)]">
              Contact
            </Link>
          </nav>
        </div>

        {/* Right: social / media */}
        <div className="flex flex-col items-start md:items-end gap-2">
          <span className="font-mono text-sm font-semibold text-[var(--text)]">Media</span>

          <div className="flex items-center gap-4 mt-2">
            <a
                href="https://github.com/321456987737"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-[var(--text)]/80 hover:text-[var(--accent)] transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
              <span className="hidden sm:inline text-sm font-mono">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/iftikhar-ali-61a210340/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-[var(--text)]/80 hover:text-[var(--accent)] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
              <span className="hidden sm:inline text-sm font-mono">LinkedIn</span>
            </a>

            <a
  href="https://www.instagram.com/ifti_ali_ee/"
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-2 text-[var(--text)]/80 hover:text-[var(--accent)] transition-colors"
  aria-label="Instagram"
>
  <Instagram size={18} />
  <span className="hidden sm:inline text-sm font-mono">Instagram</span>
</a>

          </div>
        </div>
      </div>

      {/* Centered copyright (keeps same position visually across sizes) */}
      <div className="w-full text-center py-3 border-t border-[var(--muted,#e6e6e6)]">
        <p className="text-xs text-[var(--text)]/60">
          © {year} Iftikhar Ali. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
