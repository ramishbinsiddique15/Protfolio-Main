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
    <div className={`${isDarkMode 
  ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
  : 'bg-white'}
 transition-colors duration-500 min-h-screen`}>
      

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
        <Footer/>
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
