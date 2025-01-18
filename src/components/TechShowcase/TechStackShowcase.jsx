// TechStackShowcase.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Cloud, Layout, Brain, Server } from "lucide-react";
import "./TechStackShowcase.css";

const TechStackShowcase = () => {
  const [activeStack, setActiveStack] = useState("core");

  const stacks = {
    core: {
      icon: <Code2 className="stack-icon" />,
      title: "Core Technologies",
      technologies: [
        { name: "React.js", description: "Dynamic UI & State Management" },
        {
          name: "Next.js",
          description: "Full-stack Framework & Server Rendering",
        },
        {
          name: "TypeScript",
          description: "Strongly-typed Application Development",
        },
      ],
    },
    cloud: {
      icon: <Cloud className="stack-icon" />,
      title: "Cloud & Infrastructure",
      technologies: [
        { name: "AWS", description: "Cloud Services & Secure Storage" },
        { name: "Docker", description: "Application Containerization" },
        { name: "Supabase", description: "Realtime Database & Authentication" },
      ],
    },
    ai: {
      icon: <Brain className="stack-icon" />,
      title: "AI & Automation",
      technologies: [
        {
          name: "OpenAI",
          description: "AI-driven Features & Optimization",
        },
        { name: "LangChain", description: "Conversational AI Framework" },
        { name: "TensorFlow", description: "Machine Learning Solutions" },
      ],
    },
    frontend: {
      icon: <Layout className="stack-icon" />,
      title: "Frontend Expertise",
      technologies: [
        { name: "TailwindCSS", description: "Utility-first Styling Framework" },
        { name: "Framer Motion", description: "Interactive Animations" },
        { name: "GSAP", description: "High-performance Animation Library" },
      ],
    },
    backend: {
      icon: <Server className="stack-icon" />,
      title: "Backend Proficiency",
      technologies: [
        { name: "Node.js", description: "Efficient Server-side Programming" },
        {
          name: "PostgreSQL",
          description: "Database Management & Optimization",
        },
        { name: "GraphQL", description: "Flexible API Query Language" },
      ],
    },
  };

  return (
    <div className="tech-stack-container">
      <div className="tech-stack-content">
        <h2 className="section-title">Technology Ecosystem</h2>

        <div className="stack-grid">
          {Object.entries(stacks).map(([key, stack]) => (
            <motion.div
              key={key}
              onClick={() => setActiveStack(key)}
              className={`stack-card ${activeStack === key ? "active" : ""}`}
              whileHover={{ scale: 1.02 }}
            >
              <div className="stack-header">
                {stack.icon}
                <h3 className="stack-title">{stack.title}</h3>
              </div>

              <div className="tech-list">
                {stack.technologies.map((tech) => (
                  <div key={tech.name} className="tech-item">
                    <div className="tech-name">{tech.name}</div>
                    <div className="tech-description">{tech.description}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackShowcase;
