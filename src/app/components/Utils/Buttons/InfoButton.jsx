import React from 'react'
import { openInfoCanvas } from '../../../../functions/InfoCanvasFunctions'
import s from './css/InfoButton.module.css'
import { useDispatch } from 'react-redux';
import { setInfo } from '../../../../middlewares/redux/actions';

export const InfoButton = (props) => {
  const { img, title, type, description, technologies, role, url, github } = props;
  console.log(description)
  const dispatch = useDispatch()

  return (
    <button className={s.button} onClick={()=>{
      return (
        dispatch(setInfo({ img, title, type, description, technologies, role, url, github })), 
        openInfoCanvas()
      )
    }}>i</button>
  )
}
