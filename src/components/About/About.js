import React from "react";
import "./About.scss";
import rightarrow from "../../Assets/Right-arrow.png";
//Animations
import { motion } from "framer-motion";
import {
  heroAnim,
  heroh1,
  imgAnim,
  pageAnim,
  pagelineAnim,
} from "../../Animation";
import { SvgWave } from "../../Svg/Svg";
import Button from "../Button/Button";

const About = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnim}
      initial="hidden"
      animate="show"
      className="main-main"
    >
      <SvgWave />
      <motion.div variants={imgAnim} className="main"></motion.div>
      <motion.div className="pageline-div" variants={pagelineAnim}></motion.div>
      <motion.div className="pageline-div" variants={pagelineAnim}></motion.div>
      <div className="about-content">
        <div className="small-heading">
          <motion.h2 variants={heroh1} className="small-h">
            About Me
          </motion.h2>
        </div>
        <div className="text-content">
          <motion.p variants={heroAnim}>
            Hi. My name is <span className="name">Tomi</span>, I’m a fullstack
            developer specializing in building accessible web applications for
            organizations. As a highly passionate developer, I’m constantly
            motivated to bring my A-game to every project I’m a part of. My
            passion for web development has always led me to learn about the
            latest tech trends, which has helped me stay on top of my game.
          </motion.p>
          <motion.p className="text" variants={heroAnim}>
            My core qualities are empathy, good communication, and organization.
            This has played a significant role in my approach to development, as
            well as my relationship with team members in every company I’ve
            worked with or projects I’ve been a part of. I truly believe that
            understanding the needs and emotions of users is the key to creating
            websites that not only work great but also leave a positive impact.
            I'm always on the lookout for new skills to add to my arsenal.
            Whether it's attending webinars, and conferences, or diving into
            online resources, I'm dedicated to staying on the cutting edge of
            frontend development. When I’m not coding, you will find me writing
            on my {""}
            <a
              href="https://blog.racheltomi.work/"
              rel="noreferrer"
              target="_blank"
            >
              blog
            </a>{" "}
            creating helpful tech content, especially for beginners. My hobbies
            are all over the place. I love to watch movies, listen to music, and
            hang out with friends.
            <div className="marginDiv">
              I'm eager to collaborate, learn from others, and work on projects
              that make a real difference in the digital world.
            </div>
            <span className="text">
              {" "}
              I’m open to work. It would be a pleasure to hear from you.
            </span>
          </motion.p>
        </div>
        <motion.div variants={heroAnim} className="download">
          <Button primary>
            <a
              href="https://drive.google.com/file/d/1-BzUasPYddJnGcDkqTFV9RYqdd244fM3/view?usp=sharing"
              target="_blank"
              className="link"
              rel="noreferrer"
              download
            >
              <p>View Resume</p>
            </a>
          </Button>
        </motion.div>

        <div className="techs">
          <h2 className="tech-h2">Technologies I Use?</h2>
          <div className="tech-ul">
            <ul>
              <h5 className="tech-h">CORE</h5>
              <div className="right-arrow">
                <img src={rightarrow} alt="downloadlink" />
                <p>HTML5</p>
              </div>
              <div className="right-arrow">
                <img src={rightarrow} alt="downloadlink" />
                <p>CSS3</p>
              </div>
              <div className="right-arrow">
                <img src={rightarrow} alt="downloadlink" />
                <p>Javascript</p>
              </div>
              <div className="right-arrow">
                <img src={rightarrow} alt="downloadlink" />
                <p>React Js</p>
              </div>
              <div className="right-arrow">
                <img src={rightarrow} alt="downloadlink" />
                <p>Typescript</p>
              </div>
              <div className="right-arrow">
                <img src={rightarrow} alt="downloadlink" />
                <p>Bootstrap</p>
              </div>
              <div className="right-arrow">
                <img src={rightarrow} alt="downloadlink" />
                <p>RTK Query</p>
              </div>
              <div className="right-arrow">
                <img src={rightarrow} alt="downloadlink" />
                <p>Tailwindcss</p>
              </div>
              <div className="right-arrow">
                <img src={rightarrow} alt="downloadlink" />
                <p>SCSS</p>
              </div>
              <div className="right-arrow">
                <img src={rightarrow} alt="downloadlink" />
                <p>Redux</p>
              </div>
              <div className="right-arrow">
                <img src={rightarrow} alt="downloadlink" />
                <p>Nextjs</p>
              </div>
              <div className="right-arrow">
                <img src={rightarrow} alt="downloadlink" />
                <p>context api</p>
              </div>
              <div className="right-arrow">
                <img src={rightarrow} alt="downloadlink" />
                <p>Figma</p>
              </div>
              <div className="right-arrow">
                <img src={rightarrow} alt="downloadlink" />
                <p>Material UI</p>
              </div>
              <div className="right-arrow">
                <img src={rightarrow} alt="downloadlink" />
                <p>gsap</p>
              </div>
              <div className="right-arrow">
                <img src={rightarrow} alt="downloadlink" />
                <p>framer motion</p>
              </div>
            </ul>

            <ul>
              {/* <h5 className="tech-h">FAMILIAR</h5> */}
              <div className="right-arrow">
                <img src={rightarrow} alt="downloadlink" />
                <p>Node</p>
              </div>
              <div className="right-arrow">
                <img src={rightarrow} alt="downloadlink" />
                <p>express</p>
              </div>
              <div className="right-arrow">
                <img src={rightarrow} alt="downloadlink" />
                <p>mongodb</p>
              </div>
              <div className="right-arrow">
                <img src={rightarrow} alt="downloadlink" />
                <p>PostgreSQL</p>
              </div>
              <div className="right-arrow">
                <img src={rightarrow} alt="downloadlink" />
                <p>Python</p>
              </div>
              <div className="right-arrow">
                <img src={rightarrow} alt="downloadlink" />
                <p>AWS</p>
              </div>
              <div className="right-arrow">
                <img src={rightarrow} alt="downloadlink" />
                <p>Supabase</p>
              </div>
              <div className="right-arrow">
                <img src={rightarrow} alt="downloadlink" />
                <p>web3.js</p>
              </div>
              <div className="right-arrow">
                <img src={rightarrow} alt="downloadlink" />
                <p>firebase</p>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
