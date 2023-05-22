import s from './css/Section.module.css';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Title } from '../Utils/Title/Title';
import devIcon from '../../../assets/images/png/dev-icon.png';
import designIcon from '../../../assets/images/png/design-icon.png';
import soundIcon from '../../../assets/images/png/sound-icon.png';
//import visorIntroVideo from '../../../assets/videos/main-intro.mp4';

export const Selection = () => {
    const language = useSelector(state=>state.language)
    return (
        <div>
            <Title title={language==='EN'? 'select portfolio' : 'seleccionar portafolio'} color='white' />
            <motion.div 
            initial={{opacity:0, y:-100}}
            transition={{duration: 1}}
            animate={{opacity:1, y:0}}
        >
            <ul className={s.porfolioList}>
                <li>
                    <h3 style={{fontFamily:'Trajan', color: 'white', fontSize:'.8rem'}}>                        
                        {
                            language==='EN'? 'develop':'desarrollo'
                        }
                    </h3>
                    <Link to='/portfolio/develop' className={s.linkStyle}>
                        <div className={s.portfolioIconCont}>
                            <img src={devIcon} alt="" height={'110px'} />
                        </div>
                    </Link>
                </li>
                <li>
                        <h3 style={{fontFamily:'Trajan', color: 'white', fontSize:'.8rem'}}>
                        {
                            language==='EN'? 'design':'diseno'
                        }                        </h3>
                    <Link to='/portfolio/design' className={s.linkStyle}>
                        <div className={s.portfolioIconCont}>
                            <img src={designIcon} alt="" height={'110px'} />
                        </div>
                    </Link>
                </li>
                <li>
                        <h3 style={{fontFamily:'Trajan', color: 'white', fontSize:'.8rem'}}>
                        {
                            language==='EN'? 'sound':'sonido'
                        }                        </h3>
                    <Link to='/portfolio/sound' className={s.linkStyle}>
                        <div className={s.portfolioIconCont}>
                            <img src={soundIcon} alt="" height={'110px'} />
                        </div>
                    </Link>
                </li>
            </ul>
            {/*<video className={s.visorIntroVideo} src={visorIntroVideo} autoPlay muted loop type="video/mp4"/>*/}
        </motion.div>
        </div>
    )
}