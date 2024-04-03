import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css"; // core Swiper
import "swiper/css/navigation"; // Navigation module
import "swiper/css/pagination"; // Pagination module
import "swiper/css/autoplay"; // Autoplay module
import "swiper/css/effect-fade"; // Fade effect
import { Layout, Flex, Divider, Row, Space } from "antd";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "flowbite";
import WorkplaceCard from "../components/WorkplaceCard/WorkplaceCard";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;
const { Content, Sider } = Layout;
const DetailPage = () => {
  const { t } = useTranslation();
  const otherWorkplace = [
    {
      id: 1,
      title: "Enouvo Space",
      address: "15 Ta My Duat Street, Son Tra District, Danang City, Vietnam",
      img: "https://conext-production.s3.ap-southeast-1.amazonaws.com/27416586_12779950_26466304_11311539.png",
    },
    {
      id: 2,
      title: "Seahorse Office",
      address: "29 Yen Bai, Hai Chau 1 Ward, Hai Chau District, Da Nang",
      img: "https://conext-production.s3.ap-southeast-1.amazonaws.com/78964740_95420832_76204544_44065307.png",
    },
    {
      id: 3,
      title: "IOT Space",
      address: "2nd Floor, 63 Phan Dang Luu, Hoa Cuong Nam, Hai Chau, Da Nang",
      img: "https://conext-production.s3.ap-southeast-1.amazonaws.com/34238181_72671098_44388011_82096204.png",
    },
  ];

  return (
    <>
      <Header />
      {/* Slide */}
      <div
        id="default-carousel"
        className="relative w-full px-[5px] py-6"
        data-carousel="slide"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://conext-production.s3.ap-southeast-1.amazonaws.com/detail/53735578_92988630_73274457_19241380.png"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Image 1"
            ></img>
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://conext-production.s3.ap-southeast-1.amazonaws.com/detail/21740844_68173116_82075588_37684794.png"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Image 2"
            ></img>
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://conext-production.s3.ap-southeast-1.amazonaws.com/detail/57104409_36572313_35366512_94275249.png"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Image 3"
            ></img>
          </div>
        </div>
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
        </div>
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
      <div className="px-32 py-4">
        <Flex width="80%">
          <Content width="75%">
            <Space size="middle" direction="vertical">
              <Title>ST Coworking</Title>
              <div>
                <Title level={4}>{t("DP-title")}</Title>
                <Paragraph>
                  It could be said that ST Coworking is the first coworking
                  space where dedicated to start-up youth start
                </Paragraph>
              </div>
              <div>
                <Title level={4}>{t("DP-title-2")}</Title>
                <Paragraph prefix="[<CheckCircleOutlined />]">selina</Paragraph>
                <CheckCircleOutlined />
              </div>
              <div>
                <Title level={4}>{t("DP-title-3")}</Title>
                <Paragraph>30 Bạch Đằng, Hải Châu, Đà Nẵng</Paragraph>
              </div>
            </Space>
          </Content>
          <Sider width="25%">Sider</Sider>
        </Flex>
        <Divider />
        <div>
          <h1 className="lg:text-3xl text-[#171c32] font-semibold font-apple md:text-2xl text-xl mb-[12px] md:mb-[16px] lg:mb-[20px]">
            {t("other-workplace")}
          </h1>
          <Row gutter={16}>
            {otherWorkplace.map((items) => (
              <WorkplaceCard
                title={items.title}
                img={items.img}
                address={items.address}
                key={items.id}
              />
            ))}
          </Row>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailPage;
