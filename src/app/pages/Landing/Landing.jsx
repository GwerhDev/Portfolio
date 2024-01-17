import s from './css/Landing.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Profile } from '../../components/Profile/Profile';
import { SocialLinks } from '../../../app/components/Utils/SocialLinks/SocialLinks';
import { removeLocalStorage } from '../../../functions/RemoveLocalStorage';
import { Footer } from '../../components/Utils/Footer/Footer';
import { getDevDailyJoke } from '../../../middlewares/redux/actions';
import { DevDailyJoke } from '../../components/Utils/DevDailyJoke/DevDailyJoke';
import { GITHUB_URL, LINKEDIN_URL } from '../../../middlewares/config';

export const Landing = () => {
  const language = useSelector(state=>state.language);
  const devDailyJoke = useSelector(state=>state.devDailyJoke);
  const dispatch = useDispatch();
  
  useEffect(()=> { removeLocalStorage() },[]);
  useEffect(()=> { dispatch(getDevDailyJoke(language==='EN'? 'en':'es')) },[dispatch, language]);

  return (
    <div className={s.landingCont}>
      <motion.div initial={{opacity: 0, y: 10}} transition={{duration: 2, type: 'spring'}}animate={{opacity: 1, y: 0}}>
        <Profile />
        <p style={{color:'white'}}>
          { language==='EN'? 'Develop, Design & Sound': 'Desarrollo, Diseño & Sonido' }
        </p>
        <div className={s.enterBtnCont}>
          <Link to='/home' className={s.enterBtn}>
            {
              language==='EN'?
              'enter':
              'entrar'
            }        
          </Link>
        </div>
        <div className={s.contSL}>
          <SocialLinks gitHub={GITHUB_URL} linkedIn={LINKEDIN_URL} />
        </div>

      </motion.div>
      <div className={s.jokeCont}>
        <DevDailyJoke language={language} devDailyJoke={devDailyJoke} />
        <Footer/>
      </div>
    </div>
  )
}