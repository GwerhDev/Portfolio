import s from './DevDailyJoke.module.css';
import React from 'react';
import { Loader } from '../Loader/Loader';
import openWindow from '../../../../assets/images/svg/openwindow-icon.svg'

export const DevDailyJoke = (props) => {
  const { language, devDailyJoke } = props;

  return (
    <div className={s.jokeContainer}>
      <p className={s.pTitle}>
        {language === 'EN' ? 'DEVJOKE OF THE DAY' : 'DEVJOKE DEL DÍA'}
      </p>
      <a className={s.jokeSubtitle} href='https://github.com/GwerhDev/DevDailyJoke-API' target='_blank' rel='noreferrer'>
        <i>{language === 'EN' ? 'repository' : 'repositorio'}</i>
        <img src={openWindow} alt="DevDailyJoke" width="13px" />
      </a>
      <span className={s.pInfo}>
        {
          devDailyJoke
            ?
            <p>{`"${devDailyJoke}"`}</p>
            :
            <div><Loader /></div>
        }
      </span>
    </div>
  )
}
