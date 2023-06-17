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
              {language === 'EN' ? 'all' : 'todo'}
            </option>
            <option value="devListWebSection">
              web
            </option>
            <option value="devListDesktopSection">
              {language === 'EN' ? 'desktop' : 'escritorio'}
            </option>
            <option value="devListMobileSection">
              {language === 'EN' ? 'mobile' : 'movil'}
            </option>
            <option value="devListSoftwareSection">
              software
            </option>
          </select>
        </ul>
      </div>
    </div>
  );
};
