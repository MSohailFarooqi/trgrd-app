import { Link } from "react-router-dom";
import appstore from "../../assets/images/app-store.png";
import playstore from "../../assets/images/play-store.png";

function DownloadApp() {
  return (
    <>
      <div className="flex flex-wrap items-center py-10">
        <div className="w-full sm:w-1/2 md:w-2/3">
          <h2 className="text-center text-2xl font-bold">Download</h2>
          <h1 className="text-center text-[10em] leading-[.9em] font-extrabold opacity-90 tracking-[-.2em]">
            NOW
          </h1>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 text-center">
          <Link to="#">
            <img src={appstore} alt="App Store" className="md:w-64 w-32 mb-4" />
          </Link>
          <Link to="#">
            <img
              src={playstore}
              alt="Play Store"
              className="md:w-64 w-32 mb-4"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default DownloadApp;
