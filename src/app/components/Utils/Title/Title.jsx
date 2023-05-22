import s from './css/Title.module.css';
import { useSelector } from 'react-redux';
import showMoreIcon from '../../../../assets/images/png/showmore-icon.png';

export const Title = (props) => {
    const { title, color, displayButton, funct, cursor, angle, backgroundColor } = props
    const language = useSelector(state=>state.language)
    return (
        <div className={s.contTitle} onClick={funct} style={{cursor: cursor, backgroundColor: backgroundColor? 'rgba(143, 143, 143, 0.37)' : 'transparent'}}>
            <h1 style={{
                display: 'flex', 
                justifyContent: 'center', 
                fontFamily: 'Trajan', 
                color: color, 
                textShadow:'1.5px 1px 5px black',
                width: "auto",
                }}
            >
                {title==='cv' && language==='EN'? 'resume': title}
                <img id='showMoreIcon' className={s.showMoreIcon} src={showMoreIcon} alt="" width={'25px'} style={{display: displayButton?? 'none', rotate: angle, transitionDuration: '.4s'}}/>
            </h1>
        </div>
    )
}