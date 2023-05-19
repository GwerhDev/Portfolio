import s from './css/InfoCanvas.module.css'

export const SocialLinks = (props) =>{
    const {text} = props
    return(
        <div className={s.infoContainer}>
            <p>{text}</p>
        </div>
  )}