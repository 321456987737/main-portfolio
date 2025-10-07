"use client";
import React from "react";
import { motion } from "framer-motion";
import { Design, Dots } from "@/component/design";

// Data
const skills = [
  { title: "Languages", items: ["HTML", "CSS", "JavaScript"] },
  { title: "Frameworks / Frontend", items: ["Next.js", "React", "Tailwind CSS"] },
  { title: "Backend / Runtime", items: ["Node.js", "Express.js", "NestJS"] },
  { title: "Databases", items: ["MongoDB", "Mongoose"] },
  { title: "Auth & Tools", items: ["NextAuth (Google)", "JWT", "Docker"] },
  { title: "Other", items: ["EJS", "Framer Motion", "Zustand"] },
];

// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Skills() {
  return (
    <section
      aria-labelledby="skills-heading"
      className="flex flex-col w-full max-w-7xl mx-auto mt-32 px-4"
    >
      {/* Header */}
      <motion.div
        className="flex w-full items-center justify-between mb-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="flex items-center gap-4 w-full">
          <motion.h2
            id="skills-heading"
            className="sm:text-4xl text-2xl font-bold flex items-center gap-2 whitespace-nowrap"
            variants={fadeUp}
          >
            <span className="text-[var(--accent)]">#</span>
            <span>Skills</span>
          </motion.h2>

          <motion.div className="flex-1" variants={fadeUp}>
            <motion.div
              className="w-[40%] h-[2px] bg-[var(--accent)] rounded-full origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Main layout */}
      <motion.div
        className="flex flex-col md:flex-row gap-4 w-full"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* LEFT - decorative */}
        <motion.div
          className="relative md:w-1/2 w-full h-[400px] overflow-hidden rounded-md bg-[var(--bg)]"
          variants={fadeUp}
        >
          <div className="absolute right-10 top-10 h-24 w-24 border border-[var(--accent)] rounded-sm" />
          <div className="absolute bottom-8 right-4 h-16 w-16 border border-[var(--accent)] rounded-sm" />

          <Dots
            position={{
              right: "120px",
              bottom: "55px",
              smright: "120px",
              smbottom: "55px",
            }}
          />
          <Dots
            position={{
              right: "80%",
              bottom: "60%",
              smright: "80%",
              smbottom: "60%",
            }}
          />
          <Design
            position={{
              left: "10%",
              top: "30%",
              smtop: "15%",
              smleft: "45%",
            }}
          />
        </motion.div>

        {/* RIGHT - skill cards grid */}
        <motion.div
          className="w-full md:w-1/2 grid gap-x-6 gap-y-8"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
          variants={containerVariants}
        >
          {skills.map((card, idx) => (
            <motion.article
              key={card.title}
              aria-labelledby={`skill-${idx}`}
              tabIndex={0}
              className="border border-[var(--text)]/10 rounded-sm overflow-hidden bg-white min-h-[110px] p-0
                         focus:outline-none focus-visible:ring-2 transition-all focus-visible:ring-[var(--accent)]/30
                         hover:-translate-y-2 duration-250 hover:shadow-[0_8px_20px_-8px_var(--accent)]/30"
              variants={fadeUp}
            >
              <header className="px-5 py-3 border-b border-[var(--text)]/10 bg-white">
                <h3 id={`skill-${idx}`} className="font-bold text-lg font-sans">
                  {card.title}
                </h3>
              </header>

              <div className="px-5 py-6 bg-white">
                <ul className="flex flex-wrap gap-3 font-mono text-[15px] text-[#4b5665] leading-relaxed">
                  {card.items.map((it) => (
                    <li key={it} className="inline-block whitespace-nowrap">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

// // components/Skills.jsx
// "use client";
// import React from "react";
// import { Design, Dots } from "@/component/design"; // ensure these are client components and accept united values

// const skills = [
//   { title: "Languages", items: ["HTML", "CSS", "JavaScript"] },
//   { title: "Frameworks / Frontend", items: ["Next.js", "React", "Tailwind CSS"] },
//   { title: "Backend / Runtime", items: ["Node.js", "Express.js", "NestJS"] },
//   { title: "Databases", items: ["MongoDB", "Mongoose"] },
//   { title: "Auth & Tools", items: ["NextAuth (Google)", "JWT", "Docker"] },
//   { title: "Other", items: ["EJS", "Framer Motion", "Zustand"] },
// ];

// export default function Skills() {
//   return (
//     <section
//       aria-labelledby="skills-heading"
//       className="flex flex-col w-full max-w-7xl mx-auto mt-32 px-4"
//     >
//       {/* Header */}
//       <div className="flex w-full items-center justify-between mb-8">
//         <div className="flex items-center gap-4 w-full">
//           <h2
//             id="skills-heading"
//             className="sm:text-4xl text-2xl font-bold flex items-center gap-2 whitespace-nowrap"
//           >
//             <span className="text-[var(--accent)]">#</span>
//             <span>Skills</span>
//           </h2>

//           <div className="flex-1">
//             <div className="w-[40%] h-[2px] bg-[var(--accent)] rounded-full" />
//           </div>
//         </div>
//       </div>

//       {/* Main layout */}
//       <div className="flex flex-col md:flex-row gap-4 w-full">
//         {/* LEFT - decorative */}
//         <div
//           className="relative md:w-1/2 w-full h-[400px] overflow-hidden rounded-md bg-[var(--bg)]"
//           aria-hidden="true"
//         >
//           {/* static shapes */}
//           <div className="absolute right-10 top-10 h-24 w-24 border border-[var(--accent)] rounded-sm" />
//           <div className="absolute bottom-8 right-4 h-16 w-16 border border-[var(--accent)] rounded-sm" />

//           {/* Dots & Design - pass values WITH units (e.g. "120px" or "15%") */}
//           <Dots position={{ right: "120px", bottom: "55px", smright: "120px", smbottom: "55px" }} />
//           <Dots position={{ right: "80%", bottom: "60%", smright: "80%", smbottom: "60%" }} />
//           <Design position={{ left: "10%", top: "30%", smtop: "15%", smleft: "45%" }} />
//         </div>

//         {/* RIGHT - skill cards grid */}
//         <div className="w-full md:w-1/2 ">
//           <div
//             className="grid gap-x-6 gap-y-8 h-full"
//             style={{
//               gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
//             }}
//           >
//             {skills.map((card, idx) => (
//               <article
//                 key={card.title}
//                 aria-labelledby={`skill-${idx}`}
//                 tabIndex={0}
//                 className="border  border-[var(--text)]/10  rounded-sm overflow-hidden bg-white min-h-[110px] p-0
//                            focus:outline-none focus-visible:ring-2 transition-all focus-visible:ring-[var(--accent)]/30
//                             hover:-translate-y-2 duration-250 hover:shadow-[0_8px_20px_-8px_var(--accent)]/30"
//                 >
//                 <header className="px-5 py-3 border-b  border-[var(--text)]/10  bg-white">
//                   <h3 id={`skill-${idx}`} className="font-bold text-lg font-sans">
//                     {card.title}
//                   </h3>
//                 </header>

//                 <div className="px-5 py-6 bg-white">
//                   <ul className="flex flex-wrap gap-3 font-mono text-[15px] text-[#4b5665] leading-relaxed">
//                     {card.items.map((it) => (
//                       <li key={it} className="inline-block whitespace-nowrap">
//                         {it}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
