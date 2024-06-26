import { useDispatch } from 'react-redux';
import s from './css/Slider.module.css';
import React, { useEffect, useRef } from 'react';
import { initialState, next, previous } from './js/Slider';
import arrowIcon from '../../../../assets/images/png/showmore-icon.png';
import { useSelector } from 'react-redux';
import { setIndex } from '../../../../middlewares/redux/actions';

export const Slider = (props) => {
  const dispatch = useDispatch();
  const { gallery } = props;

  const sliderRef = useRef(null);
  const index = useSelector(state => state.info.index);

  function handleSetIndex(index) {
    dispatch(setIndex(index));
  }

  function handlePrevious() {
    return previous(index, handleSetIndex, gallery?.length);
  }

  function handleNext() {
    return next(index, handleSetIndex, gallery?.length);
  }

  useEffect(() => {
    initialState(gallery?.length);
  }, [gallery]);

  return (
    <div className={s.container}>
      <button id={s.prev} disabled={index <= 0} className={s.buttons} onClick={handlePrevious}>
        <img className={s.prevButton} width={20} src={arrowIcon} alt="" />
      </button>
      <div className={s.slider} id='slider' ref={sliderRef}>
        <div className={s.sliderCont} style={{ width: gallery?.length * 100 + "%" }}>
          {
            gallery?.map((image, index) => (
              <div id={`card${index}`} className={s.card} key={index} style={{ aspectRatio: 9 / 16 }}>
                <img src={image} alt="" className={s.image} />
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