import React from "react";
import gsap from "gsap";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./sections/HeroSection.jsx";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import ProjectsSection from "./sections/ProjectsSection.jsx";
import SkillsSection from "./sections/SkillsSection.jsx";
import ContactSection from "./sections/ContactSection.jsx";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    // Create ScrollSmoother
    const smoother = ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });

    // Page load animations - sections fade in from top to bottom
    gsap.set(".page-section", { opacity: 0, y: 100 });
    
    gsap.to(".page-section", {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.5,
    });
  });
  return (
    <main>
      <Navbar />
      <div id='smooth-wrapper'>
        <div id='smooth-content'>
          <HeroSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </div>
      </div>
    </main>
  );
};
export default App;
