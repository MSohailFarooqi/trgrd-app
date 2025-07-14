import Breadcrum from "../component/Breadcrum";
import WhatsNewComponent from "../component/whatsnew/BlogComponent";
import ComingSoonComponent from "../component/whatsnew/ComingSoonComponent";
import GrowthComponent from "../component/whatsnew/GrowthComponent";

function WhatsNew() {
  return (
    <>
      <section className="max-w-4xl mx-auto px-4 pt-8 text-white mb-5">
        <Breadcrum
          title="What's New"
          company="trgrd"
          date="We’re always evolving, just like you. Explore the latest improvements and upcoming experiences."
        />
      </section>
      <section
        className="pt-15 pb-30"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-offset="100"
        data-aos-duration="1500"
      >
        <WhatsNewComponent />
      </section>
      <section
        id="download"
        className="py-20 bg-curve"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-offset="100"
        data-aos-duration="1500"
      >
        <ComingSoonComponent />
      </section>
      <section
        className="max-w-2xl mx-auto px-4 pt-8 text-white mb-5"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-offset="100"
        data-aos-duration="1500"
      >
        <GrowthComponent />
      </section>
    </>
  );
}

export default WhatsNew;
