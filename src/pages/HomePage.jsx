import React from 'react';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <h1>{t('hello')}</h1>
      <p>{t('welcome')}</p>
      <Footer />
    </div>
  );
};

export default HomePage;
