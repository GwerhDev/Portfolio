import s from './css/Curriculum.module.css';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setOption } from '../../../middlewares/redux/actions';
import { OptionTitle } from '../Options/OptionTitle';
import pdfIcon from '../../../assets/images/pdf-icon.png';

export const Curriculum = () => {
    const language = useSelector(state=>state.language)
    const currentUser = useSelector(state=>state.currentUser)
    const history = useHistory()
    const dispatch = useDispatch()
    const auth = localStorage.getItem('auth');
    const user = auth ? JSON.parse(auth) : null;

    useEffect(() => {
        dispatch(setOption('cv'))
        if (!user){
            history.push('/home/cv')
        }
    }, [dispatch, currentUser, history, user])
    return (
        <div className={s.contCV}>
            <OptionTitle title='curriculum vitae'/>            
            { language === "EN"?
            <motion.div 
            initial={{opacity:0}}
            transition={{duration: 1}}
            animate={{opacity:1}}
            >
            <div className={s.pdfCont}>
                <ul className={s.pdfUl}>
                    <a 
                        href='https://drive.google.com/file/d/1-VW7cvG40JvCc2YlGJz76pwImHhN200n/view?usp=sharing' 
                        target='_blank'
                        rel='noreferrer'
                        >
                            <img src={pdfIcon} alt="" height='80px'/><br />
                            Show Complete CV
                    </a>
                    <a 
                        href='https://drive.google.com/file/d/1-aiOos4lB-VD7WBc3ly-lZTcCuIqAa74/view?usp=sharing' 
                        target='_blank'
                        rel='noreferrer'
                        >
                            <img src={pdfIcon} alt="" height='80px'/><br />
                            Show FullStack Developer CV
                    </a>
                </ul>
            </div>
            </motion.div>
            :
            <motion.div 
            initial={{opacity:0}}
            transition={{duration: 1}}
            animate={{opacity:1}}
            >
            <div className={s.pdfCont}>
                <ul className={s.pdfUl}>
                    <a 
                        href='https://drive.google.com/file/d/1-KoVkTWGFQYp4iwwbWsB6leVi_bfzYjq/view?usp=sharing' 
                        target='_blank'
                        rel='noreferrer'
                        >
                            <img src={pdfIcon} alt="" height='80px'/><br />
                            Ver CV Completo
                    </a>
                    <a 
                        href='https://drive.google.com/file/d/1-gkdCuhXXkViQRRaYXZOA50_P7uMfDgX/view?usp=sharing' 
                        target='_blank'
                        rel='noreferrer'
                        >
                            <img src={pdfIcon} alt="" height='80px'/><br />
                            Ver CV Desarrollador FullStack
                    </a>
                </ul>
            </div>
            </motion.div>

            }
        </div>
    )
}