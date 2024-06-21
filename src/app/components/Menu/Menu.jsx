import s from "./Menu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { setSelection } from "../../../middlewares/redux/actions";
import { SocialLinks } from "../Utils/SocialLinks/SocialLinks";
import { GITHUB_URL, LINKEDIN_URL } from "../../../middlewares/config";

export const Menu = () => {
  const dispatch = useDispatch()
  const language = useSelector(state => state.language)
  return (
    <>
      <div
        className={s.divH2}
        onClick={() => {
          return (
            dispatch(setSelection('intro')),
            document.querySelector('#profileLalo').style.transform = 'translateX(-40vw)',
            document.querySelector('#profileLalo').style.opacity = '0',
            document.querySelector('#navCont').style.transform = 'translateX(0)'
          )
        }
        }
      >
        <Link to="/home/intro" className={s.linkMenu}>
          {language === 'EN' ? 'intro' : 'intro'}
        </Link>
      </div>

      <div
        className={s.divH2}
        onClick={() => {
          return (
            dispatch(setSelection('bio')),
            document.querySelector('#profileLalo').style.transform = 'translateX(-40vw)',
            document.querySelector('#profileLalo').style.opacity = '0',
            document.querySelector('#navCont').style.transform = 'translateX(0)'
          )
        }}
      >
        <Link to="/home/bio" className={s.linkMenu}>
          bio
        </Link>
      </div>
      <div
        className={s.divH2}
        onClick={() => {
          return (
            dispatch(setSelection('resume')),
            document.querySelector('#profileLalo').style.transform = 'translateX(-40vw)',
            document.querySelector('#profileLalo').style.opacity = '0',
            document.querySelector('#navCont').style.transform = 'translateX(0)'
          )
        }}
      >
        <Link to="/home/resume" className={s.linkMenu}>
          {language === 'EN' ? 'resume' : 'cv'}
        </Link>
      </div>
      <div className={s.contSL}>
        <SocialLinks gitHub={GITHUB_URL} linkedIn={LINKEDIN_URL} />
      </div>
    </>
  )
};