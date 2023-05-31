import React, { useRef, useState } from 'react';
import s from './css/Slider.module.css'
import { next, previous } from './js/Slider';

export const Slider = ({ children }) => {
  const sliderRef = useRef(null);
  const [k, setK] = useState(1)

  return (
    <div className={s.container}>
      <button id={s.prev} className={s.buttons} onClick={()=>{return previous(k, setK)}}>{'<'}</button>
      <div className={s.slider} id={'slider'} ref={sliderRef}>
        <div className={s.sliderViewer} id='sliderViewwer'>
          <div className={s.sliderCont}>
            {children}
          </div>
        </div>
      </div>
      <button id={s.next} className={s.buttons} onClick={()=>{return next(k, setK)}}>{'>'}</button>
      <div>
      </div>
    </div>
  );
};