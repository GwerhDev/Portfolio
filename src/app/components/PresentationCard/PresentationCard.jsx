import s from './css/PresentationCard.module.css';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

export const PresentationCard = (props) => {
    const { img, language, description, hideCircle } = props
    return (
      <div className={s.viewerCont} id='presentationCardSection'>
          <motion.div 
          initial={{opacity:0}}
          transition={{duration: 1}}
          animate={{opacity:1}}
          >
        <div className={s.imgCont} style={{ background: hideCircle? 'transparent' : 'radial-gradient(rgb(255, 255, 255) 20% , #8d8d8d 120%)'}}>
          <img className={s.portfolioDevImg} src={img} alt="" loading="lazy" />
        </div>
      <ul className={s.viewerUl}>
        <h1 className={s.title}>Gerardo guarda
        <br/>
          <p>gwerh</p>
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
            <button className={s.resumeButton}>
              <Link to='/home/cv' className={s.resumeLink}>
                  {
                    language==='EN'?
                    'check resume' : 'ver cv'
                  }
              </Link>
            </button>
            <button className={s.resumeButton}>
              <Link to='/contact' className={s.resumeLink}>
                  {
                    language==='EN'?
                    'contact' : 'contacto'
                  }
              </Link>
            </button>
          </div>
        </h1>
      </ul>
      </motion.div>
      </div>

    )
}
