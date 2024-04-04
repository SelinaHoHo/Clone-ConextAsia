import React from 'react'
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Momo from '../components/Momo/Momo';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header/>
      <div>
      <Momo />
    </div>
      <Footer/>
    </div>
  )
}

export default HomePage