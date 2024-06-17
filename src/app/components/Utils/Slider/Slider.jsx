import s from './css/Slider.module.css';
import React, { useRef, useState } from 'react';
import { next, previous } from './js/Slider';
import arrowIcon from '../../../../assets/images/png/showmore-icon.png';

export const Slider = ({ children }) => {
  const sliderRef = useRef(null);
  const [k, setK] = useState(1);

  function handlePrevious() {
    return previous(k, setK);
  }

  function handleNext() {
    return next(k, setK);
  }

  return (
    <div className={s.container}>
      <button id={s.prev} disabled={k <= 1} className={s.buttons} onClick={handlePrevious}>
        <img className={s.prevButton} width={20} src={arrowIcon} alt="" />
      </button>
      <div className={s.slider} id={'slider'} ref={sliderRef}>
        <div className={s.sliderViewer} id='sliderViewwer'>
          <div className={s.sliderCont}>
            {children}
          </div>
        </div>
      </div>
      <button id={s.next} className={s.buttons} onClick={handleNext}>
        <img className={s.nextButton} width={20} src={arrowIcon} alt="" />
      </button>
    </div>
  );
};