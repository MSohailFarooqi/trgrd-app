import bannerimage from "../../assets/images/banner-mobile.png";
import appstore from "../../assets/images/app-store.png";
import playstore from "../../assets/images/play-store.png";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-content flex-col lg:flex-row gap-10">
      <img src={bannerimage} className="w-full max-w-xl animate-pulse" />
      <div className="text-center lg:text-left">
        <h1 className="sm:text-6xl text-4xl font-bold text-white">
          Feel it. Name it. Transform it.
        </h1>
        <p className="py-10 text-white">
          A self-awareness tool to help you recognize emotional triggers,
          reflect intentionally, and grow toward a better you.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center lg:justify-start">
          <Link to="#">
            <img
              src={appstore}
              alt="App Store"
              className="lg:w-58 md:w-50 w-40 hover:scale-105 transition-transform duration-200"
            />
          </Link>
          <Link to="#">
            <img
              src={playstore}
              alt="Play Store"
              className="lg:w-58 md:w-50 w-40 hover:scale-105 transition-transform duration-200"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
