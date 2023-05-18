import { useSelector } from 'react-redux'
import s from './css/Options.module.css'
import showMoreIcon from '../../images/showmore-icon.png'

export const OptionTitle = (props) => {
    const { title, color, displayButton, funct, cursor } = props
    const language = useSelector(state=>state.language)
    return (
        <div className={s.contTitle} onClick={funct}>
            <h1 style={{
                display: 'flex', 
                justifyContent: 'center', 
                fontFamily: 'Trajan', 
                color: color, 
                fontSize:'20px', 
                textShadow:'1.5px 1px 5px black',
                cursor: cursor
                }}
            >
                {title==='cv' && language==='EN'? 'resume': title}
                <img src={showMoreIcon} alt="" width={'25px'} style={{display: displayButton?? 'none'}}/>
            </h1>
        </div>
    )
}