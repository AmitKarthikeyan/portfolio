import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SkillsSection = () => {
  const skills = [
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Python",
    "Java",
    "Go",
    "C++",
    "HTML/CSS",
    "Tailwind CSS",
    "Git",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Machine Learning",
    "AI/ML",
    "REST APIs",
  ];

  useGSAP(() => {
    gsap.from(".skill-box", {
      scrollTrigger: {
        trigger: ".skills-section",
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
      scale: 0,
      opacity: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: "back.out(1.7)",
    });
  });

  return (
    <section id="skills" className="skills-section page-section">
      <div className="container mx-auto py-20 px-5">
        <div className="overflow-hidden mb-16">
          <h1 className="general-title text-center">Skills</h1>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-box px-6 py-3 bg-white border-2 border-[#4B9CD3] rounded-full text-[#000000] font-semibold hover:bg-[#4B9CD3] hover:text-white transition-all duration-300 cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
