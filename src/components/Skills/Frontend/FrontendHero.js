import React from "react";
import { motion } from "framer-motion";
import { heroAnim, pagelineAnim } from "../../../Animation";

const FrontendHero = () => {
  return (
    <section className="main-section">
      <motion.div className="pageline-div" variants={pagelineAnim}></motion.div>
      <motion.div className="pageline-div" variants={pagelineAnim}></motion.div>
      <div className="hero">
        <div className="hero-text">
          <motion.h1 variants={heroAnim}>Full Stack Development</motion.h1>
          <motion.p variants={heroAnim}>
            As a fullstack developer with 4 years of experience, building
            beautiful and robust user interfaces for web applications has become
            second nature to me. I am deeply passionate about developing
            products that not only look appealing but are also well-optimized
            for performance and scalability, and I consistently strive to
            instill this mindset into all of my work.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default FrontendHero;
