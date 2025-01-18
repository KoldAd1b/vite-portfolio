// DeveloperJourney.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Sparkles, Target, X } from "lucide-react";
import "./DeveloperJourney.css";

const DeveloperJourney = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [overlayPosition, setOverlayPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const overlayRef = useRef(null);

  const journeyData = [
    {
      id: "current",
      icon: <Brain className="journey-icon" />,
      title: "Current Focus",
      subtitle: "Building & Innovating",
      items: [
        {
          title: "AI Integration",
          description:
            "Developing AI-powered applications with focus on user experience and performance optimization",
          tags: ["OpenAI", "LangChain", "Vector DBs"],
        },
        {
          title: "Microservices Architecture",
          description:
            "Building scalable distributed systems with modern architectural patterns",
          tags: ["Docker", "Kubernetes", "Message Queues"],
        },
      ],
    },
    {
      id: "learning",
      icon: <Sparkles className="journey-icon" />,
      title: "Active Learning",
      subtitle: "Expanding Horizons",
      items: [
        {
          title: "Systems Programming",
          description:
            "Diving deep into low-level programming with Rust and WebAssembly",
          tags: ["Rust", "WASM", "Systems Design"],
        },
        {
          title: "Distributed Systems",
          description:
            "Studying advanced patterns for building reliable distributed applications",
          tags: ["Consensus", "CAP Theorem", "Scalability"],
        },
      ],
    },
    {
      id: "goals",
      icon: <Target className="journey-icon" />,
      title: "Future Goals",
      subtitle: "Vision & Aspirations",
      items: [
        {
          title: "Edge Computing",
          description:
            "Exploring next-generation edge computing solutions and serverless architectures",
          tags: ["Edge Functions", "CDN", "Web3"],
        },
        {
          title: "Machine Learning Ops",
          description: "Building robust ML pipelines and deployment strategies",
          tags: ["MLOps", "TensorFlow", "PyTorch"],
        },
      ],
    },
  ];

  const calculateOverlayPosition = (clickEvent, cardElement) => {
    const containerRect = containerRef.current.getBoundingClientRect();
    const cardRect = cardElement.getBoundingClientRect();

    console.log(containerRect);
    console.log(cardRect);

    // Calculate initial position relative to the viewport
    let x = cardRect.left - containerRect.left;
    let y = cardRect.top - containerRect.top;

    // Get viewport dimensions and overlay dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const overlayWidth = 400; // Approximate width of the overlay
    const overlayHeight = 400; // Approximate height of the overlay

    // Adjust for right edge overflow
    if (x + overlayWidth > viewportWidth) {
      x = viewportWidth - overlayWidth - 40; // 40px padding from the edge
    }

    // Adjust for bottom edge overflow
    if (y + overlayHeight > viewportHeight + scrollY) {
      y = cardRect.top - containerRect.top - overlayHeight + scrollY;
    }

    // Ensure the overlay is not positioned off-screen at the top
    y = Math.max(y, 40);

    return { x, y };
  };

  const handleSectionClick = (e, section) => {
    e.stopPropagation(); // Prevent event bubbling

    if (activeSection === section.id) {
      setActiveSection(null);
    } else {
      const position = calculateOverlayPosition(e, e.currentTarget);
      setOverlayPosition(position);
      setActiveSection(section.id);
    }
  };

  // Close overlay when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (overlayRef.current && !overlayRef.current.contains(e.target)) {
        setActiveSection(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="journey-container" ref={containerRef}>
      <div className="journey-content">
        <h2 className="section-title">Development Journey</h2>

        <div className="journey-grid">
          {journeyData.map((section) => (
            <motion.div
              key={section.id}
              className={`journey-card ${
                activeSection === section.id ? "active" : ""
              }`}
              onClick={(e) => handleSectionClick(e, section)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {section.icon}
              <h3 className="card-title">{section.title}</h3>
              <p className="card-subtitle">{section.subtitle}</p>
              <div className="card-indicator" />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {activeSection && (
            <motion.div
              ref={overlayRef}
              className="floating-overlay"
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              style={{
                position: "absolute",
                top: overlayPosition.y,
                left: overlayPosition.x,
              }}
            >
              <div className="overlay-content">
                <button
                  className="close-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveSection(null);
                  }}
                >
                  <X />
                </button>

                <div className="overlay-header">
                  {journeyData.find((s) => s.id === activeSection)?.icon}
                  <h3 className="overlay-header-title">
                    {journeyData.find((s) => s.id === activeSection)?.title}
                  </h3>
                </div>

                {journeyData
                  .find((s) => s.id === activeSection)
                  ?.items.map((item, index) => (
                    <motion.div
                      key={index}
                      className="overlay-card"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h4 className="overlay-title">{item.title}</h4>
                      <p className="overlay-description">{item.description}</p>
                      <div className="overlay-tags">
                        {item.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="overlay-tag"
                            style={{ animationDelay: `${tagIndex * 0.1}s` }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DeveloperJourney;
