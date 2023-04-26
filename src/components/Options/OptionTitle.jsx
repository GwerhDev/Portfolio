import { useSelector } from 'react-redux'
import s from './css/Options.module.css'

export const OptionTitle = (props) => {
    const {title, color} = props
    const language = useSelector(state=>state.language)
    return (
        <div className={s.contTitle}>
            <h1 style={{fontFamily: 'Trajan', color: color, fontSize:'20px', textShadow:'1.5px 1px 5px black'}}>
                {title==='cv' && language==='EN'? 'resume': title}
            </h1>
        </div>
    )
}