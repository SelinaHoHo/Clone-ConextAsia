import React from "react";
import { useTranslation } from "react-i18next";
import { Select } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

const LanguageSwitcher = () => {
    const handleChange = (value) => {
        console.log(value); 
        if (value.value === "En") {
          changeLanguage("en");
        } else if (value.value === "Vi") {
          changeLanguage("vi");
        }
      };
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
      <Select
        size="large"
        suffixIcon={<GlobalOutlined style={{ color: "black" }} />}
        labelInValue
        defaultValue={{
          value: "En",
          label: "En",
        }}
        style={{
          width: 65,
        }}
        onChange={handleChange}
        options={[
          {
            value: "En",
            label: "En",
          },
          {
            value: "Vi",
            label: "Vi",
          },
        ]}
      />
    </div>
  );
};

export default LanguageSwitcher;
