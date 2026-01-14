import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const AboutSection = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create(".about-title", {
      type: "words",
    });
    const paragraphSplit = SplitText.create(".about-content p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    // Fade in and scale title
    gsap.from(".about-title", {
      scrollTrigger: {
        trigger: ".about-section",
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: "power3.out",
    });

    gsap.to(titleSplit.words, {
      color: "#000000",
      ease: "power1.in",
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".about-section",
        start: "top center",
        end: "30% center",
        scrub: true,
      },
    });

    const paragraphTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-content p",
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
    });
    paragraphTl.from(paragraphSplit.words, {
      yPercent: 100,
      opacity: 0,
      ease: "power2.out",
      duration: 0.8,
      stagger: 0.02,
    });
  });

  return (
    <section id="about" className="about-section">
      <div className="container mx-auto flex-center py-28 relative">
        <div className="w-full h-full max-w-5xl">
          <div className="overflow-hidden mb-10">
            <h1 className="about-title general-title text-center">
              About Me
            </h1>
          </div>

          <div className="about-content flex-center">
            <div className="max-w-3xl px-10 text-center">
              <p className="text-lg md:text-xl font-paragraph leading-relaxed">
                I'm a passionate developer with expertise in creating modern,
                responsive web applications. With a keen eye for design and a
                commitment to clean code, I bring ideas to life through
                technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
