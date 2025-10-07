"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      id: 3,
      src: "/straight-edge.png",
      alt: "Barber booking website",
      title: "Straight Edge",
      description: "Barber website for easy appointment booking.",
      link: "https://straight-edge.vercel.app/customer",
      language: ["Next.js", "MongoDB", "Node.js", "Tailwind CSS"],
    },
    {
      id: 1,
      src: "/xaviquehero.png",
      alt: "An Ecommerce website",
      title: "Xavique",
      description: "E-commerce website for buying and selling products.",
      link: "https://xavique.vercel.app/",
      language: ["Next.js", "MongoDB", "Node.js", "Tailwind CSS"],
    },
    {
      id: 2,
      src: "/charsi.png",
      alt: "Blog website logo",
      title: "Charsi",
      description: "A full-stack Blog platform where you can read and write posts.",
      link: "https://charsi-sage.vercel.app/userdashboard",
      language: ["Next.js", "MongoDB", "Node.js", "Tailwind CSS"],
    },
  ];

  // animation variants
  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: "easeOut" },
    },
  });

  return (
    <section className="flex flex-col w-full mx-4 max-w-7xl">
      {/* Header */}
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-4 w-full">
          {/* Heading */}
          <motion.h2
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="sm:text-4xl text-2xl font-bold flex items-center gap-2 whitespace-nowrap"
          >
            <span className="text-[var(--accent)]">#</span>
            <span>projects</span>
          </motion.h2>

          {/* Animated line */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-[60%] h-[1px] bg-[var(--accent)] border border-[var(--accent)] rounded-full origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
            />
          </motion.div>
        </div>

        {/* View All Button */}
        <Link href={"/work"}>
        <motion.button
          variants={fadeUp(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="relative md:flex hidden text-[var(--accent)] text-md sm:text-lg ml-6 whitespace-nowrap group transition-transform duration-300 hover:-translate-y-[2px]"
          >
          view all →
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[var(--accent)] transition-all duration-500 group-hover:w-full"></span>
        </motion.button>
          </Link>
      </div>

      {/* Projects Grid */}
      <motion.div
        className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2, delayChildren: 0.6 },
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
                src={project.src}
                alt={project.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Card Content */}
            <div className="p-5 flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-[var(--text)]">
                {project.title}
              </h3>
              <p className="text-[var(--text)]/80 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {project.language.map((lang, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded-full border border-[var(--accent)]/40 text-[var(--accent)]"
                  >
                    {lang}
                  </span>
                ))}
              </div>

              {/* Live Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-[136px] inline-flex items-center justify-center px-6 py-2 
                           border text-[var(--accent)] font-medium rounded-sm 
                           cursor-pointer transition-all duration-300 border-[var(--accent)] 
                           hover:-translate-y-[2px] hover:bg-[var(--accent)] hover:text-[var(--bg)]"
              >
                Live &laquo;--&raquo;
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;

// "use client";
// import React from "react";
// import Image from "next/image";

// const Projects = () => {
//   const projects = [
//     {
//       id: 3,
//       src: "/straight-edge.png",
//       alt: "Barber booking website",
//       title: "Straight Edge",
//       description: "Barber website for easy appointment booking.",
//       link: "https://straight-edge.vercel.app/customer",
//       language: ["Next.js", "MongoDB", "Node.js", "Tailwind CSS"],
//     },
//     {
//       id: 1,
//       src: "/xaviquehero.png",
//       alt: "An Ecommerce website",
//       title: "Xavique",
//       description: "E-commerce website for buying and selling products.",
//       link: "https://xavique.vercel.app/",
//       language: ["Next.js", "MongoDB", "Node.js", "Tailwind CSS"],
//     },
//     {
//       id: 2,
//       src: "/charsi.png",
//       alt: "Blog website logo",
//       title: "Charsi",
//       description: "A full-stack Blog platform where you can read and write posts.",
//       link: "https://charsi-sage.vercel.app/userdashboard",
//       language: ["Next.js", "MongoDB", "Node.js", "Tailwind CSS"],
//     }
//   ];

//   return (
//     <div className="flex  flex-col w-full mx-4 max-w-7xl">
//       {/* Header */}
     
//       <div className="flex w-full items-center justify-between">
//         <div className="flex items-center gap-4 w-full">
//           <h2 className="sm:text-4xl text-2xl font-bold flex items-center gap-2 whitespace-nowrap">
//             <span className="text-[var(--accent)]">#</span>
//             <span>projects</span>
//           </h2>

//           <div className="flex-1">
//             <div className="w-[60%] h-[2px] bg-[var(--accent)] border border-[var(--accent)] rounded-full" />
//           </div>
//         </div>

//         {/* View All Button */}
//         <button className="relative text-[var(--accent)] text-md sm:text-lg ml-6 whitespace-nowrap group transition-transform duration-300 hover:-translate-y-[2px]">
//           view all →
//           <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[var(--accent)] transition-all duration-500 group-hover:w-full"></span>
//         </button>
//       </div>

//       {/* Projects Grid */}
//       <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
//         {projects.map((project, index) => (
//           <div
//             key={project.id}
//             className="group relative bg-[var(--bg)] border border-[var(--text)]/10 
//                        rounded-xl overflow-hidden transition-all duration-500 
//                        hover:-translate-y-2 hover:shadow-[0_6px_20px_-8px_var(--accent)]/30
//                        opacity-0 animate-fadeUp"
//             style={{ animationDelay: `${index * 0.1}s` }}
//           >
//             {/* Image */}
//             <div className="relative w-full h-52 overflow-hidden">
//               <Image
//                 src={project.src}
//                 alt={project.alt}
//                 fill
//                 className="object-cover transition-transform duration-700 group-hover:scale-110"
//               />
//             </div>

//             {/* Card Content */}
//             <div className="p-5 flex flex-col gap-3">
//               <h3 className="text-xl font-semibold text-[var(--text)]">
//                 {project.title}
//               </h3>
//               <p className="text-[var(--text)]/80 text-sm leading-relaxed">
//                 {project.description}
//               </p>

//               <div className="flex flex-wrap gap-2 mt-2">
//                 {project.language.map((lang, idx) => (
//                   <span
//                     key={idx}
//                     className="px-3 py-1 text-xs rounded-full border border-[var(--accent)]/40 text-[var(--accent)]"
//                   >
//                     {lang}
//                   </span>
//                 ))}
//               </div>

//               {/* Live Button */}
//               <a
//                 href={project.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="mt-4 w-[136px] inline-flex items-center justify-center px-6 py-2 
//                            border text-[var(--accent)] font-medium rounded-sm 
//                            cursor-pointer transition-all duration-300 border-[var(--accent)] 
//                            hover:-translate-y-[2px] hover:bg-[var(--accent)] hover:text-[var(--bg)]"
//               >
//                 Live &laquo;--&raquo;
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;
