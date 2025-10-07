"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Design, Dots } from "@/component/design";

export default function Aboutme() {
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

  // Framer Motion Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <section className="max-w-7xl relative mx-auto mt-32 px-4">
      {/* Decorative elements */}
      {isWide && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Dots
            position={{ right: "30%", bottom: "50%", smright: "120px", smbottom: "55px" }}
          />
          <Dots
            position={{ right: "0", bottom: "0", smright: "120px", smbottom: "55px" }}
          />
          <Dots
            position={{ right: "60px", bottom: "30%", smright: "120px", smbottom: "55px" }}
          />
          <Design position={{ left: "-14%", top: "30%", smtop: "15%", smleft: "45%" }} />
        </motion.div>
      )}

      {/* Outer box */}
      <div className="rounded-sm overflow-hidden">
        <div className={`flex w-full gap-0 md:gap-0 ${isWide ? "flex-row" : "flex-col"}`}>
          {/* LEFT TEXT SECTION */}
          <motion.div
            className={`${isWide ? "w-1/2 pr-8" : "w-full pb-6"} px-4 py-8`}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
          >
            {/* Header */}
            <motion.header className="mb-6" variants={fadeUp}>
              <h2 className="flex items-center gap-3 sm:text-4xl text-2xl font-bold">
                <span className="text-[var(--accent)]">#</span>
                <span className="font-mono">about-me</span>
                <motion.span
                  className="inline-block flex-1 border-t-2 border-[var(--accent)] ml-4 w-48 origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </h2>
            </motion.header>

            {/* Description */}
            <motion.div
              className="font-mono text-[15px] text-[var(--text)] leading-relaxed space-y-4 max-w-2xl"
              variants={container}
            >
              <motion.p variants={fadeUp}>
                Hello, I’m <strong>Iftikhar Ali</strong> — a full-stack web developer focused on
                modern, responsive experiences using Next.js and Node.js.
              </motion.p>
              <motion.p variants={fadeUp}>
                I build production-level applications with Next.js, MongoDB, Mongoose, Tailwind
                CSS, and robust authentication (NextAuth / OAuth). I love crafting performant UIs,
                server-side logic, and reliable APIs.
              </motion.p>
              <motion.p variants={fadeUp}>
                I’m driven by clean architecture, accessible UI, and developer ergonomics. I keep
                projects maintainable by using best practices and automated workflows.
              </motion.p>
            </motion.div>

            {/* Button */}
            <motion.a
              href="/about-me"
              className="inline-block mt-6 px-4 py-2 border border-[var(--accent)] text-[var(--accent)] font-medium rounded-sm hover:bg-[var(--accent)] hover:text-white transition-all duration-300"
              variants={fadeUp}
            >
              Read more →
            </motion.a>
          </motion.div>

          {/* RIGHT IMAGE SECTION */}
         <motion.div
  className={`${isWide ? "w-1/2" : "w-full"} relative px-4 py-6 flex items-center justify-center`}
  initial={{ opacity: 0, y: 60 }}       // 👈 start lower and invisible
  whileInView={{ opacity: 1, y: 0 }}    // 👈 move upward and appear
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
>
  {/* Image */}
  <div className="relative group w-[280px] sm:w-[320px] md:w-[380px] aspect-[3/4] rounded-xl overflow-hidden">
    <Image
      src="/iftikhar.png"
      alt="Iftikhar Ali"
      width={380}
      height={500}
      className="object-cover transition-transform duration-700 group-hover:scale-105"
      priority
    />
  </div>

  {/* Name Tag */}
  <motion.div
    className="absolute h-10 w-full text-center flex gap-3 items-center justify-center border border-[var(--text)]/80 bottom-[-40px] bg-[var(--bg,#fff)]"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <div className="h-3 w-3 bg-[var(--accent)] ml-[-30px]" />
    <span className="capitalize">iftikhar ali</span>
  </motion.div>
{/* </motion.div> */}


            {/* Dotted Decoration */}
            <motion.div
              className="absolute w-fit mx-auto p-10 md:bottom-0 md:right-0 sm:bottom-[-20px] sm:right-[-10px] bottom-[-30px] right-[-20px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-5 grid-rows-6 md:gap-[12px] gap-[9px]">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-[var(--accent)] rounded-full" />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { Design, Dots } from "@/component/design";

// export default function Aboutme() {
//   const [isWide, setIsWide] = useState(false);

//   useEffect(() => {
//     if (typeof window === "undefined") return;
//     const mq = window.matchMedia("(min-width: 1120px)");
//     const handler = (e) => setIsWide(e.matches);

//     setIsWide(mq.matches);
//     if (mq.addEventListener) mq.addEventListener("change", handler);
//     else mq.addListener(handler);

