import React from 'react'
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import LanguageSwitcher from "../components/LanguageSwitcher";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* <LanguageSwitcher />
      <h1>{t("hello")}</h1>
      <p>{t("welcome")}</p> */}
      <Header/>
      <p>body</p>
      <h1>{t("hello")}</h1>
      <p>{t("welcome")}</p> 
      <Footer/>
    </div>
  )
}

export default HomePage