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
          <motion.h1 variants={heroAnim}>WordPress Development</motion.h1>
          <motion.p variants={heroAnim}>
            I work with businesses to bring their ideas or brand online—from the
            first stage of planning, through design, development, and launch. I
            handle the full process, including copywriting, so you don’t have to
            manage multiple people or steps. Whether you're starting fresh or
            rebuilding something that’s not working, I make sure everything is
            done with clarity, care, and consistency.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default FrontendHero;
