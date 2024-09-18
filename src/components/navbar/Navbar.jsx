import { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

import ArticleImg1 from "../../assets/nav/article-1.svg";
import ArticleImg2 from "../../assets/nav/article-2.svg";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const navLinks = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Projects",
      url: "/projects",
    },
    {
      label: "Information",
      url: "/information",
    },
  ];

  const articleItems = [
    {
      url: "https://fintrack-next-psi.vercel.app/",
      title: "Fintrack",
      subTitle: "Pretty useful financial application",
      img: ArticleImg1,
    },
    {
      url: "https://graphic-tool.vercel.app/",
      title: "Graphica",
      subTitle: "Moderately useful graphic tool",
      img: ArticleImg2,
    },
  ];

  const handleArticleClick = () => {
    setIsActive(true);
  };

  const handleShowLessClick = (event) => {
    event.stopPropagation();
    setIsActive(false);
  };

  return (
    <div className="navbar">
      <div className="nav-links">
        {navLinks.map((link, index) => (
          <div className="nav-link" key={index}>
            <Link to={link.url}>{link.label}</Link>
          </div>
        ))}
      </div>

      <div
        className={`nav-external-links ${isActive ? "active" : ""}`}
        onClick={handleArticleClick}
      >
        {articleItems.map((item, index) => (
          <div
            className="article-item"
            id={`article-item-${index + 1}`}
            key={index}
          >
            <Link target="_blank" to={item.url}>
              <div className="article-item-img">
                <img src={item.img} alt={`Article Img ${index + 1}`} />
              </div>
              <div className="article-item-content">
                <p id="article-item-name">{item.title}</p>
                <p id="article-item-copy">{item.subTitle}</p>
              </div>
            </Link>
          </div>
        ))}

        <div className="toggle-articles" onClick={handleShowLessClick}>
          <button className="btn">Show less</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
