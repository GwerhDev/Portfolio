import s from './css/Title.module.css';
import { useSelector } from 'react-redux';
import showMoreIcon from '../../../../assets/images/png/showmore-icon.png';

export const Title = (props) => {
    const { title, color, displayButton, funct, cursor, angle, backgroundColor, top } = props
    const language = useSelector(state=>state.language)
    return (
        <div className={s.contTitle} onClick={funct} style={{top: top?? '70px', cursor, backgroundColor: backgroundColor? 'rgba(143, 143, 143, 0.37)' : 'transparent'}}>
            <h1 style={{ color }}>
                {title==='cv' && language==='EN'? 'resume': title}
                <img id='showMoreIcon' className={s.showMoreIcon} src={showMoreIcon} alt="" width={'25px'} style={{display: displayButton?? 'none', rotate: angle }}/>
            </h1>
        </div>
    )
}