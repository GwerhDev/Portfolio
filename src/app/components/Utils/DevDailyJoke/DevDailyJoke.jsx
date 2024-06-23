import s from './DevDailyJoke.module.css';
import React from 'react';
import { Loader } from '../Loader/Loader';
import openWindow from '../../../../assets/images/svg/openwindow-icon.svg'

export const DevDailyJoke = (props) => {
  const { language, devDailyJoke } = props;

  return (
    <div className={s.jokeContainer}>
      <h3 className={s.title}>
        {language === 'EN' ? 'DEVJOKE OF THE DAY' : 'DEVJOKE DEL DÍA'}
      </h3>
      <a className={s.subtitle} href='https://github.com/GwerhDev/DevDailyJoke-API' target='_blank' rel='noreferrer'>
        <i>{language === 'EN' ? 'repository' : 'repositorio'}</i>
        <img src={openWindow} alt="DevDailyJoke" width="13px" />
      </a>
      {
        devDailyJoke
          ?
          <p className={s.paragraph}>{`"${devDailyJoke}"`}</p>
          :
          <Loader color={"#fff"} />
      }
    </div>
  )
}
