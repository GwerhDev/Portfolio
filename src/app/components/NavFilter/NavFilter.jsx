import React from 'react';
import s from './css/NavFilter.module.css';
import NavFilterFunctions from '../../../functions/NavFilterFunctions';

export const NavFilter = (props) => {
  const { language } = props;

  const handleSelectChange = (event) => {
    const id = event.target.value;
    NavFilterFunctions(id);
  };

  return (
    <div className={s.navExtContainer}>
      <div className={s.navIntContainer}>
        <ul className={`${s.navList} ${s.desktop}`}>
          <li id='allLi' className={s.liAll} onClick={() => NavFilterFunctions('all','allLi')}>
            {language === 'EN' ? 'all' : 'todo'}
          </li>
          <li id='webLi' onClick={() => NavFilterFunctions('devListWebSection','webLi')}>
            web
          </li>
          <li id='desktopLi' onClick={() => NavFilterFunctions('devListDesktopSection','desktopLi')}>
            {language === 'EN' ? 'desktop' : 'escritorio'}
          </li>
          <li id='mobileLi' onClick={() => NavFilterFunctions('devListMobileSection','mobileLi')}>
            {language === 'EN' ? 'mobile' : 'movil'}
          </li>
          <li id='softwareLi' onClick={() => NavFilterFunctions('devListSoftwareSection','softwareLi')}>
            software
          </li>
        </ul>
        <ul className={`${s.navList} ${s.mobile}`}>
          <select onChange={handleSelectChange}>
          <option value="all">
              {language === 'EN' ? 'All' : 'Todo'}
            </option>
            <option value="devListWebSection">
              Web
            </option>
            <option value="devListDesktopSection">
              {language === 'EN' ? 'Desktop' : 'Escritorio'}
            </option>
            <option value="devListMobileSection">
              {language === 'EN' ? 'Mobile' : 'Movil'}
            </option>
            <option value="devListSoftwareSection">
              Software
            </option>
          </select>
        </ul>
      </div>
    </div>
  );
};
