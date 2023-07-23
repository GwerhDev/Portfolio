import React from 'react';
import s from './css/DevDailyJoke.module.css';
import { Loader } from '../Loader/Loader';
import openWindow from '../../../../assets/images/png/openwindow-icon.png'

export const DevDailyJoke = (props) => {
  const {language, devDailyJoke} = props;

  return (
    <div className={s.jokeContainer}>
      <h3>
        <a className={s.jokeTitle} href='https://github.com/GwerhDev/DevDailyJoke-API' target='_blank' rel='noreferrer'>
          {language==='EN'? '"DEVJOKE" OF THE DAY': '"DEVJOKE" DEL DÍA'}
          <img src={openWindow} alt="DevDailyJoke" width="18px"/>
        </a>
      </h3>
      { devDailyJoke? <span>{ `"${devDailyJoke}"` }</span> : <div><Loader/></div> }
    </div>
  )
}
