import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../../Footer/Footer";
import { ProjectsData } from "./ProjectsData";
import Button from "../../Button/Button";
import { heroAnim } from "../../../Animation";

const WordpressProjects = () => {
  const [show, setShow] = useState(3);

  const loadHandler = () => {
    setShow((initialValue) => initialValue + 2);
  };

  return (
    <>
      <motion.div variants={heroAnim} className="project-section">
        <div className="title">
          <div className="line"></div>
          <div className="text">
            <p className="small-h">Projects</p>
          </div>
        </div>
        {ProjectsData.slice(0, show).map((item) => (
          <div className=" projects" key={item.id}>
            <div className="panel project-1">
              <div className="project-img">
                <img src={item.img} alt="project" />
              </div>
              <div className="project-text">
                <h1 className="project-h1">{item.title}</h1>
                <p></p>
                <ul>
                  {item.stacks.map((list, index) => (
                    <div className="btngrey">
                      <Button secondary key={index}>
                        {list}
                      </Button>
                    </div>
                  ))}
                </ul>
                <div>
                  <p>{item.info}</p>
                </div>
                <div className="links">
                  <div className="livelink">
                    <div className="link">
                      {item.url === "Coming Soon" ? (
                        <Button
                          primary
                          disabled={item.url === "Coming Soon" ? true : false}
                        >
                          <a href={item.url} rel="noreferrer" target="_blank">
                            {item.url === "Coming Soon"
                              ? "Coming Soon"
                              : "Live link"}
                          </a>
                        </Button>
                      ) : (
                        <a href={item.url} rel="noreferrer" target="_blank">
                          <Button primary>Live link</Button>
                        </a>
                      )}
                    </div>
                    {item?.github !== "" ? (
                      <div className="link">
                        <a href={item.github} rel="noreferrer" target="_blank">
                          <Button outline>Code</Button>
                        </a>
                      </div>
                    ) : (
                      <>""</>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="loadBtn">
          <Button primary onClick={loadHandler}>
            Load More
          </Button>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default WordpressProjects;
