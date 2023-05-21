import s from './css/Landing.module.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Profile } from '../../components/Profile/Profile';
import { SocialLinks } from '../../../app/components/Utils/SocialLinks/SocialLinks';
import { removeLocalStorage } from '../../../functions/RemoveLocalStorage';
import { Footer } from '../../components/Utils/Footer/Footer';

export const Landing = () => {
  const language = useSelector(state=>state.language)
  useEffect(()=> {removeLocalStorage()},[])
  return (
    <div className={s.landingCont}>
      <div className={s.webBg}/>
      <div className={s.webBg}/>
      <motion.div 
        initial={{opacity: 0, y: 10}}
        transition={{duration: 2, type: 'spring'}}
        animate={{opacity: 1, y: 0}}
      >
        <Profile />
      <p style={{color:'white'}}>
        {
          language==='EN'?
          'Develop, Design & Sound':
          'Desarrollo, Diseño & Sonido'
        }
      </p>
      <Link to='/home'>
        <div className={s.enterBtn}>
        {
          language==='EN'?
          'enter':
          'entrar'
        }        
        </div>
      </Link>
      <div className={s.contSL}>
        <SocialLinks gitHub='https://github.com/LaloFreak' linkedIn='https://www.linkedin.com/in/lalofreak/' />
      </div>
      </motion.div>
      <Footer/>
    </div>
  )
}