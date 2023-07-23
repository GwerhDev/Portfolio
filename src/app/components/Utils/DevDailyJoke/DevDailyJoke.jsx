import React from 'react';
import s from './css/DevDailyJoke.module.css';

export const DevDailyJoke = (props) => {
  const {language, devDailyJoke} = props;

  return (
    <div className={s.jokeContainer}>
      <h3>
        {language==='EN'? '"DEVJOKE" OF THE DAY': '"DEVJOKE" DEL DÍA'}
      </h3>
      <span>"{devDailyJoke}"</span>
    </div>
  )
}
