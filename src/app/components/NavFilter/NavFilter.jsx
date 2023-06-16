import React from 'react';
import s from './css/NavFilter.module.css';
import { ScrollToSection } from '../../../functions/ScrollToSection';

export const NavFilter = (props) => {
  const { language } = props;

  const handleSelectChange = (event) => {
    const selectedSection = event.target.value;
    ScrollToSection(selectedSection);
  };

  return (
    <div className={s.navExtContainer}>
      <div className={s.navIntContainer}>
        <ul className={`${s.navList} ${s.desktop}`}>
          <li onClick={() => ScrollToSection('devListWebSection')}>
            web
          </li>
          <li onClick={() => ScrollToSection('devListDesktopSection')}>
            {language === 'EN' ? 'desktop' : 'escritorio'}
          </li>
          <li onClick={() => ScrollToSection('devListMobileSection')}>
            {language === 'EN' ? 'mobile' : 'movil'}
          </li>
          <li onClick={() => ScrollToSection('devListSoftwareSection')}>
            software
          </li>
        </ul>
        <ul className={`${s.navList} ${s.mobile}`}>
          <select name="" id="" onChange={handleSelectChange}>
            <option value="devListWebSection">web</option>
            <option value="devListDesktopSection">
              {language === 'EN' ? 'desktop' : 'escritorio'}
            </option>
            <option value="devListMobileSection">
              {language === 'EN' ? 'mobile' : 'movil'}
            </option>
            <option value="devListSoftwareSection">software</option>
          </select>
        </ul>
      </div>
    </div>
  );
};
