import s from './Landing.module.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Profile } from '../../components/Profile/Profile';
import { SocialLinks } from '../../../app/components/Utils/SocialLinks/SocialLinks';
import { removeLocalStorage } from '../../../functions/RemoveLocalStorage';
import { GITHUB_URL, LINKEDIN_URL } from '../../../middlewares/config';

export const Landing = () => {
  const language = useSelector(state => state.language);

  useEffect(() => {
    removeLocalStorage()
  }, []);

  return (
    <div className={s.landingCont}>
      <motion.div initial={{ opacity: 0, y: 10 }} transition={{ duration: 2, type: 'spring' }} animate={{ opacity: 1, y: 0 }}>
        <Profile />
        <p style={{ color: 'white' }}>
          {language === 'EN' ? 'Develop, Design & Sound' : 'Desarrollo, Diseño & Sonido'}
        </p>
        <div className={s.enterBtnCont}>
          <Link to='/selection' className={s.enterBtn}>
            {
              language === 'EN' ?
                'enter' :
                'entrar'
            }
          </Link>
        </div>
        <div className={s.contSL}>
          <SocialLinks gitHub={GITHUB_URL} linkedIn={LINKEDIN_URL} />
        </div>

      </motion.div>
    </div>
  )
}