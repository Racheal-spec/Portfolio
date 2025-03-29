import React from "react";
import { Link } from "react-router-dom";
import "./Skillset.scss";
import { SvgWave } from "../../Svg/Svg";
//Animations
import { motion } from "framer-motion";
import { pageAnim, heroh1, heroAnim, pagelineAnim } from "../../Animation";

const Skillset = () => {
  return (
    <motion.section
      className="skillset"
      exit="exit"
      variants={pageAnim}
      initial="hidden"
      animate="show"
    >
      <motion.div className="pageline-div" variants={pagelineAnim}></motion.div>
      <motion.div className="pageline-div" variants={pagelineAnim}></motion.div>
      <SvgWave />
      <div className="skills-div">
        <div className="skill-h1">
          <motion.h2 variants={heroh1}>Portfolio</motion.h2>
        </div>

        <div className="skills">
          <motion.div variants={heroAnim} className="frontend">
            <Link to="/frontend" className="skills-heading">
              <div className="skills-heading-frontend">
                Full-Stack Web Development
              </div>
            </Link>
            <Link to="/frontend" className="skill-link">
              <p>&rarr;</p>
            </Link>
          </motion.div>
          <motion.div variants={heroAnim} className="uiux">
            <Link to="/uiux" className="skills-heading">
              <div className="skills-heading-uiux">Ui/Ux Design</div>
            </Link>
            <Link to="/uiux" className="skill-link">
              <p>&rarr;</p>
            </Link>
          </motion.div>
          <motion.div variants={heroAnim} className="wordpress">
            <a href="https://blog.racheltomi.work/" className="skills-heading">
              <div className="skills-heading-techwriting">
                Technical Writing
              </div>
            </a>
            <a href="https://blog.racheltomi.work/" className="skill-link">
              <p>&rarr;</p>
            </a>
          </motion.div>
        </div>
        <div className="skills">
          <motion.div variants={heroAnim} className="frontend">
            <Link to="/wordpress" className="skills-heading">
              <div className="skills-heading-frontend">
                Wordpress Development
              </div>
            </Link>
            <Link to="/wordpress" className="skill-link">
              <p>&rarr;</p>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skillset;
