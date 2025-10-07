"use client";
import React,{useState,useEffect} from "react";
import { motion } from "framer-motion";
import Projects from "@/component/projects";
import { Design, Dots } from "@/component/design";
const smallProjects = [
  {
    title: "Weather App",
    desc: "A simple weather forecast app using OpenWeather API.",
  },
  {
    title: "Todo Manager",
    desc: "A todo list app with localStorage persistence and filters.",
  },
  {
    title: "QR Generator",
    desc: "Generate QR codes instantly for any text or URL.",
  },
  {
    title: "Calculator",
    desc: "Responsive calculator built using React hooks.",
  },
  {
    title: "Markdown Previewer",
    desc: "Convert markdown text into live formatted HTML instantly.",
  },
  {
    title: "Expense Tracker",
    desc: "Track daily expenses with a minimal and clean interface.",
  },
  {
    title: "Pomodoro Timer",
    desc: "Boost focus using a timer that follows Pomodoro technique.",
  },
  {
    title: "Notes App",
    desc: "Take quick notes and store them using localStorage.",
  },
  {
    title: "Password Generator",
    desc: "Generate strong, customizable passwords instantly.",
  },
  {
    title: "Movie Finder",
    desc: "Search and view movies using the OMDb API.",
  },
  {
    title: "Unit Converter",
    desc: "Convert between units like meters, feet, and miles easily.",
  },
  {
    title: "Random Quote Generator",
    desc: "Display motivational quotes with smooth animations.",
  },
];

// Motion variants
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

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
    <div className="w-full flex flex-col items-center justify-center pt-16">
      {/* Main Projects Section */}
      <div className="z-4">
        <Projects />
      </div>
       {isWide && (
              <>
                <Dots
                  position={{
                    right: "30%",
                    bottom: "50%",
                    smright: "120px",
                    smbottom: "55px",
                  }}
                />
                <Dots
                  position={{
                    right: "0",
                    bottom: "0",
                    smright: "120px",
                    smbottom: "55px",
                  }}
                />
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
                    right: "60px",
                    bottom: "-60%",
                    smright: "120px",
                    smbottom: "55px",
                  }}
                />
                <Dots
                  position={{
                    right: "90%",
                    bottom: "-80%",
                    smright: "120px",
                    smbottom: "55px",
                  }}
                />
                <div className="absolute w-32 h-32 top-[100%] left-[-32px] z-[-1] border-2 border-[var(--accent)]" />
                <div className="absolute w-32 h-32 top-[175%] right-[-32px] z-[-1] border-2 border-[var(--accent)]" />
                <Design
                  position={{ left: "0px", top: "30%", smtop: "15%", smleft: "45%" }}
                />
                {/* <Design
                  position={{ left: "90%", top: "200%", smtop: "15%", smleft: "45%" }}
                /> */}
              </>
            )}
      

      {/* Small Projects Section */}
      <div className="flex flex-col w-full max-w-6xl mt-24 z-100">
        {/* Section Header */}
        <div className="flex mx-4 w-full items-center justify-between">
          <div className="flex items-center gap-4 w-full">
            <h2 className="sm:text-4xl text-2xl font-bold flex items-center gap-2 whitespace-nowrap">
              <span className="text-[var(--accent)]">#</span>
              <span>Small-projects</span>
            </h2>

            <div className="flex-1">
              <div className="w-[60%] h-[2px] bg-[var(--accent)] border border-[var(--accent)] rounded-full" />
            </div>
          </div>
        </div>

        {/* Animated Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
        >
          {smallProjects.map((proj, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{
                y: -4,
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="group relative bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--accent)] transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                {proj.title}
              </h3>
              <div className="border-t border-[var(--border)] mt-3 pt-3">
                <p className="text-[var(--text)]/80 text-sm leading-relaxed">
                  {proj.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
