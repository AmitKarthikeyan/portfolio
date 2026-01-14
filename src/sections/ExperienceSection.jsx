import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Tech Company",
      period: "2022 - Present",
      description: [
        "Led development of scalable web applications serving 100k+ users",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored junior developers and conducted code reviews",
      ],
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Startup Inc",
      period: "2020 - 2022",
      description: [
        "Built responsive web applications using React and Node.js",
        "Integrated third-party APIs and payment processing systems",
        "Optimized database queries improving performance by 40%",
      ],
    },
    {
      id: 3,
      title: "Junior Developer",
      company: "Digital Agency",
      period: "2018 - 2020",
      description: [
        "Developed and maintained client websites using modern frameworks",
        "Collaborated with designers to implement pixel-perfect UIs",
        "Participated in agile development processes",
      ],
    },
  ];

  useGSAP(() => {
    gsap.from(".experience-item", {
      scrollTrigger: {
        trigger: ".experience-section",
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
      x: -100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });

    gsap.from(".experience-title", {
      scrollTrigger: {
        trigger: ".experience-section",
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power3.out",
    });
  });

  return (
    <section id="experience" className="experience-section page-section">
      <div className="container mx-auto py-20 px-5">
        <div className="overflow-hidden mb-16">
          <h1 className="general-title text-center experience-title">
            Professional Experience
          </h1>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="experience-item bg-white rounded-2xl p-8 border-4 border-[#4B9CD3] hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="flex md:flex-row flex-col md:justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#000000] mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-[#4B9CD3] font-semibold">
                    {exp.company}
                  </p>
                </div>
                <div className="md:mt-0 mt-2">
                  <span className="inline-block px-4 py-2 bg-[#4B9CD3] text-[#000000] rounded-full font-medium">
                    {exp.period}
                  </span>
                </div>
              </div>
              <ul className="space-y-2 ml-5">
                {exp.description.map((item, index) => (
                  <li
                    key={index}
                    className="text-[#000000] font-paragraph flex items-start"
                  >
                    <span className="text-[#4B9CD3] mr-2">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
