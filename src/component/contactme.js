"use client";
import { motion } from "framer-motion";
import { Mail, Instagram, Linkedin } from "lucide-react";
import { Dots } from "@/component/design";

export default function Contactme() {
  return (
    <section className="max-w-7xl relative mx-auto mt-32 px-4">
      {/* Decorative Dots */}
      <Dots position={{ right: "0%", bottom: "80%", smright: "120px", smbottom: "55px" }} />

      {/* Decorative Square Outline */}
      <div className="absolute top-0 left-[-20%] h-32 w-32 border border-[var(--accent)] opacity-70" />

      <div className="rounded-sm overflow-hidden">
        <div className="flex w-full flex-col lg:flex-row gap-0">
          {/* LEFT: Heading + Text */}
          <motion.div
            className="w-full lg:w-2/3 lg:pr-8 pb-6 lg:pb-0 px-4 py-8"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <header className="mb-6">
              <h2 className="flex items-center gap-3 sm:text-4xl text-2xl font-bold">
                <span className="text-[var(--accent)]">#</span>
                <span className="font-mono">contacts</span>
                <span className="hidden sm:inline-block border-t-2 border-[var(--accent)] ml-4 w-48" />
              </h2>
            </header>

            <p className="font-mono text-[15px] text-[var(--text)]/90 leading-relaxed max-w-2xl">
              I’m interested in freelance opportunities. However, if you have any other request or
              question, don’t hesitate to contact me.
            </p>
          </motion.div>

          {/* RIGHT: Contact Card */}
          <motion.div
            className="w-full lg:w-1/3 relative px-4 py-8 flex items-start justify-end"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative">
              <div className="w-[260px] border border-[var(--text)]/30 bg-[var(--bg,#fff)] rounded-sm p-4 shadow-sm text-[14px] font-mono select-none">
                <h4 className="text-sm font-semibold text-[var(--text)] mb-3">
                  Message me here
                </h4>

                <div className="flex flex-col gap-3">
                  <a
                    href="https://www.instagram.com/ifti_ali_ee/"
                    // onClick={(e) => e.preventDefault()}
                    className="flex items-center gap-3 text-[var(--text)]/90 hover:text-[var(--accent)] transition-colors"
                    aria-label="Instagram handle"
                  >
                    <Instagram size={18} aria-hidden />
                    <span className="text-sm break-words">ifti_ali_ee</span>
                  </a>

                  <a
                       href="https://mail.google.com/mail/?view=cm&fs=1&to=ifti.hazara205@gmail.com&su=Freelance%20Inquiry&body=Hi%20Iftikhar,%0A%0AI'd%20like%20to%20discuss%20a%20project%20with%20you."
                    className="flex items-center gap-3 text-[var(--text)]/90 hover:text-[var(--accent)] transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={18} aria-hidden />
                    <span className="text-sm break-words">ifti.hazara205@gmail.com</span>
                  </a>
                  <a
                       href="https://www.linkedin.com/in/iftikhar-ali-61a210340/"
                    className="flex items-center gap-3 text-[var(--text)]/90 hover:text-[var(--accent)] transition-colors"
                    aria-label="Email"
                  >
                    <Linkedin size={18} aria-hidden />
                    <span className="text-sm break-words">Iftikhar ali</span>
                  </a>
                </div>
              </div>

              {/* Decorative Squares */}
              <div className="absolute right-0 -top-3 translate-x-1/2 w-3 h-3 bg-[var(--bg)] border border-[var(--text)]/20 rounded-sm" />
              <div className="absolute right-0 -bottom-3 translate-x-1/2 w-3 h-3 bg-[var(--bg)] border border-[var(--text)]/20 rounded-sm" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


// "use client";
// import { MessageSquare, Mail, Instagram } from "lucide-react";
// import {Dots} from "@/component/design"
// export default function Contactme() {
//   return (
//     <section className="max-w-7xl relative mx-auto mt-32 px-4">
//       <Dots position={{right:"-10%",bottom:"100%",smright:"120px",smbottom:"55px"}}/>
//       <div className="absolute top-0 left-[-20%] h-32 w-32 border border-[var(--accent)]"/>
//       <div className="rounded-sm overflow-hidden">
//         <div className="flex w-full flex-col lg:flex-row gap-0">
//           {/* LEFT: heading + text */}
//           <div className="w-full lg:w-2/3 lg:pr-8 pb-6 lg:pb-0 px-4 py-8">
//             <header className="mb-6">
//               <h2 className="flex items-center gap-3 sm:text-4xl text-2xl font-bold">
//                 <span className="text-[var(--accent)]">#</span>
//                 <span className="font-mono">contacts</span>
//                 {/* remove flex-1 OR w-48 — don't use both */}
//                 <span className="hidden sm:inline-block border-t-2 border-[var(--accent)] ml-4 w-48" />
//               </h2>
//             </header>

//             <p className="font-mono text-[15px] text-[var(--text)]/90 leading-relaxed max-w-2xl">
//               I’m interested in freelance opportunities. However, if you have any other request or question, don’t hesitate to contact me.
//             </p>
//           </div>

//           {/* RIGHT: compact contact card */}
//           <div className="w-full lg:w-1/3 relative px-4 py-8 flex items-start justify-end">
//             <div className="relative">
//               <div className="w-[220px] border border-[var(--text)]/30 bg-[var(--bg,#fff)] rounded-sm p-4 shadow-sm text-[14px] font-mono select-none">
//                 <h4 className="text-sm font-semibold text-[var(--text)] mb-3">Message me here</h4>

//                 <div className="flex flex-col gap-3">
//                   <a
//                     href="#"
//                     onClick={(e) => e.preventDefault()}
//                     className="flex items-center gap-3 text-[var(--text)]/90 hover:text-[var(--accent)] transition-colors"
//                     aria-label="Chat handle"
//                   >
//                     <Instagram size={18} aria-hidden />
//                     <span className="text-sm break-words">!iftikhar#1234</span>
//                   </a>

//                   <a
//                     href="mailto:iftikhar@example.com"
//                     className="flex items-center gap-3 text-[var(--text)]/90 hover:text-[var(--accent)] transition-colors"
//                     aria-label="Email"
//                   >
//                     <Mail size={18} aria-hidden />
//                     <span className="text-sm break-words">iftikhar@example.com</span>
//                   </a>
//                 </div>
//               </div>

//               {/* small decorative square — use transform (does not change layout width) and align to right edge */}
//               <div className="absolute right-0 -top-3 translate-x-1/2 w-3 h-3 bg-[var(--bg)] border border-[var(--text)]/20 rounded-sm" />
//               <div className="absolute right-0 -bottom-3 translate-x-1/2 w-3 h-3 bg-[var(--bg)] border border-[var(--text)]/20 rounded-sm" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
