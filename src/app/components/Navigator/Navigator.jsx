import s from "./Navigator.module.css";
import { motion } from 'framer-motion';
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSelection } from "../../../middlewares/redux/actions";
import { removeLocalStorage } from "../../../functions/RemoveLocalStorage";
import { disappear, optionActive } from "../../../functions/NavigationFunctions";
import { ScrollToSection } from "../../../functions/ScrollToSection";
import { closePanel, openPanel } from "../../../functions/LateralPanelFunctions";
import menuIcon from '../../../assets/images/png/menu-icon.png';
import homeIcon from '../../../assets/images/png/home-icon.png';
import devIcon from '../../../assets/images/png/dev-icon.png';
import soundIcon from '../../../assets/images/png/sound-icon.png';
import designIcon from '../../../assets/images/png/design-icon.png';
import skillsIcon from '../../../assets/images/svg/skills-icon.svg';
import contactIcon from '../../../assets/images/png/contact-icon.png';
import logoutIcon from '../../../assets/images/png/logout-icon.png';

export const Navigator = () => {
  const selection = useSelector(state => state.selection);
  const language = useSelector(state => state.language);

  function activeSelection() {
    switch (selection) {
      case 'develop':
        return devIcon;
      case 'design':
        return designIcon;
      case 'sound':
        return soundIcon;
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
            id='lateralMenu'
            onClick={openPanel}
            onMouseEnter={() => { return (document.querySelector('#menu').style.scale = '1') }}
            onMouseLeave={() => { return (document.querySelector('#menu').style.scale = '0') }}
          >
            <img className={s.navImg} src={menuIcon} alt="" width="30" />
            <button className={s.menuItem} id='menu' disabled>
              {language === 'EN' ? 'menu' : 'menu'}
            </button>
          </li>

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
            <img className={s.navImg} src={homeIcon} alt="" width="30" />
            <button className={s.menuItem} id='menuHome' disabled>
              {language === 'EN' ? 'Home' : 'Inicio'}
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
            <img className={s.navImg} src={activeSelection()} alt="" width="30" />
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
            <img className={s.navImg} src={skillsIcon} alt="" width="30" />
            <button className={s.menuItem} id='menuSkills' disabled>
              {language === 'EN' ? 'skills' : 'habilidades'}
            </button>
          </li>
          <a id='contact' href='mailto:gwerh.dev@gmail.com' >
            <img className={s.navImg} src={contactIcon} alt="" width="30" />
            <button className={s.menuItem} id='menuContact' disabled>
              {language === 'EN' ? 'contact' : 'contacto'}
            </button>
          </a>
          <Link to='/'>
            <li
              onClick={() => { return removeLocalStorage() }}
              onMouseEnter={() => { return (document.querySelector('#menuLogout').style.scale = '1') }}
              onMouseLeave={() => { return (document.querySelector('#menuLogout').style.scale = '0') }}
            >
              <img className={s.navImg} src={logoutIcon} alt="" width="30" />
              <button className={s.menuItem} id='menuLogout' disabled>
                {language === 'EN' ? 'logout' : 'salir'}
              </button>
            </li>
          </Link>
        </ul>
      </div>
    </motion.div>
  )
};