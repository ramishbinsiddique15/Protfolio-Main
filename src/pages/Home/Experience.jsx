"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Terminal, Briefcase, Calendar, MapPin, User, Clock } from "lucide-react"
import { useTheme } from "../../context/ThemeContext"
import dots from "../../assets/dots.png"
import box from "../../assets/box.png"
import dodo from "../../assets/dodo-softec.png"

const Experience = () => {
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
      transition: { duration: 0.6, delay: 0.8 + i * 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
    hover: {
      y: -5,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  }

  const timelineVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "100%",
      opacity: 1,
      transition: { duration: 1.5, delay: 1.5, ease: "easeInOut" },
    },
  }

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  const experiences = [
    {
      title: "Frontend Intern",
      company: "Dodo Softec",
      date: "June 2024 - August 2024",
      duration: "3 months",
      location: "Onsite",
      status: "completed",
      command: "git log --oneline --since='June 2024' --until='August 2024'",
      description: [
        "Assisted in the development and maintenance of web applications using React.js, gaining hands-on experience.",
        "Worked closely with senior developers and designers to review designs, implement responsive web layouts, and ensure functional specifications.",
        "Contributed to implementing responsive design and enhanced coding skills by participating in code reviews and incorporating feedback.",
      ],
      technologies: ["React.js", "JavaScript", "CSS", "HTML5"],
    },
    {
      title: "Frontend Developer",
      company: "Dodo Softec",
      date: "September 2024 - Present",
      duration: "1+ year",
      location: "Onsite",
      status: "current",
      command: "ps aux | grep 'frontend-dev'",
      description: [
        "Leading the development and optimization of web applications using React.js, Tailwind CSS, and other modern technologies.",
        "Collaborating with designers, developers, and product teams to deliver scalable and high-quality solutions.",
        "Enhancing coding standards, mentoring junior developers, and driving improvements in code quality and performance.",
      ],
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "Node.js"],
    },
  ]

  return (
    <section
      id="experience"
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

      <div className="container mx-auto px-6 py-20 relative z-10" ref={ref}>
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
            <span>experience</span>
            <span className="text-[#C778DD]">--timeline</span>
          </div>

          <div className="flex items-center gap-4">
            <motion.h1
              className={`${isDarkMode ? "text-white" : "text-[#282C33]"} text-4xl font-bold font-mono`}
              variants={glitchVariants}
              initial="initial"
              whileHover="hover"
            >
              <span className="text-[#C778DD]">#</span>
              experience
            </motion.h1>
            <motion.div
              className="flex-1 h-[2px] bg-gradient-to-r from-[#C778DD] to-transparent max-w-md"
              variants={lineVariants}
              initial="hidden"
              animate={hasAnimated ? "visible" : "hidden"}
            />
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            className="hidden sm:block absolute left-1 top-0 w-1 bg-gradient-to-b from-[#C778DD] to-transparent"
            variants={timelineVariants}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            style={{ height: "calc(100% - 100px)" }}
          />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                variants={cardVariants}
                initial="hidden"
                animate={hasAnimated ? "visible" : "hidden"}
                whileHover="hover"
                custom={index}
                className={`relative ml-0 sm:ml-8 border-2 ${
                  isDarkMode ? "border-gray-700 bg-[#1a1a1a]" : "border-gray-300 bg-gray-50"
                } overflow-hidden group`}
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

                  {/* Company Logo */}
                  <div className="w-8 h-8 border-2 border-[#C778DD] bg-white rounded-full flex items-center justify-center overflow-hidden ml-2 mr-2">
                    <img
                      src={dodo || "/placeholder.svg"}
                      alt={`${exp.company} logo`}
                      className="w-6 h-6 object-contain"
                    />
                  </div>

                  <Briefcase className="w-4 h-4 text-[#C778DD]" />
                  <span className={`text-xs font-mono ${isDarkMode ? "text-[#607B96]" : "text-gray-600"}`}>
                    {exp.title.toLowerCase().replace(/\s+/g, "-")}
                  </span>
                </div>

                {/* Terminal Content */}
                <div className="p-6">
                  {/* Command */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#C778DD] font-mono text-sm">$</span>
                    <span className={`font-mono text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                      {exp.command}
                    </span>
                  </div>

                  {/* Job Info */}
                  <div className="mb-6">
                    <motion.h3
                      className="text-2xl font-bold text-[#C778DD] mb-2 font-mono"
                      variants={glitchVariants}
                      initial="initial"
                      whileHover="hover"
                    >
                      {exp.title}
                    </motion.h3>

                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            exp.status === "current" ? "bg-green-500 animate-pulse" : "bg-gray-400"
                          }`}
                        />
                        <span className={`text-sm font-mono ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                          {exp.status === "current" ? "Active" : "Completed"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-[#C778DD]" />
                        <span className={`text-sm font-mono ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                          {exp.company}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#C778DD]" />
                        <span className={`text-sm font-mono ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                          {exp.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#C778DD]" />
                        <span className={`text-sm font-mono ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                          {exp.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#C778DD]" />
                        <span className={`text-sm font-mono ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[#C778DD] font-mono text-sm">$</span>
                      <span className={`font-mono text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                        cat responsibilities.txt
                      </span>
                    </div>
                    <ul className={`space-y-3 pl-4 ${isDarkMode ? "text-gray-300" : "text-[#646971]"}`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 font-mono text-sm leading-relaxed">
                          <span className="text-[#C778DD] mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[#C778DD] font-mono text-sm">$</span>
                      <span className={`font-mono text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                        ls technologies/
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 text-xs font-mono border-2 ${
                            isDarkMode
                              ? "border-gray-600 bg-[#0f1419] text-gray-300"
                              : "border-gray-200 bg-white text-gray-700"
                          } hover:border-[#C778DD] transition-colors duration-300`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C778DD]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-[#C778DD] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Terminal Summary */}
        {/* <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          custom={2}
          className={`mt-12 border-2 ${isDarkMode ? "border-gray-700 bg-[#1a1a1a]" : "border-gray-300 bg-gray-50"} p-6`}
        >
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="w-4 h-4 text-[#C778DD]" />
            <span className={`font-mono text-sm ${isDarkMode ? "text-[#607B96]" : "text-gray-600"}`}>
              ~/experience/summary.log
            </span>
          </div>

          <div className="font-mono space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[#C778DD]">$</span>
              <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                grep -r "experience" . | wc -l
              </span>
            </div>
            <div className={`pl-4 text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
              <div>Total positions: {experiences.length}</div>
              <div>Companies worked with: {[...new Set(experiences.map((exp) => exp.company))].length}</div>
              <div>Technologies mastered: {[...new Set(experiences.flatMap((exp) => exp.technologies))].length}</div>
              <div>
                Current status: {experiences.find((exp) => exp.status === "current") ? "Employed" : "Available"}
              </div>
              <div className="text-[#C778DD] mt-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Status: Ready for new challenges and opportunities!
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}

export default Experience
