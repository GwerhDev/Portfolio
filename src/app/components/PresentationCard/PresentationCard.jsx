import s from './PresentationCard.module.css';
import { motion } from 'framer-motion';
import { Profile } from '../Profile/Profile';
import { SocialLinks } from '../Utils/SocialLinks/SocialLinks';
import { DevDailyJoke } from '../Utils/DevDailyJoke/DevDailyJoke';

export const PresentationCard = (props) => {
  const { language, description, devDailyJoke } = props
  return (
    <div className={s.container}>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        animate={{ opacity: 1 }}
      >
        <div className={s.viewerCont} id='presentation-section'>
          <ul className={s.viewerUl}>
            <Profile />
            <div className={s.description}>
              <p className={s.parr}>
                {
                  language === 'EN' ?
                    description.en
                    :
                    description.es
                }
              </p>

              <a href='mailto:gwerh.dev@gmail.com' className={s.actionButton}>
                {
                  language === 'EN' ?
                    'contact' : 'contacto'
                }
              </a>

              <SocialLinks />
            </div>
            {
              devDailyJoke &&
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
