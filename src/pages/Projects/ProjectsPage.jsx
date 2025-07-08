"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaPython } from "react-icons/fa";
import { SiExpress, SiFlask, SiMongodb, SiTailwindcss, SiNextdotjs, SiTypescript, SiFirebase, SiPostgresql, SiThreedotjs } from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";
import { Terminal, Code, ExternalLink, Folder, Database } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const ProjectsPage = () => {

useEffect(() => {
        document.title = 'Projects | Ramish';
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, []);

  const { isDarkMode } = useTheme();
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const glitchVariants = {
    initial: { x: 0, y: 0, textShadow: "0 0 0 transparent" },
    hover: {
      x: [0, -2, 2, -1, 1, 0],
      y: [0, -1, 1, -1, 0],
      textShadow: [
        "0 0 0 transparent",
        "2px 0 0 #ff0000, -2px 0 0 #00ffff",
        "-2px 0 0 #ff0000, 2px 0 0 #00ffff",
        "1px 0 0 #ff0000, -1px 0 0 #00ffff",
        "0 0 0 transparent",
      ],
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const buttonGlitchVariants = {
    initial: { x: 0, y: 0, textShadow: "0 0 0 transparent" },
    hover: {
      x: [0, -1, 1, -1, 1, 0],
      y: [0, -1, 1, -1, 0],
      textShadow: [
        "0 0 0 transparent",
        "1px 0 0 #ff0000, -1px 0 0 #00ffff",
        "-1px 0 0 #ff0000, 1px 0 0 #00ffff",
        "1px 0 0 #ff0000, -1px 0 0 #00ffff",
        "0 0 0 transparent",
      ],
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, x: -100, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const lineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "100%",
      opacity: 1,
      transition: { duration: 1.5, delay: 0.4, ease: "easeInOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, delay: 0.8 + i * 0.2, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
    hover: { y: -10, transition: { duration: 0.3, ease: "easeOut" } },
  };

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView]);

  const completeApps = [
    {
      title: "Otopilot Dashboard",
      description: "Real World Dashboard for Otopilot with advanced analytics and user management features",
      techStack: ["React", "Tailwind"],
      liveDemo: "https://otopilot-dashboard.vercel.app/",
      category: "Web App",
      command: "npm run dev",
    },
    {
      title: "Uber Clone",
      description: "Full-stack ride-sharing application with real-time tracking and payment integration",
      techStack: ["React", "Express", "MongoDB", "Node.js"],
      github: "https://github.com/ramishbinsiddique15/Uber-Clone",
      category: "Full Stack",
      command: "npm run dev",
    },
    {
      title: "Spotify Clone",
      description: "Music streaming platform with playlist management and audio controls",
      techStack: ["CSS", "Express", "Node.js"],
      github: "https://github.com/ramishbinsiddique15/Spotify-Clone",
      category: "Web App",
      command: "npx nodemon",
    },
    {
      title: "Get Me a Chai",
      description: "Crowdfunding platform for local businesses with payment gateway integration",
      techStack: ["Next.js", "Tailwind", "Node.js", "MongoDB"],
      github: "https://github.com/ramishbinsiddique15/Get-Me-A-Chai",
      category: "Full Stack",
      command: "npm run dev",
    },
    {
      title: "Bag Elegance",
      description: "E-commerce website for luxury bags with product catalog and shopping cart",
      techStack: ["Express", "Tailwind", "Node.js", "MongoDB"],
      github: "https://github.com/ramishbinsiddique15/BagElegance",
      liveDemo: "https://bag-elegance.vercel.app/",
      category: "E-commerce",
      command: "npx nodemon",
    },
    {
      title: "Portfolio Template",
      description: "Personal portfolio template showcasing projects and skills",
      techStack: ["React", "Tailwind", "Three.js"],
      github: "https://github.com/ramishbinsiddique15/Portfolio",
      liveDemo: "https://ramishbinsiddique.vercel.app",
      category: "Portfolio",
      command: "npm run dev",
    },
  ];

  const smallProjects = [
    {
      title: "Chess",
      description: "Real-time multiplayer chess game.",
      techStack: ["JavaScript", "CSS", "HTML5"],
      github: "https://github.com/ramishbinsiddique15/Chess",
      category: "Game",
      command: "npx nodemon",
    },
    {
      title: "Linktree Clone",
      description: "Social media link aggregator with customizable themes",
      techStack: ["MongoDB", "Express", "React", "Node.js",],
      github: "https://github.com/ramishbinsiddique15/Linktree-Clone",
      category: "Web App",
      command: "npm run dev",
    },
    {
      title: "PassBank",
      description: "Password management system with secure storage and retrieval",
      techStack: ["MongoDB", "Express", "React", "Node.js",],
      github: "https://github.com/ramishbinsiddique15/PassBank",
      category: "Tool",
      command: "npm run dev",
    },

    {
      title: "Backend Bits",
      description: "Practice backend projects with various tech stacks",
      techStack: ["Node.js", "Express", "MongoDB",],
      github: "https://github.com/ramishbinsiddique15/Backend-Bits",
      category: "Backend",
      command: "npx nodemon",
    },

    {
      title: "Weather App",
      description: "Weather application with real-time data and location-based features",
      techStack: ["React", "CSS"],
      github: "https://github.com/ramishbinsiddique15/Weather-App/tree/cf68cc9f8718a5d8dc4844a7730c5c50dada7c61",
      liveDemo: "https://myweather-tan.vercel.app/",
      category: "Web App",
      command: "npm run dev",
    },

  ];

  const getTechIcon = (tech) => {
    const icons = {
      HTML5: FaHtml5,
      CSS: FaCss3Alt,
      JavaScript: FaJs,
      "Node.js": FaNodeJs,
      React: FaReact,
      Python: FaPython,
      Express: SiExpress,
      Flask: SiFlask,
      Tailwind: SiTailwindcss,
      MongoDB: SiMongodb,
      "Next.js": SiNextdotjs,
      "Three.js": SiThreedotjs,
      TypeScript: SiTypescript,
      Firebase: SiFirebase,
      PostgreSQL: SiPostgresql,
    };
    return icons[tech];
  };

  const getTechColor = (tech) => {
    const colors = {
      React: "#61DAFB",
      "Node.js": "#339933",
      JavaScript: "#F7DF1E",
      Python: "#3776AB",
      MongoDB: "#47A248",
      Express: isDarkMode ? "#ffffff" : "#000000",
      CSS: "#1572B6",
      HTML5: "#E34F26",
      Tailwind: "#06B6D4",
      Flask: "#000000",
      "Next.js": isDarkMode ? "#ffffff" : "#000000",
      "Three.js": isDarkMode ? "#ffffff" : "#000000",
      TypeScript: "#3178C6",
      Firebase: "#FFCA28",
      PostgreSQL: "#336791",
    };
    return colors[tech] || "#C778DD";
  };

  const handleButtonClick = (e, url) => {
    e.stopPropagation();
    e.preventDefault();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const ProjectCard = ({ project, index, size = "normal" }) => (
    <motion.div
      key={`project-${project.title}`}
      variants={cardVariants}
      initial={hasAnimated ? false : "hidden"}
      animate={hasAnimated ? "visible" : "hidden"}
      whileHover="hover"
      custom={index}
      className={`border-2 ${isDarkMode ? "border-gray-700 bg-[#1a1a1a]" : "border-gray-300 bg-gray-50"} relative overflow-hidden group`}
    >
      <div className={`flex items-center gap-2 p-3 border-b-2 ${isDarkMode ? "border-gray-700" : "border-gray-300"}`}>
        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <Folder className="w-4 h-4 text-[#C778DD] ml-2" />
        <span className={`text-xs font-mono ${isDarkMode ? "text-[#607B96]" : "text-gray-600"}`}>
          {project.title.toLowerCase().replace(/\s+/g, "-")}
        </span>
      </div>
      <div className={`${size === "small" ? "p-4" : "p-6"}`}>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[#C778DD] font-mono text-sm">$</span>
          <span className={`font-mono text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{project.command}</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span
            className={`px-3 py-1 text-xs font-mono border-2 ${isDarkMode ? "border-[#C778DD] text-[#C778DD]" : "border-[#9333ea] text-[#9333ea]"
              }`}
          >
            {project.category}
          </span>
          <FiArrowUpRight
            className={`w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
          />
        </div>
        <motion.h3
          className={`font-bold text-[#C778DD] mb-4 font-mono ${size === "small" ? "text-xl" : "text-2xl"}`}
          variants={glitchVariants}
          initial="initial"
          whileHover="hover"
        >
          {project.title}
        </motion.h3>
        <p className={`${isDarkMode ? "text-gray-300" : "text-[#646971]"} text-sm mb-6 leading-relaxed font-mono`}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, techIndex) => {
            const Icon = getTechIcon(tech);
            const color = getTechColor(tech);
            return (
              <div
                key={techIndex}
                className={`flex items-center gap-2 px-3 py-1 border-2 ${isDarkMode ? "border-gray-600 bg-[#0f1419]" : "border-gray-200 bg-white"
                  } transition-all duration-300 hover:border-[#C778DD]`}
                style={{ borderLeft: `4px solid ${color}` }}
              >
                {Icon && <Icon className="w-3 h-3" style={{ color }} />}
                <span className={`text-xs font-mono ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{tech}</span>
              </div>
            );
          })}
        </div>
        <div className="flex gap-3">
          {project.liveDemo && (
            <button
              onClick={(e) => handleButtonClick(e, project.liveDemo)}
              onMouseEnter={(e) => e.stopPropagation()}
              onMouseLeave={(e) => e.stopPropagation()}
              className={`relative w-fit flex items-center justify-center cursor-pointer
                 border border-[#C778DD] font-semibold
                 px-3 py-2 overflow-hidden transition-all duration-300 group/btn
                ${isDarkMode ? "hover:shadow-lg hover:shadow-[#C778DD]/25 border-opacity-80" : "hover:shadow-lg hover:shadow-[#C778DD]/20 border-opacity-60"}`}
            >
              <span
                className={`relative z-10 transition-colors duration-300
                   ${isDarkMode ? "text-white group-hover/btn:text-[#011627]" : "text-[#282C33] group-hover/btn:text-white"} text-sm font-mono`}
              >
                Live Demo
              </span>
              <div className="relative flex gap-2 px-2 items-center justify-center">
                <div className="w-6 h-6 group-hover/btn:bg-white bg-[#C778DD] rounded-full flex items-center justify-center z-30">
                  <ExternalLink
                    className={`${isDarkMode ? "text-white" : "text-white"} w-3 h-3 transform transition-all duration-300 group-hover/btn:opacity-0 group-hover/btn:scale-0`}
                  />
                  <ExternalLink className="text-[#C778DD] absolute w-3 h-3 transform transition-all duration-300 opacity-0 scale-0 group-hover/btn:opacity-100 group-hover/btn:scale-100" />
                </div>
              </div>
              <div className="absolute inset-0 bg-[#C778DD] transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 origin-left" />
            </button>
          )}
          {project.github && (
            <button
              onClick={(e) => handleButtonClick(e, project.github)}
              onMouseEnter={(e) => e.stopPropagation()}
              onMouseLeave={(e) => e.stopPropagation()}
              className={`relative w-fit flex items-center justify-center cursor-pointer
                 border border-[#C778DD] font-semibold
                 px-3 py-2 overflow-hidden transition-all duration-300 group/btn
                ${isDarkMode ? "hover:shadow-lg hover:shadow-[#C778DD]/25 border-opacity-80" : "hover:shadow-lg hover:shadow-[#C778DD]/20 border-opacity-60"}`}
            >
              <span
                className={`relative z-10 transition-colors duration-300
                   ${isDarkMode ? "text-white group-hover/btn:text-[#011627]" : "text-[#282C33] group-hover/btn:text-white"} text-sm font-mono`}
              >
                Code
              </span>
              <div className="relative flex gap-2 px-2 items-center justify-center">
                <div className="w-6 h-6 group-hover/btn:bg-white bg-[#C778DD] rounded-full flex items-center justify-center z-30">
                  <Code
                    className={`${isDarkMode ? "text-white" : "text-white"} w-3 h-3 transform transition-all duration-300 group-hover/btn:opacity-0 group-hover/btn:scale-0`}
                  />
                  <Code className="text-[#C778DD] absolute w-3 h-3 transform transition-all duration-300 opacity-0 scale-0 group-hover/btn:opacity-100 group-hover/btn:scale-100" />
                </div>
              </div>
              <div className="absolute inset-0 bg-[#C778DD] transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 origin-left" />
            </button>
          )}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#C778DD]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-0 border-2 border-[#C778DD] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );

  return (
    <section key="projects-section" className={`pt-15 min-h-screen transition-colors duration-300`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-16 h-16 opacity-20 bg-purple-500 rounded"
          animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 opacity-10 bg-purple-500 rounded-full"
          animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(${isDarkMode ? "#333" : "#ddd"} 1px, transparent 1px), linear-gradient(90deg, ${isDarkMode ? "#333" : "#ddd"
              } 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>
      <div className="container mx-auto px-6 py-20 relative z-10" ref={ref}>
        <motion.div
          key="header"
          variants={headingVariants}
          initial={hasAnimated ? false : "hidden"}
          animate={hasAnimated ? "visible" : "hidden"}
          className="mb-12"
        >
          <div
            className={`inline-flex items-center gap-3 px-4 py-2 border-2 ${isDarkMode ? "border-[#C778DD] text-gray-400 bg-[#1a1a1a]" : "border-[#9333ea] bg-gray-50"
              } font-mono text-sm mb-6`}
          >
            <Terminal className="w-4 h-4 text-[#C778DD]" />
            <span className="text-[#C778DD]">#</span>
            <span>projects</span>
            <span className="text-[#C778DD]">--all</span>
          </div>
          <div className="flex items-center gap-4">
            <motion.h1
              className={`${isDarkMode ? "text-white" : "text-[#282C33]"} text-4xl font-bold font-mono`}
              variants={glitchVariants}
              initial="initial"
              whileHover="hover"
            >
              <span className="text-[#C778DD]">#</span>
              projects
            </motion.h1>
            <motion.div
              className="flex-1 h-[2px] bg-gradient-to-r from-[#C778DD] to-transparent max-w-md"
              variants={lineVariants}
              initial={hasAnimated ? false : "hidden"}
              animate={hasAnimated ? "visible" : "hidden"}
            />
          </div>
        </motion.div>
        <motion.div
          key="complete-apps"
          variants={cardVariants}
          initial={hasAnimated ? false : "hidden"}
          animate={hasAnimated ? "visible" : "hidden"}
          custom={0}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completeApps.map((project, index) => (
              <ProjectCard key={`project-${project.title}`} project={project} index={index} />
            ))}
          </div>
        </motion.div>
        <motion.div
          key="small-projects"
          variants={cardVariants}
          initial={hasAnimated ? false : "hidden"}
          animate={hasAnimated ? "visible" : "hidden"}
          custom={1}
        >
          <div
            className={`inline-flex items-center gap-3 px-4 py-2 border-2 ${isDarkMode ? "border-[#C778DD] text-gray-400 bg-[#1a1a1a]" : "border-[#9333ea] bg-gray-50"
              } font-mono text-sm mb-6`}
          >
            <Database className="w-4 h-4 text-[#C778DD]" />
            <span className="text-[#C778DD]">#</span>
            <span>small-projects</span>
            <span className="text-[#C778DD]">--list</span>
          </div>
          <div className="flex items-center gap-4 mb-12">
            <motion.h2
              className={`${isDarkMode ? "text-white" : "text-[#282C33]"} text-3xl font-bold font-mono`}
              variants={glitchVariants}
              initial="initial"
              whileHover="hover"
            >
              <span className="text-[#C778DD]">#</span>small-projects
            </motion.h2>
            <motion.div
              className="flex-1 h-[2px] bg-gradient-to-r from-[#C778DD] to-transparent max-w-md"
              variants={lineVariants}
              initial={hasAnimated ? false : "hidden"}
              animate={hasAnimated ? "visible" : "hidden"}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {smallProjects.map((project, index) => (
              <ProjectCard key={`project-${project.title}`} project={project} index={index + completeApps.length} size="small" />
            ))}
          </div>
        </motion.div>
        <motion.div
          key="summary"
          variants={cardVariants}
          initial={hasAnimated ? false : "hidden"}
          animate={hasAnimated ? "visible" : "hidden"}
          custom={2}
          className={`mt-12 border-2 ${isDarkMode ? "border-gray-700 bg-[#1a1a1a]" : "border-gray-300 bg-gray-50"} p-6`}
        >
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="w-4 h-4 text-[#C778DD]" />
            <span className={`font-mono text-sm ${isDarkMode ? "text-[#607B96]" : "text-gray-600"}`}>~/projects/summary.log</span>
          </div>
          <div className="font-mono space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[#C778DD]">$</span>
              <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                find . -type f -name "*.js" -o -name "*.jsx" -o -name "*.py" | wc -l
              </span>
            </div>
            <div className={`pl-4 text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
              <div>Complete applications: {completeApps.length}</div>
              <div>Small projects: {smallProjects.length}</div>
              <div>Total projects: {completeApps.length + smallProjects.length}</div>
              <div>Technologies used: {[...new Set([...completeApps, ...smallProjects].flatMap((p) => p.techStack))].length}</div>
              <div>Live demos: {[...completeApps, ...smallProjects].filter((p) => p.liveDemo).length}</div>
              <div>GitHub repos: {[...completeApps, ...smallProjects].filter((p) => p.github).length}</div>
              <div className="text-[#C778DD] mt-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Status: Portfolio loaded successfully!
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPage;