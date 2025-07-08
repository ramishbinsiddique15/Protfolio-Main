"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaGitAlt, FaGithub, FaBootstrap } from "react-icons/fa"
import {
  SiTailwindcss,
  SiMongodb,
  SiNextdotjs,
  SiThreedotjs,
  SiPostman,
  SiFirebase,
  SiVite,
  SiCanva,
  SiExpress,
} from "react-icons/si"
import { Terminal, Code, Database, Wrench, Layers } from "lucide-react"
import dots from "../../assets/dots.png"
import box from "../../assets/box.png"
import { useTheme } from "../../context/ThemeContext"

const Skills = () => {
  const { isDarkMode } = useTheme()
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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
  }

  const headingVariants = {
    hidden: { opacity: 0, x: -100, filter: "blur(10px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] } },
  }

  const lineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { width: "100%", opacity: 1, transition: { duration: 1.5, delay: 0.5, ease: "easeInOut" } },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, delay: 0.8 + i * 0.2, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
    hover: {
      y: -5,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  }

  const skillItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: i * 0.1 },
    }),
    hover: {
      x: 5,
      color: "#C778DD",
      transition: { duration: 0.2 },
    },
  }

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      command: "ls languages/",
      skills: [
        { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      ],
    },
    {
      title: "Frameworks",
      icon: Layers,
      command: "cat frameworks.txt",
      skills: [
        { name: "React.js", icon: FaReact, color: "#61DAFB" },
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "Express.js", icon: SiExpress, color: isDarkMode ? "#FFFFFF" : "#000000" },
      { name: "Next.js", icon: SiNextdotjs, color: isDarkMode ? "#FFFFFF" : "#000000" },
        { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
      ],
    },
    {
      title: "Tools",
      icon: Wrench,
      command: "which tools",
      skills: [
        { name: "Git", icon: FaGitAlt, color: "#F05032" },
        { name: "GitHub", icon: FaGithub, color: isDarkMode ? "#FFFFFF" : "#181717" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
        { name: "Vite", icon: SiVite, color: "#646CFF" },
        { name: "Canva", icon: SiCanva, color: "#00C4CC" },
      ],
    },
    {
      title: "Databases",
      icon: Database,
      command: "show databases",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      ],
    },
    {
      title: "Other",
      icon: Terminal,
      command: "grep -r 'other'",
      skills: [
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Three.js", icon: SiThreedotjs, color: isDarkMode ? "#FFFFFF" : "#000000" },
      ],
    },
  ]

  return (
    <section
      id="skills"
      className={`relative min-h-screen  transition-colors duration-300`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.img
          src={box}
          alt=""
          className="absolute top-20 right-20 w-16 h-16 opacity-20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.img
          src={dots}
          alt=""
          className="absolute bottom-20 left-20 w-24 h-24 opacity-10"
          animate={{
            x: [0, 10, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(${isDarkMode ? "#333" : "#ddd"} 1px, transparent 1px), linear-gradient(90deg, ${isDarkMode ? "#333" : "#ddd"} 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-6 relative z-10" ref={ref}>
        {/* Terminal Header */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          className="mb-12"
        >
          <div
            className={`inline-flex items-center gap-3 px-4 py-2 border-2 ${
              isDarkMode ? "border-[#C778DD] text-gray-400 bg-[#1a1a1a]" : "border-[#9333ea] bg-gray-50"
            } font-mono text-sm mb-6`}
          >
            <Terminal className="w-4 h-4 text-[#C778DD]" />
            <span className="text-[#C778DD]">#</span>
            <span>skills</span>
            <span className="text-[#C778DD]">--list</span>
          </div>

          <div className="flex items-center gap-4">
            <motion.h1
              className={`${isDarkMode ? "text-white" : "text-[#282C33]"} cursor-default text-4xl font-bold font-mono`}
              variants={glitchVariants}
              initial="initial"
              whileHover="hover"
            >
              <span className="text-[#C778DD]">#</span>
              skills
            </motion.h1>
            <motion.div
              className="flex-1 h-[2px] bg-gradient-to-r from-[#C778DD] to-transparent max-w-md"
              variants={lineVariants}
              initial="hidden"
              animate={hasAnimated ? "visible" : "hidden"}
            />
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                initial="hidden"
                animate={hasAnimated ? "visible" : "hidden"}
                whileHover="hover"
                custom={categoryIndex}
                className={`border-2 ${
                  isDarkMode ? "border-gray-700 bg-[#1a1a1a]" : "border-gray-300 bg-gray-50"
                } relative overflow-hidden group`}
              >
                {/* Terminal Header */}
                <div
                  className={`flex items-center gap-2 p-3 border-b-2 ${
                    isDarkMode ? "border-gray-700" : "border-gray-300"
                  }`}
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <IconComponent className="w-4 h-4 text-[#C778DD] ml-2" />
                  <span className={`text-xs font-mono ${isDarkMode ? "text-[#607B96]" : "text-gray-600"}`}>
                    {category.title.toLowerCase()}
                  </span>
                </div>

                {/* Terminal Content */}
                <div className="p-4">
                  {/* Command */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[#C778DD] font-mono text-sm">$</span>
                    <span className={`font-mono text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                      {category.command}
                    </span>
                  </div>

                  {/* Category Title */}
                  <motion.h3
                    className={`text-lg font-bold font-mono mb-3 ${isDarkMode ? "text-white" : "text-[#282C33]"}`}
                    variants={glitchVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    {category.title}
                  </motion.h3>

                  {/* Skills List */}
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon
                      return (
                        <motion.div
                          key={skill.name}
                          variants={skillItemVariants}
                          initial="hidden"
                          animate={hasAnimated ? "visible" : "hidden"}
                          whileHover="hover"
                          custom={skillIndex}
                          className={`flex items-center gap-2 font-mono text-sm cursor-default ${
                            isDarkMode ? "text-gray-300" : "text-[#646971]"
                          }`}
                        >
                          <SkillIcon className="w-4 h-4" style={{ color: skill.color }} />
                          <span>{skill.name}</span>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C778DD]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-[#C778DD] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            )
          })}
        </div>

        {/* Terminal Output Summary */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          custom={5}
          className={`mt-12 border-2 ${isDarkMode ? "border-gray-700 bg-[#1a1a1a]" : "border-gray-300 bg-gray-50"} p-6`}
        >
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="w-4 h-4 text-[#C778DD]" />
            <span className={`font-mono text-sm ${isDarkMode ? "text-[#607B96]" : "text-gray-600"}`}>
              ~/skills/summary.log
            </span>
          </div>

          <div className="font-mono space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[#C778DD]">$</span>
              <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>wc -l skills/*</span>
            </div>
            <div className={`pl-4 text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
              <div>Languages: {skillCategories[0].skills.length} items</div>
              <div>Frameworks: {skillCategories[1].skills.length} items</div>
              <div>Tools: {skillCategories[2].skills.length} items</div>
              <div>Databases: {skillCategories[3].skills.length} items</div>
              <div>Other: {skillCategories[4].skills.length} items</div>
              <div className="text-[#C778DD] mt-2">
                Total: {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)} skills loaded
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
