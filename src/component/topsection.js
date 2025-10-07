"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Topsection = () => {
  // Animation variants for reusable control
  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: "easeOut" },
    },
  });

  return (
    <section
      aria-label="Hero Section"
      className="min-h-[78vh] flex items-center bg-[var(--bg)] text-[var(--text)]"
    >
      <div className="max-w-7xl mx-auto w-full px-6 md:py-12 py-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* LEFT: Text */}
          <div className="md:col-span-7 order-1 md:order-1 text-left space-y-2">
            <motion.p
              variants={fadeUp(0.1)}
              initial="hidden"
              animate="visible"
              className="text-sm font-mono text-[var(--accent)] mb-2"
            >
              Hi, I’m
            </motion.p>

            <motion.h1
              variants={fadeUp(0.3)}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
            >
              Iftikhar Ali
            </motion.h1>

            <motion.h2
              variants={fadeUp(0.5)}
              initial="hidden"
              animate="visible"
              className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--accent)]/90 mt-1"
            >
              Full-Stack Web Developer
            </motion.h2>

            <motion.p
              variants={fadeUp(0.7)}
              initial="hidden"
              animate="visible"
              className="mt-5 max-w-2xl mx-auto md:mx-0 text-base sm:text-lg text-[var(--text)]/80 leading-relaxed"
            >
              I believe great software isn’t just built — it’s crafted with{" "}
              <span className="text-[var(--accent)] font-medium">precision</span>
              ,{" "}
              <span className="text-[var(--accent)] font-medium">empathy</span>,
              and{" "}
              <span className="text-[var(--accent)] font-medium">imagination</span>.
            </motion.p>

            {/* CTA (visible only on md and above) */}
            <motion.div
              variants={fadeUp(1.4)}
              initial="hidden"
              animate="visible"
              className="mt-8 hidden md:flex justify-start"
            >
              <Link href="/contact" className="group relative inline-flex">
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  className="px-6 py-2.5 rounded-sm border text-[var(--text)] hover:text-[var(--bg)] hover:bg-[var(--accent)] border-[var(--accent)] duration-300"
                >
                  Let’s Work Together
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT: Image */}
          <motion.div
            variants={fadeUp(1.1)}
            initial="hidden"
            animate="visible"
            className="md:col-span-5 flex justify-center md:justify-end order-2 md:order-2 md:mt-0"
          >
            <motion.div className="relative w-[220px] sm:w-[280px] md:w-[340px] aspect-[3/4]">
              <div className="w-full bg-transparent z-2">
                <Image
                  src="/iftikhar.png"
                  alt="Iftikhar Ali"
                  fill
                  sizes="(max-width: 768px) 70vw, 340px"
                  className="object-cover z-2"
                  priority
                />
                <div className="absolute h-10 w-full text-center flex gap-3 items-center justify-center border border-[var(--text)]/80 bottom-[-40px]">
                  <div className="h-3 w-3 bg-[var(--accent)] ml-[-30px]" />
                  <span>iftikhar ali</span>
                </div>

                {/* Dots Grid */}
                <div className="absolute w-fit mx-auto p-10 z-3 md:bottom-0 md:right-0 sm:bottom-[-20px] sm:right-[-10px] bottom-[-30px] right-[-20px]">
                  <div className="grid grid-cols-5 grid-rows-6 md:gap-[12px] gap-[9px]">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-1 h-1 bg-[var(--accent)] rounded-full"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative grid frame */}
              <div className="max-w-md mx-auto p-6 absolute sm:top-12 sm:left-[-48px] top-10 left-[-60px] z-1">
                <div className="relative w-[154px] h-[154px] grid grid-cols-4 grid-rows-4">
                  <div></div>
                  <div></div>
                  <div className="border-t-2 border-l-2 border-[var(--accent)]"></div>
                  <div className="border-t-2 border-r-2 border-[var(--accent)]"></div>
                  <div className="border-t-2 border-l-2 border-[var(--accent)]"></div>
                  <div className="border-t-2 border-[var(--accent)]"></div>
                  <div className="border-t-2 border-r-2 border-l border-[var(--accent)]"></div>
                  <div className="border-r-2 border-[var(--accent)]"></div>
                  <div className="border-l-2 border-[var(--accent)]"></div>
                  <div className="border-t-2 border-l-2 border-b-2 border-[var(--accent)]"></div>
                  <div className="border-b-2 border-l-2 border-t-2 border-[var(--accent)]"></div>
                  <div className="border-r-2 border-b-2 border-[var(--accent)]"></div>
                  <div className="border-l-2 border-b-2 border-[var(--accent)]"></div>
                  <div className="border-b-2 border-[var(--accent)]"></div>
                  <div className="border-l-2 border-[var(--accent)]"></div>
                  <div></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Topsection;


// "use client";
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";

