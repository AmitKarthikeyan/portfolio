import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Autoinvent",
      period: "July 2025 - Present",
      description: [
        "Architected a RAG pipeline using Google Gemini and vector embeddings to automate legal claim generation, processing unstructured text inputs with less than 2 seconds latency",
        "Developed a scalable React 18 + Vite front-end with real-time document updates and responsive UI, supporting concurrent editing and smooth navigation across complex patent documents",
        "Engineered a multi-tenant data layer using Firestore and Cloud KMS, enforcing row-level security policies to ensure strict data isolation for legal compliance",
      ],
    },
    {
      id: 2,
      title: "Software Engineer Intern",
      company: "DMS Solutions",
      period: "August 2022 - June 2024",
      description: [
        "Developed an e-commerce website using JavaScript and HTML resulting in $20k+ in sales",
        "Increased visibility of products by making it more accessible and user-friendly leading to 1000+ products sold",
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
                    {exp.company}
                  </h3>
                  <p className="text-xl text-[#000000]">
                    {exp.title}
                  </p>
                </div>
                <div className="md:mt-0 mt-2">
                  <span className="inline-block px-4 py-2 bg-[#4B9CD3] text-white rounded-full font-medium">
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
