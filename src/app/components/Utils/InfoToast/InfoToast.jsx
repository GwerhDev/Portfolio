import React from 'react'
import s from './InfoToast.module.css'

export const InfoToast = (props) => {
  const { info, language } = props;
  const infoLang = language === 'EN' ? info?.en : info?.es;

  return (
    <div className={s.infoContainer} id='portfolioInfoContainer'>
      <span className={s.innerContainer}>
        {infoLang}
      </span>
    </div>
  )
}
