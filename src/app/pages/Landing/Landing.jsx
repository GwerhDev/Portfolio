import s from './Landing.module.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Profile } from '../../components/Profile/Profile';
import { SocialLinks } from '../../../app/components/Utils/SocialLinks/SocialLinks';
import { removeLocalStorage } from '../../../functions/RemoveLocalStorage';
import { GITHUB_URL, LINKEDIN_URL, UPWORK_URL } from '../../../middlewares/config';
import { ActionButton } from '../../components/Utils/Buttons/ActionButton';

export const Landing = () => {
  const language = useSelector(state => state.language);

  useEffect(() => {
    removeLocalStorage()
  }, []);

  return (
    <div className={s.container}>
      <div className="grids-background bg-position-center" />
      <motion.ul className={s.landing} initial={{ opacity: 0, y: 10 }} transition={{ duration: 2, type: 'spring' }} animate={{ opacity: 1, y: 0 }}>
        <Profile />
        <p className={s.subtitle}>
          {language === 'EN' ? 'Develop, Design & Sound' : 'Desarrollo, Diseño & Sonido'}
        </p>
        <ActionButton route={"/selection"} message={language === 'EN' ? 'enter' : 'entrar'} />
        <SocialLinks gitHub={GITHUB_URL} linkedIn={LINKEDIN_URL} upWork={UPWORK_URL} />
      </motion.ul>
    </div>
  )
}