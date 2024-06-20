import s from './Selection.module.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Title } from '../Utils/Title/Title';
import { InfoToast } from '../Utils/InfoToast/InfoToast';
import devIcon from '../../../assets/images/png/dev-icon.png';
import soundIcon from '../../../assets/images/png/sound-icon.png';
import designIcon from '../../../assets/images/png/design-icon.png';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

export const Selection = () => {
  const language = useSelector(state => state.language);
  const portfolioInfo = useSelector(state => state.portfolioInfo);
  const [infoToast, setInfoToast] = useState('');
  const location = useLocation();

  function closePanel() {
    if (location.pathname !== '/selection') {
      window.scrollTo(0, 0);
      document.querySelector('#profileLalo').style.transform = 'translateX(-40vw)';
      document.querySelector('#profileLalo').style.opacity = '0';
      document.querySelector('#navCont').style.transform = 'translateX(0vw)';
    }

    return;
  }

  return (
    <div className={s.selectionContainer}>
      <Title backgroundColor title={language === 'EN' ? 'select' : 'seleccionar'} color='white' />
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
              <Link to='/portfolio/develop' className={s.portfolioIconCont}
                onClick={closePanel}
                onMouseEnter={() => { return (document.getElementById('portfolioInfoContainer').style.scale = '1', setInfoToast(portfolioInfo.develop)) }}
                onMouseLeave={() => document.getElementById('portfolioInfoContainer').style.scale = '0'}>
                <img src={devIcon} alt="" height={'110px'} />
              </Link>
            </div>
          </li>
          <li>
            <h3> {language === 'EN' ? 'DESIGN' : 'DISEÑO'} </h3>
            <div className={s.linkStyle}>
              <Link to='/portfolio/design' className={s.portfolioIconCont}
                onClick={closePanel}
                onMouseEnter={() => { return (document.getElementById('portfolioInfoContainer').style.scale = '1', setInfoToast(portfolioInfo.design)) }}
                onMouseLeave={() => document.getElementById('portfolioInfoContainer').style.scale = '0'}>
                <img src={designIcon} alt="" height={'110px'} />
              </Link>
            </div>
          </li>
          <li>
            <h3>
              {
                language === 'EN' ? 'SOUND' : 'SONIDO'
              }                        </h3>
            <div className={s.linkStyle}>
              <Link to='/portfolio/sound' className={s.portfolioIconCont}
                onClick={closePanel}
                onMouseEnter={() => { return (document.getElementById('portfolioInfoContainer').style.scale = '1', setInfoToast(portfolioInfo.sound)) }}
                onMouseLeave={() => document.getElementById('portfolioInfoContainer').style.scale = '0'}>
                <img src={soundIcon} alt="" height={'110px'} />
              </Link>
            </div>
          </li>
        </ul>
        <InfoToast language={language} info={infoToast} />
      </motion.div>
    </div>
  )
}