import s from './css/SocialLinks.module.css'
import linkedinIcon from "../../../../assets/images/linkedin-icon.png"
import githubIcon from "../../../../assets/images/github-icon.png"

export const SocialLinks = (props) =>{
  const {gitHub, linkedIn} = props
  return(
    <div className={s.Container}>
      <div className={s.item}><a href={gitHub} target='_blank' rel="noreferrer"><img alt='img' src={githubIcon} className={s.icons} /></a></div>
      <div className={s.item}><a href={linkedIn} target='_blank' rel="noreferrer"><img alt='img' src={linkedinIcon} className={s.icons} /></a></div>
    </div>
)}