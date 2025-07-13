import { Link } from "react-router-dom";
import appstore from "../../assets/images/app-store.png";
import playstore from "../../assets/images/play-store.png";

function DownloadApp() {
  return (
    <>
      <div className="flex flex-wrap items-center py-10">
        <div className="w-full md:w-1/2 lg:w-2/3">
          <h2 className="text-center text-4xl font-bold">Download</h2>
          <h1 className="text-center xl:text-[20em] lg:text-[15em] text-[8em] leading-[1em] font-extrabold tracking-[-.2em]">
            <span className="text-[#a590ab]">N</span>
            <span className="text-[#96819c]">O</span>
            <span className="text-[#7d6480]">W</span>
          </h1>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col items-center pt-10">
          <Link to="#">
            <img
              src={appstore}
              alt="App Store"
              className="md:w-50 lg:w-58 w-40 mb-4 hover:scale-105 transition"
            />
          </Link>
          <Link to="#">
            <img
              src={playstore}
              alt="Play Store"
              className="md:w-50 lg:w-58 w-40 mb-4 hover:scale-105 transition"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default DownloadApp;
