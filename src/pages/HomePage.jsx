import React from 'react'
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import LanguageSwitcher from "../components/LanguageSwitcher";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <LanguageSwitcher />
      <h1>{t("hello")}</h1>
      <p>{t("welcome")}</p>
    </div>
  )
}

export default HomePage