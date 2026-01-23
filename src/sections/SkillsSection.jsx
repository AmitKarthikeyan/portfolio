import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "SQL", "Java", "C++", "JavaScript", "C", "Golang", "HTML/CSS"]
    },
    {
      category: "Frameworks",
      skills: ["React", "Node.js", "Express", "FastAPI", ".NET", "Flask"]
    },
    {
      category: "Developer Tools",
      skills: ["Git", "AWS", "Linux/Unix", "Jira", "Docker", "Excel", "Tableau", "GCP", "Vite", "CI/CD", "Agile"]
    },
    {
      category: "Libraries",
      skills: ["NumPy", "pandas", "PyTorch", "Hugging Face", "LangChain", "Matplotlib", "Scikit-learn"]
    }
  ];

  useGSAP(() => {
    gsap.from(".skill-category", {
      scrollTrigger: {
        trigger: ".skills-section",
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
    });

    gsap.from(".skill-box", {
      scrollTrigger: {
        trigger: ".skills-section",
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
      scale: 0,
      opacity: 0,
      duration: 0.5,
      stagger: 0.03,
      ease: "back.out(1.7)",
      delay: 0.3,
    });
  });

  return (
    <section id="skills" className="skills-section page-section">
      <div className="container mx-auto py-20 px-5">
        <div className="overflow-hidden mb-16">
          <h1 className="general-title text-center">Skills</h1>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="skill-category">
                <h3 className="text-xl font-bold text-[#4B9CD3] mb-4 text-center">
                  {category.category}
                </h3>
                <div className="flex flex-col gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="skill-box px-1 py-3 bg-white border-2 border-[#4B9CD3] rounded-full text-[#000000] font-semibold text-center hover:bg-[#4B9CD3] hover:text-white transition-all duration-300 cursor-default text-base"
                    >
                      {skill}
                    </div>
                  ))}
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
