import { Col, Row, Select } from "antd";
import LogoNav from "../../assets/Img/LogoNav.png";
import Ava from "../../assets/Img/default_avatar.png";
import {
  BellOutlined,
  GiftOutlined,
  MenuOutlined,
  MessageOutlined,
} from "@ant-design/icons";

const Header = () => {
  const truncateName = (name, maxLength) => {
    if (name.length <= maxLength) return name;
    return name.substring(0, maxLength) + "...";
  };

  const name = "show ten nguoi dung";
  const maxLength = 10;
  return (
    <>
      <Row className="bg-[#171C32] px-5 py-4 text-white items-center	">
        <Col xs={8} sm={5} md={4} lg={4} xl={3}>
          <a href="#">
            <div className="w-4/5">
              <img
                src={LogoNav}
                style={{ maxWidth: "100%", height: "auto" }}
                alt=""
              />
            </div>
          </a>
        </Col>
        <Col xs={0} sm={0} md={7} lg={7} xl={8}>
          <div>
            <Select
              className="lg:w-1/2 sm:w-full h-[2.5rem] hidden sm:block "
              showSearch
              defaultValue="1"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={[
                {
                  value: "1",
                  label: "Da Nang",
                },
                {
                  value: "2",
                  label: "Ha Noi",
                },
                {
                  value: "6",
                  label: "Hoi Chi Minh",
                },
              ]}
            />
          </div>
        </Col>
        <Col
          xs={13}
          sm={17}
          md={11}
          lg={12}
          xl={12}
          className="flex justify-end lg:gap-10 gap-4"
        >
          <div className="flex gap-4 items-center">
            <GiftOutlined style={{ fontSize: "1.4rem" }} />
            <MessageOutlined style={{ fontSize: "1.4rem" }} />
            <BellOutlined style={{ fontSize: "1.4rem" }} />
          </div>
          <div className="flex gap-3 items-center ">
            <img src={Ava} alt="avatar" className="w-9" />
            <p className="truncate hidden sm:block">
              {truncateName(name, maxLength)}
            </p>
          </div>
        </Col>

        <Col xs={1} sm={1} md={1} lg={0} xl={0}>
          <div>
            <MenuOutlined className="text-2xl , ml-6" />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Header;