// const Topsection = () => {
//   return (
//     <section
//       aria-label="Hero Section"
//       className="min-h-[78vh] flex items-center bg-[var(--bg)] text-[var(--text)]"
//     >
//       <div className="max-w-7xl mx-auto w-full px-6 md:py-12 py-4">
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
//           {/* LEFT: Text */}
//           <motion.div
//             className="md:col-span-7 order-1 md:order-1 text-left"
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//           >
//             <p className="text-sm font-mono text-[var(--accent)] mb-2">
//               Hi, I’m
//             </p>

//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
//               Iftikhar Ali
//             </h1>

//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--accent)]/90 mt-1">
//               Full-Stack Web Developer
//             </h2>

//             <p className="mt-5 max-w-2xl mx-auto md:mx-0 text-base sm:text-lg text-[var(--text)]/80 leading-relaxed">
//               I believe great software isn’t just built — it’s crafted with{" "}
//               <span className="text-[var(--accent)] font-medium">
//                 precision
//               </span>
//               ,{" "}
//               <span className="text-[var(--accent)] font-medium">empathy</span>,
//               and{" "}
//               <span className="text-[var(--accent)] font-medium">
//                 imagination
//               </span>
//               .
//             </p>

//             {/* CTA (visible only on md and above) */}
//             <div className="mt-8 hidden md:flex justify-start">
//               <Link href="#contact" className="group relative inline-flex">
//                 <motion.button
//                   whileTap={{ scale: 0.97 }}
//                   className="px-6 py-2.5 rounded-sm border text-[var(--text)] hover:text-[var(--bg)] hover:bg-[var(--accent)]  border-[var(--accent)]  duration-300"
//                 >
//                   Let’s Work Together
//                 </motion.button>
//               </Link>
//             </div>
//           </motion.div>

//           {/* RIGHT: Image */}
//           <motion.div
//             className="md:col-span-5 flex justify-center md:justify-end order-2 md:order-2  md:mt-0"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.1 }}
//           >
//             <motion.div className="relative  w-[220px] sm:w-[280px] md:w-[340px]   aspect-[3/4]   ">
//               <div className="w-full bg-transparent z-2">
//                 <Image
//                   src="/iftikhar.png"
//                   alt="Iftikhar Ali"
//                   fill
//                   sizes="(max-width: 768px) 70vw, 340px"
//                   className="object-cover  z-2"
//                   priority
//                 />
//                 <div className="absolute h-10 w-full text-center  flex gap-3 items-center justify-center border border-[var(--text)]/80 bottom-[-40px]">
//                 <div className="h-3 w-3 bg-[var(--accent)] ml-[-30px]"/>
//                 <span>
//                   iftikhar ali
//                 </span>
//                 </div>
//                 <div className="absolute w-fit mx-auto p-10 z-3 md:bottom-0 md:right-0 sm:bottom-[-20px] sm:right-[-10px] bottom-[-30px] right-[-20px]">
//                   <div className="grid grid-cols-5 grid-rows-6 md:gap-[12px] gap-[9px]">
//                     {Array.from({ length: 25 }).map((_, i) => (
//                       <div
//                         key={i}
//                         className="w-1 h-1 bg-[var(--accent)] rounded-full"
//                       ></div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               {/*  */}
//               <div className="max-w-md mx-auto p-6 absolute sm:top-12 sm:left-[-48px] top-10 left-[-60px] z-1">
//                 <div className="relative w-[154px] h-[154px] grid grid-cols-4 grid-rows-4">
//                   {/* Row 1 */}
//                   <div></div> {/* removed top-left 1 */}
//                   <div></div> {/* removed top-left 2 */}
//                   <div className="border-t-2  border-l-2 border-[var(--accent)]"></div>
//                   <div className="border-t-2 border-r-2 border-[var(--accent)]"></div>
//                   {/* Row 2 */}
//                   <div className="border-t-2 border-l-2 border-[var(--accent)]"></div>
//                   <div className="border-t-2 border-[var(--accent)]"></div>
//                   <div className="border-t-2 border-r-2 border-l border-[var(--accent)]"></div>
//                   <div className="border-r-2 border-[var(--accent)]"></div>
//                   {/* Row 3 */}
//                   <div className="border-l-2 border-[var(--accent)]"></div>
//                   <div className="border-t-2 border-l-2 border-b-2 border-[var(--accent)]"></div>
//                   <div className="border-b-2 border-l-2 border-t-2 border-[var(--accent)]"></div>
//                   <div className="border-r-2 border-b-2 border-[var(--accent)]"></div>
//                   {/* Row 4 */}
//                   <div className="border-l-2 border-b-2 border-[var(--accent)]"></div>
//                   <div className="border-b-2   border-[var(--accent)]"></div>
//                   <div className="border-l-2 border-[var(--accent)]"></div>{" "}
//                   {/* removed bottom-right 3 */}
//                   <div></div> {/* removed bottom-right 4 */}
//                 </div>
//               </div>
//               {/*  */}

//               {/* Optional gradient overlay */}
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Topsection;
