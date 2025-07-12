import Breadcrum from "../component/Breadcrum";
import ContactComponent from "../component/contact/ContactComponent";

function ContactUs() {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-8 text-white space-y-6 mb-20">
        <Breadcrum title="Contact Us" company="trgrd" date="Let's Connect" />
        <p className="text-center font-bold mb-10">
          Whether you have a question about the app, need technical support,
          want to share feedback, or just feel like reaching out — we’re here
          for you.
        </p>
        <ContactComponent />
      </div>
    </>
  );
}

export default ContactUs;
