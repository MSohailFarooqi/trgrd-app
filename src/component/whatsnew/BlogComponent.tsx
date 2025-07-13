import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { changelogData } from "../data/BlogData";

function WhatsNewComponent() {
  return (
    <div className="w-full mx-auto" id="blogs">
      <Swiper
        modules={[Autoplay, EffectCoverflow]}
        effect="coverflow"
        spaceBetween={50}
        initialSlide={2}
        grabCursor={true}
        breakpoints={{
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
        loop={true}
        watchSlidesProgress={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="changelog-swiper"
      >
        {changelogData.map((item) => (
          <SwiperSlide key={item.id} className="flex justify-center">
            <div className="p-8 transition-all duration-300 h-full">
              {/* Version Header */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-primary ">
                  🧠 Version 1.6 – August 2025 Version {item.version} –{" "}
                  {item.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-white text-xl font-semibold mb-3 flex items-center gap-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="leading-relaxed mb-6">{item.description}</p>

              {/* Features List */}
              <div className="space-y-2">
                <h4 className="text-xl font-bold mb-3">
                  {item.isNew ? "🔧 Bug Fixes" : "🔧 Fixes & Tweaks:"}
                </h4>
                <ul className="space-y-2">
                  {item.features.map((feature, index) => (
                    <li key={index} className=" flex items-center gap-2">
                      <span className="text-2xl">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default WhatsNewComponent;
