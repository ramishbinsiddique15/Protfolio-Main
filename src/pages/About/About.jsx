import React, { useEffect } from 'react'
import AboutMe from '../Home/AboutMe'
import Skills from '../Home/Skills';
import FunFacts from './FunFacts';

const About = () => {
    useEffect(() => {
        document.title = 'About Me | Ramish';
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, []);
    return (
        <>
            <AboutMe />
            <Skills/>
            <FunFacts/>
        </>
    )
}

export default About