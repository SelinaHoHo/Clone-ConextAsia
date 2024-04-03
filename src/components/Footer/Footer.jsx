import { Col, Row } from "antd";
import heppi from "../../assets/Img/heppi.png";
import st from "../../assets/Img/St.png";
import ciao from "../../assets/Img/Ciao.png";
import iot from "../../assets/Img/IoT.png";
import Madeln from "../../assets/Img/Madeln.png";
import logoFooter from "../../assets/Img/logo_footer.png";
import faicon from "../../assets/Img/icon/facebook-icon-white.png";
import inicon from "../../assets/Img/icon/linkedin-icon-white.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    // <div >Footer</div>
    
    <>
      <div className="bg-[#0E1B28]  py-12">
        {" "}
        <Row className="text-white items-center md:mx-20 sm:mx-12 xs:mx-10">
          <Col xs={8} sm={8} md={8} lg={4} xl={4} className="mx-auto">
            <div className="w-50% p-3">
              <a href="https://heppi.net/">
                <img
                  src={heppi}
                  className="lg:w-[100%] sm:w-[80%] xs:w-[70%]"
                  alt="Heppi"
                />
              </a>
            </div>
          </Col>
          <Col xs={8} sm={8} md={8} lg={4} xl={4} className="mx-auto">
            <a href="https://stunited.vn/" className="flex justify-center p-3">
              <img
                src={st}
                className="lg:w-[55%] sm:w-[40%] xs:w-[30%]"
                alt="St"
              />
            </a>
          </Col>
          <Col xs={8} sm={8} md={8} lg={4} xl={4} className="mx-auto ">
            <a
              href="https://ciaoflora.com/"
              className="flex justify-center p-3"
            >
              <img
                src={ciao}
                className="lg:w-[100%] sm:w-[80%] xs:w-[70%]"
                alt="Ciao"
              />
            </a>{" "}
          </Col>
          <Col xs={8} sm={8} md={8} lg={4} xl={4}>
            <a
              href="link_đến_trang_cần_chuyển_hướng"
              className="flex justify-center  p-3"
            >
              <img
                src={iot}
                className="lg:w-[70%] sm:w-[40%] xs:w-[30%]"
                alt="Iot"
              />
            </a>
          </Col>
          <Col xs={8} sm={8} md={8} lg={4} xl={4}>
            <a
              href="https://madeindanang.com/"
              className="flex justify-center p-3"
            >
              <img src={Madeln} className="lg:w-[100%]" alt="Madeln" />
            </a>
          </Col>
        </Row>
        <span className="bg-slate-600 h-px w-11/12 mx-auto lg:my-11 md:mb-5 sm:my-2 xs:mb-7 block"></span>
        <Row className="text-white items-center md:mx-20 xs:mx-5">
          <Col xs={10} sm={6} md={5} lg={5} xl={5}>
            <img
              src={logoFooter}
              className="w-[50%] truncate hidden md:block"
            />
            <p className="text-[0.75rem] mt-5 text-[#5c6369]">© 2020 CoNEXT</p>
          </Col>
          <Col xs={0} sm={0} md={0} lg={16} xl={16}>
            <Row className=" uppercase  ">
              <Col span={6}>
                <p className="text-[0.75rem]  lg:text-[0.75rem] "> {t("Event")}</p>
                <p className="text-[0.75rem]  lg:text-[0.75rem] mt-7">
                {t("hot")}
                </p>
              </Col>
              <Col span={6}>
                <p className="text-[0.75rem] lg:text-[0.75rem] ">{t("workplaces")}</p>
                <p className="text-[0.75rem]  lg:text-[0.75rem] mt-7">
                  {t("t.a.p")}
                </p>
              </Col>
              <Col span={6}>
                <p className="text-[0.75rem]  lg:text-[0.75rem] ">{t("voucher")}</p>
                <p className="text-[0.75rem] lg:text-[0.75rem]  mt-7">
                {t("ab")}
                </p>
              </Col>
              <Col span={6}>
                <p className="text-[0.75rem] lg:text-[0.75rem]">{t("faq")}</p>
                <p className="text-[0.75rem]  lg:text-[0.75rem]  mt-7">
                {t("con")}
                </p>
              </Col>
            </Row>
          </Col>
          <Col
            xs={14}
            sm={18}
            md={19}
            lg={3}
            xl={3}
            className="flex justify-end gap-3 "
          >
            <img
              src={faicon}
              alt=""
              className=" lg:w-[15%] lg:h-[15%]  md:w-[10%] sm:w-[5%]  xs:w-[7%]  "
            />
            <img
              src={inicon}
              alt=""
              className=" lg:w-[15%] lg:h-[15%] md:w-[10%]  sm:w-[5%] xs:w-[7%]"
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Footer;
