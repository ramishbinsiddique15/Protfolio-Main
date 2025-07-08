"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { Terminal, Code, Coffee, MapPin, Zap, Heart, User, ExternalLink, Server } from "lucide-react"
import { useTheme } from "../context/ThemeContext"
import logo from "../assets/logo.png"
import box from "../assets/box.png"
import dots from "../assets/dots.png"

const Footer = () => {
  const { isDarkMode } = useTheme()
  const [hasAnimated, setHasAnimated] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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

  

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  

  return (
    <footer
      className={`relative min-h-[40vh] ${isDarkMode
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-t-2 border-[#C778DD]'
        : 'bg-white border-t-2 border-[#C778DD]'} transition-colors duration-300 overflow-hidden`}
      ref={ref}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl ${isDarkMode ? 'bg-[#C778DD]/10' : 'bg-[#C778DD]/8'
          }`} />
        <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl ${isDarkMode ? 'bg-[#C778DD]/10' : 'bg-[#C778DD]/8'
          }`} />
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.img
          src={box}
          alt=""
          className="absolute top-10 right-10 w-12 h-12 opacity-20"
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
          className="absolute bottom-10 left-10 w-16 h-16 opacity-10"
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
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(${isDarkMode ? "#333" : "#ddd"} 1px, transparent 1px), linear-gradient(90deg, ${isDarkMode ? "#333" : "#ddd"} 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            custom={0}
            className={`border-2 ${isDarkMode ? "border-gray-700 bg-[#1a1a1a]" : "border-gray-300 bg-gray-50"
              } relative overflow-hidden group`}
          >
            <div
              className={`flex items-center gap-2 p-2 border-b-2 ${isDarkMode ? "border-gray-700" : "border-gray-300"}`}
            >
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <User className="w-4 h-4 text-[#C778DD] ml-2" />
              <span className={`text-xs font-mono ${isDarkMode ? "text-[#607B96]" : "text-gray-600"}`}>
                ~/profile/info.txt
              </span>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#C778DD] font-mono text-sm">$</span>
                <span className={`font-mono text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  cat developer_info.txt
                </span>
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <motion.img
                  src={logo}
                  className="w-10 h-10 border-2 border-[#C778DD] rounded-full p-1"
                  alt="Logo"
                  variants={glitchVariants}
                  initial="initial"
                  whileHover="hover"
                />
                <div>
                  <motion.h3
                    className={`text-base font-bold font-mono ${isDarkMode ? "text-white" : "text-[#282C33]"}`}
                    variants={glitchVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    Ramish Bin Siddique
                  </motion.h3>
                  <p className={`text-xs font-mono ${isDarkMode ? "text-gray-400" : "text-[#646971]"}`}>
                    Full-Stack Developer
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[#C778DD] font-mono text-sm">$</span>
                  <span className={`font-mono text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    whoami --location
                  </span>
                </div>
                <div className="flex items-center gap-3 pl-4">
                  <MapPin className="w-4 h-4 text-[#C778DD]" />
                  <div>
                    <p className={`font-mono text-xs ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                      Rawalpindi, Pakistan
                    </p>
                    <p className={`font-mono text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                      Available for remote work worldwide
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-[#C778DD] font-mono text-sm">@</span>
                  <motion.a
                    href="mailto:ramishbinsiddique24@gmail.com"
                    className={`font-mono text-xs hover:text-[#C778DD] transition-colors ${isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    variants={glitchVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    ramishbinsiddique24@gmail.com
                  </motion.a>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#C778DD]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          {/* <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            custom={1}
            className={`border-2 ${isDarkMode ? "border-gray-700 bg-[#1a1a1a]" : "border-gray-300 bg-gray-50"
              } relative overflow-hidden group`}
          >
            <div
              className={`flex items-center gap-2 p-2 border-b-2 ${isDarkMode ? "border-gray-700" : "border-gray-300"}`}
            >
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <Server className="w-4 h-4 text-[#C778DD] ml-2" />
              <span className={`text-xs font-mono ${isDarkMode ? "text-[#607B96]" : "text-gray-600"}`}>
                ~/status/current.log
              </span>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#C778DD] font-mono text-sm">$</span>
                <span className={`font-mono text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  systemctl status developer
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className={`font-mono text-xs ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Active (running)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Coffee className="w-4 h-4 text-[#C778DD]" />
                  <motion.span
                    className={`font-mono text-xs ${isDarkMode ? "text-white" : "text-[#282C33]"}`}
                    variants={glitchVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    Currently brewing ideas
                  </motion.span>
                </div>
                <p className={`font-mono text-xs italic ${isDarkMode ? "text-gray-300" : "text-[#646971]"}`}>
                  "Code is poetry written in logic"
                </p>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#C778DD]" />
                  <span className={`font-mono text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                    Crafting digital experiences
                  </span>
                </div>
                <div className="pt-2 border-t-2 border-dashed border-[#C778DD]/30">
                  <div className="flex items-center gap-2">
                    <span className={`font-mono text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                      System time:
                    </span>
                    <span className={`font-mono text-xs ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                      {currentTime.toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#C778DD]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div> */}

         
        </div>

        <motion.div
          className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#C778DD] to-transparent mb-6"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={hasAnimated ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
        />

        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          custom={3}
          className={`border-2 ${isDarkMode ? "border-gray-700 bg-[#1a1a1a]" : "border-gray-300 bg-gray-50"} p-4`}
        >
          <div className="flex items-center gap-2 mb-3">
            <Terminal className="w-4 h-4 text-[#C778DD]" />
            <span className={`font-mono text-xs ${isDarkMode ? "text-[#607B96]" : "text-gray-600"}`}>
              ~/footer/copyright.txt
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-[#C778DD] font-mono text-sm">$</span>
              <span className={`font-mono text-xs ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                echo "© 2025 Made with"
              </span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span className={`font-mono text-xs ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>by Ramish</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-[#C778DD]" />
                <span className={`font-mono text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  React + Vite
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className={`font-mono text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>v2.0.1</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer