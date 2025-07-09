"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { FaCoffee, FaBug, FaCode, FaLaptopCode, FaRocket } from "react-icons/fa"
import { GiCricketBat, GiSoccerBall, GiMountainClimbing, GiHelmet } from "react-icons/gi"
import { Terminal, Hash, Coffee, Bug, Gamepad2 } from "lucide-react"
import dots from "../../assets/dots.png"
import box from "../../assets/box.png"
import { useTheme } from "../../context/ThemeContext"

const FunFacts = () => {
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
      transition: { duration: 0.6, delay: 0.8 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
    hover: {
      y: -5,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  }

  const terminalVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 1.2 },
    },
  }

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  const funFactCategories = [
    {
      title: "Lifestyle",
      command: "cat lifestyle.log",
      icon: Coffee,
      facts: [
        { icon: FaCoffee, text: "Run on chai and biryani, the true desi developer fuel.", color: "#8B4513" },
        { icon: GiHelmet, text: "Bike rides beat coding sprints, Karachi traffic included!", color: "#FF6B35" },
        {
          icon: GiMountainClimbing,
          text: "Climb mountains, because fixing merge conflicts isn't epic enough.",
          color: "#4A90E2",
        },
      ],
    },
    {
      title: "Coding Life",
      command: "tail -f debug.log",
      icon: Bug,
      facts: [
        { icon: FaBug, text: "Debugging at 3 AM—git commit gone wrong vibes.", color: "#FF4444" },
        { icon: FaCode, text: "CSS fights me like a never-ending buffer overflow.", color: "#1572B6" },
        {
          icon: FaLaptopCode,
          text: "Generate code with AI, then wrestle it for hours to make it work!",
          color: "#00D2FF",
        },
      ],
    },
    {
      title: "Sports & Dreams",
      command: "grep -i 'passion' *",
      icon: Gamepad2,
      facts: [
        {
          icon: GiCricketBat,
          text: "Code like Babar Azam—smooth until a spinner (bug) gets me out!",
          color: "#00A86B",
        },
        { icon: GiSoccerBall, text: "Cheer for Pakistan football while dodging Git merge hell.", color: "#228B22" },
        { icon: FaRocket, text: "Dream of a startup, but desi lag turns it into a rickroll.", color: "#FF6B6B" },
      ],
    },
  ]

  return (
    <section
      id="fun-facts"
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
            <span>fun-facts</span>
            <span className="text-[#C778DD]">--random</span>
          </div>

          <div className="flex items-center gap-4">
            <motion.h1
              className={`${isDarkMode ? "text-white" : "text-[#282C33]"} text-4xl font-bold font-mono`}
              variants={glitchVariants}
              initial="initial"
              whileHover="hover"
            >
              <span className="text-[#C778DD]">#</span>
              fun-facts
            </motion.h1>
            <motion.div
              className="flex-1 h-[2px] bg-gradient-to-r from-[#C778DD] to-transparent max-w-md"
              variants={lineVariants}
              initial="hidden"
              animate={hasAnimated ? "visible" : "hidden"}
            />
          </div>
        </motion.div>

        {/* Fun Facts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {funFactCategories.map((category, categoryIndex) => {
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
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#C778DD] font-mono text-sm">$</span>
                    <span className={`font-mono text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                      {category.command}
                    </span>
                  </div>

                  {/* Facts */}
                  <div className="space-y-3">
                    {category.facts.map((fact, factIndex) => {
                      const FactIcon = fact.icon
                      return (
                        <motion.div
                          key={factIndex}
                          variants={cardVariants}
                          initial="hidden"
                          animate={hasAnimated ? "visible" : "hidden"}
                          custom={categoryIndex * 3 + factIndex + 3}
                          className={`flex items-start gap-3 p-3 border-2 ${
                            isDarkMode ? "border-gray-600 bg-[#0f1419]" : "border-gray-200 bg-white"
                          } group/fact hover:border-[#C778DD] transition-colors duration-300`}
                        >
                          <FactIcon className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: fact.color }} />
                          <motion.span
                            className={`text-sm font-mono leading-relaxed ${
                              isDarkMode ? "text-gray-300" : "text-[#646971]"
                            }`}
                            variants={glitchVariants}
                            initial="initial"
                            whileHover="hover"
                          >
                            {fact.text}
                          </motion.span>
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

        {/* Terminal Summary */}
        {/* <motion.div
          variants={terminalVariants}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          className={`border-2 ${isDarkMode ? "border-gray-700 bg-[#1a1a1a]" : "border-gray-300 bg-gray-50"} p-6`}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <Hash className="w-4 h-4 text-[#C778DD] ml-2" />
            <span className={`font-mono text-sm ${isDarkMode ? "text-[#607B96]" : "text-gray-600"}`}>
              ~/fun-facts/summary.txt
            </span>
          </div>

          <div className="font-mono space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[#C778DD]">$</span>
              <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                echo "Random facts about Ramish:"
              </span>
            </div>
            <div className={`pl-4 text-sm space-y-1 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
              <div>• Lifestyle quirks: {funFactCategories[0].facts.length} documented</div>
              <div>• Coding adventures: {funFactCategories[1].facts.length} logged</div>
              <div>• Sports & dreams: {funFactCategories[2].facts.length} recorded</div>
              <div className="text-[#C778DD] mt-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Status: Always ready for chai and code!
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}

export default FunFacts
