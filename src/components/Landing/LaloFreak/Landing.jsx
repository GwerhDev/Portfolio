import { Link } from 'react-router-dom'
import s from './css/Landing.module.css'
import st from '../Landing/css/Landing.module.css'
import { Profile } from '../Profile/Profile'
import { useSelector } from 'react-redux'
import { SocialLinks } from '../Utils/SocialLinks'
import { useEffect } from 'react'
import { removeLocalStorage } from '../../functions/RemoveLocalStorage'
import { motion } from 'framer-motion'

export const LandingLaloFreak = () => {
  const language = useSelector(state=>state.language)
  useEffect(()=> {removeLocalStorage()},[])
  return (
    <div className={s.landingCont}>
      <div className={st.webBg}/>
      <div className={s.webBg}/>
      <motion.div 
        initial={{opacity:0, y:10}}
        transition={{duration: 2}}
        animate={{opacity:1, y:0}}
        >
        <Profile />
      <p style={{color:'white'}}>
        {
          language==='EN'?
          'Develop, Design & Sound':
          'Desarrollo, Diseño & Sonido'
        }
      </p>
      <Link to='/lalofreak'>
        <div className={s.enterBtn}>
        {
          language==='EN'?
          'enter':
          'entrar'
        }        
        </div>
      </Link>
      <div className={s.contSL}><SocialLinks/></div>
      </motion.div>
    </div>
  )
}