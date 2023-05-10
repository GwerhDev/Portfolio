import s from './css/Home.module.css'
//import visorIntroVideo from '../../video/main-intro.mp4'
import { Link } from 'react-router-dom'
import devIcon from '../../images/dev-icon.png'
import designIcon from '../../images/design-icon.png'
import soundIcon from '../../images/sound-icon.png'
import { useSelector } from 'react-redux'
import { OptionTitle } from '../Options/OptionTitle'
import { motion } from 'framer-motion'


export const Section = (props) => {
    const language = useSelector(state=>state.language)
    return (
        
        
        <div>
            <OptionTitle title={language==='EN'? 'select portfolio' : 'seleccionar portafolio'} color='white' />
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
                    <Link to='/portfolio/develop'>
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
                    <Link to='/portfolio/design'>
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
                    <Link to='/portfolio/sound'>
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