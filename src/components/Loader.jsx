"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  // Simulated terminal messages
  const bootMessages = [
    "Initializing system...",
    "Checking dependencies...",
    "Loading assets...",
    "Establishing connection...",
    "System ready!",
  ];

  // Typing effect and progress bar synchronization
  useEffect(() => {
    let currentMessageIndex = 0;
    let currentCharIndex = 0;
    const typeMessage = async () => {
      if (currentMessageIndex < bootMessages.length) {
        setIsTyping(true);
        const message = bootMessages[currentMessageIndex];
        if (currentCharIndex <= message.length) {
          setMessages((prev) => [
            ...prev.slice(0, currentMessageIndex),
            message.slice(0, currentCharIndex),
          ]);
          currentCharIndex++;
          setTimeout(typeMessage, 50); // Typing speed
        } else {
          setIsTyping(false);
          currentMessageIndex++;
          currentCharIndex = 0;
          setTimeout(typeMessage, 500); // Delay between messages
        }
        // Increment progress per message
        setProgress((prev) => {
          const increment = 100 / bootMessages.length; // 20% per message
          return Math.min(prev + increment / (message.length + 10), 100); // Spread increment over chars + pause
        });
      }
    };

    typeMessage();

    return () => {};
  }, []);

  // Glitch animation for the terminal header
  const glitchVariants = {
    initial: {
      x: 0,
      y: 0,
      textShadow: "0 0 0 transparent",
    },
    animate: {
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
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  // Progress bar animation
  const progressBarVariants = {
    initial: { width: 0 },
    animate: { width: `${progress}%`, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="fixed inset-0 bg-[#1a1a1a] flex items-center justify-center z-50">
      <motion.div
        className="w-full max-w-md sm:max-w-lg border-2 border-[#C778DD]/50 bg-[#1a1a1a]/90 backdrop-blur-sm shadow-lg shadow-[#C778DD]/20"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Terminal Header */}
        <div className="flex items-center gap-2 p-3 sm:p-4 border-b-2 border-[#C778DD]/30">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
          <Terminal className="w-4 sm:w-5 h-4 sm:h-5 text-[#C778DD]" />
          <motion.span
            className="text-xs sm:text-sm font-mono text-[#C778DD]"
            variants={glitchVariants}
            initial="initial"
            animate="animate"
          >
            SYSTEM_BOOT
          </motion.span>
        </div>
        {/* Terminal Content */}
        <div className="p-3 sm:p-4 font-mono text-xs sm:text-sm text-gray-300 min-h-[200px]">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                <span className="text-[#C778DD]">$</span>
                <span>{message}</span>
              </motion.div>
            ))}
            {isTyping && (
              <motion.span
                className="text-[#C778DD]"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                _
              </motion.span>
            )}
          </AnimatePresence>
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-gray-400">BOOT PROGRESS</span>
              <span className="text-xs text-[#C778DD]">{Math.min(Math.round(progress), 100)}%</span>
            </div>
            <div className="relative h-3 bg-gray-800 border border-[#C778DD]/20 overflow-hidden">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `linear-gradient(90deg, #C778DD 1px, transparent 1px)`,
                  backgroundSize: "6px 100%",
                }}
              />
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#C778DD] to-[#9333ea]"
                variants={progressBarVariants}
                initial="initial"
                animate="animate"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.span
                  className="text-xs text-white font-bold mix-blend-difference"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  [{"█".repeat(Math.floor(progress / 10))}
                  {"░".repeat(10 - Math.floor(progress / 10))}]
                </motion.span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Loader;