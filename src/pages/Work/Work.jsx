import React, { useEffect } from "react";
import "./Work.css";
import { Link, useParams } from "react-router";

import Cursor from "../../components/Cursor/Cursor";
import Transition from "../../components/Transition/Transition";
import BackButton from "../../components/BackButton/BackButton";

import { ReactLenis } from "@studio-freight/react-lenis";

import { IoIosArrowRoundForward } from "react-icons/io";
import { projects } from "./projectDetails";

const Work = () => {
  const params = useParams();

  const project = projects.filter(
    (project) => project.id === parseInt(params.id)
  )[0];

  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }, 0);

    return () => clearTimeout(scrollTimeout);
  }, []);

  return (
    <ReactLenis root>
      <Cursor />
      <div className="sample-project">
        <BackButton />

        <section className="sp-title">
          <div className="container">
            <h1>{project.title}</h1>
          </div>
        </section>

        <section className="sp-banner">
          <img src={project.imageURL} alt="" />
        </section>

        <section className="sp-details">
          <div className="container">
            <div className="sp-details-col">
              <p className="sp-details-name">Skills</p>

              <div className="sp-tags">
                {project.skills.map((skill, index) => {
                  return <p key={index}>{skill}</p>;
                })}
              </div>

              <div className="sp-link">
                <Link to={project.github}>
                  <button>
                    <div className="icon">
                      <IoIosArrowRoundForward size={16} />
                    </div>
                    View Project
                  </button>
                </Link>
              </div>
            </div>
            <div className="sp-details-col">
              <p>Description</p>
              <p>{project.description}</p>
            </div>
          </div>
        </section>

        <section className="sp-info">
          <div className="container">
            <div className="sp-info-title">
              <h3>Frameworks/Libraries</h3>
            </div>

            <div className="tags-container">
              {project.frameworks.map((tag, index) => {
                return (
                  <span className="tech-tag" key={index}>
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
};

export default Transition(Work);
