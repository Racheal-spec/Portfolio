import React from "react";
import "../Skills.scss";
import FrontendHero from "./FrontendHero";
//Animations
import { motion } from "framer-motion";
import { pageAnim } from "../../../Animation";
import { SvgWave } from "../../../Svg/Svg";
import WordpressProjects from "./WordpressProjects";

const Wordpress = () => {
  return (
    <motion.div exit="exit" variants={pageAnim} initial="hidden" animate="show">
      <SvgWave />
      <FrontendHero />
      <WordpressProjects />
    </motion.div>
  );
};

export default Wordpress;
