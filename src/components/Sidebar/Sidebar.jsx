// Sidebar.js
import { MenuOutlined } from "@ant-design/icons";
import { Menu, Row, Select } from "antd";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Kiểm tra xem có click ngoài sidebar không
      if (!event.target.closest(".sidebar") && isOpen) {
        onClose(); // Đóng sidebar
      }
    };

    // Thêm sự kiện click ngoài sidebar
    document.addEventListener("click", handleOutsideClick);

    // Cleanup: xóa sự kiện khi component unmount
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header" onClick={isOpen}>
        <MenuOutlined />
      </div>
      <div>
        <div>
          <Select
            className="lg:w-1/2 sm:w-full h-[2.5rem] hidden sm:block  "
            showSearch
            defaultValue="1"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            // onChange={handleSelectChange}
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
        <Row className="uppercase text-black flex flex-col">
          <Menu mode="vertical">
            <Menu.Item key="1">{t("Event")}</Menu.Item>
            <Menu.Item key="2">{t("hot")}</Menu.Item>
            <Menu.Item key="3">{t("workplaces")}</Menu.Item>
            <Menu.Item key="4">{t("t.a.p")}</Menu.Item>
            <Menu.Item key="5">{t("voucher")}</Menu.Item>
            <Menu.Item key="6">{t("ab")}</Menu.Item>
            <Menu.Item key="7">{t("faq")}</Menu.Item>
            <Menu.Item key="8">{t("con")}</Menu.Item>
          </Menu>
        </Row>
      </div>
    </div>
  );
};

export default Sidebar;
