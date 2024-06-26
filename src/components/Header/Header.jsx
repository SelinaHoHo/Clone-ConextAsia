import {
  BellOutlined,
  GiftOutlined,
  MenuOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Col, Dropdown, List, Menu, Row, Select, Typography } from "antd";
import { useState } from "react";
import LogoNav from "../../assets/Img/LogoNav.png";
import Ava from "../../assets/Img/default_avatar.png";
import LanguageSwitcher from "../LanguageSwitcher";
import Sidebar from "../Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/authSlice";
import { LogoutOutlined } from "@ant-design/icons";


const Header = ({ onSearchTermChange }) => {
  const dispatch = useDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isLogin } = useSelector((state) => state.auth);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const data = ["Opp!There is no new update ... "];
  const truncateName = (name, maxLength) => {
    if (name.length <= maxLength) return name;
    return name.substring(0, maxLength) + "...";
  };

  const [selectedLabel, setSelectedLabel] = useState("Da Nang");

  const handleSelectChange = (value, option) => {
    if (option) {
      setSelectedLabel(option.label);
      onSearchTermChange(option.label);
    }
  };

  const menu = (
    <Menu className="w-[300px]">
      <List
        footer={
          <div>
            {" "}
            <Menu.Item key="1" className="text-center">
              show all{" "}
            </Menu.Item>
          </div>
        }
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark></Typography.Text> {item}
          </List.Item>
        )}
      />
    </Menu>
  );

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
              className="lg:w-1/2 sm:w-full h-[2.5rem] hidden sm:block  "
              showSearch
              defaultValue="1"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              onChange={handleSelectChange}
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
                  label: "Ho Chi Minh",
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
            <LanguageSwitcher />

            <GiftOutlined style={{ fontSize: "1.4rem" }} />
            <MessageOutlined style={{ fontSize: "1.4rem" }} />

            <Dropdown menu={menu} placement="bottom" arrow>
              <BellOutlined style={{ fontSize: "1.4rem" }} />
            </Dropdown>
          </div>
          {isLogin ? (
            <div className="flex gap-3 items-center ">
              <img src={Ava} alt="avatar" className="w-9" />
              <p className="truncate hidden sm:block">
                {truncateName(name, maxLength)}
              </p>
              <button
                className=""
                onClick={() => {
                  dispatch(logout());
                }}
              >
                <LogoutOutlined />
              </button>
            </div>
          ) : (
            ""
          )}
        </Col>

        <Col xs={1} sm={1} md={1} lg={0} xl={0}>
          <div>
            <MenuOutlined className="text-2xl , ml-6" onClick={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Header;
