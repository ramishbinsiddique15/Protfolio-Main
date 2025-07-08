"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Terminal, User, Coffee, Clock, MapPin, Heart, Zap, Code2 } from "lucide-react"
import { useTheme } from "../../context/ThemeContext"
import dots from "../../assets/dots.png"
import box from "../../assets/box.png"
import { useLocation, useNavigate } from "react-router-dom"

const AboutMe = () => {
  const { isDarkMode } = useTheme()
  const [hasAnimated, setHasAnimated] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const navigate = useNavigate()
  const location = useLocation()
  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

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

  const buttonGlitchVariants = {
    initial: {
      x: 0,
      y: 0,
      textShadow: "0 0 0 transparent",
    },
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
      transition: {
        duration: 0.4,
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
  }

  const personalData = [
    {
      label: "location",
      value: "Rawalpindi, Pakistan",
      icon: <MapPin className="w-4 h-4" />,
      color: "#C778DD"
    },
    {
      label: "timezone",
      value: "PKT (UTC+5)",
      icon: <Clock className="w-4 h-4" />,
      color: "#61DAFB"
    },
    {
      label: "coffee_consumed",
      value: "∞ cups",
      icon: <Coffee className="w-4 h-4" />,
      color: "#F7DF1E"
    },
    {
      label: "passion",
      value: "Problem solving",
      icon: <Heart className="w-4 h-4" />,
      color: "#FF6B6B"
    },
    {
      label: "motivation",
      value: "Building the future",
      icon: <Zap className="w-4 h-4" />,
      color: "#4ECDC4"
    },
    {
      label: "favorite_editor",
      value: "VS Code",
      icon: <Code2 className="w-4 h-4" />,
      color: "#007ACC"
    }
  ]

  const achievements = [
    "🚀 Built first web app",
    "💡 Solved 100+ coding challenges",
    "🎯 Delivered 10+ client projects",
    "📚 Self-taught MERN stack",
    "🌟 Created responsive designs",
    "⚡ Optimized app performance"
  ]

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  return (
    <section
      className={`${location.pathname === "/about-me" ? "pt-15" : ""}  relative min-h-screen transition-colors duration-300`}
      id="about-me"
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
            className={`inline-flex items-center gap-3 px-4 py-2 border-2 ${isDarkMode ? "border-[#C778DD] text-gray-400 bg-[#1a1a1a]" : "border-[#9333ea] bg-gray-50"
              } font-mono text-sm mb-6`}
          >
            <Terminal className="w-4 h-4 text-[#C778DD]" />
            <span className="text-[#C778DD]">#</span>
            <span>about-me</span>
            <span className="text-[#C778DD]">--info</span>
          </div>

          <div className="flex items-center gap-4">
            <motion.h1
              className={`${isDarkMode ? "text-white" : "text-[#282C33]"} cursor-default text-4xl font-bold font-mono`}
              variants={glitchVariants}
              initial="initial"
              whileHover="hover"
            >
              <span className="text-[#C778DD]">#</span>
              about-me
            </motion.h1>
            <motion.div
              className="flex-1 h-[2px] bg-gradient-to-r from-[#C778DD] to-transparent max-w-md"
              variants={lineVariants}
              initial="hidden"
              animate={hasAnimated ? "visible" : "hidden"}
            />
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content - Bio Terminal */}
          <div className="space-y-6">
            {/* Main Bio Terminal */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={hasAnimated ? "visible" : "hidden"}
              custom={0}
              className={`border-2 ${isDarkMode ? "border-gray-700 bg-[#1a1a1a]" : "border-gray-300 bg-gray-50"
                } relative overflow-hidden group`}
            >
              {/* Terminal Header */}
              <div
                className={`flex items-center gap-2 p-3 border-b-2 ${isDarkMode ? "border-gray-700" : "border-gray-300"
                  }`}
              >
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className={`ml-2 text-xs font-mono ${isDarkMode ? "text-[#607B96]" : "text-gray-600"}`}>
                  ~/about/ramish.txt
                </span>
              </div>

              {/* Terminal Content */}
              <div className="p-4 space-y-4 font-mono">
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate={hasAnimated ? "visible" : "hidden"}
                  custom={1}
                  className="flex items-center gap-2"
                >
                  <span className="text-[#C778DD]">$</span>
                  <span className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>whoami</span>
                </motion.div>

                <motion.p
                  variants={cardVariants}
                  initial="hidden"
                  animate={hasAnimated ? "visible" : "hidden"}
                  custom={2}
                  className={`text-lg ${isDarkMode ? "text-gray-300" : "text-[#646971]"} pl-4`}
                >
                  Hello, I'm Ramish!
                </motion.p>

                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate={hasAnimated ? "visible" : "hidden"}
                  custom={3}
                  className="flex items-center gap-2"
                >
                  <span className="text-[#C778DD]">$</span>
                  <span className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>cat bio.txt</span>
                </motion.div>

                <motion.p
                  variants={cardVariants}
                  initial="hidden"
                  animate={hasAnimated ? "visible" : "hidden"}
                  custom={4}
                  className={`text-lg ${isDarkMode ? "text-gray-300" : "text-[#646971]"} leading-relaxed pl-4`}
                >
                  I'm a self-taught full-stack developer specializing in the MERN stack, based in Rawalpindi, Pakistan.
                  I build scalable, responsive web applications from the ground up—delivering modern, seamless user
                  experiences on both the front and back end.
                </motion.p>

                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate={hasAnimated ? "visible" : "hidden"}
                  custom={5}
                  className="flex items-center gap-2"
                >
                  <span className="text-[#C778DD]">$</span>
                  <span className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>cat experience.txt</span>
                </motion.div>

                <motion.p
                  variants={cardVariants}
                  initial="hidden"
                  animate={hasAnimated ? "visible" : "hidden"}
                  custom={6}
                  className={`text-lg ${isDarkMode ? "text-gray-300" : "text-[#646971]"} leading-relaxed pl-4`}
                >
                  For over a year, I've been channeling my creativity and technical skills into crafting impactful
                  digital solutions. I've had the opportunity to help clients establish and grow their online presence,
                  and I'm always exploring the latest tools, frameworks, and best practices to stay ahead in the
                  ever-evolving world of web development.
                </motion.p>

                {/* Status Line */}
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate={hasAnimated ? "visible" : "hidden"}
                  custom={7}
                  className="flex items-center gap-2 pt-4"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[#C778DD] text-sm">status:</span>
                  <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    available for projects
                  </span>
                </motion.div>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C778DD]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-[#C778DD] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>

            {/* Read More Button */}

            {location.pathname === "/" && <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={hasAnimated ? "visible" : "hidden"}
              custom={8}
            >
              <motion.button
                onClick={() => navigate("/about-me")}
                className={`relative w-fit flex items-center justify-center cursor-pointer 
                border border-[#C778DD] font-semibold 
                px-3 py-2 overflow-hidden transition-all duration-300 group
                ${isDarkMode ? "hover:shadow-lg hover:shadow-[#C778DD]/25 border-opacity-80" : "hover:shadow-lg hover:shadow-[#C778DD]/20 border-opacity-60"}`}
                variants={buttonGlitchVariants}
                initial="initial"
                whileHover="hover"
              >
                <motion.span
                  className={`relative z-10 transition-colors duration-300 
                  ${isDarkMode ? "text-white group-hover:text-[#011627]" : "text-[#282C33] group-hover:text-white"} text-sm font-mono`}
                  variants={glitchVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  Read More
                </motion.span>
                <div className="relative flex gap-2 px-2 items-center justify-center">
                  <div className="w-6 h-6 group-hover:bg-white bg-[#C778DD] rounded-full flex items-center justify-center z-30">
                    <ArrowRight
                      className={`${isDarkMode ? "text-white" : "text-white"} w-3 h-3 transform transition-all duration-300 group-hover:opacity-0 group-hover:scale-0`}
                    />
                    <ArrowRight className="text-[#C778DD] absolute w-3 h-3 transform transition-all duration-300 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-[#C778DD] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 origin-left" />
              </motion.button>
            </motion.div>}
          </div>

          {/* Right Content - Personal Data & Achievements */}
          <div className="space-y-6">
            {/* Personal Data Terminal */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={hasAnimated ? "visible" : "hidden"}
              custom={9}
              className={`border-2 ${isDarkMode ? "border-gray-700 bg-[#1a1a1a]" : "border-gray-300 bg-gray-50"
                } relative overflow-hidden group`}
            >
              {/* Terminal Header */}
              <div
                className={`flex items-center gap-2 p-3 border-b-2 ${isDarkMode ? "border-gray-700" : "border-gray-300"
                  }`}
              >
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className={`ml-2 text-xs font-mono ${isDarkMode ? "text-[#607B96]" : "text-gray-600"}`}>
                  ~/dev/personal-data.json
                </span>
              </div>

              {/* Personal Data Content */}
              <div className="p-4 space-y-4 font-mono">
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate={hasAnimated ? "visible" : "hidden"}
                  custom={10}
                  className="flex items-center gap-2"
                >
                  <span className="text-[#C778DD]">$</span>
                  <span className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>cat personal-data.json</span>
                </motion.div>

                <div className="pl-4 space-y-3">
                  <div className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>{"{"}</div>

                  {personalData.map((item, index) => (
                    <motion.div
                      key={item.label}
                      variants={cardVariants}
                      initial="hidden"
                      animate={hasAnimated ? "visible" : "hidden"}
                      custom={11 + index}
                      className="flex items-center gap-2 pl-4"
                    >
                      <div style={{ color: item.color }}>
                        {item.icon}
                      </div>
                      <span className="text-[#C778DD]">"{item.label}":</span>
                      <span className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>"{item.value}",</span>
                    </motion.div>
                  ))}

                  {/* Live Clock */}
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate={hasAnimated ? "visible" : "hidden"}
                    custom={17}
                    className="flex items-center gap-2 pl-4"
                  >
                    <Clock className="w-4 h-4 text-[#4ECDC4]" />
                    <span className="text-[#C778DD]">"local_time":</span>
                    <span className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                      "{currentTime.toLocaleTimeString()}"
                    </span>
                  </motion.div>

                  <div className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>{"}"}</div>
                </div>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C778DD]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-[#C778DD] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>

            {/* Achievements Terminal */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={hasAnimated ? "visible" : "hidden"}
              custom={18}
              className={`border-2 ${isDarkMode ? "border-gray-700 bg-[#1a1a1a]" : "border-gray-300 bg-gray-50"
                } relative overflow-hidden group`}
            >
              {/* Terminal Header */}
              <div
                className={`flex items-center gap-2 p-3 border-b-2 ${isDarkMode ? "border-gray-700" : "border-gray-300"
                  }`}
              >
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className={`ml-2 text-xs font-mono ${isDarkMode ? "text-[#607B96]" : "text-gray-600"}`}>
                  ~/achievements/milestones.log
                </span>
              </div>

              {/* Achievements Content */}
              <div className="p-4 space-y-3 font-mono">
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate={hasAnimated ? "visible" : "hidden"}
                  custom={19}
                  className="flex items-center gap-2"
                >
                  <span className="text-[#C778DD]">$</span>
                  <span className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>tail -f milestones.log</span>
                </motion.div>

                <div className="pl-4 space-y-2">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement}
                      initial={{ opacity: 0, x: -20 }}
                      animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{
                        duration: 0.4,
                        delay: 2 + (index * 0.2)
                      }}
                      className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"} hover:text-[#C778DD] transition-colors cursor-default`}
                    >
                      {achievement}
                    </motion.div>
                  ))}
                </div>

                {/* Status Line */}
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate={hasAnimated ? "visible" : "hidden"}
                  custom={25}
                  className="flex items-center gap-2 pt-4 border-t border-gray-600"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[#C778DD] text-sm">status:</span>
                  <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    continuously growing
                  </span>
                </motion.div>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C778DD]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-[#C778DD] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe