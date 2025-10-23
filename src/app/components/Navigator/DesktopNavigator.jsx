import s from "./DesktopNavigator.module.css";
import { motion } from 'framer-motion';
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setSelection } from "../../../middlewares/redux/actions";
import { disappear, optionActive } from "../../../functions/NavigationFunctions";
import { ScrollToSection } from "../../../functions/ScrollToSection";
import { closePanel } from "../../../functions/LateralPanelFunctions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBriefcase, faCode, faPalette, faMusic, faWrench, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const DesktopNavigator = () => {
  const selection = useSelector(state => state.selection);
  const language = useSelector(state => state.language);

  function activeSelection() {
    switch (selection) {
      case 'develop':
        return faCode;
      case 'design':
        return faPalette;
      case 'sound':
        return faMusic;
      default:
        return;
    }
  }

  useEffect(() => {
    optionActive(selection ? selection : '');
    disappear();
  }, [selection]);

  return (
    <motion.div
      className={s.nav}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      animate={{ opacity: 1, x: 0 }}
      drag='y'
      dragConstraints={{
        top: -80,
        bottom: 50,
      }}
    >
      <div className={s.navCont} id='navCont'>
        <ul className={s.ulCont}>
          <li
            id='home'
            onClick={() => {
              ScrollToSection('presentation-section');
              setSelection(selection);
              closePanel();
            }}
            onMouseEnter={() => { return (document.querySelector('#menuHome').style.scale = '1') }}
            onMouseLeave={() => { return (document.querySelector('#menuHome').style.scale = '0') }}
          >
            <FontAwesomeIcon className={s.navImg} icon={faHome} />
            <button className={s.menuItem} id='menuHome' disabled>
              {language === 'EN' ? 'Home' : 'Inicio'}
            </button>
          </li>

          <li
            id='experience'
            onClick={() => {
              ScrollToSection('experience-section', 'smooth');
              closePanel();
            }}
            onMouseEnter={() => { return (document.querySelector('#menuExperience').style.scale = '1') }}
            onMouseLeave={() => { return (document.querySelector('#menuExperience').style.scale = '0') }}
          >
            <FontAwesomeIcon className={s.navImg} icon={faBriefcase} />
            <button className={s.menuItem} id='menuExperience' disabled>
              {
                language === 'EN' ? 'experience' : 'experiencia'
              }
            </button>
          </li>

          <li
            id='projects'
            onClick={() => {
              ScrollToSection('projects-section', 'smooth');
              closePanel();
            }}
            onMouseEnter={() => { return (document.querySelector('#menuProjects').style.scale = '1') }}
            onMouseLeave={() => { return (document.querySelector('#menuProjects').style.scale = '0') }}
          >
            <FontAwesomeIcon className={s.navImg} icon={activeSelection()} />
            <button className={s.menuItem} id='menuProjects' disabled>
              {
                language === 'EN' ? 'projects' : 'proyectos'
              }
            </button>
          </li>

          <li
            id='skills'
            onClick={() => {
              ScrollToSection('skills-section', 'smooth');
              closePanel();
            }}
            onMouseEnter={() => { return (document.querySelector('#menuSkills').style.scale = '1') }}
            onMouseLeave={() => { return (document.querySelector('#menuSkills').style.scale = '0') }}
          >
            <FontAwesomeIcon className={s.navImg} icon={faWrench} />
            <button className={s.menuItem} id='menuSkills' disabled>
              {language === 'EN' ? 'skills' : 'habilidades'}
            </button>
          </li>
          <li
            id='contact'
            onClick={() => {
              closePanel();
            }}
            onMouseEnter={() => { return (document.querySelector('#menuContact').style.scale = '1') }}
            onMouseLeave={() => { return (document.querySelector('#menuContact').style.scale = '0') }}

          >
            <a href='mailto:gwerh.dev@gmail.com'>
              <FontAwesomeIcon className={s.navImg} icon={faEnvelope} />
            </a>
            <button className={s.menuItem} id='menuContact' disabled>
              {language === 'EN' ? 'contact' : 'contacto'}
            </button>
          </li>
        </ul>
      </div>
    </motion.div>
  )
};