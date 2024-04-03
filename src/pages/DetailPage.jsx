import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Breadcrumb, Layout, theme } from "antd";

const { Header, Content, Footer } = Layout;
const DetailPage = () => {
  return (
    <Layout>
      <Content>
        <Swiper
          // Swiper parameters
          loop={true} // Loop slides
          slidesPerView={1} // Number of slides per view
          navigation // Enable navigation arrows
          autoplay={true} // Enable autoplay
          effect="fade" // Fade effect
        >
          {/* SwiperSlides */}
          <SwiperSlide>
            <img
              src="https://conext-production.s3.ap-southeast-1.amazonaws.com/detail/53735578_92988630_73274457_19241380.png"
              alt="Image 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://conext-production.s3.ap-southeast-1.amazonaws.com/detail/21740844_68173116_82075588_37684794.png"
              alt="Image 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://conext-production.s3.ap-southeast-1.amazonaws.com/detail/57104409_36572313_35366512_94275249.png"
              alt="Image 3"
            />
          </SwiperSlide>
        </Swiper>
      </Content>
    </Layout>
  );
};

export default DetailPage;
