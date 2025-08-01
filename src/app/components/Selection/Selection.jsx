import s from './Selection.module.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { Title } from '../Utils/Title/Title';
import { InfoToast } from '../Utils/InfoToast/InfoToast';
import devIcon from '../../../assets/images/png/dev-icon.png';
import soundIcon from '../../../assets/images/png/sound-icon.png';
import designIcon from '../../../assets/images/png/design-icon.png';

export const Selection = () => {
  const language = useSelector(state => state.language);
  const portfolioInfo = useSelector(state => state.portfolioInfo);
  const [infoToast, setInfoToast] = useState('');

  return (
    <div className={s.selectionContainer}>
      <Title backgroundColor title={language === 'EN' ? 'select' : 'seleccionar'} color='var(--app-white);' />
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        animate={{ opacity: 1, y: 0 }}
        className={s.porfolioContainer}
      >
        <ul className={s.porfolioList}>
          <li>
            <h3> {language === 'EN' ? 'DEVELOP' : 'DESARROLLO'} </h3>
            <div className={s.linkStyle}>
              <a href='https://terminalcore.cl' target='_blank' className={s.portfolioIconCont}
                rel="noreferrer"
                onMouseEnter={() => { return (document.getElementById('portfolioInfoContainer').style.scale = '1', setInfoToast(portfolioInfo.develop)) }}
                onMouseLeave={() => document.getElementById('portfolioInfoContainer').style.scale = '0'}>
                <img src={devIcon} alt="" height={'110px'} />
              </a>
            </div>
          </li>
          <li>
            <h3> {language === 'EN' ? 'DESIGN' : 'DISEÑO'} </h3>
            <div className={s.linkStyle}>
              <a href='https://elumbral.cl' target='_blank' className={s.portfolioIconCont}
                rel="noreferrer"
                onMouseEnter={() => { return (document.getElementById('portfolioInfoContainer').style.scale = '1', setInfoToast(portfolioInfo.design)) }}
                onMouseLeave={() => document.getElementById('portfolioInfoContainer').style.scale = '0'}>
                <img src={designIcon} alt="" height={'110px'} />
              </a>
            </div>
          </li>
          <li>
            <h3>
              {
                language === 'EN' ? 'SOUND' : 'SONIDO'
              }                        </h3>
            <div className={s.linkStyle}>
              <a href='https://laruina.cl' target='_blank' className={s.portfolioIconCont}
                rel="noreferrer"
                onMouseEnter={() => { return (document.getElementById('portfolioInfoContainer').style.scale = '1', setInfoToast(portfolioInfo.sound)) }}
                onMouseLeave={() => document.getElementById('portfolioInfoContainer').style.scale = '0'}>
                <img src={soundIcon} alt="" height={'110px'} />
              </a>
            </div>
          </li>
        </ul>
        <InfoToast language={language} info={infoToast} />
      </motion.div>
    </div>
  )
}