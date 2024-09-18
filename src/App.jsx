import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";

import Information from "./pages/information/Information";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  const pageTitles = {
    "/": "Home | Ahnaf Adib ",
    "/projects": "Projects | Ahnaf Adib ",
    "/archive": "Archive | Ahnaf Adib ",
    "/information": "Information | Ahnaf Adib ",
  };

  useEffect(() => {
    const currentTitle = pageTitles[location.pathname] || "Ahnaf Adib";
    document.title = currentTitle;

    if (location.pathname !== "/archive") {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 700);
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/information" element={<Information />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
