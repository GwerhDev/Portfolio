import { Link } from "react-router-dom"
import s from './css/PresentationCard.module.css'
import { motion } from 'framer-motion'

export const PresentationCard = (props) => {
    const {img, language, description} = props
    return (
      <div className={s.viewerCont}>
          <motion.div 
          initial={{opacity:0}}
          transition={{duration: 1}}
          animate={{opacity:1}}
          >
        <div className={s.imgCont}>
          <img className={s.portfolioDevImg} src={img} alt="" loading="lazy" />
        </div>
      <ul className={s.viewerUl}>
        <h1 className={s.title}>Gerardo guarda
        <br/>
          <p>lalofreak</p>
          <div className={s.introCont}>
            <b className={s.parr}>
              {
                language==='EN'?
                description.en
                :
                description.es
              }
            </b>
            <br />
            <Link to='/home/cv'>
              <button className={s.resumeButton}>
                {
                  language==='EN'?
                  'check resume' : 'ver cv'
                }
              </button>
            </Link>
            <Link to='/contact'>
              <button className={s.resumeButton}>
                {
                  language==='EN'?
                  'contact' : 'contacto'
                }
              </button>
            </Link>
          </div>
        </h1>
      </ul>
      </motion.div>
      </div>

    )
}
