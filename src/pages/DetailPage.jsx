import { useTranslation } from "react-i18next";
import { Layout, Flex, Divider, Row, Space, Col, Card } from "antd";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "flowbite";
import WorkplaceCard from "../components/WorkplaceCard/WorkplaceCard";
import {
  CheckCircleOutlined,
  EnvironmentOutlined,
  ShoppingCartOutlined,
  CalendarOutlined,
  PhoneOutlined,
  LinkOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
import { Typography } from "antd";
import MapComponent from "../components/Map/MapDetailPage";
import "./DetailPage.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../redux/auth/authThunk";

const { Title, Paragraph, Link } = Typography;
const { Content, Sider } = Layout;
const DetailPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { name } = useParams();
  const { t } = useTranslation();
  const data = useSelector((state) => state.auth.details);
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

  const amentities = [
    {
      id: 1,
      title: "Air Conditioning",
    },
    {
      id: 2,
      title: "Connect with VCs, mentors",
    },
    {
      id: 3,
      title: "Swimming Pool",
    },
    {
      id: 4,
      title: "Video Conferencing Room",
    },
    {
      id: 5,
      title: "Flipchart",
    },
  ];

  useEffect(() => {
    dispatch(getDetails({ name: name }));
  }, [name, dispatch]);

  return (
    <>
      <Header />
      <div className="py-5 px-24">
        <a href="/">
          {t("DP-link1")} <CaretRightOutlined />
          <a href="/">
            {t("DP-link2")} <CaretRightOutlined />{" "}
            <a onClick={() => navigate(`/detail/${data.name}`)}>{data.name}</a>
          </a>
        </a>
      </div>
      {/* Slide */}
      <div
        id="default-carousel"
        className="relative w-full px-[5px] pb-6"
        data-carousel="slide"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={data?.url}
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
      <div className="lg:w-[75%] w-[95%] mx-auto pt-4 pb-12">
        <Flex
          width="80%"
          gap={"5%"}
          lg="column"
          md="vertical"
          className="flex flex-col-reverse sm:flex-row"
        >
          <div className="md:w-[65%] w-[100%] mx-auto mb-5 md:mb-0">
            <Content width="100%">
              <Space size="middle" direction="vertical">
                <Title>{data.name}</Title>
                <div>
                  <Title level={4}>{t("DP-title")}</Title>
                  <Paragraph>{data.overview}</Paragraph>
                </div>
                <div>
                  <Title level={4}>{t("DP-title-2")}</Title>
                  <Row>
                    {amentities.map((items) => (
                      <Col
                        key={items.id}
                        xs={{ span: 12, offset: 2, gutter: 5 }}
                        sm={{ span: 9, offset: 2, gutter: 5 }}
                        md={{ span: 8, offset: 2, gutter: 5 }}
                        lg={{ span: 7, offset: 2, gutter: 2 }}
                      >
                        <Flex style={{ alignItems: "left" }}>
                          <CheckCircleOutlined />
                          <Paragraph
                            style={{
                              marginLeft: "10px",
                              marginBottom: "0",
                              color: "#171C32",
                              fontSize: "15px",
                            }}
                          >
                            {items.title}
                          </Paragraph>
                        </Flex>
                      </Col>
                    ))}
                  </Row>
                </div>
                <div>
                  <Title level={4}>{t("DP-title-3")}</Title>
                  <Flex style={{ alignItems: "left" }}>
                    <EnvironmentOutlined />
                    <Paragraph
                      style={{
                        marginLeft: "10px",
                        marginBottom: "0",
                        color: "#171C32",
                        fontSize: "15px",
                      }}
                    >
                      {data.address}
                    </Paragraph>
                  </Flex>
                </div>
                {data?.latitude && data?.longitude ? (
                  <MapComponent data={data} />
                ) : (
                  ""
                )}
              </Space>
            </Content>
          </div>
          <div className="md:w-[30%] w-[100%] mx-auto mb-5 md:mb-0">
            <Sider width="100%">
              <button className="btn-shadow relative w-full text-xl font-apple font-semibold text-black pr-2 px-[18px] py-[12px] bg-[#fed702] rounded transition-transform duration-300 hover:translate-y-[-5px] group">
                {t("DP-button-booking")} <ShoppingCartOutlined />
              </button>
              <Space direction="vertical" size="large">
                <Card bordered={false}>
                  <Space direction="vertical">
                    <Title
                      level={3}
                      style={{
                        color: "#171C32",
                        textAlign: "center",
                        width: "100%",
                        fontWeight: "bold",
                      }}
                    >
                      {t("DP-price")}
                    </Title>
                    <Flex
                      style={{
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Flex
                        gap="middle"
                        vertical
                        style={{
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <p className="text-[#171C32] font-apple text-xl">
                          {t("DP-day")}
                        </p>
                        <span className="text-[#171C32] font-apple md:text-[4vh] text-[6vh]  font-semibold">
                          {data?.price}
                          <span className="text-[#171C32] font-apple text-[10px]">
                            VND
                          </span>
                        </span>
                      </Flex>
                      <Divider
                        type="vertical"
                        style={{ height: "40px", color: "black" }}
                      />
                      <Flex
                        gap="middle"
                        vertical
                        style={{
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <p className="text-[#171C32] font-apple text-xl">
                          {" "}
                          {t("DP-month")}
                        </p>
                        <span className="text-[#171C32] font-apple md:text-[4vh] text-[6vh] font-semibold">
                          {data?.price * 30}
                          <span className="text-[#171C32] font-apple text-[10px]">
                            VND
                          </span>
                        </span>
                      </Flex>
                    </Flex>
                  </Space>
                </Card>
                <Card width="100%" bordered={false}>
                  <Space direction="vertical">
                    <Title
                      style={{
                        color: "#171C32",
                        textAlign: "center",
                        width: "100%",
                        fontWeight: "bold",
                      }}
                    >
                      100
                    </Title>
                    <p className="text-[##0b0014] font-apple text-[15px] text-center">
                      CoNEXTers meetup at {data?.name}
                    </p>
                  </Space>
                </Card>
                <Card bordered={false}>
                  <Space direction="vertical">
                    <Title level={4}>{t("DP-contact")}</Title>
                    <Flex style={{ alignItems: "left" }}>
                      <EnvironmentOutlined />
                      <Paragraph
                        style={{
                          marginLeft: "10px",
                          marginBottom: "0",
                          color: "#171C32",
                          fontSize: "15px",
                        }}
                      >
                        {data?.address}
                      </Paragraph>
                    </Flex>
                    <Flex style={{ alignItems: "left" }}>
                      <PhoneOutlined />
                      <Paragraph
                        style={{
                          marginLeft: "10px",
                          marginBottom: "0",
                          color: "#171C32",
                          fontSize: "15px",
                        }}
                      >
                        +840347897633
                      </Paragraph>
                    </Flex>
                    <Flex style={{ alignItems: "left" }}>
                      <CalendarOutlined />
                      <Paragraph
                        style={{
                          marginLeft: "10px",
                          marginBottom: "0",
                          color: "#171C32",
                          fontSize: "15px",
                        }}
                      >
                        Joined 15th Dec 2023
                      </Paragraph>
                    </Flex>
                    <Flex style={{ alignItems: "left" }}>
                      <LinkOutlined />
                      <Link
                        style={{
                          marginLeft: "10px",
                          marginBottom: "0",
                          fontSize: "15px",
                        }}
                      >
                        {data?.url}
                      </Link>
                    </Flex>
                    <Divider />
                    <p className="text-[##0b0014] font-apple text-[15px] mb-2 ">
                      {t("DP-opening")}
                    </p>
                    <p className="text-[##0b0014] font-apple text-[15px] ">
                      {t("DP-opening2")}
                    </p>
                    <p className="text-[##0b0014] font-apple text-[15px] ">
                      {t("DP-opening3")}
                    </p>
                  </Space>
                </Card>
              </Space>
            </Sider>
          </div>
        </Flex>
        <Divider />
        <div>
          <h1 className="lg:text-3xl text-[#171c32] font-semibold font-apple md:text-2xl text-xl mb-[12px] md:mb-[16px] lg:mb-[20px]">
            {t("other-workplace")}
          </h1>
          <Row gutter={32} lg={3} md={1}>
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
