import React from 'react'
import { openInfoCanvas } from '../../../../functions/InfoCanvasFunctions'
import s from './InfoButton.module.css'
import { useDispatch } from 'react-redux';
import { setInfo } from '../../../../middlewares/redux/actions';

export const InfoButton = (props) => {
  const { img, title, type, description, technologies, role, url, github, language, index } = props;
  const dispatch = useDispatch();
  
  return (
    <button className={s.button} onClick={()=>{
      return (
        dispatch(setInfo({ 
          img, 
          title, 
          type, 
          description: language==="EN"? description.en : description.es, 
          technologies: language==="EN"? technologies.en : technologies.es, 
          role: language==="EN"? role.en : role.es, 
          url, 
          github,
          index
        })), 
        openInfoCanvas()
      )
    }}>i</button>
  )
}
