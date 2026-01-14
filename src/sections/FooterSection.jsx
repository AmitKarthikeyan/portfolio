import { useMediaQuery } from "react-responsive";

const FooterSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <section className="footer-section">
      <img
        src="/images/footer-dip.png"
        alt=""
        className="w-full object-cover -translate-y-1"
      />

      <div className="2xl:h-[60dvh] relative md:pt-[10vh] pt-[5vh]">
        <div className="overflow-hidden z-10 mb-10">
          <h1 className="general-title text-center text-milk py-5">
            Let's Connect
          </h1>
        </div>

        <div className="flex-center gap-5 relative z-10 md:mt-10 mt-5">
          <div className="social-btn">
            <img src="./images/yt.svg" alt="YouTube" />
          </div>
          <div className="social-btn">
            <img src="./images/insta.svg" alt="Instagram" />
          </div>
          <div className="social-btn">
            <img src="./images/tiktok.svg" alt="TikTok" />
          </div>
        </div>

        <div className="mt-20 md:px-10 px-5 text-center text-milk font-paragraph">
          <p className="text-lg mb-4">amit.karthikeyan@example.com</p>
          <p className="opacity-80">Based in Your City, Available Worldwide</p>
        </div>

        <div className="copyright-box">
          <p>Copyright © 2025 Amit Karthikeyan - All Rights Reserved</p>
          <div className="flex items-center gap-7">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;