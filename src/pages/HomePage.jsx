import React from "react";
import { useTranslation } from "react-i18next";

import i18n from "../../i18n";

import LanguageSwitcher from "../components/LanguageSwitcher";
import WorkPlace from "../components/WorkPlace";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <LanguageSwitcher i18n={i18n} />
        <h1>{t("hello")}</h1>
        <p>{t("welcome")}</p>
      </div>

      <WorkPlace />
    </div>
  );
};

export default HomePage;
