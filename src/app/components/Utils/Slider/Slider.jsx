import s from './css/Slider.module.css';
import React, { useEffect, useRef, useState } from 'react';
import { initialState, next, previous } from './js/Slider';
import arrowIcon from '../../../../assets/images/png/showmore-icon.png';

export const Slider = (props) => {
  const { gallery } = props;

  const sliderRef = useRef(null);
  const [k, setK] = useState(0);

  function handlePrevious() {
    return previous(k, setK, gallery?.length);
  }

  function handleNext() {
    return next(k, setK, gallery?.length);
  }

  useEffect(() => {
    initialState(gallery?.length);
  }, [gallery?.length]);

  return (
    <div className={s.container}>
      <button id={s.prev} disabled={k <= 0} className={s.buttons} onClick={handlePrevious}>
        <img className={s.prevButton} width={20} src={arrowIcon} alt="" />
      </button>
      <div className={s.slider} id='slider' ref={sliderRef}>
        <div className={s.sliderCont} style={{ width: gallery?.length * 100 + "%" }}>
          {
            gallery?.map((image, index) => (
              <div id={`card${index}`} className={s.card} key={index} style={{ aspectRatio: 9 / 16 }}>
                <img src={image} alt="" className={s.image}/>
              </div>
            ))
          }
        </div>
      </div>
      <button id={s.next} disabled={gallery?.length <= 1} className={s.buttons} onClick={handleNext}>
        <img className={s.nextButton} width={20} src={arrowIcon} alt="" />
      </button>
    </div>
  );
};