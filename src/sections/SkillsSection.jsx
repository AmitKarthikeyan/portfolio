import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SkillsSection = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "CSS/Tailwind", level: 90 },
    { name: "GSAP", level: 85 },
    { name: "Git", level: 80 },
    { name: "MongoDB", level: 70 },
  ];

  useGSAP(() => {
    gsap.from(".skill-item", {
      scrollTrigger: {
        trigger: ".skills-section",
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
      x: -100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
    });

    gsap.from(".skill-bar-fill", {
      scrollTrigger: {
        trigger: ".skills-section",
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
      width: 0,
      duration: 1.5,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.4,
    });
  });

  return (
    <section id="skills" className="skills-section">
      <div className="container mx-auto py-20 px-5">
        <div className="overflow-hidden mb-16">
          <h1 className="general-title text-center">Skills & Expertise</h1>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-bold text-[#000000]">
                    {skill.name}
                  </span>
                  <span className="text-[#4B9CD3] font-bold">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-3 bg-[#F9FAFB] rounded-full overflow-hidden border-2 border-[#4B9CD3]">
                  <div
                    className="skill-bar-fill h-full bg-[#4B9CD3] rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
