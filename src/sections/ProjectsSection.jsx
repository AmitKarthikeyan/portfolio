import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Mapache",
      description: "A modern web application built with React and Node.js",
      image: "/images/p1.png",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      title: "Factify",
      description: "E-commerce platform with advanced features",
      image: "/images/p2.png",
      tech: ["Next.js", "TypeScript", "Stripe"],
    },
    {
      id: 3,
      title: "SlipStream",
      description: "Mobile-first responsive portfolio website",
      image: "/images/p3.png",
      tech: ["React", "Tailwind", "GSAP"],
    },
  ];

  useGSAP(() => {
    gsap.from(".project-card", {
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
      y: 100,
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });

    // Add parallax effect to project images
    gsap.utils.toArray(".project-card").forEach((card) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: -30,
      });
    });
  });

  return (
    <section id="projects" className="projects-section">
      <div className="container mx-auto py-20 px-5">
        <div className="overflow-hidden mb-16">
          <h1 className="general-title text-center">My Projects</h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card bg-white rounded-2xl overflow-hidden border-4 border-[#4B9CD3] hover:scale-105 hover:shadow-2xl hover:border-[#3A7FB8] transition-all duration-300 cursor-pointer"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-[#000000]">
                  {project.title}
                </h3>
                <p className="text-[#000000] opacity-80 mb-4 font-paragraph">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#4B9CD3] text-[#000000] rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
