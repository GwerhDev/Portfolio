import { useSelector } from 'react-redux'
import { closeInfoCanvas, handleClickOutside } from '../../../../functions/InfoCanvasFunctions'
import s from './css/InfoCanvas.module.css'

export const InfoCanvas = (props) => {
    const { title } = props
    const  img = useSelector(state=>state.infoImg)

    return (
        <div className={s.infoContainer} id='infoCanvasDisplay' style={{ backdropFilter: 'blur(10px)'}} onClick={(e) => handleClickOutside(e)}>
            <div className={s.infoDiv} style={{backgroundImage:`url(${img})`}}>
                <ul className={s.ulCont} id='ulCont' style={{position:`relative`, backdropFilter: 'blur(50px)'}}>
                    <button className={s.closeButton} onClick={() => closeInfoCanvas()}>x</button>
                    <p>{title}</p>
                    <img src={img} alt="" width='300px' />
                </ul>
            </div>
        </div>
    )
}