import s from './PresentationCard.module.css';
import { motion } from 'framer-motion';
import { Profile } from '../Profile/Profile';
import { SocialLinks } from '../Utils/SocialLinks/SocialLinks';
import { AnchorButton } from '../Utils/Buttons/AnchorButton';
import { DevDailyJoke } from '../Utils/DevDailyJoke/DevDailyJoke';
import { GITHUB_URL, LINKEDIN_URL } from "../../../middlewares/config";

export const PresentationCard = (props) => {
  const { language, description, devDailyJoke, joke } = props;

  return (
    <div className={s.container}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className={s.viewerCont} id='presentation-section'>
          <ul className={s.viewerUl}>
            <Profile />
            <ul className={s.description}>
              <p className={s.parr}>
                {
                  language === 'EN' ?
                    description.en
                    :
                    description.es
                }
              </p>

              <AnchorButton message={language === 'EN' ? 'contact' : 'contacto'} href='mailto:gwerh.dev@gmail.com' />

              <SocialLinks gitHub={GITHUB_URL} linkedIn={LINKEDIN_URL} />
            </ul>
            {
              joke &&
              <div className={s.jokeCont}>
                <DevDailyJoke language={language} devDailyJoke={devDailyJoke} />
              </div>
            }
          </ul>
        </div>
      </motion.div>
    </div>

  )
}
