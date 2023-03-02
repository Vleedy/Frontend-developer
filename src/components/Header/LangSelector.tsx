import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.scss';

const LangSelector = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [selectedLang, setSelectedLang] = React.useState('en');
  const { i18n } = useTranslation();

  const selectLang = (language: string) => {
    setSelectedLang(language);
    i18n.changeLanguage(language);
  };
  return (
    <div
      onMouseLeave={() => setIsVisible(false)}
      onMouseEnter={() => setIsVisible(true)}
      className={styles.lang_selector}>
      <span className="material-symbols-outlined">language</span>
      <div className={isVisible ? styles.show : styles.hide}>
        <div
          onClick={() => selectLang('en')}
          className={selectedLang === 'en' ? styles.lang_active : styles.lang}>
          EN
        </div>
        <div
          onClick={() => selectLang('ru')}
          className={selectedLang === 'ru' ? styles.lang_active : styles.lang}>
          RU
        </div>
      </div>
    </div>
  );
};

export default LangSelector;
