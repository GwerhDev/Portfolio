import s from './NavFilter.module.css';
import React, { useState } from 'react';
import { NavFilterFunctions, NavFilterEnterFunctions, NavFilterLeaveFunctions } from '../../../functions/NavFilterFunctions';

export const NavFilter = (props) => {
  const { language } = props;
  const [filter, setFilter] = useState(1);

  const handleSelectChange = (event) => {
    const id = event.target.value;
    setFilter(id)
    NavFilterFunctions(id);
  };

  return (
    <div className={s.navExtContainer}>
      <div className={s.navIntContainer}>
        <ul className={`${s.navList} ${s.desktop}`}>
          <li id='webLi'
            onClick={() => { return (NavFilterFunctions('devListWebSection', 'webLi'), handleSelectChange, setFilter('devListWebSection')) }}
            onMouseEnter={() => { NavFilterEnterFunctions('webLi') }}
            onMouseLeave={() => { NavFilterLeaveFunctions(filter === 'devListWebSection', 'webLi') }}
          >
            web
          </li>
          <li id='desktopLi' onClick={() => { return (NavFilterFunctions('devListDesktopSection', 'desktopLi'), handleSelectChange, setFilter('devListDesktopSection')) }}
            onMouseEnter={() => { NavFilterEnterFunctions('desktopLi') }}
            onMouseLeave={() => { NavFilterLeaveFunctions(filter === 'devListDesktopSection', 'desktopLi') }}
          >
            {language === 'EN' ? 'desktop' : 'escritorio'}
          </li>
          <li id='mobileLi' onClick={() => { return (NavFilterFunctions('devListMobileSection', 'mobileLi'), handleSelectChange, setFilter('devListMobileSection')) }}
            onMouseEnter={() => { NavFilterEnterFunctions('mobileLi') }}
            onMouseLeave={() => { NavFilterLeaveFunctions(filter === 'devListMobileSection', 'mobileLi') }}
          >
            {language === 'EN' ? 'mobile' : 'movil'}
          </li>
          <li id='softwareLi' onClick={() => { return (NavFilterFunctions('devListSoftwareSection', 'softwareLi'), handleSelectChange, setFilter('devListSoftwareSection')) }}
            onMouseEnter={() => { NavFilterEnterFunctions('softwareLi') }}
            onMouseLeave={() => { NavFilterLeaveFunctions(filter === 'devListSoftwareSection', 'softwareLi') }}
          >
            software
          </li>
        </ul>
        <ul className={`${s.navList} ${s.mobile}`}>
          <select onChange={handleSelectChange} value={filter}>
            <option value="devListWebSection">
              Web
            </option>
            <option value="devListDesktopSection">
              {language === 'EN' ? 'Desktop' : 'Escritorio'}
            </option>
            <option value="devListMobileSection">
              {language === 'EN' ? 'Mobile' : 'Móvil'}
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
