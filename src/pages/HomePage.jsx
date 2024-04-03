import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import { useEffect, useState } from 'react';
import CardComponent from '../components/CardComponent';
import LanguageSwitcher from '../components/LanguageSwitcher';
const HomePage = () => {
  const { t } = useTranslation();
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async (searchTerm = '') => {
    try {
      const response = await fetch(
        `http://localhost:3001/search/locations?name=${searchTerm}`
      );
      const data = await response.json();
      setLocations(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <LanguageSwitcher />
      <h1>{t('hello')}</h1>
      <p>{t('welcome')}</p>

      {locations &&
        locations[0]?.Workplaces?.map((item) => (
          <CardComponent key={item.id} data={item} />
        ))}
    </div>
  );
};

export default HomePage;
