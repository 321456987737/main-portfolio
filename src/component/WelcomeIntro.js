"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function WelcomeIntro() {
  const [isVisible, setIsVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const timeout = window.setTimeout(
      () => setIsVisible(false),
      shouldReduceMotion ? 2200 : 3200
    );

    return () => window.clearTimeout(timeout);
  }, [shouldReduceMotion]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          aria-label="Welcome to Iftikhar Ali's portfolio"
          aria-live="polite"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[var(--bg)] text-[var(--text)]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : -20,
            transition: { duration: shouldReduceMotion ? 0.2 : 0.55, ease: "easeInOut" },
          }}
        >
          <div
            aria-hidden="true"
            className="absolute h-64 w-64 rounded-full bg-[var(--accent)]/10 blur-3xl sm:h-80 sm:w-80"
          />

          <div className="relative px-6 text-center">
            <motion.p
              className="mb-5 text-xs tracking-[0.3em] text-[var(--accent)] sm:text-sm"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              HI, I’M
            </motion.p>
            <motion.h1
              className="text-4xl font-semibold tracking-tight sm:text-6xl md:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3, ease: "easeOut" }}
            >
              Iftikhar <span className="text-[var(--accent)]">Ali</span>
            </motion.h1>
            <motion.p
              className="mt-5 text-sm text-[var(--muted)] sm:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Welcome to my portfolio
            </motion.p>
            <motion.div
              aria-hidden="true"
              className="mx-auto mt-8 h-px w-32 origin-left bg-[var(--accent)]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
