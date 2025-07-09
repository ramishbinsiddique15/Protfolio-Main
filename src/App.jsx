import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
import { motion } from "framer-motion";

import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import About from "./pages/About/About";
import Projects from "./pages/Home/Projects";
import ProjectsPage from "./pages/Projects/ProjectsPage";
function Layout() {
  const { isDarkMode } = useTheme();
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 1024 : false;


  return (
    <div className={` ${isDarkMode ? "bg-[#1a1a1a]" : "bg-gray-100"}
 transition-colors duration-500 min-h-screen`}>
  <div className="absolute inset-0 overflow-hidden">
        <div
          className={`fixed top-1/3 left-1/5 w-72 h-72 rounded-full blur-3xl ${
            isDarkMode ? "bg-[#C778DD]/15" : "bg-[#C778DD]/10"
          }`}
        />
        <div
          className={`fixed bottom-1/3 right-1/5 w-96 h-96 rounded-full blur-3xl ${
            isDarkMode ? "bg-[#C778DD]/15" : "bg-[#C778DD]/10"
          }`}
        />
        </div>


      <MainContent
        isMobile={isMobile}
      />
    </div>
  );
}

function MainContent() {

  return (
    <>
      <motion.main
        className={``}     >
        <Navbar />
        <div

        >
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<About />} />
            <Route path="/projects" element={<ProjectsPage />} />

          </Routes>
        </div>
        <Footer />
      </motion.main>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout />
      </Router>
    </ThemeProvider>
  );
}

export default App;
