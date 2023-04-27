import { Link } from "react-router-dom"
import s from './css/PresentationCard.module.css'


export const PresentationCard = (props) => {
    const {img, language, description} = props
    return (
        <div className={s.viewerCont}>
        <div className={s.imgCont}>
          <img className={s.portfolioDevImg} src={img} alt="" />
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
            <Link to='/lalofreak/home/cv'>
              <button className={s.resumeButton}>
                {
                  language==='EN'?
                  'check resume' : 'ver cv'
                }
              </button>
            </Link>
            <Link to='/lalofreak/contact'>
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
      </div>

    )
}
