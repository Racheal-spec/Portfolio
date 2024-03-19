import React from "react";
import { motion } from "framer-motion";
import { heroAnim, pagelineAnim } from "../../../Animation";

const UiUxHero = () => {
  return (
    <section className="main-section" id="uiux-section">
      <motion.div className="pageline-div" variants={pagelineAnim}></motion.div>
      <motion.div className="pageline-div" variants={pagelineAnim}></motion.div>
      <div className="hero">
        <div className="hero-text">
          <motion.h1 variants={heroAnim}>UI/UX Design</motion.h1>
          <motion.p variants={heroAnim}>
            In addition to my coding expertise, I dedicate some of my time
            to designing projects using Figma. By
            integrating this design knowledge into my development workflow, I
            have better honed my skills as a front-end developer.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default UiUxHero;
