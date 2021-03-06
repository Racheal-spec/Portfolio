import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import { heroAnim} from '../../../Animation';

const FrontendHero = () => {

    return(
     <section className="main-section">
    
     <div className="hero">
     <Link to="/skillset">
     <p className="back">&larr;</p>
     </Link>
     <div className="hero-text">
          <motion.h1 variants={heroAnim}>Front end Development</motion.h1>
         <motion.div variants={heroAnim} className="underline"></motion.div>
          <motion.p variants={heroAnim}>This is where my strength lies. I’m vast with HTML, CSS and JAVASCRIPT to help create websites of any kind. I use react mostly for my front-end projects. I’m currently
           in the process of mastering Node JS to complete the full stack developer journey.
         </motion.p>
      </div>
     </div>
     </section>
    )
}

export default FrontendHero;