import s from './InfoCanvas.module.css';
import { useSelector } from 'react-redux';
import { Slider } from '../Slider/Slider';
import { handleClickOutside } from '../../../../functions/InfoCanvasFunctions';
import linkIcon from '../../../../assets/images/svg/openwindow-icon.svg';

export const InfoCanvas = () => {
  const info = useSelector(state => state.info);
  const language = useSelector(state => state.language);

  return (
    <div className={s.infoContainer} id='infoCanvasDisplay' onClick={(e) => handleClickOutside(e)}>
      <ul className={s.ulCont} id='ulCont'>
        <a href={info.url} target='_blank' rel='noreferrer'>
          <div className={s.titleCont}>
            <h3>{info.title}</h3>
            <img src={linkIcon} alt="" height="20px" />
          </div>
        </a>
        <div className={s.infoCont}>
          <Slider gallery={info.gallery} />
          <div className={s.buttonsCont}>
            {
              info.url?.length
                ?
                <a className={s.divButton} href={info.url} target='_blank' rel='noreferrer'>
                  <p>{language === 'EN' ? "visit" : "visitar"}</p>
                </a>
                :
                null
            }

            {
              info.download?.length
                ?
                <a className={s.divButton} href={info.download} target='_blank' rel='noreferrer'>
                  <p>{language === 'EN' ? "download" : "descargar"}</p>
                </a>
                :
                null
            }

            {
              info.github?.frontend?.length
                ?
                <a className={s.divButton} href={info.github?.frontend} target='_blank' rel='noreferrer'>
                  <p>github - frontend</p>
                </a>
                :
                null
            }

            {
              info.github?.backend?.length
                ?
                <a className={s.divButton} href={info.github?.backend} target='_blank' rel='noreferrer'>
                  <p>github - backend</p>
                </a>
                :
                null
            }

            {
              info.github?.code?.length
                ?
                <a className={s.divButton} href={info.github?.backend} target='_blank' rel='noreferrer'>
                  <p>github</p>
                </a>
                :
                null
            }
          </div>
          <div className={s.textCont}>
            <p>{info.description}</p>
            <p>{info.technologies}</p>
            <p>{info.role}</p>
          </div>
        </div>
      </ul>
    </div>
  )
}