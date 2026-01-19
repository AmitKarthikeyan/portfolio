import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ContactSection = () => {
  useGSAP(() => {
    gsap.from(".contact-button", {
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  });

  return (
    <section id="contact" className="contact-section page-section">
      <div className="container mx-auto py-20 px-5">
        <div className="overflow-hidden mb-16">
          <h1 className="general-title text-center">Contact</h1>
        </div>

        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <p className="text-center text-xl text-[#000000] mb-8">
            Feel free to reach out!
          </p>
          <a
            href="mailto:karthikeyanamit@gmail.com"
            className="contact-button w-full md:w-auto px-12 py-4 bg-[#4B9CD3] text-white font-bold text-lg rounded-lg hover:bg-[#3A7FB8] hover:text-white transition-colors duration-300 border-2 border-[#4B9CD3] text-center"
          >
            karthikeyanamit@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
