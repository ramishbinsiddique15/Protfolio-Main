import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { ArrowDown, ArrowRight, Terminal, Code, User, Folder, FileText, Coffee, Zap } from 'lucide-react';
import Typed from 'typed.js';
import box from "../../assets/box.png";
import dots from "../../assets/dots.png";

const Hero = () => {
    const { isDarkMode } = useTheme();
    const [hasAnimated, setHasAnimated] = useState(false);
    const [terminalLines, setTerminalLines] = useState([]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);

    const linkVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        hover: { scale: 1.05, transition: { duration: 0.3 } }
    };

    const glitchVariants = {
        initial: {
            x: 0,
            y: 0,
            textShadow: '0 0 0 transparent'
        },
        hover: {
            x: [0, -2, 2, -1, 1, 0],
            y: [0, -1, 1, -1, 0],
            textShadow: [
                '0 0 0 transparent',
                '2px 0 0 #ff0000, -2px 0 0 #00ffff',
                '-2px 0 0 #ff0000, 2px 0 0 #00ffff',
                '1px 0 0 #ff0000, -1px 0 0 #00ffff',
                '0 0 0 transparent'
            ],
            transition: {
                duration: 0.6,
                ease: "easeInOut"
            }
        }
    };

    const typingVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.1,
                staggerChildren: 0.1
            }
        }
    };

    const letterVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.3 }
        }
    };

    const typedGlitchVariants = {
        initial: {
            textShadow: '0 0 0 transparent'
        },
        animate: {
            textShadow: [
                '0 0 0 transparent',
                '2px 0 0 #ff0000, -2px 0 0 #00ffff',
                '0 0 0 transparent',
                '-2px 0 0 #ff0000, 2px 0 0 #00ffff',
                '0 0 0 transparent'
            ],
            transition: {
                duration: 0.3,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease: "easeInOut"
            }
        }
    };

    const buttonGlitchVariants = {
        initial: {
            x: 0,
            y: 0,
            textShadow: '0 0 0 transparent'
        },
        hover: {
            x: [0, -2, 2, -1, 1, 0],
            y: [0, -1, 1, -1, 0],
            textShadow: [
                '0 0 0 transparent',
                '2px 0 0 #ff0000, -2px 0 0 #00ffff',
                '-2px 0 0 #ff0000, 2px 0 0 #00ffff',
                '1px 0 0 #ff0000, -1px 0 0 #00ffff',
                '0 0 0 transparent'
            ],
            transition: {
                duration: 0.6,
                ease: "easeInOut"
            }
        }
    };

    const AnimatedText = ({ children, className = "", variants = glitchVariants, shouldAnimate = false }) => {
        return (
            <motion.span
                className={className}
                variants={variants}
                initial="initial"
                animate="initial"
                whileHover="hover"
            >
                <motion.span
                    variants={typingVariants}
                    initial={shouldAnimate ? "hidden" : "visible"}
                    animate="visible"
                >
                    {children.split('').map((char, index) => (
                        <motion.span
                            key={index}
                            variants={letterVariants}
                            style={{ display: 'inline-block' }}
                        >
                            {char === ' ' ? '\u00A0' : char}
                        </motion.span>
                    ))}
                </motion.span>
            </motion.span>
        );
    };

    const typedRef = useRef(null);

    // Terminal animation data
    const terminalCommands = [
        { command: "whoami", output: "ramish-bin-siddique", icon: User, delay: 1000 },
        { command: "pwd", output: "/home/ramish/portfolio", icon: Folder, delay: 1500 },
        { command: "ls -la skills/", output: "React  Node.js  MongoDB  Express  Python  JavaScript", icon: FileText, delay: 2000 },
        { command: "cat status.txt", output: "🚀 Available for new opportunities", icon: Code, delay: 2500 },
        { command: "echo $MOTIVATION", output: "Building the future, one commit at a time", icon: Coffee, delay: 3000 },
        { command: "git log --oneline -5", output: "feat: Added new portfolio design\nfix: Improved user experience\nchore: Updated dependencies", icon: Zap, delay: 3500 }
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setHasAnimated(true);
            // Start terminal animation after hero animation
            setTimeout(() => {
                animateTerminal();
            }, 2000);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const animateTerminal = () => {
        if (currentLineIndex < terminalCommands.length) {
            const currentCommand = terminalCommands[currentLineIndex];

            // Add command line
            setTerminalLines(prev => [...prev, {
                type: 'command',
                content: currentCommand.command,
                icon: currentCommand.icon
            }]);

            setIsTyping(true);

            // Add output after delay
            setTimeout(() => {
                setTerminalLines(prev => [...prev, {
                    type: 'output',
                    content: currentCommand.output
                }]);
                setIsTyping(false);
                setCurrentLineIndex(prev => prev + 1);
            }, currentCommand.delay);
        }
    };

    useEffect(() => {
        if (currentLineIndex > 0 && currentLineIndex < terminalCommands.length) {
            setTimeout(() => {
                animateTerminal();
            }, 800);
        }
    }, [currentLineIndex]);



    const handleDownloadResume = () => {
        try {
            const resumePath = '/Resume.pdf';
            const link = document.createElement('a');
            link.href = resumePath;
            link.download = 'Resume.pdf';
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error downloading resume:', error);
            window.open('/assets/docs/Resume.pdf', '_blank');
        }
    };

    return (
        <div className="relative min-h-screen pt-20" id='home'>
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl ${isDarkMode ? 'bg-[#C778DD]/10' : 'bg-[#C778DD]/8'
          }`} />
        <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl ${isDarkMode ? 'bg-[#C778DD]/10' : 'bg-[#C778DD]/8'
          }`} />
      </div>

            {/* Decorative Elements */}
            {/* <motion.img
                src={box}
                className='w-32 absolute top-20 -right-14 opacity-50'
                alt=""
                animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                }}
            /> */}
            <motion.img
                src={dots}
                className='w-20 absolute top-32 left-60 opacity-70'
                alt=""
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

            {/* Left Side Content with Absolute Sidebar */}
            {/* <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-50">
                <motion.div
                    className="flex flex-col justify-center items-center space-x-4"
                    initial={!hasAnimated ? { opacity: 0, x: -50 } : { opacity: 1, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-0.5 h-32 relative left-2 bg-[#646971]"></div>
                    <div className="flex flex-col space-y-4 pt-2">
                        <motion.a href="https://github.com/ramishbinsiddique15" target="_blank" rel="noopener noreferrer" variants={linkVariants} whileHover="hover">
                            <FaGithub className={`text-[#646971] ${isDarkMode ? "hover:text-white" : "hover:text-[#282C33]"}`} size={24} />
                        </motion.a>
                        <motion.a href="https://www.linkedin.com/in/ramish15/" target="_blank" rel="noopener noreferrer" variants={linkVariants} whileHover="hover">
                            <FaLinkedin className={`text-[#646971] ${isDarkMode ? "hover:text-white" : "hover:text-[#282C33]"}`} size={24} />
                        </motion.a>
                    </div>
                </motion.div>
            </div> */}

            {/* Main Hero Content */}
            <div className="flex items-center justify-between p-8 gap-8">
                {/* Left Side Text Content */}


                {/* Right Side Terminal */}
                <div className="mt-5 w-full flex items-center justify-center">
                    <motion.div
                        className={`w-full  border-2 ${isDarkMode ? "border-gray-700 bg-[#1a1a1a]" : "border-gray-300 bg-gray-50"
                            } relative overflow-hidden`}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        {/* Terminal Header */}
                        <div className={`flex items-center gap-2 p-4 border-b-2 ${isDarkMode ? "border-gray-700" : "border-gray-300"
                            }`}>
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <Terminal className="w-4 h-4 text-[#C778DD] ml-2" />
                            <span className={`text-sm font-mono ${isDarkMode ? "text-[#607B96]" : "text-gray-600"}`}>
                                ramish@portfolio:~$
                            </span>
                        </div>

                        {/* Terminal Content */}
                        <div className={`p-4 font-mono text-sm h-[calc(100vh-15rem)] overflow-y-auto ${isDarkMode
                                ? '[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-[#1a1a1a] [&::-webkit-scrollbar-thumb]:bg-[#C778DD] [&::-webkit-scrollbar-thumb]:rounded-full'
                                : '[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-gray-50 [&::-webkit-scrollbar-thumb]:bg-[#C778DD] [&::-webkit-scrollbar-thumb]:rounded-full'
                            }`}>
                            {terminalLines.map((line, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="mb-2"
                                >
                                    {line.type === 'command' ? (
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#C778DD]">$</span>
                                            <line.icon className="w-4 h-4 text-[#C778DD]" />
                                            <span className={`${isDarkMode ? "text-white" : "text-[#282C33]"}`}>
                                                {line.content}
                                            </span>
                                        </div>
                                    ) : (
                                        <div className={`pl-6 ${isDarkMode ? "text-gray-300" : "text-gray-700"} whitespace-pre-line`}>
                                            {line.content}
                                        </div>
                                    )}
                                </motion.div>
                            ))}

                            {/* Cursor */}
                            {isTyping && (
                                <motion.div
                                    className="flex items-center gap-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <span className="text-[#C778DD]">$</span>
                                    <motion.div
                                        className={`w-2 h-4 ${isDarkMode ? "bg-white" : "bg-[#282C33]"}`}
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ duration: 0.8, repeat: Infinity }}
                                    />
                                </motion.div>
                            )}
                        </div>

                        {/* Terminal Footer */}
                        <div className={`p-2 border-t-2 ${isDarkMode ? "border-gray-700" : "border-gray-300"
                            } flex items-center justify-between`}>
                            <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 bg-green-500 rounded-full animate-pulse`}></div>
                                <span className={`text-xs font-mono ${isDarkMode ? "text-[#607B96]" : "text-gray-600"}`}>
                                    Online
                                </span>
                            </div>
                            <span className={`text-xs font-mono ${isDarkMode ? "text-[#607B96]" : "text-gray-600"}`}>
                                {terminalLines.length} lines
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;