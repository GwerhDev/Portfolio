import React from 'react';
import s from './Loader.module.css';

export const Loader = (props) => {
  const { language, color } = props;

  return (
    <div className={s.loader} style={{ color }}>
      {
        language === 'EN'
          ? 'Loading...'
          : 'Cargando...'
      }
    </div>
  )
}
