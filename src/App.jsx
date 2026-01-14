import React from "react";
import gsap from "gsap";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./sections/HeroSection.jsx";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import AboutSection from "./sections/AboutSection.jsx";
import ProjectsSection from "./sections/ProjectsSection.jsx";
import SkillsSection from "./sections/SkillsSection.jsx";
import ContactSection from "./sections/ContactSection.jsx";
import { useGSAP } from "@gsap/react";
import FooterSection from "./sections/FooterSection.jsx";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });
  return (
    <main>
      <Navbar />
      <div id='smooth-wrapper'>
        <div id='smooth-content'>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
          <FooterSection />
        </div>
      </div>
    </main>
  );
};
export default App;
