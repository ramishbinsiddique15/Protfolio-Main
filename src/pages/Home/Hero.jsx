"use client"
import { useEffect, useRef, useState, useCallback } from "react"
import { motion, useInView } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { Terminal, User, Folder, FileText, Download } from "lucide-react"
import { useTheme } from "../../context/ThemeContext"
import dots from "../../assets/dots.png"

const Hero = () => {
  const { isDarkMode } = useTheme()
  const [input, setInput] = useState("")
  const [terminalLines, setTerminalLines] = useState([])
  const [isTyping, setIsTyping] = useState(false)
  const inputRef = useRef(null)
  const terminalRef = useRef(null)
  const isInView = useInView(terminalRef, { once: true, amount: 0.3 })

  // Command definitions
  const commands = {
    whoami: {
      icon: User,
      output: ["Ramish Bin Siddique", "Full-Stack Developer | Passionate about building scalable web solutions"],
    },
    pwd: {
      icon: Folder,
      output: ["/home/ramish/portfolio", "Crafting innovative digital experiences"],
    },
    "cat skills.txt": {
      icon: FileText,
      output: ["Tech Stack:", "React.js, Node.js, MongoDB, Express.js, Tailwind CSS, Next.js, Three.js"],
    },
    resume: {
      icon: Download,
      output: ["Initiating resume download..."],
      action: () => {
        try {
          const link = document.createElement("a")
          link.href = "/Resume.pdf"
          link.download = "Resume.pdf"
          link.target = "_blank"
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        } catch (error) {
          console.error("Error downloading resume:", error)
          window.open("/assets/docs/Resume.pdf", "_blank")
        }
      },
    },
    clear: {
      output: [],
      action: () => setTerminalLines([]),
    },
    help: {
      output: [
        "Available commands:",
        "whoami - Display my identity",
        "pwd - Show current project context",
        "cat skills.txt - List my tech stack",
        "resume - Download my resume",
        "clear - Clear the terminal",
        "connect - Show social links",
      ],
    },
    connect: {
      output: [
        "Connect with me:",
        "GitHub: https://github.com/ramishbinsiddique15",
        "LinkedIn: https://www.linkedin.com/in/ramish15/",
        "Twitter: https://twitter.com/ramishbinsiddique",
      ],
    },
  }

  // Typing effect for terminal output
  const typeText = useCallback(async (text, delay = 50) => {
    setIsTyping(true)
    let currentText = ""
    for (let i = 0; i <= text.length; i++) {
      currentText = text.slice(0, i)
      setTerminalLines((prev) => [...prev.slice(0, -1), currentText])
      await new Promise((resolve) => setTimeout(resolve, delay))
    }
    setTerminalLines((prev) => [...prev.slice(0, -1), currentText])
    setIsTyping(false)
  }, [])

  // Handle command submission
  const handleCommand = async (e) => {
    if (e.key === "Enter" && input.trim()) {
      const command = input.trim().toLowerCase()
      setTerminalLines((prev) => [...prev, `$ ${command}`])
      setInput("")

      if (commands[command]) {
        const cmd = commands[command]
        for (const line of cmd.output) {
          await typeText(line)
        }
        if (cmd.action) {
          await typeText("Executing action...")
          cmd.action()
        }
      } else {
        await typeText(`bash: ${command}: command not found`)
      }
    }
  }

  // Focus input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  // Animation variants
  const terminalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const inputVariants = {
    focus: {
      borderColor: "#C778DD",
      boxShadow: "0 0 8px rgba(199, 120, 221, 0.5)",
      transition: { duration: 0.3 },
    },
  }

  return (
    <section
      id="home"
      className={`pt-32 min-h-[calc(100vh-32px)] py-12 transition-colors duration-300 ${isDarkMode ? "bg-[#1a1a1a]" : "bg-gray-100"}`}
      ref={terminalRef}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-1/3 left-1/5 w-72 h-72 rounded-full blur-3xl ${
            isDarkMode ? "bg-[#C778DD]/15" : "bg-[#C778DD]/10"
          }`}
        />
        <div
          className={`absolute bottom-1/3 right-1/5 w-96 h-96 rounded-full blur-3xl ${
            isDarkMode ? "bg-[#C778DD]/15" : "bg-[#C778DD]/10"
          }`}
        />
        <motion.img
          src={dots}
          className="w-24 absolute top-24 left-48 opacity-60"
          alt=""
          animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1
            className={`text-4xl font-bold font-mono ${isDarkMode ? "text-white" : "text-gray-800"} flex justify-center items-center gap-2`}
          >
            <Terminal className="w-8 h-8 text-[#C778DD]" />
            <span>ramish@portfolio</span>
          </h1>
          <p className={`mt-3 font-mono text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            Type a command (e.g., whoami, resume, help) to explore
          </p>
        </motion.div>

        {/* Terminal Interface */}
        <motion.div
          variants={terminalVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={`max-w-4xl mx-auto border-2  shadow-lg ${
            isDarkMode ? "border-gray-700 bg-[#1a1a1a]/90" : "border-gray-300 bg-gray-50/90"
          } backdrop-blur-sm`}
        >
          {/* Terminal Header */}
          <div
            className={`flex items-center gap-2 p-3 border-b-2 ${
              isDarkMode ? "border-gray-700" : "border-gray-300"
            }`}
          >
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className={`font-mono text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              ~/portfolio/terminal
            </span>
            <motion.div
              className="ml-auto w-2 h-2 bg-green-500 rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>

          {/* Terminal Content */}
          <div
            className={`p-4 font-mono text-sm max-h-[calc(100vh-300px)] overflow-y-auto ${
              isDarkMode
                ? "[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-[#1a1a1a] [&::-webkit-scrollbar-thumb]:bg-[#C778DD] [&::-webkit-scrollbar-thumb]:rounded-full"
                : "[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-gray-50 [&::-webkit-scrollbar-thumb]:bg-[#C778DD] [&::-webkit-scrollbar-thumb]:rounded-full"
            }`}
          >
            {terminalLines.length === 0 ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`text-${isDarkMode ? "gray-500" : "gray-400"}`}
              >
                Type 'help' for available commands...
              </motion.p>
            ) : (
              terminalLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  {line.startsWith("$") ? (
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
          </div>

          {/* Command Input */}
          <div className="p-4 border-t-2 border-gray-700">
            <motion.div
              className={`flex items-center gap-2 p-2 border-2  ${
                isDarkMode ? "border-gray-600 bg-gray-800/50" : "border-gray-300 bg-gray-100/50"
              }`}
              initial={{ borderColor: isDarkMode ? "#4B5563" : "#D1D5DB" }}
              animate={inputRef.current?.matches(":focus") ? "focus" : {}}
              variants={inputVariants}
            >
              <span className="text-[#C778DD]">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                className={`flex-1 bg-transparent outline-none font-mono text-sm ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
                placeholder="Type a command..."
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero