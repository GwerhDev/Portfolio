import React from 'react'
import { openInfoCanvas } from '../../../../functions/InfoCanvasFunctions'
import s from './css/InfoButton.module.css'
import { useDispatch } from 'react-redux';
import { setInfoImg } from '../../../../middlewares/redux/actions';

export const InfoButton = (props) => {
  const { img } = props;
  const dispatch = useDispatch()

  return (
    <button className={s.button} onClick={()=>{
      return (
        dispatch(setInfoImg(img)), 
        openInfoCanvas()
      )
    }}>i</button>
  )
}
