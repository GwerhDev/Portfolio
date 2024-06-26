import s from "./SocialLinks.module.css";
import upworkIcon from "../../../../assets/images/svg/upwork-icon.svg";
import githubIcon from "../../../../assets/images/png/github-icon.png";
import linkedinIcon from "../../../../assets/images/png/linkedin-icon.png";

export const SocialLinks = (props) => {
  const { gitHub, linkedIn, upWork } = props;
  return (
    <span className={s.container}>
      <div className={s.item}>
        <a href={gitHub} target='_blank' rel="noreferrer">
          <img alt='img' src={githubIcon} className={s.icons} />
        </a>
      </div>
      <div className={s.item}>
        <a href={linkedIn} target='_blank' rel="noreferrer">
          <img alt='img' src={linkedinIcon} className={s.icons} />
        </a>
      </div>
      <div className={s.item}>
        <a href={upWork} target='_blank' rel="noreferrer">
          <img alt='img' src={upworkIcon} className={s.icons} />
        </a>
      </div>
    </span>
  )
}