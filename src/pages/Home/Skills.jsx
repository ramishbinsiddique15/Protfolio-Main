"use client"
import { useRef, useState, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiNextdotjs,
  SiThreedotjs,
  SiFirebase,
  SiVite,
  SiExpress,
  SiPostman,
  SiCanva,
} from "react-icons/si";
import { Terminal, Code, Database, Wrench, Activity, Cpu, Network } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const Skills = () => {
  const { isDarkMode } = useTheme();
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [terminalLines, setTerminalLines] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [activeConnections, setActiveConnections] = useState([]);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const ref = useRef(null);
  const terminalRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Terminal typing effect
  const typeText = useCallback(async (text, delay = 25) => {
    setIsTyping(true);
    for (let i = 0; i <= text.length; i++) {
      setTerminalLines((prev) => [...prev.slice(0, -1), text.slice(0, i)]);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
    setIsTyping(false);
  }, []);

  // Complete skill data
  const skillCategories = [
    {
      title: "MERN Stack",
      icon: Cpu,
      command: "sudo systemctl status mern-stack",
      isCore: true,
      skills: [
        {
          name: "MongoDB",
          icon: SiMongodb,
          color: "#47A248",
          proficiency: 92,
          connections: ["Express.js", "Node.js"],
          projects: 15,
          description: "NoSQL database mastery with aggregation pipelines",
        },
        {
          name: "Express.js",
          icon: SiExpress,
          color: isDarkMode ? "#FFFFFF" : "#000000",
          proficiency: 88,
          connections: ["Node.js", "MongoDB", "React.js"],
          projects: 18,
          description: "RESTful API architecture and middleware design",
        },
        {
          name: "React.js",
          icon: FaReact,
          color: "#61DAFB",
          proficiency: 95,
          connections: ["Node.js", "Express.js", "Tailwind CSS"],
          projects: 25,
          description: "Advanced component architecture and state management",
        },
        {
          name: "Node.js",
          icon: FaNodeJs,
          color: "#339933",
          proficiency: 90,
          connections: ["Express.js", "MongoDB", "React.js"],
          projects: 20,
          description: "Server-side JavaScript and async programming",
        },
      ],
    },
    {
      title: "Frontend Tech",
      icon: Code,
      command: "npm list --depth=0",
      skills: [
        {
          name: "Tailwind CSS",
          icon: SiTailwindcss,
          color: "#06B6D4",
          proficiency: 96,
          connections: ["React.js", "Next.js"],
          projects: 22,
          description: "Utility-first CSS framework expertise",
        },
        {
          name: "JavaScript",
          icon: FaJs,
          color: "#F7DF1E",
          proficiency: 90,
          connections: ["React.js", "Node.js"],
          projects: 30,
          description: "ES6+ features and modern JavaScript patterns",
        },
        {
          name: "HTML5",
          icon: FaHtml5,
          color: "#E34F26",
          proficiency: 85,
          connections: ["CSS3", "JavaScript"],
          projects: 35,
          description: "Semantic markup and accessibility standards",
        },
        {
          name: "CSS3",
          icon: FaCss3Alt,
          color: "#1572B6",
          proficiency: 82,
          connections: ["HTML5", "Tailwind CSS"],
          projects: 28,
          description: "Advanced styling and animation techniques",
        },
      ],
    },
    {
      title: "Frameworks",
      icon: Database,
      command: "npm list --global",
      skills: [
        {
          name: "Next.js",
          icon: SiNextdotjs,
          color: isDarkMode ? "#FFFFFF" : "#000000",
          proficiency: 85,
          connections: ["React.js", "Tailwind CSS"],
          projects: 8,
          description: "Full-stack React framework with SSR/SSG",
        },
        {
          name: "Bootstrap",
          icon: FaBootstrap,
          color: "#7952B3",
          proficiency: 75,
          connections: ["HTML5", "CSS3"],
          projects: 12,
          description: "Component-based CSS framework",
        },
      ],
    },
    {
      title: "Development Tools",
      icon: Wrench,
      command: "which --all tools",
      skills: [
        {
          name: "Git",
          icon: FaGitAlt,
          color: "#F05032",
          proficiency: 88,
          connections: ["GitHub"],
          projects: 40,
          description: "Version control and collaborative workflows",
        },
        {
          name: "GitHub",
          icon: FaGithub,
          color: isDarkMode ? "#FFFFFF" : "#181717",
          proficiency: 85,
          connections: ["Git"],
          projects: 35,
          description: "CI/CD pipelines and project management",
        },
        {
          name: "Postman",
          icon: SiPostman,
          color: "#FF6C37",
          proficiency: 80,
          connections: ["Express.js", "Node.js"],
          projects: 25,
          description: "API testing and development workflows",
        },
        {
          name: "Vite",
          icon: SiVite,
          color: "#646CFF",
          proficiency: 78,
          connections: ["React.js"],
          projects: 12,
          description: "Modern build tooling and development server",
        },
        {
          name: "Canva",
          icon: SiCanva,
          color: "#00C4CC",
          proficiency: 70,
          connections: [],
          projects: 15,
          description: "Design and visual content creation",
        },
      ],
    },
    {
      title: "Databases",
      icon: Database,
      command: "show databases",
      skills: [
        {
          name: "Firebase",
          icon: SiFirebase,
          color: "#FFCA28",
          proficiency: 75,
          connections: ["React.js"],
          projects: 6,
          description: "Real-time database and authentication",
        },
      ],
    },
    {
      title: "Other",
      icon: Terminal,
      command: "find . -name '*.tech'",
      skills: [
        {
          name: "Three.js",
          icon: SiThreedotjs,
          color: isDarkMode ? "#FFFFFF" : "#000000",
          proficiency: 72,
          connections: ["JavaScript"],
          projects: 4,
          description: "3D graphics and interactive visualizations",
        },
      ],
    },
  ];

  // Handle skill click with scroll-to-terminal on mobile
  const handleSkillClick = async (skill) => {
    setSelectedSkill(skill);
    setAnalysisComplete(false);
    setTerminalLines([`$ analyze-skill --name="${skill.name}" --verbose`]);
    setActiveConnections(skill.connections || []);

    // Scroll to terminal on mobile with navbar offset
    if (window.innerWidth <= 768) {
      await new Promise((resolve) => setTimeout(resolve, 100)); // Small delay for smooth transition
      if (terminalRef.current) {
        const navbar = document.querySelector('nav'); // Adjust selector if needed
        const navbarHeight = navbar ? navbar.offsetHeight : 64; // Fallback to 64px
        const terminalTop = terminalRef.current.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: terminalTop - navbarHeight,
          behavior: "smooth",
        });
      }
    }

    // Terminal output simulation
    await new Promise((resolve) => setTimeout(resolve, 300));
    await typeText("Initializing skill analysis...");
    await typeText(`Target: ${skill.name}`);
    await typeText(`Proficiency: ${skill.proficiency}%`);
    await typeText(`Projects: ${skill.projects} completed`);
    await typeText(`Connections: ${skill.connections?.join(", ") || "None"}`);
    await typeText("Analysis complete. Rendering visualization...");
    setAnalysisComplete(true);
  };

  // Clear terminal
  const clearTerminal = () => {
    setSelectedSkill(null);
    setTerminalLines([]);
    setActiveConnections([]);
    setAnalysisComplete(false);
  };

  // Clean progress bar component
  const ProgressVisualization = ({ skill }) => (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="mt-4 p-4 border-t border-[#C778DD]/30"
    >
      {/* Skill header */}
      <div className="flex items-center gap-3 mb-4">
        <skill.icon className="w-5 h-5" style={{ color: skill.color }} />
        <span className="text-[#C778DD] font-bold">{skill.name}</span>
        <motion.div
          className="ml-auto w-2 h-2 rounded-full bg-green-500"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>
      {/* Progress bar */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-400">PROFICIENCY</span>
          <span className="text-xs text-[#C778DD]">{skill.proficiency}%</span>
        </div>
        <div className="relative h-3 bg-gray-800 border border-[#C778DD]/20 overflow-hidden">
          {/* Background grid */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(90deg, #C778DD 1px, transparent 1px)`,
              backgroundSize: "6px 100%",
            }}
          />
          {/* Main progress - smooth animation */}
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#C778DD] to-[#9333ea]"
            initial={{ width: 0 }}
            animate={{ width: `${skill.proficiency}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          {/* Progress indicator */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              className="text-xs text-white font-bold mix-blend-difference"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              [{"█".repeat(Math.floor(skill.proficiency / 10))}
              {"░".repeat(10 - Math.floor(skill.proficiency / 10))}]
            </motion.span>
          </div>
        </div>
        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 gap-4 mt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="text-center">
            <div className="text-lg text-[#C778DD] font-bold">{skill.projects}</div>
            <div className="text-xs text-gray-400">PROJECTS</div>
          </div>
          <div className="text-center">
            <div className="text-lg text-[#C778DD] font-bold">{skill.connections?.length || 0}</div>
            <div className="text-xs text-gray-400">CONNECTIONS</div>
          </div>
        </motion.div>
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-xs text-gray-300 p-3 border-l-2 border-[#C778DD]/50 bg-[#C778DD]/5 "
        >
          <span className="text-[#C778DD] font-bold">DESC: </span>
          {skill.description}
        </motion.div>
      </div>
    </motion.div>
  );

  const glitchVariants = {
    initial: {
      x: 0,
      y: 0,
      textShadow: "0 0 0 transparent",
    },
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
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, x: -100, filter: "blur(10px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  const lineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { width: "100%", opacity: 1, transition: { duration: 1.5, delay: 0.5, ease: "easeInOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, delay: 0.8 + i * 0.2, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  };

  return (
    <section id="skills" className="min-h-screen py-8 sm:py-12 transition-colors duration-300" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-8 sm:mb-12"
        >
          <div
            className={`inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 border-2 ${isDarkMode ? "border-[#C778DD] text-gray-400 bg-[#1a1a1a]" : "border-[#9333ea] bg-gray-50"
              } font-mono text-xs sm:text-sm mb-4 sm:mb-6`}
          >
            <Terminal className="w-3 h-3 sm:w-4 sm:h-4 text-[#C778DD]" />
            <span className="text-[#C778DD]">#</span>
            <span>skills</span>
            <span className="text-[#C778DD]">--list</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <motion.h1
              className={`${isDarkMode ? "text-white" : "text-[#282C33]"} cursor-default text-2xl sm:text-3xl md:text-4xl font-bold font-mono`}
              variants={glitchVariants}
              initial="initial"
              whileHover="hover"
            >
              <span className="text-[#C778DD]">#</span>
              skills
            </motion.h1>
            <motion.div
              className="flex-1 h-[2px] bg-gradient-to-r from-[#C778DD] to-transparent max-w-xs sm:max-w-sm md:max-w-md"
              variants={lineVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            />
          </div>
        </motion.div>
        {/* Main Layout: Skills Grid + Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Skills Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: categoryIndex * 0.1 }}
                  className={`border-2 shadow-lg ${category.isCore
                    ? "border-[#C778DD] bg-gradient-to-br from-[#C778DD]/10 to-transparent col-span-full"
                    : isDarkMode
                      ? "border-gray-700 bg-[#1a1a1a]/80 backdrop-blur-sm"
                      : "border-gray-300 bg-gray-50/80 backdrop-blur-sm"
                  } relative overflow-hidden group`}
                >
                  {/* Terminal header */}
                  <div
                    className={`flex items-center gap-2 p-3 border-b-2 ${category.isCore ? "border-[#C778DD]/30" : isDarkMode ? "border-gray-700" : "border-gray-300"
                      }`}
                  >
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <IconComponent className="w-3 sm:w-4 h-3 sm:h-4 text-[#C778DD] ml-2" />
                    <span className={`text-xs ${isDarkMode ? "text-[#607B96]" : "text-gray-600"}`}>
                      {category.title.toLowerCase().replace(" ", "_")}
                    </span>
                    {category.isCore && (
                      <motion.span
                        className="ml-auto text-xs text-[#C778DD] font-semibold"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        ★ CORE
                      </motion.span>
                    )}
                  </div>
                  {/* Content */}
                  <div className="p-3 sm:p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[#C778DD] textწ
                      text-xs sm:text-sm">$</span>
                      <span className={`text-xs sm:text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                        {category.command}
                      </span>
                    </div>
                    <h3 className={`text-base sm:text-lg font-bold mb-4 ${isDarkMode ? "text-white" : "text-[#282C33]"}`}>
                      {category.title}
                    </h3>
                    {/* Skills */}
                    <div className={`${category.isCore ? "grid grid-cols-1 md:grid-cols-2 gap-3" : "space-y-3"}`}>
                      {category.skills.map((skill) => {
                        const SkillIcon = skill.icon;
                        const isSelected = selectedSkill?.name === skill.name;
                        const isConnected = activeConnections.includes(skill.name);
                        return (
                          <motion.div
                            key={skill.name}
                            className={`flex items-center gap-2 sm:gap-3 p-2 sm:p-3 cursor-pointer transition-all duration-200 ${isSelected
                              ? "bg-[#C778DD]/20 border-2 border-[#C778DD] shadow-lg shadow-[#C778DD]/20"
                              : isConnected
                                ? "bg-yellow-500/20 border-2 border-yellow-500/50"
                                : `hover:bg-[#C778DD]/10 border-2 border-transparent ${isDarkMode ? "text-gray-300" : "text-gray-700"}`
                            }`}
                            onClick={() => handleSkillClick(skill)}
                            whileHover={{ scale: 1.02, x: 5 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <motion.div
                              animate={isSelected || isConnected ? { rotate: 360 } : {}}
                              transition={{ duration: 1, repeat: isSelected ? Number.POSITIVE_INFINITY : 0 }}
                            >
                              <SkillIcon className="w-4 sm:w-5 h-4 sm:h-5" style={{ color: skill.color }} />
                            </motion.div>
                            <span className="text-xs sm:text-sm flex-1 font-medium">{skill.name}</span>
                            {isConnected && <Network className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-500" />}
                            {isSelected && (
                              <motion.div
                                animate={{ opacity: [1, 0.3, 1] }}
                                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                              >
                                <Activity className="w-3 sm:w-4 h-3 sm:h-4 text-[#C778DD]" />
                              </motion.div>
                            )}
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          {/* Sticky Terminal */}
          <motion.div
            ref={terminalRef}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className={`border-2 shadow-lg ${isDarkMode ? "border-gray-700 bg-[#1a1a1a]/90" : "border-gray-300 bg-gray-50/90"
              } backdrop-blur-sm lg:sticky lg:top-32 h-fit max-h-[calc(100vh-150px)] ${isDarkMode
                ? '[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-[#1a1a1a] [&::-webkit-scrollbar-thumb]:bg-[#C778DD] [&::-webkit-scrollbar-thumb]:rounded-full'
                : '[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-gray-50 [&::-webkit-scrollbar-thumb]:bg-[#C778DD] [&::-webkit-scrollbar-thumb]:rounded-full'
              } `}
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between p-3 sm:p-4 border-b-2 border-[#C778DD]/30">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 sm:w-5 h-4 sm:h-5 text-[#C778DD]" />
                <span className={`text-xs sm:text-sm font-bold ${isDarkMode ? "text-[#C778DD]" : "text-[#9333ea]"}`}>
                  SKILL_ANALYZER
                </span>
              </div>
              <button
                onClick={clearTerminal}
                className="text-xs px-2 sm:px-3 py-1 border-2 border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white transition-all cursor-pointer"
              >
                CLEAR
              </button>
            </div>
            {/* Terminal Content */}
            <div className={`p-3 sm:p-4 overflow-y-auto h-86 ${isDarkMode
    ? '[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-[#1a1a1a] [&::-webkit-scrollbar-thumb]:bg-[#C778DD] [&::-webkit-scrollbar-thumb]:rounded-full'
    : '[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-gray-50 [&::-webkit-scrollbar-thumb]:bg-[#C778DD] [&::-webkit-scrollbar-thumb]:rounded-full'
    }`}>
              {/* Terminal Output */}
              <div className="text-xs sm:text-sm space-y-1 min-h-[200px]">
                <AnimatePresence>
                  {terminalLines.length === 0 ? (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={`${isDarkMode ? "text-gray-500" : "text-gray-400"}`}
                    >
                      $ Click a skill to analyze...
                    </motion.p>
                  ) : (
                    terminalLines.map((line, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                      >
                        {index === 0 ? (
                          <span className="text-[#C778DD]">{line}</span>
                        ) : (
                          <>
                            <span className="text-[#C778DD]">{">"}</span> {line}
                          </>
                        )}
                      </motion.div>
                    ))
                  )}
                  {isTyping && (
                    <motion.span
                      className="text-[#C778DD]"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      _
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
              {/* Progress Visualization - appears below terminal output */}
              <AnimatePresence>
                {selectedSkill && analysisComplete && <ProgressVisualization skill={selectedSkill} />}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;