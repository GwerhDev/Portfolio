import React from 'react';
import s from './Loader.module.css';

export const Loader = (props) => {
  const { language } = props
  return (
    <div className={s.loader}>{language==='EN'? 'Loading...' : 'Cargando...'}</div>
  )
}
