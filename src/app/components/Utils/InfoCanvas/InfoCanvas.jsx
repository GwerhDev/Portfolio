import { useSelector } from 'react-redux'
import { handleClickOutside } from '../../../../functions/InfoCanvasFunctions'
import s from './css/InfoCanvas.module.css'
import linkIcon from '../../../../assets/images/png/openwindow-white-icon.png'

export const InfoCanvas = () => {
    const info = useSelector(state=>state.info)
    return (
        <div className={s.infoContainer} id='infoCanvasDisplay' onClick={(e) => handleClickOutside(e)}>
            <div className={s.infoDiv} style={{backgroundImage:`url(${info.img})`}}>
                <ul className={s.ulCont} id='ulCont'>
                    {/* <button className={s.closeButton} onClick={() => closeInfoCanvas()}>x</button> */}
                    <a href={info.url} target='_blank' rel='noreferrer'> 
                        <div className={s.titleCont}>
                            <p>{info.title}</p>
                            <img src={linkIcon} alt="" height="20px" />
                        </div>
                    </a>
                    <div className={s.infoCont}>
                        <img 
                            src={info.img} 
                            alt={info.title} 
                            style={{ 
                                height: info.type === 'mobile'? `300px`: 'auto',
                                width: info.type !== 'mobile'? `300px`: 'auto',                            
                            }} 
                        />
                        <div className={s.buttonsCont}>
                            <button className={s.divButtonA}>
                                <a className={s.divButton} href={info.url} target='_blank' rel='noreferrer'> 
                                    <p>Visitar</p>
                                </a>
                            </button>
                            <button className={s.divButtonA}>
                                <a className={s.divButton} href={info.github} target='_blank' rel='noreferrer'> 
                                    <p>GitHub</p>
                                </a>
                            </button>
                        </div>
                        <div className={s.externalTextCont}>
                            <div className={s.textCont}>
                                <p>{info.description}</p>
                                <p>{info.technologies}</p>
                                <p>{info.role}</p>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    )
}