import AboutSectionComponent from "../component/home/AboutSectionComponent";
import DownloadAppComponent from "../component/home/DownloadAppComponent";
import FeaturesComponent from "../component/home/FeaturesComponent";
import HeroSectionComponent from "../component/home/HeroSectionComponent";
import MobileSliderComponent from "../component/home/MobileSliderComponent";
import TestimonialsComponent from "../component/home/TestimonialsComponent";

function HomePage() {
  return (
    <>
      <section
        id="hero"
        className="hero min-h-75vh"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-offset="100"
        data-aos-duration="1500"
      >
        <HeroSectionComponent />
      </section>
      <section
        id="about"
        className="hero min-h-40vh py-20 my-20 bg-alt-section"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-offset="100"
        data-aos-duration="1500"
      >
        <AboutSectionComponent />
      </section>
      <section
        id="features"
        className="hero min-h-30vh"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-offset="100"
        data-aos-duration="1500"
      >
        <FeaturesComponent />
      </section>
      <section id="mobile-slider" className="py-20 bg-alt-section">
        <MobileSliderComponent />
      </section>
      <section
        id="download"
        className="py-20 bg-curve"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-offset="100"
        data-aos-duration="1500"
      >
        <DownloadAppComponent />
      </section>
      <section id="testimonials">
        <TestimonialsComponent />
      </section>
    </>
  );
}

export default HomePage;
