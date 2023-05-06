import s from './css/Gear.module.css'
import qu16Img from '../../../images/qu16-img.png'
import scarletImg from '../../../images/18i20.png'
import sessionImg from '../../../images/akg-session-img.png'
import titanImg from '../../../images/titan15d.png'
import { motion } from 'framer-motion'

export const Gear = (props) => {
    const {language} = props
    return (
        <div className={s.gearCont}>
            <div style={{width:'100%', textAlign:'center', paddingTop:'100px'}}>
                <h1 style={{fontFamily:'Trajan', color:'white', fontSize:'2.3rem'}}>{language==='EN'? 'Gear' : 'Equipamiento'}</h1>
            </div>
            <ul className={s.gearList} style={{marginLeft:'-40px'}}>
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: false}}
                transition={{duration: 1.5}}
            >
                <li>
                    <div className={s.imgCont}>
                        <img className={s.gearImg} src={qu16Img} alt="" width='250px' />
                        <p>Allen & Heath - Qu16</p>
                    </div>
                </li>
            </motion.div>
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: false}}
                transition={{duration: 1.5}}
            >
                <li>
                    <div className={s.imgCont}>
                        <img className={s.gearImg} src={scarletImg} alt="" width='250px' />
                        <p>Focusrite - Scarlett 18i20 1st gen</p>
                    </div>
                </li>
            </motion.div>
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: false}}
                transition={{duration: 1.5}}
            >
                <li>
                    <div className={s.imgCont}>
                        <img className={s.gearImg} src={sessionImg} alt="" width='250px' />
                        <p>AKG - Session 1 (drum kit)</p>
                    </div>
                </li>
            </motion.div>
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: false}}
                transition={{duration: 1.5}}
            >
                <li>
                    <div className={s.imgCont}>
                        <img className={s.gearImg} src={titanImg} alt="" width='250px' />
                        <p>WHAFEDALE - Titan 15D (Par activo)</p>
                    </div>
                </li>
            </motion.div>
            </ul>
        </div>
    )
}