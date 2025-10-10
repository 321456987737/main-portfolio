"use client"
import React from 'react'
import { Github, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
const layoutwraper = () => {
  return (
     <div className="hidden [@media(min-width:1400px)]:flex z-51 absolute left-0 top-0 flex-col justify-center pl-4 items-center">
            <motion.div
              className="h-[160px] w-[2px] bg-[var(--accent)] rounded-full origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            />

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col justify-center items-center gap-6 pt-2"
            >
              {[
                {
                  href:"https://github.com/321456987737",
                  Icon: Github,
                },
                {
                  href:"https://www.linkedin.com/in/iftikhar-ali-61a210340/",
                  Icon: Linkedin,
                },
                {
                  href:"https://www.instagram.com/ifti_ali_ee/",
                  Icon: Instagram,
                },
              ].map(({ href, Icon }, i) => (
                <Link
                  key={i}
                  href={href}
                  target="_blank"
                  className="relative group transition-all"
                >
                  <Icon
                    size={24}
                    className="text-[var(--text)] group-hover:text-[var(--accent)] transition-all"
                  />
                  <span className="absolute inset-0 scale-0 group-hover:scale-100 rounded-full bg-[var(--accent)]/10 transition-transform duration-300"></span>
                </Link>
              ))}
            </motion.div>
          </div>
  )
}

export default layoutwraper