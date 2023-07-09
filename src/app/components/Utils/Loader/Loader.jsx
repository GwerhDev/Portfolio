import React from 'react';
import s from './css/Loader.module.css';

export const Loader = (props) => {
  const { language } = props
  return (
    <div className={s.loader}>{language==='EN'? 'Loading...' : 'Cargando...'}</div>
  )
}
