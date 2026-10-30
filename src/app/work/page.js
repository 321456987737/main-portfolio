"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Projects from "@/component/projects";
import { Design, Dots } from "@/component/design";

const projects = [
  {
    id: 1,
    title: "BikeShack",
    category: "E-commerce",
    description: "A full-stack bike store — browse the catalog, compare specs and check out through a secure cart flow.",
    image: "/projects/bikeshack.png",
    live: "https://bikeshack.vercel.app/",
    stack: ["Next.js", "Mongodb", "Node.js", "Tailwind CSS"],
    featured: true,
  },
  {
    id: 2,
    title: "Straight Edge",
    category: "Booking",
    description: "Barber shop website with a simple customer flow for booking appointments and managing schedules.",
    image: "/projects/straight-edge.png",
    live: "https://straight-edge.vercel.app/customer",
    stack: ["Next.js", "Mongodb", "Node.js", "Tailwind CSS"],
    featured: true,
  },
  {
    id: 3,
    title: "Xavique",
    category: "E-commerce",
    description: "E-commerce platform for buying and selling products, with product pages, cart and order management.",
    image: "/projects/xaviquehero.png",
    live: "https://xavique.vercel.app/",
    stack: ["Next.js", "Mongodb", "Node.js", "Tailwind CSS"],
    featured: true,
  },
  {
    id: 4,
    title: "Charsi",
    category: "Blog",
    description: "A full-stack blog platform where users can read posts, write their own and manage a personal dashboard.",
    image: "/projects/charsi.png",
    live: "https://charsi-sage.vercel.app/userdashboard",
    stack: ["Next.js", "Mongodb", "Node.js", "Tailwind CSS"],
    featured: false,
  },
  {
    id: 5,
    title: "Arvachi",
    category: "Restaurant",
    description: "A modern cafe website with a warm visual identity, menu showcase and location details.",
    image: "/projects/arvachi.png",
    live: "https://arvachi.vercel.app/",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    featured: false,
  },
  {
    id: 6,
    title: "NoPlates",
    category: "Restaurant",
    description: "A responsive food & dining website focused on clean layout, fast loading and mobile-first browsing.",
    image: "/projects/noplates.png",
    live: "https://noplates2.vercel.app/",
    stack: ["Next.js", "Tailwind CSS", "React"],
    featured: false,
  },
  {
    id: 7,
    title: "Prince Baker",
    category: "Bakery",
    description: "Bakery website showcasing cakes, pastries and daily specials with an elegant product-first design.",
    image: "/projects/prince-baker.png",
    live: "https://prince-baker-okzu.vercel.app/",
    stack: ["Next.js", "Tailwind CSS", "React"],
    featured: false,
  },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  },
});

const Page = () => {
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 1120px)");
    const handler = (e) => setIsWide(e.matches);
    setIsWide(mq.matches);
    if (mq.addEventListener) mq.addEventListener("change", handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler);
      else mq.removeListener(handler);
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center md:py-16 py-8">
      {/* Main Featured Projects */}
      {/* <div className="z-4">
        <Projects />
      </div> */}

      {isWide && (
        <>
          <Dots position={{ right: "30%", bottom: "50%", smright: "120px", smbottom: "55px" }} />
          <Dots position={{ right: "0", bottom: "0", smright: "120px", smbottom: "55px" }} />
          <Dots position={{ right: "60px", bottom: "30%", smright: "120px", smbottom: "55px" }} />
          <Dots position={{ right: "60px", bottom: "-60%", smright: "120px", smbottom: "55px" }} />
          <Dots position={{ right: "90%", bottom: "-80%", smright: "120px", smbottom: "55px" }} />
          <div className="absolute w-32 h-32 top-[100%] left-[-32px] z-[-1] border-2 border-[var(--accent)]" />
          <Design position={{ left: "0px", top: "30%", smtop: "15%", smleft: "45%" }} />
        </>
      )}

      {/* All Projects - Same card style as Projects component */}
      <div className="flex flex-col w-full max-w-6xl md:mt-32 mt-14 z-10 px-4">
        {/* Header */}
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-4 w-full">
            <motion.h2
              variants={fadeUp(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="sm:text-4xl text-2xl font-bold flex items-center gap-2 whitespace-nowrap"
            >
              <span className="text-[var(--accent)]">#</span>
              <span className="text-[var(--text)]">all-projects</span>
            </motion.h2>

            <motion.div className="flex-1" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <motion.div
                className="w-[60%] h- bg-[var(--accent)] border border-[var(--accent)] rounded-full origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, amount: 0.5 }}
              />
            </motion.div>
          </div>
        </div>

        {/* Cards Grid - SAME STYLE AS FIRST COMPONENT */}
        <motion.div
          className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 0.3 },
            },
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUp(0)}
              className="group relative bg-[var(--bg)] border border-[var(--text)]/10 
                         rounded-xl overflow-hidden transition-all duration-500 
                         hover:-translate-y-2 hover:shadow-[0_6px_20px_-8px_var(--accent)]/30"
            >
              {/* Image */}
              <div className="relative w-full h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute top-3 left-3 px-3 py-1 text-[12px] rounded-[8px] bg-[var(--bg)] border border-[var(--accent)]/40 text-[var(--accent)] uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-[var(--text)]">
                  {project.title}
                </h3>
                <p className="text-[var(--text)]/80 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full border border-[var(--accent)]/40 text-[var(--accent)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w- inline-flex items-center justify-center px-6 py-2 
                             border text-[var(--accent)] font-medium rounded-sm cursor-pointer 
                             transition-all duration-300 border-[var(--accent)] 
                             hover:-translate-y- hover:bg-[var(--accent)] hover:text-[var(--bg)] 
                             whitespace-nowrap"
                >
                  Live &laquo;--&raquo;
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Page;