import AboutSectionComponent from "../component/home/AboutSectionComponent";
import DownloadAppComponent from "../component/home/DownloadAppComponent";
import FeaturesComponent from "../component/home/FeaturesComponent";
import HeroSectionComponent from "../component/home/HeroSectionComponent";
import MobileSliderComponent from "../component/home/MobileSliderComponent";
import TestimonialsComponent from "../component/home/TestimonialsComponent";

function HomePage() {
  return (
    <>
      <section id="hero" className="hero min-h-75vh">
        <HeroSectionComponent />
      </section>
      <section
        id="about"
        className="hero min-h-40vh py-20 my-20 bg-alt-section"
      >
        <AboutSectionComponent />
      </section>
      <section id="features">
        <FeaturesComponent />
      </section>
      <section id="mobile-slider" className="py-20 bg-alt-section">
        <MobileSliderComponent />
      </section>
      <section id="download" className="py-20 bg-curve">
        <DownloadAppComponent />
      </section>
      <section id="testimonials">
        <TestimonialsComponent />
      </section>
    </>
  );
}

export default HomePage;
