// Sidebar.js
import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";

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
        <div className="sidebar-header">  </div>
        <div>
      <Row className="uppercase text-black flex flex-col">
        <p className="text-[0.75rem] lg:text-[0.75rem] mb-7">{t("Event")}</p>
        <p className="text-[0.75rem] lg:text-[0.75rem] mb-7">{t("hot")}</p>
        <p className="text-[0.75rem] lg:text-[0.75rem] mb-7">
          {t("workplaces")}
        </p>
        <p className="text-[0.75rem] lg:text-[0.75rem] mb-7">{t("t.a.p")}</p>
        <p className="text-[0.75rem] lg:text-[0.75rem] mb-7">{t("voucher")}</p>
        <p className="text-[0.75rem] lg:text-[0.75rem] mb-7">{t("ab")}</p>
        <p className="text-[0.75rem] lg:text-[0.75rem] mb-7">{t("faq")}</p>
        <p className="text-[0.75rem] lg:text-[0.75rem] mb-7">{t("con")}</p>
      </Row>
      </div>
    </div>
  );
};

export default Sidebar;
