import { Link } from "react-router-dom";
import appstore from "../../assets/images/app-store.png";
import playstore from "../../assets/images/play-store.png";

function GrowthComponent() {
  return (
    <>
      <section className="py-20 text-center">
        <p className="text-3xl italic mb-8 leading-[3rem] text-white">
          ✨ “Growth is a process. We're honored to be a part of yours.”
        </p>
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
          <Link to="#">
            <img
              src={appstore}
              alt="App Store"
              className="md:w-50 w-40 hover:scale-105 transition-transform duration-200"
            />
          </Link>
          <Link to="#">
            <img
              src={playstore}
              alt="Play Store"
              className="md:w-50 w-40 hover:scale-105 transition-transform duration-200"
            />
          </Link>
        </div>
      </section>
    </>
  );
}

export default GrowthComponent;
