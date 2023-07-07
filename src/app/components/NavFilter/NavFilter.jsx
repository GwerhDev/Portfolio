import React, { useState } from 'react';
import s from './css/NavFilter.module.css';
import NavFilterFunctions from '../../../functions/NavFilterFunctions';

export const NavFilter = (props) => {
  const { language } = props;
  const [filter, setFilter] = useState(1);

  const handleSelectChange = (event) => {
    const id = event.target.value;
    NavFilterFunctions(id);
  };

  return (
    <div className={s.navExtContainer}>
      <div className={s.navIntContainer}>
        <ul className={`${s.navList} ${s.desktop}`}>
          <li id='webLi' onClick={() => { return ( NavFilterFunctions('devListWebSection','webLi'), setFilter(1) )}}>
            web
          </li>
          <li id='desktopLi' onClick={() => { return ( NavFilterFunctions('devListDesktopSection','desktopLi'), setFilter(2) )}}>
            {language === 'EN' ? 'desktop' : 'escritorio'}
          </li>
          <li id='mobileLi' onClick={() => { return ( NavFilterFunctions('devListMobileSection','mobileLi'), setFilter(3) )}}>
            {language === 'EN' ? 'mobile' : 'movil'}
          </li>
          <li id='softwareLi' onClick={() => { return ( NavFilterFunctions('devListSoftwareSection','softwareLi'), setFilter(4) )}}>
            software
          </li>
        </ul>
        <ul className={`${s.navList} ${s.mobile}`}>
          <select onChange={handleSelectChange}>
            <option value="devListWebSection" defaultValue={filter === 1}>
              Web
            </option>
            <option value="devListDesktopSection" defaultValue={filter === 2}>
              {language === 'EN' ? 'Desktop' : 'Escritorio'}
            </option>
            <option value="devListMobileSection" defaultValue={filter === 3}>
              {language === 'EN' ? 'Mobile' : 'Móvil'}
            </option>
            <option value="devListSoftwareSection" defaultValue={filter === 4}>
              Software
            </option>
          </select>
        </ul>
      </div>
    </div>
  );
};
