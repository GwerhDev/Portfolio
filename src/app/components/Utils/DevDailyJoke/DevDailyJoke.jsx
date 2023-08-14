import React from 'react';
import s from './css/DevDailyJoke.module.css';
import { Loader } from '../Loader/Loader';
import openWindow from '../../../../assets/images/png/openwindow-icon.png'

export const DevDailyJoke = (props) => {
  const {language, devDailyJoke} = props;

  return (
    <div className={s.jokeContainer}>
      <h3>
        {language==='EN'? 'DEVJOKE OF THE DAY': 'DEVJOKE DEL DÍA'}
      </h3>
      <a className={s.jokeSubtitle} href='https://github.com/GwerhDev/DevDailyJoke-API' target='_blank' rel='noreferrer'>
        <i>{language==='EN'? 'repository': 'repositorio'}</i>
        <img src={openWindow} alt="DevDailyJoke" width="13px"/>
      </a>
      <p className={s.pInfo}>
        { devDailyJoke? <span>{ `"${devDailyJoke}"` }</span> : <div><Loader/></div> }
      </p>
    </div>
  )
}
