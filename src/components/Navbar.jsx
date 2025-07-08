
"use client"

import { useEffect, useState } from "react"
import { NavLink, useNavigate, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"
import { Terminal, User, Code, Briefcase, Mail, Home, Monitor, Menu, X } from "lucide-react"
import { useTheme } from "../context/ThemeContext"
import logo from "../assets/logo.png"

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme()
  const navigate = useNavigate()
  const location = useLocation()
  const [currentTime, setCurrentTime] = useState(new Date())
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: {
      y: -2,
      transition: { duration: 0.2 },
    },
  }

  const terminalVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const menuVariants = {
    hidden: {
      opacity: 0,
      maxHeight: 0,
      overflow: "hidden",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "afterChildren",
        staggerChildren: 0.05,
      }
    },
    visible: {
      opacity: 1,
      maxHeight: 500, // Adjust based on your menu's maximum height
      overflow: "visible",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.05,
      }
    },
  }

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      // Only run on home page
      if (location.pathname !== "/") return

      const sections = ["home", "skills", "about-me", "projects", "contact"]
      const scrollPosition = window.scrollY + 200 // Offset for navbar height

      // Find which section is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight

          // Check if scroll position is within this section
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sections[i])
            break
          }

          // Special case for the last section (contact)
          if (i === sections.length - 1 && scrollPosition >= sectionTop) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Run once on mount to set initial active section
    handleScroll()

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [location.pathname])

  // Handle hash changes and manual navigation
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const sectionId = location.hash.replace("#", "")
      setActiveSection(sectionId)

      // Scroll to section with a slight delay to ensure DOM is ready
      setTimeout(() => {
        const section = document.getElementById(sectionId)
        if (section) {
          section.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }, [location])

  // Helper function for animated text
  const AnimatedText = ({ children, className = "" }) => {
    return (
      <motion.span className={className} variants={glitchVariants} initial="initial" whileHover="hover">
        {children}
      </motion.span>
    )
  }

  // Navigation handler
  const handleNavigation = (sectionId) => {
    setActiveSection(sectionId) // Set active section immediately for responsive feedback
    setIsMenuOpen(false) // Close menu on mobile after clicking
    if (location.pathname === "/") {
      // If already on home page, just scroll
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // If on different page, navigate to home then scroll
      navigate(`/#${sectionId}`)
    }
  }

  const navItems = [
    { id: "home", label: "home", icon: Home, command: "cd ~/" },
    { id: "skills", label: "skills", icon: Code, command: "ls skills/" },
    { id: "about-me", label: "about-me", icon: User, command: "cat about.txt" },
    { id: "projects", label: "proejcts", icon: Briefcase, command: "git log --oneline" },
    { id: "contact", label: "contact", icon: Mail, command: 'mail -s "Hello"' },
  ]

  const isActiveSection = (sectionId) => {
    return activeSection === sectionId
  }

  const handleMenuToggle = () => {
    if (isMenuOpen) {
      // Delay setting isMenuOpen to false to allow collapse animation to complete
      setTimeout(() => {
        setIsMenuOpen(false)
      }, 300) // Match the duration of the collapse animation (0.3s)
    } else {
      setIsMenuOpen(true)
    }
  }

  return (
    <motion.nav
      className={`fixed w-full z-40 ${isDarkMode
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
        : 'bg-white'
        } transition-colors duration-300`}
      variants={terminalVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Terminal Window */}
      <div className={`border-b-2 ${isDarkMode ? "border-[#C778DD]" : "border-[#C778DD]"}`}>
        {/* Terminal Header */}
        <div
          className={`flex items-center justify-between px-4 sm:px-6 py-3 border-b-2 ${isDarkMode ? "border-[#C778DD] bg-[#1a1a1a]" : "border-[#C778DD] bg-gray-50"
            }`}
        >
          {/* Terminal Controls */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
            <Terminal className="w-4 h-4 text-[#C778DD] ml-2 sm:ml-4" />
            <span className={`text-[10px] sm:text-xs font-mono ${isDarkMode ? "text-[#607B96]" : "text-gray-600"
              }`}>
              ~/portfolio/navigation
            </span>
          </div>

          {/* System Info */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className={`text-xs font-mono ${isDarkMode ? "text-[#607B96]" : "text-gray-600"
                }`}>online</span>
            </div>
            <span className={`text-xs font-mono ${isDarkMode ? "text-[#607B96]" : "text-gray-600"
              }`}>
              {currentTime.toLocaleTimeString()}
            </span>
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="sm:hidden p-2"
            onClick={handleMenuToggle} // Updated to use new handler
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-[#C778DD]" />
            ) : (
              <Menu className="w-5 h-5 text-[#C778DD]" />
            )}
          </button>
        </div>

        {/* Terminal Content */}
        <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          {/* Logo and Brand */}
          <motion.div className="flex items-center gap-2 sm:gap-3" variants={linkVariants} initial="hidden" animate="visible">
            <NavLink to="/" onClick={() => handleNavigation("home")} className="flex items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-[#C778DD] font-mono text-xs sm:text-sm">$</span>
                <span className={`font-mono text-xs sm:text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}>whoami</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <motion.img
                  src={logo}
                  className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-[#C778DD] rounded-full p-1"
                  alt="Logo"
                  variants={glitchVariants}
                  initial="initial"
                  whileHover="hover"
                />
                <AnimatedText className={`font-mono font-bold text-sm sm:text-base ${isDarkMode ? "text-white" : "text-[#282C33]"
                  }`}>
                  ramish@dev:~$
                </AnimatedText>
              </div>
            </NavLink>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className={`${isMenuOpen ? "flex" : "hidden sm:flex"
              } flex-col sm:flex-row items-center gap-3 sm:gap-6 mt-3 sm:mt-0 w-full sm:w-auto  sm:bg-transparent`}
            variants={menuVariants}
            initial="hidden"
            animate={isMenuOpen || window.innerWidth >= 640 ? "visible" : "hidden"}
          >
            {navItems.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={item.id}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  className="w-full sm:w-auto"
                >
                  <button
                    onClick={() => handleNavigation(item.id)}
                    className={`group cursor-pointer flex items-center gap-2 px-3 py-2 border-2 transition-all duration-300 relative w-full sm:w-auto justify-center sm:justify-start ${isActiveSection(item.id)
                      ? "border-[#C778DD] bg-[#C778DD]/10"
                      : isDarkMode
                        ? "border-gray-600 hover:border-[#C778DD] bg-[#0f1419] hover:bg-[#C778DD]/5"
                        : "border-gray-200 hover:border-[#C778DD] bg-white hover:bg-[#C778DD]/5"
                      }`}
                  >
                    <IconComponent
                      className={`w-3 h-3 sm:w-3 sm:h-3 ${isActiveSection(item.id)
                        ? "text-[#C778DD]"
                        : isDarkMode
                          ? "text-gray-400 group-hover:text-[#C778DD]"
                          : "text-gray-500 group-hover:text-[#C778DD]"
                        } transition-colors duration-300`}
                    />
                    <span className="text-[#C778DD] font-mono text-xs sm:text-xs">#</span>
                    <AnimatedText
                      className={`font-mono text-xs sm:text-xs ${isActiveSection(item.id)
                        ? isDarkMode
                          ? "text-white"
                          : "text-[#282C33]"
                        : isDarkMode
                          ? "text-gray-300 group-hover:text-white"
                          : "text-gray-600 group-hover:text-[#282C33]"
                        } transition-colors duration-300`}
                    >
                      {item.label}
                    </AnimatedText>

                    {/* Tooltip with command */}
                    <div
                      className={`absolute top-full sm:top-full left-1/2 sm:left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 
                      ${isDarkMode ? "bg-gray-800 border-gray-600" : "bg-gray-900 border-gray-300"} 
                      border-2 text-[10px] sm:text-xs font-mono text-white opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50`}
                    >
                      <span className="text-[#C778DD]">$ </span>
                      {item.command}
                    </div>
                  </button>
                </motion.div>
              )
            })}

            {/* Theme Toggle */}
            <motion.div className="flex items-center gap-2 sm:gap-3 mt-3 sm:mt-0" variants={linkVariants} initial="hidden" animate="visible">
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-[#C778DD] font-mono text-xs sm:text-sm">$</span>
                <span className={`font-mono text-xs sm:text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}>
                  theme --toggle
                </span>
              </div>
              <motion.button
                onClick={toggleTheme}
                className={`p-2 cursor-pointer border-2 transition-all duration-300 ${isDarkMode
                  ? "border-gray-600 hover:border-[#C778DD] bg-[#0f1419] hover:bg-[#C778DD]/10"
                  : "border-gray-200 hover:border-[#C778DD] bg-white hover:bg-[#C778DD]/10"
                  }`}
                variants={glitchVariants}
                initial="initial"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-2">
                  <Monitor className="w-3 h-3 sm:w-3 sm:h-3 text-[#C778DD]" />
                  {isDarkMode ? (
                    <SunIcon className="h-4 w-4 sm:h-4 sm:w-4 text-yellow-400" />
                  ) : (
                    <MoonIcon className="h-4 w-4 sm:h-4 sm:w-4 text-blue-600" />
                  )}
                </div>
              </motion.button>
            </motion.div>
          </motion.div>


        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
