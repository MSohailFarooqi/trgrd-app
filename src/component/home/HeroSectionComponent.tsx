import bannerimage from "../../assets/images/banner-mobile.png";
import appstore from "../../assets/images/app-store.png";
import playstore from "../../assets/images/play-store.png";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-content flex-col md:flex-row gap-10">
      <img src={bannerimage} className="max-w-xl" />
      <div>
        <h1 className="text-6xl font-bold">Feel it. Name it. Transform it.</h1>
        <p className="py-6">
          A self-awareness tool to help you recognize emotional triggers,
          reflect intentionally, and grow toward a better you.
        </p>
        <div className="flex gap-4">
          <Link to="#">
            <img src={appstore} alt="App Store" className="md:w-64 w-32" />
          </Link>
          <Link to="#">
            <img src={playstore} alt="Play Store" className="md:w-64 w-32" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
