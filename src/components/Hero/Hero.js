import React from "react";
import { SvgWave } from "../../Svg/Svg";
import "./Hero.scss";
//Animations
import { motion } from "framer-motion";
import { pageAnim, heroAnim, fadein, pagelineAnim } from "../../Animation";
import { useHistory } from "react-router-dom";
import Button from "../Button/Button";
import techimages from "../../Assets/techimages.png";

const Hero = () => {
  let history = useHistory();

  return (
    <motion.section
      className="hero-section"
      exit="exit"
      variants={pageAnim}
      initial="hidden"
      animate="show"
    >
      <motion.div className="pageline-div" variants={pagelineAnim}></motion.div>
      <motion.div className="pageline-div" variants={pagelineAnim}></motion.div>
      <SvgWave />
      <div className="hero-dark">
        <motion.div className="hero-text">
          <motion.h2 variants={heroAnim} className="namegradient">
            Rachel Tomi
          </motion.h2>
          <motion.h1 variants={heroAnim} className="hero-h1">
            Full-Stack Developer
          </motion.h1>

          <motion.p className="texth1" variants={heroAnim}>
            I design and develop experiences that make people's lives easier and
            more efficient.
          </motion.p>

          <motion.div
            variants={fadein}
            className="hero-btn"
            onClick={() => history.push("/frontend")}
          >
            <Button primary> Check out my work</Button>
          </motion.div>

          <motion.div className="techiconsdiv" variants={heroAnim}>
            <h1>Technologies</h1>
            <motion.img src={techimages} alt="techs-icons" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
