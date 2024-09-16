import { Link } from "react-router-dom";
import { ReactLenis, useLenis } from "lenis/react";

import "./Information.css";

import Transition from "../../components/transition/Transition";

import { services, campaigns } from "./info";

const Information = () => {
  const lenis = useLenis(({ scroll }) => {});

  return (
    <ReactLenis root>
      <div className="information">
        <div className="container">
          <h1>
            I’m an experienced web developer and designer, blending technical
            expertise with a passion for sales and marketing. This unique
            combination allows me to craft innovative solutions while creating
            strategies that engage and resonate with audiences.
          </h1>
          <div className="info-services">
            <div className="info-col">
              <div className="info-sub-col">
                <ul>
                  {services.map((item) => (
                    <li key={item.id}>&#x2192; {item.text}</li>
                  ))}
                </ul>
              </div>
              <div className="info-sub-col">
                <ul>
                  {campaigns.map((item) => (
                    <li key={item.id}>&#x2192; {item.text}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col">
              <p>
                Let’s explore new possibilities together. Whether you have a
                project in mind or just want to brainstorm ideas, I'm always
                excited to dive into new challenges.
              </p>
              <div className="contact-link">
                <Link to="mailto:ahnafadib7546@gmail.com">
                  &#x2192; Let's Connect
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
};

export default Transition(Information);
