import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ContactSection = () => {
  useGSAP(() => {
    gsap.from(".contact-form", {
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Animate form inputs
    gsap.from(".contact-form input, .contact-form textarea, .contact-form button", {
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top center+=150",
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
    });
  });

  return (
    <section id="contact" className="contact-section">
      <div className="container mx-auto py-20 px-5">
        <div className="overflow-hidden mb-16">
          <h1 className="general-title text-center">Get In Touch</h1>
        </div>

        <div className="max-w-2xl mx-auto contact-form">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-bold text-[#000000] mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg border-2 border-[#4B9CD3] bg-white text-[#000000] focus:outline-none focus:border-[#4B9CD3] transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-lg font-bold text-[#000000] mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border-2 border-[#4B9CD3] bg-white text-[#000000] focus:outline-none focus:border-[#4B9CD3] transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-lg font-bold text-[#000000] mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="6"
                className="w-full px-4 py-3 rounded-lg border-2 border-[#4B9CD3] bg-white text-[#000000] focus:outline-none focus:border-[#4B9CD3] transition-colors resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#4B9CD3] text-[#000000] font-bold text-lg rounded-lg hover:bg-[#000000] hover:text-[#4B9CD3] transition-colors duration-300 border-2 border-[#4B9CD3]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
