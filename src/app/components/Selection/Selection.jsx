import { useState } from 'react';
import s from './css/Section.module.css';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Title } from '../Utils/Title/Title';
import { InfoToast } from '../Utils/InfoToast/InfoToast';
import devIcon from '../../../assets/images/png/dev-icon.png';
import designIcon from '../../../assets/images/png/design-icon.png';
import soundIcon from '../../../assets/images/png/sound-icon.png';
//import visorIntroVideo from '../../../assets/videos/main-intro.mp4';

export const Selection = () => {
    const language = useSelector(state=>state.language);
    const portfolioInfo = useSelector(state=>state.portfolioInfo);
    const [infoToast, setInfoToast] = useState('');

    return (
        <div className={s.selectionContainer}>
            <Title title={language==='EN'? 'select portfolio' : 'seleccionar portafolio'} color='white' />
            <motion.div 
            initial={{opacity:0, y:-100}}
            transition={{duration: 1}}
            animate={{opacity:1, y:0}}
        >
            <ul className={s.porfolioList}>
                <li>
                    <h3> { language==='EN'? 'DEVELOP':'DESARROLLO' } </h3>
                    <Link to='/portfolio/develop' className={s.linkStyle} 
                        onMouseEnter={()=> { return (document.getElementById('portfolioInfoContainer').style.scale='1', setInfoToast(portfolioInfo.develop))}}
                        onMouseLeave={()=>document.getElementById('portfolioInfoContainer').style.scale='0'}>
                        <div className={s.portfolioIconCont}>
                            <img src={devIcon} alt="" height={'110px'} />
                        </div>
                    </Link>
                </li>
                <li>
                    <h3> { language==='EN'? 'DESIGN':'DISEÑO' } </h3>
                    <Link to='/portfolio/design' className={s.linkStyle} 
                        onMouseEnter={()=> { return (document.getElementById('portfolioInfoContainer').style.scale='1', setInfoToast(portfolioInfo.design))}}
                        onMouseLeave={()=>document.getElementById('portfolioInfoContainer').style.scale='0'}>
                        <div className={s.portfolioIconCont}>
                            <img src={designIcon} alt="" height={'110px'} />
                        </div>
                    </Link>
                </li>
                <li>
                        <h3>
                        {
                            language==='EN'? 'SOUND':'SONIDO'
                        }                        </h3>
                    <Link to='/portfolio/sound' className={s.linkStyle} 
                        onMouseEnter={()=> { return (document.getElementById('portfolioInfoContainer').style.scale='1', setInfoToast(portfolioInfo.sound))}}
                        onMouseLeave={()=>document.getElementById('portfolioInfoContainer').style.scale='0'}>
                        <div className={s.portfolioIconCont}>
                            <img src={soundIcon} alt="" height={'110px'} />
                        </div>
                    </Link>
                </li>
            </ul>
            {/*<video className={s.visorIntroVideo} src={visorIntroVideo} autoPlay muted loop type="video/mp4"/>*/}
            <InfoToast language={language} info={infoToast} />
        </motion.div>
        </div>
    )
}