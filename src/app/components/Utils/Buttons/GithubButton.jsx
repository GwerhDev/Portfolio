import s from "./GithubButton.module.css";
import githubIcon from "../../../../assets/images/png/github-icon.png";

export const GithubButton = (props) => {
  const { url } = props;

  return (
    <a className={s.container} href={url} target="_blank" rel="noreferrer">
      <img src={githubIcon} alt="github" />
    </a>
  )
}
