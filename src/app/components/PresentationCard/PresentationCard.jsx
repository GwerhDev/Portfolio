import s from './PresentationCard.module.css';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

export const PresentationCard = (props) => {
  const { img, language, description, background } = props
  return (
    <div className={s.container}>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        animate={{ opacity: 1 }}
      >
        <div className={s.viewerCont} id='presentationCardSection' style={{ backgroundImage: `url(${background})` }}>
          <ul className={s.viewerUl}>
            <h1 className={s.title}>Gerardo guarda</h1>
            <p className={s.subtitle}>gwerh</p>
            <div className={s.description}>
              <p className={s.parr}>
                {
                  language === 'EN' ?
                    description.en
                    :
                    description.es
                }
              </p>
              <div className={s.buttonsCont}>
                <Link to='/home/resume' className={s.actionLink}>
                  <button className={s.actionButton}>
                    {
                      language === 'EN' ?
                        'check resume' : 'ver cv'
                    }
                  </button>
                </Link>
                <Link to='/contact' className={s.actionLink}>
                  <button className={s.actionButton}>
                    {
                      language === 'EN' ?
                        'contact' : 'contacto'
                    }
                  </button>
                </Link>
              </div>
            </div>
            <div className={s.imgCont}>
              <img className={s.portfolioImg} src={img} alt="" loading="lazy" />
            </div>
          </ul>
        </div>
      </motion.div>
    </div>

  )
}
