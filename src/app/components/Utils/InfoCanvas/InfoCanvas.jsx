import { useSelector } from 'react-redux'
import { handleClickOutside } from '../../../../functions/InfoCanvasFunctions'
import s from './InfoCanvas.module.css'
import linkIcon from '../../../../assets/images/svg/openwindow-icon.svg'

export const InfoCanvas = () => {
    const language = useSelector(state=>state.language);
    const info = useSelector(state=>state.info);
    
    return (
        <div className={s.infoContainer} id='infoCanvasDisplay' onClick={(e) => handleClickOutside(e)}>
            <div className={s.infoDiv} style={{ backgroundImage:`url(${info.img})` }}>
                <ul className={s.ulCont} id='ulCont'>
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
                            {
                                info.url?.length?
                                <button className={s.divButtonA}>
                                    <a className={s.divButton} href={info.url} target='_blank' rel='noreferrer'> 
                                        <p>{language==='EN'? "visit" : "visitar"}</p>
                                    </a>
                                </button>
                                : null
                            }

                            {
                                info.download?.length?
                                <button className={s.divButtonA}>
                                    <a className={s.divButton} href={info.download} target='_blank' rel='noreferrer'> 
                                        <p>{language==='EN'? "download" : "descargar"}</p>
                                    </a>
                                </button>
                                : null
                            }

                            {
                                info.github?.frontend?.length?
                                <button className={s.divButtonA}>
                                    <a className={s.divButton} href={info.github?.frontend} target='_blank' rel='noreferrer'> 
                                        <p>github - frontend</p>
                                    </a>
                                </button>
                                : null
                            }

                            {
                                info.github?.backend?.length?
                                <button className={s.divButtonA}>
                                    <a className={s.divButton} href={info.github?.backend} target='_blank' rel='noreferrer'> 
                                        <p>github - backend</p>
                                    </a>
                                </button>
                                : null
                            }

                            {
                                info.github?.code?.length?
                                <button className={s.divButtonA}>
                                    <a className={s.divButton} href={info.github?.backend} target='_blank' rel='noreferrer'> 
                                        <p>github</p>
                                    </a>
                                </button>
                                : null
                            }
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