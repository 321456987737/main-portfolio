"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Instagram } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about-me" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [circlePos, setCirclePos] = useState({ x: 0, y: 0 });
  const btnRef = useRef(null);
  const pathname = usePathname();

  // Capture the hamburger button position for the expanding circle
  useEffect(() => {
    if (btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      setCirclePos({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)]/80 backdrop-blur-sm/50 
    ">
    {/* border-b border-[var(--muted)] */}
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6">
        {/* Logo */}
        <motion.h1
          className="text-[var(--text)] text-xl font-semibold tracking-tight cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <Link href={"/"}>
          Iftikhar<span className="text-[var(--accent)]">.</span>
          </Link>
        </motion.h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-[var(--text)] font-medium">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <motion.li
                key={index}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative list-none group cursor-pointer"
              >
                <Link
                  href={link.href}
                  className={`transition-colors duration-300 ${
                    isActive ? "text-black" : "text-[var(--text)]"
                  }`}
                >
                  {link.name}
                </Link>
                <span
                  className={`absolute left-0 bottom-0 h-[2px] transition-all duration-300 ${
                    isActive
                      ? "w-full bg-[var(--accent)]"
                      : "w-0 group-hover:w-full bg-[var(--accent)]"
                  }`}
                ></span>
              </motion.li>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <div
          ref={btnRef}
          className="md:hidden text-[var(--text)] cursor-pointer relative z-[70]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.div
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-[2px] bg-[var(--text)] mb-1.5"
          />
          <motion.div
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-[2px] bg-[var(--text)] mb-1.5"
          />
          <motion.div
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-[2px] bg-[var(--text)]"
          />
        </div>
      </div>

      {/* Expanding Circle Background */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              scale: 0,
              x: circlePos.x - window.innerWidth / 2,
              y: circlePos.y - window.innerHeight / 2,
              opacity: 0.9,
            }}
            animate={{
              scale: 120,
              x: 0,
              y: 0,
              opacity: 1,
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="fixed top-0 left-0 w-12 h-12 rounded-full bg-white z-[40]"
          />
        )}
      </AnimatePresence>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.15, duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col justify-between px-8 pt-28 pb-8 bg-transparent text-black min-h-screen"
          >
            {/* Menu Links */}
            <div className="flex flex-col items-start space-y-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ delay: 0.25 + index * 0.1 }}
                  onClick={() => setMenuOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`block text-5xl font-semibold tracking-tight ${
                      pathname === link.href
                        ? "text-[var(--accent)]"
                        : "hover:text-[var(--accent)]"
                    }`}
                  >
                    <span className="text-[var(--accent)]">#</span> {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Redesigned Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center items-center gap-10 pb-12 w-full"
            >
              {[
                {
                  href: "https://github.com/",
                  Icon: Github,
                },
                {
                  href: "https://linkedin.com/",
                  Icon: Linkedin,
                },
                {
                  href: "https://instagram.com/",
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
                    size={30}
                    className="text-black group-hover:text-[var(--accent)] transition-all"
                  />
                  <span className="absolute inset-0 scale-0 group-hover:scale-100 rounded-full bg-[var(--accent)]/10 transition-transform duration-300"></span>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;



// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Github, Linkedin, Instagram } from "lucide-react";

// const navLinks = [
//   { name: "Home", href: "/" },
//   { name: "Work", href: "/work" },
//   { name: "About", href: "/about" },
//   { name: "Contact", href: "/contact" },
// ];

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [circlePos, setCirclePos] = useState({ x: 0, y: 0 });
//   const btnRef = useRef(null);
//   const pathname = usePathname();

//   // Capture the hamburger position for animation origin
//   useEffect(() => {
//     if (btnRef.current) {
//       const rect = btnRef.current.getBoundingClientRect();
//       setCirclePos({
//         x: rect.left + rect.width / 2,
//         y: rect.top + rect.height / 2,
//       });
//     }
//   }, []);

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)]/80 backdrop-blur-md border-b border-[var(--muted)]">
//       <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6">
//         {/* Logo */}
//         <motion.h1
//           className="text-[var(--text)] text-xl font-semibold tracking-tight cursor-pointer"
//           whileHover={{ scale: 1.05 }}
//         >
//           Iftikhar<span className="text-[var(--accent)]">.</span>
//         </motion.h1>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex gap-8 text-[var(--text)] font-medium">
//           {navLinks.map((link, index) => {
//             const isActive = pathname === link.href;
//             return (
//               <motion.li
//                 key={index}
//                 whileHover={{ y: -2 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//                 className="relative list-none group cursor-pointer"
//               >
//                 <Link
//                   href={link.href}
//                   className={`transition-colors duration-300 ${
//                     isActive ? "text-black" : "text-[var(--text)]"
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//                 <span
//                   className={`absolute left-0 bottom-0 h-[2px] transition-all duration-300 ${
//                     isActive
//                       ? "w-full bg-[var(--accent)]"
//                       : "w-0 group-hover:w-full bg-[var(--accent)]"
//                   }`}
//                 ></span>
//               </motion.li>
//             );
//           })}
//         </nav>

//         {/* Mobile Menu Button */}
//         <div
//           ref={btnRef}
//           className="md:hidden text-[var(--text)] cursor-pointer relative z-[70]"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <motion.div
//             animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
//             className="w-6 h-[2px] bg-[var(--text)] mb-1.5"
//           />
//           <motion.div
//             animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
//             className="w-6 h-[2px] bg-[var(--text)] mb-1.5"
//           />
//           <motion.div
//             animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
//             className="w-6 h-[2px] bg-[var(--text)]"
//           />
//         </div>
//       </div>

//       {/* Expanding Circle Background */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{
//               scale: 0,
//               x: circlePos.x - window.innerWidth / 2,
//               y: circlePos.y - window.innerHeight / 2,
//               opacity: 0.9,
//             }}
//             animate={{
//               scale: 120,
//               x: 0,
//               y: 0,
//               opacity: 1,
//             }}
//             exit={{ scale: 0, opacity: 0 }}
//             transition={{ type: "spring", stiffness: 80, damping: 15 }}
//             className="fixed top-0 left-0 w-12 h-12 rounded-full bg-white z-[40]"
//           />
//         )}
//       </AnimatePresence>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ delay: 0.15, duration: 0.3 }}
//             className="fixed inset-0 z-[60] flex flex-col items-start justify-between px-6 pt-24 pb-16 bg-transparent text-black"
//           >
//             {/* Menu Links */}
//             <div>
//               {navLinks.map((link, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ x: -50, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   exit={{ x: -50, opacity: 0 }}
//                   transition={{ delay: 0.25 + index * 0.1 }}
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   <Link
//                     href={link.href}
//                     className={`block text-5xl font-semibold mb-6 ${
//                       pathname === link.href
//                         ? "text-[var(--accent)]"
//                         : "hover:text-[var(--accent)]"
//                     }`}
//                   >
//                     <span className="text-[var(--accent)]">#</span> {link.name}
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Social Icons at Bottom Center */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.7 }}
//               className="w-full flex justify-center gap-10 "
//             >
//               <Link
//                 href="https://github.com/"
//                 target="_blank"
//                 className="hover:text-[var(--accent)] transition-all"
//               >
//                 <Github size={28} />
//               </Link>
//               <Link
//                 href="https://linkedin.com/"
//                 target="_blank"
//                 className="hover:text-[var(--accent)] transition-all"
//               >
//                 <Linkedin size={28} />
//               </Link>
//               <Link
//                 href="https://instagram.com/"
//                 target="_blank"
//                 className="hover:text-[var(--accent)] transition-all"
//               >
//                 <Instagram size={28} />
//               </Link>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Navbar;
