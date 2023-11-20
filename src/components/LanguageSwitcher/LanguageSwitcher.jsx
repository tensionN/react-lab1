import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.scss';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }
  
  return (
  <div class='LanguageSwitcher'>
    <button onClick={() => changeLanguage("en")}>EN</button>
    <button onClick={() => changeLanguage("ua")}>UA</button>
  </div>
  );
};

export default LanguageSwitcher;