import { Link } from "react-router-dom";
import ContactImage from "../../assets/images/contact-img.png";
function ContactComponent() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-20">
        {/* Form Section */}
        <form className="w-full md:w-1/2 space-y-4">
          <div className="flex items-center border border-gray-500 px-4 py-3 mb-5 bg-black rounded-md">
            <span className="mr-2 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m7 9l3.75 3a2 2 0 0 0 2.5 0L17 9m4 8V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2"
                />
              </svg>
            </span>
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent w-full outline-none placeholder-gray-400 text-sm"
            />
          </div>

          <div className="flex items-center border border-gray-500 px-4 py-3 mb-5 bg-black rounded-md">
            <span className="mr-2 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 16 16"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  d="M3.5 14v-.5a4 4 0 0 1 4-4h1a4 4 0 0 1 4 4v.5m-2-9a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"
                  stroke-width="1.5"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent w-full outline-none placeholder-gray-400 text-sm"
            />
          </div>

          <div className="flex items-center border border-gray-500 px-4 py-3 mb-5 bg-black rounded-md">
            <span className="mr-2 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                >
                  <path d="M14.186 2.753v3.596c0 .487.194.955.54 1.3a1.85 1.85 0 0 0 1.306.539h4.125" />
                  <path d="M20.25 8.568v8.568a4.25 4.25 0 0 1-1.362 2.97a4.28 4.28 0 0 1-3.072 1.14h-7.59a4.3 4.3 0 0 1-3.1-1.124a4.26 4.26 0 0 1-1.376-2.986V6.862a4.25 4.25 0 0 1 1.362-2.97a4.28 4.28 0 0 1 3.072-1.14h5.714a3.5 3.5 0 0 1 2.361.905l2.96 2.722a2.97 2.97 0 0 1 1.031 2.189M7.647 7.647h3.265M7.647 12h8.706m-8.706 4.353h8.706" />
                </g>
              </svg>
            </span>
            <input
              type="text"
              placeholder="Subject"
              className="bg-transparent w-full outline-none placeholder-gray-400 text-sm"
            />
          </div>

          <div className="border border-gray-500 px-4 py-3 mb-5 bg-black rounded-md">
            <textarea
              placeholder="Message"
              rows={5}
              className="bg-transparent w-full outline-none placeholder-gray-400 text-sm resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-primary text-black font-semibold rounded-md transition hover:opacity-90"
          >
            SAVE
          </button>
        </form>

        {/* Illustration Image */}
        <div className="w-full md:w-1/2 text-center">
          <img
            src={ContactImage}
            alt="Contact Illustration"
            className="max-w-md mx-auto"
          />
        </div>
      </div>

      {/* Direct Email Section */}
      <div className="text-center mt-20">
        <h3 className="text-xl font-semibold mb-2">Direct Email</h3>
        <p>
          General support:{" "}
          <Link to="mailto:support@trgrd.app"> support@trgrd.app</Link>
        </p>
        <p>
          Partnerships & press:{" "}
          <Link to="mailto:hello@trgrd.app">hello@trgrd.app</Link>
        </p>
      </div>
    </>
  );
}

export default ContactComponent;
