import s from './Landing.module.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Profile } from '../../components/Profile/Profile';
import { SocialLinks } from '../../../app/components/Utils/SocialLinks/SocialLinks';
import { removeLocalStorage } from '../../../functions/RemoveLocalStorage';
import { GITHUB_URL, LINKEDIN_URL } from '../../../middlewares/config';
import { ActionButton } from '../../components/Utils/Buttons/ActionButton';

export const Landing = () => {
  const language = useSelector(state => state.language);

  useEffect(() => {
    removeLocalStorage()
  }, []);

  return (
    <div className={s.landingCont}>
      <motion.div initial={{ opacity: 0, y: 10 }} transition={{ duration: 2, type: 'spring' }} animate={{ opacity: 1, y: 0 }}>
        <Profile />
        <p>
          {language === 'EN' ? 'Develop, Design & Sound' : 'Desarrollo, Diseño & Sonido'}
        </p>
        <ActionButton route={"/selection"} message={language === 'EN' ? 'enter' : 'entrar'} />
        <SocialLinks gitHub={GITHUB_URL} linkedIn={LINKEDIN_URL} />
      </motion.div>
    </div>
  )
}