import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import PersonalInfo from "../../assets/images/slider/Personal-Information.png";
import NewVid from "../../assets/images/slider/new-video.png";
import VideoImg from "../../assets/images/slider/video.png";
import MainDashboard from "../../assets/images/slider/MainDashboard.png";
import VideoIntro from "../../assets/images/slider/VideoIntro.png";
import VideoPreview from "../../assets/images/slider/Video-preview.png";
import Podcast from "../../assets/images/slider/Podcast-player.png";
import TriggerRecovery from "../../assets/images/slider/Trigger-Recovery.png";

const slides = [
  PersonalInfo,
  NewVid,
  VideoImg,
  MainDashboard,
  VideoIntro,
  VideoPreview,
  Podcast,
  TriggerRecovery,
];

function MobileSlider() {
  return (
    <>
      <section className="py-12 px-4">
        <Swiper
          modules={[Pagination, Autoplay]}
          initialSlide={3}
          spaceBetween={20}
          centeredSlides={true}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          className="max-w-full"
          speed={800}
          loop={true}
          watchSlidesProgress={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            1091: { slidesPerView: 5 },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          {slides.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="w-[240px] h-[511px] mx-auto overflow-hidden">
                <img
                  src={img}
                  alt={`screen-${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-15 flex justify-center">
          <div className="swiper-pagination !static"></div>
        </div>
      </section>
    </>
  );
}

export default MobileSlider;
