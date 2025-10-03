// pages/index.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';

export default function DeveloperPortfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollY = window.scrollY;
      
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - sectionHeight / 3 && 
            scrollY < sectionTop + sectionHeight - sectionHeight / 3) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <Head>
        <title>Iftikhar Ali | Developer Portfolio</title>
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600&family=Inter:wght@300;400;500&family=Playfair+Display:wght@400;600&display=swap" rel="stylesheet" />
      </Head>

      <div className="flex min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        {/* Fixed Sidebar */}
        <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} activeSection={activeSection} />
        
        {/* Main Content */}
        <main className="flex-1 ml-20">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ExperienceSection />
          <SkillsSection />
          <BlogSection />
          <ContactSection />
          <Footer />
        </main>
      </div>
    </div>
  );
}

// Sidebar Component
const Sidebar = ({ darkMode, setDarkMode, activeSection }) => {
  const sections = ['Home', 'About', 'Projects', 'Experience', 'Skills', 'Blog', 'Contact'];
  
  return (
    <motion.div 
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      className="fixed left-0 top-0 h-full w-20 bg-slate-50 dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 flex flex-col items-center py-8 z-50"
    >
      {/* Name Initial */}
      <div className="mb-12">
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="font-jetbrains text-white font-semibold text-lg">IA</span>
        </div>
      </div>

      {/* Theme Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="mb-8 p-3 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
      >
        {darkMode ? '🌙' : '☀️'}
      </button>

      {/* Navigation Dots */}
      <div className="flex flex-col space-y-6 mb-8">
        {sections.map((section, index) => (
          <button
            key={section}
            onClick={() => {
              document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              activeSection === index 
                ? 'bg-blue-600 scale-125' 
                : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>

      {/* Social Icons */}
      <div className="mt-auto flex flex-col space-y-4">
        {['github', 'linkedin', 'twitter'].map((platform) => (
          <a
            key={platform}
            href="#"
            className="p-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <SocialIcon platform={platform} />
          </a>
        ))}
      </div>
    </motion.div>
  );
};

// Hero Section with JSON Code Block
const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Senior Full-Stack Developer & Cloud Architect';
  
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);
    
    return () => clearInterval(typing);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center px-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-jetbrains text-4xl lg:text-6xl font-light text-slate-900 dark:text-white"
          >
            Iftikhar Ali
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-inter text-xl lg:text-2xl text-slate-600 dark:text-slate-300 h-12"
          >
            {displayedText}
            <span className="animate-pulse">|</span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="font-inter text-slate-500 dark:text-slate-400 text-lg max-w-2xl"
          >
            Building scalable applications with modern technologies. 
            Specialized in React, Node.js, and cloud infrastructure.
          </motion.p>
        </div>

        {/* JSON Code Block */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-slate-900 dark:bg-slate-800 rounded-2xl p-8 font-jetbrains text-sm lg:text-base shadow-2xl"
        >
          <pre className="text-slate-300 overflow-auto">
            {`{
  "developer": {
    "name": "Iftikhar Ali",
    "role": "Senior Full-Stack Developer",
    "location": "San Francisco, CA",
    "status": "Available for contracts",
    "specialties": [
      "React/Next.js",
      "Node.js",
      "TypeScript",
      "AWS/Azure",
      "System Architecture"
    ],
    "contact": {
      "email": "hello@iftikhar.dev",
      "github": "@iftikhar-ali"
    },
    "currentFocus": "Building scalable SaaS platforms"
  }
}`}
          </pre>
        </motion.div>
      </div>
    </section>
  );
};

// About Section with Draggable Skills
const AboutSection = () => {
  const skills = ['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'GraphQL', 'PostgreSQL'];
  
  return (
    <section id="about" className="min-h-screen flex items-center px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Bio */}
        <div className="space-y-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="font-playfair text-4xl lg:text-5xl font-semibold text-slate-900 dark:text-white"
          >
            About Me
          </motion.h2>
          
          <div className="space-y-4 font-inter text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            <p>
              With over 8 years of experience in software development, I specialize in creating 
              robust, scalable applications that solve real-world problems. My expertise spans 
              across the entire development lifecycle.
            </p>
            <p>
              I believe in writing clean, maintainable code and following best practices 
              for sustainable software development. Currently leading a team of developers 
              while contributing to open-source projects.
            </p>
          </div>
        </div>

        {/* Draggable Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              drag
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-100 dark:bg-slate-800 rounded-xl p-6 text-center cursor-grab active:cursor-grabbing shadow-lg hover:shadow-xl transition-shadow"
            >
              <span className="font-jetbrains text-slate-900 dark:text-white font-medium">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section with Numbered Cards
const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Scalable e-commerce solution with microservices architecture",
      tech: ["Next.js", "Node.js", "MongoDB", "AWS"],
      category: "Full Stack"
    },
    {
      id: 2,
      title: "AI Analytics Dashboard",
      description: "Real-time analytics with machine learning insights",
      tech: ["React", "Python", "FastAPI", "D3.js"],
      category: "Frontend & Data"
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Secure banking application with biometric authentication",
      tech: ["React Native", "Node.js", "PostgreSQL", "Redis"],
      category: "Mobile & Backend"
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center px-8 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-playfair text-4xl lg:text-5xl font-semibold text-slate-900 dark:text-white mb-16 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 relative overflow-hidden cursor-pointer"
    >
      {/* Large Number */}
      <div className="absolute top-4 right-4">
        <span className="font-jetbrains text-6xl font-bold text-slate-200 dark:text-slate-700">
          {String(project.id).padStart(2, '0')}
        </span>
      </div>

      <div className="relative z-10">
        <h3 className="font-jetbrains text-xl font-semibold text-slate-900 dark:text-white mb-3">
          {project.title}
        </h3>
        
        <p className="font-inter text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map(tech => (
            <span
              key={tech}
              className="font-jetbrains text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <span className="font-inter text-sm text-slate-500 dark:text-slate-400">
          {project.category}
        </span>
      </div>

      {/* Glitch Effect Overlay */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 mix-blend-overlay"
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Experience Section - Terminal Style
const ExperienceSection = () => {
  const experiences = [
    {
      year: "2022 - Present",
      role: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      description: "Leading development of cloud-native applications and mentoring junior developers."
    },
    {
      year: "2020 - 2022",
      role: "Full Stack Developer",
      company: "StartupXYZ",
      description: "Built and scaled web applications serving millions of users."
    },
    {
      year: "2018 - 2020",
      role: "Frontend Developer",
      company: "DigitalAgency",
      description: "Created responsive web interfaces and collaborated with design teams."
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center px-8 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-playfair text-4xl lg:text-5xl font-semibold text-slate-900 dark:text-white mb-16 text-center"
        >
          Experience
        </motion.h2>

        <div className="font-jetbrains text-slate-800 dark:text-slate-200">
          {/* Terminal Header */}
          <div className="bg-slate-900 rounded-t-xl p-4 flex items-center space-x-2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-slate-300 text-sm">experience-terminal</span>
          </div>

          {/* Terminal Content */}
          <div className="bg-slate-800 rounded-b-xl p-6 space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="border-l-2 border-blue-500 pl-4 ml-4"
              >
                <div className="text-green-400">$ {exp.year}</div>
                <div className="text-white font-semibold text-lg">{exp.role}</div>
                <div className="text-blue-400">@ {exp.company}</div>
                <div className="text-slate-300 mt-2">{exp.description}</div>
                {index < experiences.length - 1 && (
                  <div className="text-slate-500 mt-4">---</div>
                )}
              </motion.div>
            ))}
            
            <div className="text-green-400 flex items-center">
              <span className="mr-2">$</span>
              <span className="animate-pulse">_</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skills Section with Radar Chart
const SkillsSection = () => {
  const skills = [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 88 },
    { name: "AWS", level: 85 },
    { name: "Python", level: 80 },
    { name: "Docker", level: 75 }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center px-8 bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
      {/* Matrix-like Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="font-jetbrains text-green-400 text-xs leading-4 whitespace-pre">
          {Array(50).fill('0 1 0 1 1 0 1 0 0 1 1 0 1 0 1').join(' ')}
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-playfair text-4xl lg:text-5xl font-semibold text-slate-900 dark:text-white mb-8"
          >
            Skills & Expertise
          </motion.h2>

          <div className="space-y-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between font-jetbrains text-slate-900 dark:text-white">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Radar Chart Placeholder */}
        <div className="flex justify-center">
          <div className="w-64 h-64 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center">
            <span className="font-jetbrains text-slate-500 dark:text-slate-400">
              Radar Chart
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Blog Section - Magazine Style
const BlogSection = () => {
  const posts = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Best practices and patterns for large-scale React projects",
      date: "2024-01-15",
      readTime: "5 min read"
    },
    {
      title: "Microservices Architecture Patterns",
      excerpt: "Designing resilient microservices systems",
      date: "2024-01-08",
      readTime: "8 min read"
    },
    {
      title: "TypeScript Advanced Patterns",
      excerpt: "Leveraging TypeScript for better developer experience",
      date: "2024-01-01",
      readTime: "6 min read"
    }
  ];

  return (
    <section id="blog" className="min-h-screen flex items-center px-8 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-playfair text-4xl lg:text-5xl font-semibold text-slate-900 dark:text-white mb-16 text-center"
        >
          Latest Writings
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard key={index} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BlogCard = ({ post, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ y: -5 }}
      className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
    >
      <h3 className="font-playfair text-xl font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {post.title}
      </h3>
      
      <p className="font-inter text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
        {post.excerpt}
      </p>
      
      <div className="flex justify-between items-center text-sm text-slate-500 dark:text-slate-400">
        <span>{post.date}</span>
        <span>{post.readTime}</span>
      </div>
    </motion.article>
  );
};

// Contact Section
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="min-h-screen flex items-center px-8 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="font-playfair text-4xl lg:text-5xl font-semibold text-slate-900 dark:text-white"
          >
            Let's Build Something Amazing
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="font-inter text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            Ready to bring your ideas to life? Let's discuss your project and 
            create something extraordinary together.
          </motion.p>

          {/* Floating Icons */}
          <div className="flex space-x-6 pt-8">
            {['github', 'linkedin', 'email'].map((icon) => (
              <motion.a
                key={icon}
                href="#"
                whileHover={{ scale: 1.1, y: -5 }}
                className="w-12 h-12 bg-white dark:bg-slate-700 rounded-xl shadow-lg flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <SocialIcon platform={icon} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label className="font-jetbrains text-slate-900 dark:text-white mb-2 block">
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
          </div>

          <div>
            <label className="font-jetbrains text-slate-900 dark:text-white mb-2 block">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
          </div>

          <div>
            <label className="font-jetbrains text-slate-900 dark:text-white mb-2 block">
              Message
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-jetbrains py-3 px-6 rounded-xl transition-colors shadow-lg hover:shadow-xl"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-jetbrains">
          Made with ❤️ by Iftikhar Ali
        </p>
        <p className="font-inter text-sm mt-2">
          © 2024 All rights reserved.
        </p>
      </div>
    </footer>
  );
};

// Social Icon Component
const SocialIcon = ({ platform }) => {
  const icons = {
    github: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    twitter: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    ),
    email: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  };

  return icons[platform] || null;
};

