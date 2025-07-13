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
      <section className="pt-15 pb-30">
        <WhatsNewComponent />
      </section>
      <section id="download" className="py-20 bg-curve">
        <ComingSoonComponent />
      </section>
      <section className="max-w-2xl mx-auto px-4 pt-8 text-white mb-5">
        <GrowthComponent />
      </section>
    </>
  );
}

export default WhatsNew;
