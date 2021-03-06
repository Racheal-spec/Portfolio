import React, { useState } from "react";
import { Link } from "react-router-dom";
import github from "../../Assets/Vector-github.svg";
import IG from "../../Assets/Vector-IG.svg";
import twitter from "../../Assets/Vector-twitter.svg";
import linkedin from "../../Assets/Vector-linkedin.svg";
import logoimg from "../../Assets/bandw4.jpg";
import Navigation from "./Navigation";
import "./Header.scss";
import { motion } from "framer-motion";
import { lineAnimContainer } from "../../Animation";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  const closeMenu = () => setClick(!click);

  return (
    <div className="header">
      {click && <Navigation closeMenu={closeMenu} clicked={click} />}
      <motion.div
        className="header-wrapper"
        exit="exit"
        variants={lineAnimContainer}
        initial="hidden"
        animate="show"
      >
        <Link to="/" className="logo-link">
          <img src={logoimg} className="logo-img" alt="logo" />
        </Link>

        <div
          className={click ? "menu-btn open" : "menu-btn"}
          onClick={handleClick}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        <div className="header-wrapper2">
          <div className="gmail-text">
            <a
              href="mailto:tomisinrachel@gmail.com"
              method="POST"
              encType="multipart/form-data"
            >
              Let's chat &rarr; tomisinrachel@gmail.com
            </a>
          </div>

          <ul className="social-icons">
            <li>
              <a href="https://github.com/Racheal-spec/">
                <img src={github} className="icon1" alt="github" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/racheltomiofficial">
                <img src={IG} className="icon2" alt="instagram" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/racheltomidev">
                <img src={twitter} className="icon3" alt="twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/rachel-tomi-03572a195/">
                <img src={linkedin} className="icon4" alt="linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
