"use client"
import { useEffect, useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ArrowRight, Terminal } from "lucide-react"
import { useTheme } from "../../context/ThemeContext"
import dots from "../../assets/dots.png"
import box from "../../assets/box.png"
import { useLocation, useNavigate } from "react-router-dom"

const AboutMe = () => {
  const { isDarkMode } = useTheme()
  const [hasAnimated, setHasAnimated] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [bioMode, setBioMode] = useState("overview")
  const [personalMode, setPersonalMode] = useState("basic")
  const [achievementsMode, setAchievementsMode] = useState("major")
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

  // Content definitions for different modes
  const bioContents = {
    overview: [
      "$ cat bio-overview.txt",
      "> I'm Ramish, a self-taught full-stack developer from Rawalpindi, Pakistan.",
      "> Specializing in the MERN stack, I build scalable web applications.",
      "> Passionate about creating seamless user experiences.",
    ],
    details: [
      "$ cat bio-details.txt",
      "> Over 1 year of experience in full-stack development.",
      "> Proficient in MongoDB, Express.js, React, and Node.js.",
      "> Focused on responsive design and performance optimization.",
      "> Always learning new tools and frameworks to stay current.",
    ],
    funFacts: [
      "$ cat bio-funfacts.txt",
      "> I code best with a cup of coffee in hand.",
      "> Once solved a coding challenge at 3 AM just for fun.",
      "> My favorite hobby is exploring open-source projects.",
    ],
  }

  const personalDataContents = {
    basic: [
      "$ cat personal-data-basic.json",
      "> {",
      `>   "name": "Ramish"`,
      `>   "location": "Rawalpindi, Pakistan"`,
      `>   "timezone": "PKT (UTC+5)"`,
      `>   "local_time": "${currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}"`,
      "> }",
    ],
    tech: [
      "$ cat personal-data-tech.json",
      "> {",
      `>   "favorite_editor": "VS Code"`,
      `>   "preferred_stack": "MERN"`,
      `>   "coding_hours_daily": "6-8"`,
      "> }",
    ],
    personal: [
      "$ cat personal-data-personal.json",
      "> {",
      `>   "coffee_consumed": "∞ cups"`,
      `>   "passion": "Problem solving"`,
      `>   "motivation": "Building the future"`,
      "> }",
    ],
  }

  const achievementsContents = {
    major: [
      "$ tail -f milestones-major.log",
      "> 🚀 Built first web app",
      "> 🎯 Delivered 10+ client projects",
      "> 📚 Self-taught MERN stack",
    ],
    minor: [
      "$ tail -f milestones-minor.log",
      "> 💡 Solved 100+ coding challenges",
      "> 🌟 Created responsive designs",
      "> ⚡ Optimized app performance",
    ],
    inProgress: [
      "$ tail -f milestones-inprogress.log",
      "> 🔍 Exploring AI-driven development tools",
      "> 🌐 Building a personal portfolio v2",
      "> 📖 Learning advanced DevOps practices",
    ],
  }

  // Animation variants
  const glitchVariants = {
    initial: { x: 0, y: 0, textShadow: "0 0 0 transparent" },
    hover: {
      x: [0, -2, 2, -1, 1, 0],
      y: [0, -1, 1, -1, 0],
      textShadow: [
        "0 0 0 transparent",
        "2px 0 0 #ff0000, -三px 0 0 #00ffff",
        "-2px 0 0 #ff0000, 2px 0 0 #00ffff",
        "1px 0 0 #ff0000, -1px 0 0 #00ffff",
        "0 0 0 transparent",
      ],
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  }

  const buttonGlitchVariants = {
    initial: { x: 0, y: 0, textShadow: "0 0 0 transparent" },
    hover: {
      x: [0, -1, 1, -1, 1, 0],
      y: [0, -1, 1, -1, 0],
      textShadow: [
        "0 0 0 transparent",
        "1px 0 0 #ff0000, -26px 0 0 #00ffff",
        "-1px 0 0 #ff0000, 1px 0 0 #00ffff",
        "1px 0 0 #ff0000, -1px 0 0 #00ffff",
        "0 0 0 transparent",
      ],
      transition: { duration: 0.4, ease: "easeInOut" },
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

  const contentVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeInOut" } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.4, ease: "easeInOut" } },
  }

  const buttonVariants = {
    initial: { scale: 1, boxShadow: "0 0 0 rgba(199, 120, 221, 0)" },
    hover: { scale: 1.05, boxShadow: "0 0 10px rgba(199, 120, 221, 0.5)", transition: { duration: 0.3 } },
  }

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  return (
    <section
      className={`min-h-[calc(100vh-32px)] py-8 sm:py-12 transition-colors duration-300 ${isDarkMode ? "bg-[#1a1a1a]" : "bg-gray-100"}`}
      id="about-me"
      ref={ref}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.img
          src={box}
          alt=""
          className="hidden md:block absolute top-10 right-10 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 opacity-20"
          animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.img
          src={dots}
          alt=""
          className="hidden sm:block absolute bottom-10 left-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 opacity-10"
          animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(${isDarkMode ? "#333" : "#ddd"} 1px, transparent 1px), linear-gradient(90deg, ${isDarkMode ? "#333" : "#ddd"} 1px, transparent 1px)`,
            backgroundSize: "30px 30px sm:40px sm:40px md:50px md:50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-20 relative z-10">
        {/* Terminal Header */}
        <motion.div variants={headingVariants} initial="hidden" animate={hasAnimated ? "visible" : "hidden"} className="mb-8 sm:mb-12">
          <div
            className={`inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 border-2 ${isDarkMode ? "border-[#C778DD] text-gray-400 bg-[#1a1a1a]" : "border-[#9333ea] bg-gray-50"} font-mono text-xs sm:text-sm mb-4 sm:mb-6`}
          >
            <Terminal className="w-3 h-3 sm:w-4 sm:h-4 text-[#C778DD]" />
            <span className="text-[#C778DD]">#</span>
            <span>about-me</span>
            <span className="text-[#C778DD]">--info</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <motion.h1
              className={`${isDarkMode ? "text-white" : "text-[#282C33]"} cursor-default text-2xl sm:text-3xl md:text-4xl font-bold font-mono`}
              variants={glitchVariants}
              initial="initial"
              whileHover="hover"
            >
              <span className="text-[#C778DD]">#</span>
              about-me
            </motion.h1>
            <motion.div
              className="flex-1 h-[2px] bg-gradient-to-r from-[#C778DD] to-transparent max-w-xs sm:max-w-sm md:max-w-md"
              variants={lineVariants}
              initial="hidden"
              animate={hasAnimated ? "visible" : "hidden"}
            />
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
          {/* Left Content - Bio Terminal */}
          <div className="space-y-4 sm:space-y-6">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={hasAnimated ? "visible" : "hidden"}
              custom={0}
              className={`border-2 ${isDarkMode ? "border-gray-700 bg-[#1a1a1a]" : "border-gray-300 bg-gray-50"} relative overflow-hidden group`}
            >
              {/* Terminal Header */}
              <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-2 p-3 border-b-2 ${isDarkMode ? "border-gray-700" : "border-gray-300"}`}>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className={`ml-0 sm:ml-2 text-xs font-mono ${isDarkMode ? "text-[#607B96]" : "text-gray-600"}`}>~/about/ramish.txt</span>
                <div className="mt-2 sm:mt-0 sm:ml-auto flex flex-wrap gap-2">
                  {["overview", "details", "funFacts"].map((mode) => (
                    <motion.button
                      key={mode}
                      onClick={() => setBioMode(mode)}
                      variants={buttonVariants}
                      initial="initial"
                      whileHover="hover"
                      className={`cursor-pointer px-2 py-1 border-2 font-mono text-xs min-w-[80px] ${bioMode === mode
                          ? isDarkMode
                            ? "border-[#C778DD] text-white bg-[#C778DD]/20"
                            : "border-[#9333ea] text-[#282C33] bg-[#9333ea]/20"
                          : isDarkMode
                            ? "border-gray-600 text-gray-300 bg-gray-800/50 hover:bg-[#C778DD] hover:text-white"
                            : "border-gray-300 text-gray-700 bg-gray-100/50 hover:bg-[#9333ea] hover:text-white"
                        }`}
                    >
                      {mode.charAt(0).toUpperCase() + mode.slice(1).replace(/([A-Z])/g, " $1").trim()}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-3 sm:p-4 font-mono text-xs sm:text-sm relative max-h-[300px] overflow-auto">
                <AnimatePresence mode="wait">
                  {bioMode ? (
                    <motion.div
                      key={bioMode}
                      variants={contentVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                    >
                      {bioContents[bioMode].map((line, index) => (
                        <div key={index}>
                          {line.startsWith("$") ? (
                            <span className="text-[#C778DD]">{line}</span>
                          ) : (
                            <>
                              <span className="text-[#C778DD]">{">"}</span> {line.slice(2)}
                            </>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.p
                      key="placeholder"
                      variants={contentVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className={`text-${isDarkMode ? "gray-500" : "gray-400"}`}
                    >
                      Select a mode to view...
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Clear Button */}
              <div className="p-3 sm:p-4 border-t-2 border-gray-700">
                <motion.button
                  onClick={() => setBioMode(null)}
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  className={`cursor-pointer px-3 sm:px-4 py-1.5 sm:py-2 border-2 font-mono text-xs sm:text-sm min-w-[80px] ${isDarkMode
                      ? "border-gray-600 text-gray-300 bg-gray-800/50 hover:bg-[#C778DD] hover:text-white"
                      : "border-gray-300 text-gray-700 bg-gray-100/50 hover:bg-[#C778DD] hover:text-white"
                    }`}
                >
                  Clear
                </motion.button>
              </div>
            </motion.div>

            {/* Read More Button */}
            {location.pathname === "/" && (
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate={hasAnimated ? "visible" : "hidden"}
                custom={1}
              >
                <motion.button
                  onClick={() => navigate("/about-me")}
                  className={`relative w-fit flex items-center justify-center cursor-pointer border border-[#C778DD] font-semibold px-3 sm:px-4 py-2 sm:py-3 overflow-hidden transition-all duration-300 group ${isDarkMode ? "hover:shadow-lg hover:shadow-[#C778DD]/25 border-opacity-80" : "hover:shadow-lg hover:shadow-[#C778DD]/20 border-opacity-60"
                    }`}
                  variants={buttonGlitchVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <motion.span
                    className={`relative z-10 transition-colors duration-300 ${isDarkMode ? "text-white group-hover:text-[#011627]" : "text-[#282C33] group-hover:text-white"
                      } text-xs sm:text-sm font-mono`}
                    variants={glitchVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    Read More
                  </motion.span>
                  <div className="relative flex gap-2 px-2 items-center justify-center">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 group-hover:bg-white bg-[#C778DD] rounded-full flex items-center justify-center z-30">
                      <ArrowRight
                        className={`${isDarkMode ? "text-white" : "text-white"} w-3 h-3 sm:w-4 sm:h-4 transform transition-all duration-300 group-hover:opacity-0 group-hover:scale-0`}
                      />
                      <ArrowRight
                        className="text-[#C778DD] absolute w-3 h-3 sm:w-4 sm:h-4 transform transition-all duration-300 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-[#C778DD] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 origin-left" />
                </motion.button>
              </motion.div>
            )}
          </div>

          {/* Right Content - Personal Data & Achievements */}
          <div className="space-y-4 sm:space-y-6">
            {/* Personal Data Terminal */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={hasAnimated ? "visible" : "hidden"}
              custom={9}
              className={`border-2 ${isDarkMode ? "border-gray-700 bg-[#1a1a1a]" : "border-gray-300 bg-gray-50"} relative overflow-hidden group`}
            >
              {/* Terminal Header */}
              <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-2 p-3 border-b-2 ${isDarkMode ? "border-gray-700" : "border-gray-300"}`}>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className={`ml-0 sm:ml-2 text-xs font-mono ${isDarkMode ? "text-[#607B96]" : "text-gray-600"}`}>~/dev/personal-data.json</span>
                <div className="mt-2 sm:mt-0 sm:ml-auto flex flex-wrap gap-2">
                  {["basic", "tech", "personal"].map((mode) => (
                    <motion.button
                      key={mode}
                      onClick={() => setPersonalMode(mode)}
                      variants={buttonVariants}
                      initial="initial"
                      whileHover="hover"
                      className={`cursor-pointer px-2 py-1 border-2 font-mono text-xs min-w-[80px] ${personalMode === mode
                          ? isDarkMode
                            ? "border-[#C778DD] text-white bg-[#C778DD]/20"
                            : "border-[#9333ea] text-[#282C33] bg-[#9333ea]/20"
                          : isDarkMode
                            ? "border-gray-600 text-gray-300 bg-gray-800/50 hover:bg-[#C778DD] hover:text-white"
                            : "border-gray-300 text-gray-700 bg-gray-100/50 hover:bg-[#9333ea] hover:text-white"
                        }`}
                    >
                      {mode.charAt(0).toUpperCase() + mode.slice(1)}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-3 sm:p-4 font-mono text-xs sm:text-sm relative max-h-[300px] overflow-auto">
                <AnimatePresence mode="wait">
                  {personalMode ? (
                    <motion.div
                      key={personalMode}
                      variants={contentVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                    >
                      {personalDataContents[personalMode].map((line, index) => (
                        <div key={index}>
                          {line.startsWith("$") ? (
                            <span className="text-[#C778DD]">{line}</span>
                          ) : (
                            <>
                              <span className="text-[#C778DD]">{">"}</span> {line.slice(2)}
                            </>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.p
                      key="placeholder"
                      variants={contentVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className={`text-${isDarkMode ? "gray-500" : "gray-400"}`}
                    >
                      Select a mode to view...
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Clear Button */}
              <div className="p-3 sm:p-4 border-t-2 border-gray-700">
                <motion.button
                  onClick={() => setPersonalMode(null)}
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  className={`cursor-pointer px-3 sm:px-4 py-1.5 sm:py-2 border-2 font-mono text-xs sm:text-sm min-w-[80px] ${isDarkMode
                      ? "border-gray-600 text-gray-300 bg-gray-800/50 hover:bg-[#C778DD] hover:text-white"
                      : "border-gray-300 text-gray-700 bg-gray-100/50 hover:bg-[#C778DD] hover:text-white"
                    }`}
                >
                  Clear
                </motion.button>
              </div>
            </motion.div>

            {/* Achievements Terminal */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={hasAnimated ? "visible" : "hidden"}
              custom={18}
              className={`border-2 ${isDarkMode ? "border-gray-700 bg-[#1a1a1a]" : "border-gray-300 bg-gray-50"} relative overflow-hidden group`}
            >
              {/* Terminal Header */}
              <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-2 p-3 border-b-2 ${isDarkMode ? "border-gray-700" : "border-gray-300"}`}>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className={`ml-0 sm:ml-2 text-xs font-mono ${isDarkMode ? "text-[#607B96]" : "text-gray-600"}`}>~/achievements/milestones.log</span>
                <div className="mt-2 sm:mt-0 sm:ml-auto flex flex-wrap gap-2">
                  {["major", "minor", "inProgress"].map((mode) => (
                    <motion.button
                      key={mode}
                      onClick={() => setAchievementsMode(mode)}
                      variants={buttonVariants}
                      initial="initial"
                      whileHover="hover"
                      className={`cursor-pointer px-2 py-1 border-2 font-mono text-xs min-w-[80px] ${achievementsMode === mode
                          ? isDarkMode
                            ? "border-[#C778DD] text-white bg-[#C778DD]/20"
                            : "border-[#9333ea] text-[#282C33] bg-[#9333ea]/20"
                          : isDarkMode
                            ? "border-gray-600 text-gray-300 bg-gray-800/50 hover:bg-[#C778DD] hover:text-white"
                            : "border-gray-300 text-gray-700 bg-gray-100/50 hover:bg-[#9333ea] hover:text-white"
                        }`}
                    >
                      {mode.charAt(0).toUpperCase() + mode.slice(1).replace(/([A-Z])/g, " $1").trim()}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-3 sm:p-4 font-mono text-xs sm:text-sm relative max-h-[300px] overflow-auto">
                <AnimatePresence mode="wait">
                  {achievementsMode ? (
                    <motion.div
                      key={achievementsMode}
                      variants={contentVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                    >
                      {achievementsContents[achievementsMode].map((line, index) => (
                        <div key={index}>
                          {line.startsWith("$") ? (
                            <span className="text-[#C778DD]">{line}</span>
                          ) : (
                            <>
                              <span className="text-[#C778DD]">{">"}</span> {line.slice(2)}
                            </>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.p
                      key="placeholder"
                      variants={contentVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className={`text-${isDarkMode ? "gray-500" : "gray-400"}`}
                    >
                      Select a mode to view...
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Clear Button */}
              <div className="p-3 sm:p-4 border-t-2 border-gray-700">
                <motion.button
                  onClick={() => setAchievementsMode(null)}
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  className={`cursor-pointer px-3 sm:px-4 py-1.5 sm:py-2 border-2 font-mono text-xs sm:text-sm min-w-[80px] ${isDarkMode
                      ? "border-gray-600 text-gray-300 bg-gray-800/50 hover:bg-[#C778DD] hover:text-white"
                      : "border-gray-300 text-gray-700 bg-gray-100/50 hover:bg-[#C778DD] hover:text-white"
                    }`}
                >
                  Clear
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe