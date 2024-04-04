// Sidebar.js
import { MenuOutlined } from "@ant-design/icons";
import {  Menu, Row } from "antd";
import{ useEffect } from "react";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const handleOutsideClick = (event) => {
   
      if (!event.target.closest(".sidebar") && isOpen) {
        onClose(); 
      }
    };


    document.addEventListener("click", handleOutsideClick);

   
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
