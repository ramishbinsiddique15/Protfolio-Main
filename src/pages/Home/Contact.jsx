"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa"
import { Terminal, Send, MapPin, User, Mail, MessageSquare, ExternalLink } from "lucide-react"
import emailjs from "@emailjs/browser"
import { toast, ToastContainer } from "react-toastify"
import { useTheme } from "../../context/ThemeContext"
import box from "../../assets/box.png"
import dots from "../../assets/dots.png"

const Contact = () => {
  const { isDarkMode } = useTheme()
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const formRef = useRef()
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [loading, setLoading] = useState(false)

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
    hover: {
      y: -5,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  }

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    const templateParams = {
      from_name: form.name,
      to_name: "Ramish",
      from_email: form.email,
      to_email: "ramishbinsiddique24@gmail.com",
      message: form.message,
    }

    emailjs
      .send("service_plos0tn", "template_wev6vmr", templateParams, "YYJQi5ny3if9_eHwl")
      .then(() => {
        toast.success("Thank you! I'll get back to you as soon as possible")
        setLoading(false)
        setForm({ name: "", email: "", message: "" })
      })
      .catch((error) => {
        console.error("Error sending email!", error.text)
        toast.error("Error sending email!")
        setLoading(false)
      })
  }

  const contactMethods = [
    {
      icon: FaEnvelope,
      title: "Email",
      subtitle: "Drop me a line",
      value: "ramishbinsiddique24@gmail.com",
      action: "mailto:ramishbinsiddique24@gmail.com",
      command: "mail -s 'Hello' ramish@dev.local",
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      subtitle: "Let's connect professionally",
      value: "linkedin.com/in/ramish15",
      action: "https://www.linkedin.com/in/ramish15",
      command: "curl -X GET linkedin.com/in/ramish15",
    },
    {
      icon: FaGithub,
      title: "GitHub",
      subtitle: "Check out my projects",
      value: "github.com/ramishbinsiddique15",
      action: "https://github.com/ramishbinsiddique15",
      command: "git clone github.com/ramishbinsiddique15",
    },
  ]

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/ramishbinsiddique15",
      color: "#333",
      label: "GitHub",
      command: "git remote -v",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/ramish15",
      color: "#0077B5",
      label: "LinkedIn",
      command: "curl linkedin.com",
    },
    {
      icon: FaEnvelope,
      href: "mailto:ramishbinsiddique24@gmail.com",
      color: "#EA4335",
      label: "Email",
      command: "mail ramish@dev",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/ramish_ansari543/",
      color: "#E1306C",
      label: "Instagram",
      command: "wget instagram.com",
    },
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/ramish.abubakar",
      color: "#1877F2",
      label: "Facebook",
      command: "ping facebook.com",
    },
  ]

  const socialIconVariants = {
    hidden: { opacity: 0, y: 30, rotate: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.1,
      y: -3,
      transition: { duration: 0.3 },
    },
  }
  return (
    <section
      id="contact"
      ref={ref}
      className={`relative min-h-screen  transition-colors duration-300`}
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={isDarkMode ? "dark" : "light"}
        className="z-50"
      />

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

      <div className="container mx-auto px-6 py-20 relative z-10">
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
            <span>contact</span>
            <span className="text-[#C778DD]">--connect</span>
          </div>

          <div className="flex items-center gap-4">
            <motion.h1
              className={`${isDarkMode ? "text-white" : "text-[#282C33]"} text-4xl font-bold font-mono`}
              variants={glitchVariants}
              initial="initial"
              whileHover="hover"
            >
              <span className="text-[#C778DD]">#</span>
              contact
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
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Methods */}
          <div className="space-y-8">
            {/* Info Terminal */}
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
                <User className="w-4 h-4 text-[#C778DD] ml-2" />
                <span className={`text-xs font-mono ${isDarkMode ? "text-[#607B96]" : "text-gray-600"}`}>
                  ~/contact/info.txt
                </span>
              </div>

              {/* Terminal Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[#C778DD] font-mono text-sm">$</span>
                  <span className={`font-mono text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    cat about_contact.txt
                  </span>
                </div>

                <p
                  className={`${isDarkMode ? "text-gray-300" : "text-[#646971]"} font-mono text-sm leading-relaxed mb-6`}
                >
                  I'm interested in freelance opportunities. However, if you have other requests or questions, don't
                  hesitate to contact me using any of the methods below.
                </p>

                {/* Location Info */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#C778DD] font-mono text-sm">$</span>
                  <span className={`font-mono text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    whoami --location
                  </span>
                </div>
                <div className="flex items-center gap-3 pl-4 mb-4">
                  <MapPin className="w-4 h-4 text-[#C778DD]" />
                  <div>
                    <p className={`font-mono text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                      Rawalpindi, Punjab, Pakistan
                    </p>
                    <p className={`font-mono text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                      Available for remote work worldwide
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className={`font-mono text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                    Status: Available for new projects
                  </span>
                </div>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C778DD]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  variants={cardVariants}
                  initial="hidden"
                  animate={hasAnimated ? "visible" : "hidden"}
                  whileHover="hover"
                  custom={index + 1}
                  className={`border-2 ${isDarkMode ? "border-gray-700 bg-[#1a1a1a]" : "border-gray-300 bg-gray-50"
                    } relative overflow-hidden group cursor-pointer`}
                  onClick={() => window.open(method.action, "_blank")}
                >
                  {/* Terminal Header */}
                  <div
                    className={`flex items-center gap-2 p-3 border-b-2 ${isDarkMode ? "border-gray-700" : "border-gray-300"
                      }`}
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <method.icon className="w-4 h-4 text-[#C778DD] ml-2" />
                    <span className={`text-xs font-mono ${isDarkMode ? "text-[#607B96]" : "text-gray-600"}`}>
                      {method.title.toLowerCase()}
                    </span>
                  </div>

                  {/* Terminal Content */}
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[#C778DD] font-mono text-sm">$</span>
                      <span className={`font-mono text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                        {method.command}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className={`font-bold font-mono ${isDarkMode ? "text-white" : "text-[#282C33]"}`}>
                          {method.title}
                        </h3>
                        <p className={`text-sm font-mono ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                          {method.subtitle}
                        </p>
                        <p className={`text-xs font-mono ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                          {method.value}
                        </p>
                      </div>
                      <ExternalLink
                        className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                      />
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

          {/* Right Column - Contact Form */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            custom={4}
            className={`border-2 ${isDarkMode ? "border-gray-700 bg-[#1a1a1a]" : "border-gray-300 bg-gray-50"
              } relative overflow-hidden h-fit`}
          >
            {/* Terminal Header */}
            <div
              className={`flex items-center gap-2 p-3 border-b-2 ${isDarkMode ? "border-gray-700" : "border-gray-300"
                }`}
            >
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <Send className="w-4 h-4 text-[#C778DD] ml-2" />
              <span
                className={`text-xs font-mono ${isDarkMode ? "text-[#607B96]" : "text-gray-600"
                  }`}
              >
                ~/contact/send-message.sh
              </span>
            </div>

            {/* Terminal Content */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-[#C778DD] font-mono text-sm">$</span>
                <span
                  className={`font-mono text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  ./send-message.sh --interactive
                </span>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <User className="w-4 h-4 text-[#C778DD]" />
                    <label
                      className={`font-mono text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                    >
                      Enter your name:
                    </label>
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="$ whoami"
                    className={`w-full py-3 px-4 border-2 ${isDarkMode
                      ? "border-gray-600 bg-[#0f1419] text-gray-300 placeholder:text-gray-500"
                      : "border-gray-200 bg-white text-gray-700 placeholder:text-gray-400"
                      } font-mono text-sm outline-none transition-all duration-300 focus:border-[#C778DD]`}
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-4 h-4 text-[#C778DD]" />
                    <label
                      className={`font-mono text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                    >
                      Enter your email:
                    </label>
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="$ echo $EMAIL"
                    className={`w-full py-3 px-4 border-2 ${isDarkMode
                      ? "border-gray-600 bg-[#0f1419] text-gray-300 placeholder:text-gray-500"
                      : "border-gray-200 bg-white text-gray-700 placeholder:text-gray-400"
                      } font-mono text-sm outline-none transition-all duration-300 focus:border-[#C778DD]`}
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="w-4 h-4 text-[#C778DD]" />
                    <label
                      className={`font-mono text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                    >
                      Enter your message:
                    </label>
                  </div>
                  <textarea
                    rows={5}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="$ cat > message.txt"
                    className={`w-full py-3 px-4 border-2 ${isDarkMode
                      ? "border-gray-600 bg-[#0f1419] text-gray-300 placeholder:text-gray-500"
                      : "border-gray-200 bg-white text-gray-700 placeholder:text-gray-400"
                      } font-mono text-sm outline-none transition-all duration-300 focus:border-[#C778DD] resize-none`}
                    required
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  className={`relative w-fit flex items-center justify-center cursor-pointer 
          border border-[#C778DD] font-semibold 
          px-3 py-2 overflow-hidden transition-all duration-300 group
          ${isDarkMode
                      ? "hover:shadow-lg hover:shadow-[#C778DD]/25 border-opacity-80"
                      : "hover:shadow-lg hover:shadow-[#C778DD]/20 border-opacity-60"
                    }`}
                  variants={buttonGlitchVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.span
                    className={`relative z-10 transition-colors duration-300 
            ${isDarkMode
                        ? "text-white group-hover:text-[#011627]"
                        : "text-[#282C33] group-hover:text-white"
                      } text-sm font-mono`}
                    variants={glitchVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </motion.span>
                  <div className="relative flex gap-2 px-2 items-center justify-center">
                    <div className="w-6 h-6 group-hover:bg-white bg-[#C778DD] rounded-full flex items-center justify-center z-30">
                      {loading ? (
                        <div className="w-3 border border-current border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send
                            className={`${isDarkMode ? "text-white" : "text-white"
                              } w-3 h-3 transform transition-all duration-300 group-hover:opacity-0 group-hover:scale-0`}
                          />
                          <Send
                            className="text-[#C778DD] absolute w-3 h-3 transform transition-all duration-300 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
                          />
                        </>
                      )}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-[#C778DD] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 origin-left" />
                </motion.button>
              </form>

             
            </div>

            

          </motion.div>
           <motion.div
                variants={cardVariants}
                initial="hidden"
                animate={hasAnimated ? "visible" : "hidden"}
                custom={2}
                className={`border-2 ${isDarkMode ? "border-gray-700 bg-[#1a1a1a]" : "border-gray-300 bg-gray-50"
                  } relative overflow-hidden`}
              >
                <div
                  className={`flex items-center gap-2 p-2 border-b-2 ${isDarkMode ? "border-gray-700" : "border-gray-300"
                    }`}
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <ExternalLink className="w-4 h-4 text-[#C778DD] ml-2" />
                  <span
                    className={`text-xs font-mono ${isDarkMode ? "text-[#607B96]" : "text-gray-600"
                      }`}
                  >
                    ~/social/links.sh
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#C778DD] font-mono text-sm">$</span>
                    <span
                      className={`font-mono text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                    >
                      ls -la social_links/
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative p-3 border-2 transition-all duration-300 ${isDarkMode
                          ? "border-gray-600 bg-[#0f1419] hover:border-[#C778DD] hover:bg-[#C778DD]/5"
                          : "border-gray-200 bg-white hover:border-[#C778DD] hover:bg-[#C778DD]/5"
                          }`}
                        variants={socialIconVariants}
                        initial="hidden"
                        animate={hasAnimated ? "visible" : "hidden"}
                        whileHover="hover"
                        custom={index}
                      >
                        <div className="flex flex-col items-center space-y-1">
                          <div
                            className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                            style={{ backgroundColor: social.color }}
                          >
                            <social.icon className="w-4 h-4 text-white" />
                          </div>
                          <span
                            className={`text-xs font-mono transition-colors ${isDarkMode
                              ? "text-gray-300 group-hover:text-white"
                              : "text-gray-700 group-hover:text-[#282C33]"
                              }`}
                          >
                            {social.label}
                          </span>
                        </div>
                        <div
                          className={`absolute -top-7 left-1/2 transform -translate-x-1/2 px-2 py-1 
            ${isDarkMode ? "bg-gray-800 border-gray-600" : "bg-gray-900 border-gray-300"
                            } 
            border-2 text-xs font-mono text-white opacity-0 group-hover:opacity-100 
            transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50`}
                        >
                          <span className="text-[#C778DD]">$ </span>
                          {social.command}
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
        </div>

        {/* Terminal Summary */}
        {/* <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          custom={5}
          className={`mt-12 border-2 ${isDarkMode ? "border-gray-700 bg-[#1a1a1a]" : "border-gray-300 bg-gray-50"} p-6`}
        >
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="w-4 h-4 text-[#C778DD]" />
            <span className={`font-mono text-sm ${isDarkMode ? "text-[#607B96]" : "text-gray-600"}`}>
              ~/contact/summary.log
            </span>
          </div>

          <div className="font-mono space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[#C778DD]">$</span>
              <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                ls -la contact_methods/
              </span>
            </div>
            <div className={`pl-4 text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
              <div>Available contact methods: {contactMethods.length}</div>
              <div>Response time: Usually within 24 hours</div>
              <div>Preferred method: Email for detailed discussions</div>
              <div>Time zone: PKT (UTC+5)</div>
              <div className="text-[#C778DD] mt-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Status: Ready to connect and collaborate!
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}

export default Contact
