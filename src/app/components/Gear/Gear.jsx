import s from './css/Gear.module.css';
import { motion } from 'framer-motion';
import qu16Img from '../../../assets/images/png/qu16-img.png';
import scarletImg from '../../../assets/images/png/18i20.png';
import sessionImg from '../../../assets/images/png/akg-session-img.png';
import titanImg from '../../../assets/images/png/titan15d.png';
import d112Img from '../../../assets/images/png/akg-d112-img.png';

export const Gear = (props) => {
    const {language} = props
    return (
        <div className={s.gearCont}>
            <div className={s.titleCont}>
                <h1>{language==='EN'? 'Gear' : 'Equipamiento'}</h1>
            </div>
            <ul className={s.gearList}>
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: false}}
                transition={{
                    duration: 1.5,
                    type: 'spring'
                }}
            >
                <li>
                    <div className={s.imgCont}>
                        <img className={s.gearImg} src={qu16Img} alt="Allen & Heath - Qu16" width='250px' />
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
                        <img className={s.gearImg} src={scarletImg} alt="Focusrite - Scarlett 18i20 1st gen" width='250px' />
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
                        <img className={s.gearImg} src={sessionImg} alt="AKG - Session 1 (drum kit)" width='250px' />
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
                        <img className={s.gearImg} src={d112Img} alt="AKG - D112" width='250px' />
                        <p>AKG - D112</p>
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
                        <img className={s.gearImg} src={titanImg} alt="WHAFEDALE - Titan 15D (Par activo)" width='250px' />
                        <p>WHAFEDALE - Titan 15D (Par activo)</p>
                    </div>
                </li>
            </motion.div>
            </ul>
        </div>
    )
};