//     return () => {
//       if (mq.removeEventListener) mq.removeEventListener("change", handler);
//       else mq.removeListener(handler);
//     };
//   }, []);

//   return (
//     <section className="max-w-7xl relative mx-auto mt-32 px-4">
//       {/* Decorative elements (only when wide) */}
//       {isWide && (
//         <>
//           <Dots
//             position={{
//               right: "30%",
//               bottom: "50%",
//               smright: "120px",
//               smbottom: "55px",
//             }}
//           />
//           <Dots
//             position={{
//               right: "0",
//               bottom: "0",
//               smright: "120px",
//               smbottom: "55px",
//             }}
//           />
//           <Dots
//             position={{
//               right: "60px",
//               bottom: "30%",
//               smright: "120px",
//               smbottom: "55px",
//             }}
//           />
//           <Design
//             position={{ left: "-14%", top: "30%", smtop: "15%", smleft: "45%" }}
//           />
//         </>
//       )}

//       {/* Outer box */}
//       <div className="rounded-sm overflow-hidden">
//         <div className={`flex w-full gap-0 md:gap-0 ${isWide ? "flex-row" : "flex-col"}`}>
//           {/* LEFT: text column */}
//           <div
//             className={`${
//               isWide ? "w-1/2 pr-8" : "w-full pb-6"
//             } px-4 py-8`}
//           >
//               <header className="mb-6">
//               <h2 className="flex items-center gap-3 sm:text-4xl text-2xl font-bold">
//                 <span className="text-[var(--accent)]">#</span>
//                 <span className="font-mono">about-me</span>
//                 <span className="inline-block flex-1 border-t-2 border-[var(--accent)] ml-4 w-48" />
//               </h2>
//             </header>
//             {/* <header>
//               <h2 className="flex items-center gap-3 sm:text-4xl text-2xl font-bold">
//                 <span className="text-[var(--accent)]">#</span>
//                 <span className="font-mono">about-me</span>
//               </h2>

//               <div className="w-48 h-[2px] bg-[var(--accent)] mt-4 mb-6" />
//             </header> */}

//             <div className="font-mono text-[15px] text-[var(--text)] leading-relaxed space-y-4 max-w-2xl">
//               <p>
//                 Hello, I’m <strong>Iftikhar Ali</strong> — a full-stack web
//                 developer focused on modern, responsive experiences using
//                 Next.js and Node.js.
//               </p>

//               <p>
//                 I build production-level applications with Next.js, MongoDB,
//                 Mongoose, Tailwind CSS, and robust authentication (NextAuth /
//                 OAuth). I love crafting performant UIs, server-side logic, and
//                 reliable APIs.
//               </p>

//               <p>
//                 I’m driven by clean architecture, accessible UI, and developer
//                 ergonomics. I keep projects maintainable by using best
//                 practices and automated workflows.
//               </p>
//             </div>

//             <a
//               href="/about-me"
//               className="inline-block mt-6 px-4 py-2 border border-[var(--accent)] text-[var(--accent)] font-medium rounded-sm hover:bg-[var(--accent,#2b8cff)] hover:text-white transition-all duration-200"
//             >
//               Read more →
//             </a>
//           </div>

//           {/* RIGHT: image column */}
//           <div
//             className={`${
//               isWide ? "w-1/2" : "w-full"
//             } relative px-4 py-6 flex items-center justify-center`}
//           >
//             <div className="relative group w-[280px] sm:w-[320px] md:w-[380px] aspect-[3/4] rounded-xl overflow-hidden ">
//               <Image
//                 src="/iftikhar.png"
//                 alt="Iftikhar Ali"
//                 width={380}
//                 height={500}
//                 className="object-cover transition-transform duration-500 "
//                 priority
//               />
//             </div>

//             {/* Name Tag */}
//             <div className="absolute h-10 w-full text-center flex gap-3 items-center justify-center border border-[var(--text)]/80 bottom-[-40px] bg-[var(--bg,#fff)]">
//               <div className="h-3 w-3 bg-[var(--accent)] ml-[-30px]" />
//               <span className="capitalize">iftikhar ali</span>
//             </div>

//             {/* Dotted Decoration */}
//             <div className="absolute w-fit mx-auto p-10 md:bottom-0 md:right-0 sm:bottom-[-20px] sm:right-[-10px] bottom-[-30px] right-[-20px]">
//               <div className="grid grid-cols-5 grid-rows-6 md:gap-[12px] gap-[9px]">
//                 {Array.from({ length: 25 }).map((_, i) => (
//                   <div
//                     key={i}
//                     className="w-1 h-1 bg-[var(--accent)] rounded-full"
//                   ></div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
