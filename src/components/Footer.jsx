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
      className={`relative  transition-colors duration-300 overflow-hidden`}
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

      <div className="container mx-auto px-4 py-4 pt-0 relative z-10">
       

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