import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ReactLenis, useLenis } from "lenis/react";

import "./Projects.css";

import Transition from "../../components/transition/Transition";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import ProjectImg1 from "../../assets/projects/project-1.jpg";
import ProjectImg2 from "../../assets/projects/project-2.jpg";

import ProjectCopy from "./ProjectCopy";
const projects = [
  {
    name: "FinTrack",
    category: "Full-Stack",
    img: ProjectImg1,
    description:
      "Welcome to the Finance Tracker application! This project is designed to help you manage your personal finances, track expenses, monitor income, and set budgeting goals, all from a sleek, user-friendly interface. Whether you’re aiming to save for the future or keep tabs on your spending, this tool provides insights into your financial habits, helping you make informed decisions.",

    liveURL: "https://fintrack-next-psi.vercel.app/",
    githubURL: "https://github.com/KoldAd1b/fintrack-next",
  },
  {
    name: "Graphica",
    category: "Full-stack",
    img: ProjectImg2,
    description:
      "A powerful, browser-based Graphic Design Editor built with TypeScript and SQL for intuitive graphic creation and manipulation. This editor allows users to create, edit, and save graphic designs with a smooth, user-friendly interface.",
    liveURL: "https://graphic-tool.vercel.app/",
    githubURL: "https://github.com/KoldAd1b/graphic-tool",
  },
];

const Projects = () => {
  const [projectList, setProjectList] = useState([]);
  const containerRef = useRef(null);
  const lenis = useLenis(({ scroll }) => {});

  useEffect(() => {
    const initialSet = Array(30)
      .fill()
      .flatMap((_, i) =>
        projects.map((project, j) => ({
          ...project,
          name: `${project.name}`,
          id: i * projects.length + j,
        }))
      );
    setProjectList(initialSet);
  }, []);

  useEffect(() => {
    if (containerRef.current && projectList.length > 0) {
      ScrollTrigger.create({
        scroller: containerRef.current,
        start: 0,
        end: "max",
        onLeave: (self) => {
          self.scroll(1);
          ScrollTrigger.update();
        },
        onLeaveBack: (self) => {
          self.scroll(ScrollTrigger.maxScroll(containerRef.current) - 1);
          ScrollTrigger.update();
        },
      });

      const projectItems =
        containerRef.current.querySelectorAll(".project-item");
      projectItems.forEach((item) => {
        gsap.to(item, {
          opacity: 1,
          repeat: 1,
          yoyo: true,
          ease: "none",
          scrollTrigger: {
            scroller: containerRef.current,
            trigger: item,
            start: "center bottom",
            end: "center top",
            scrub: true,
          },
        });
      });
    }
  }, [projectList]);

  return (
    <div
      className="projects"
      ref={containerRef}
      style={{
        height: "100vh",
        // overflowY: "auto",
        // to enable infinite scrolling, uncomment `overflowY: "auto"` and remove the <ReactLenis root> component from root
      }}
    >
      <div className="container">
        {projectList.map((project) => (
          <div className="row" key={project.id}>
            <div className="project-item">
              <div className="project-img-container">
                <Link className="project-img" to="/">
                  <img src={project.img} alt="" />
                </Link>
              </div>
              <div className="project-details">
                <p id="project-name"> &#x2192; {project.name}</p>
                <p id="project-category">{project.category}</p>
              </div>
            </div>
            <ProjectCopy
              description={project.description}
              githubURL={project.githubURL}
              key={crypto.randomUUID()}
              liveURL={project.liveURL}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transition(Projects);
