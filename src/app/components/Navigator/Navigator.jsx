import s from "./Navigator.module.css";
import { motion } from 'framer-motion';
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSelection } from "../../../middlewares/redux/actions";
import { removeLocalStorage } from "../../../functions/RemoveLocalStorage";
import { disappear, optionActive } from "../../../functions/NavigationFunctions";
import { ScrollToSection } from "../../../functions/ScrollToSection";

export const Navigator = () => {
  const selection = useSelector(state => state.selection);
  const language = useSelector(state => state.language);

  function activeSelection() {
    switch (selection) {
      case 'develop':
        return s.webImg;
      case 'design':
        return s.designImg;
      case 'sound':
        return s.soundImg;
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
          <li>
            <div
              className={s.profileImg}
              id='profile'
              onClick={() => {
                return (
                  document.querySelector('#profileLalo').style.transform = 'translateX(0)',
                  document.querySelector('#profileLalo').style.opacity = '1',
                  document.querySelector('#navCont').style.transform = 'translateX(40vw)'
                )
              }}
              onMouseEnter={() => { return (document.querySelector('#menu').style.scale = '1') }}
              onMouseLeave={() => { return (document.querySelector('#menu').style.scale = '0') }}
            >
              <button className={s.menuItem} id='menu' disabled>
                {language === 'EN' ? 'menu' : 'menu'}
              </button>
            </div>

            <div
              className={s.homeImg}
              id='home'
              onClick={() => {
                return (
                  ScrollToSection('presentation-section'),
                  setSelection(selection),
                  document.querySelector('#profileLalo').style.transform = 'translateX(-40vw)',
                  document.querySelector('#profileLalo').style.opacity = '0',
                  document.querySelector('#navCont').style.transform = 'translateX(0vw)'
                )
              }}
              onMouseEnter={() => { return (document.querySelector('#menuHome').style.scale = '1') }}
              onMouseLeave={() => { return (document.querySelector('#menuHome').style.scale = '0') }}
            >
              <button className={s.menuItem} id='menuHome' disabled>
                {language === 'EN' ? 'Home' : 'Inicio'}
              </button>
            </div>
            <div
              className={activeSelection()}
              id='projects'
              onClick={() => {
                return (
                  ScrollToSection('projects-section', 'smooth'),
                  document.querySelector('#profileLalo').style.transform = 'translateX(-40vw)',
                  document.querySelector('#profileLalo').style.opacity = '0',
                  document.querySelector('#navCont').style.transform = 'translateX(0vw)'
                )
              }}
              onMouseEnter={() => { return (document.querySelector('#menuProjects').style.scale = '1') }}
              onMouseLeave={() => { return (document.querySelector('#menuProjects').style.scale = '0') }}
            >
              <button className={s.menuItem} id='menuProjects' disabled>
                {
                  language === 'EN' ? 'projects' : 'proyectos'
                }
              </button>
            </div>

{/*             <div
              className={s.experienceImg}
              id='experience'
              onClick={() => {
                return (
                  ScrollToSection('experienceSection', 'auto'),
                  document.querySelector('#profileLalo').style.transform = 'translateX(-40vw)',
                  document.querySelector('#profileLalo').style.opacity = '0',
                  document.querySelector('#navCont').style.transform = 'translateX(0vw)'
                )
              }}
              onMouseEnter={() => { return (document.querySelector('#menuExperience').style.scale = '1') }}
              onMouseLeave={() => { return (document.querySelector('#menuExperience').style.scale = '0') }}
            >
              <button className={s.menuItem} id='menuExperience' disabled>
                {language === 'EN' ? 'experience' : 'experiencia'}
              </button>
            </div> */}

            <div
              className={s.skillsImg}
              id='skills'
              onClick={() => {
                return (
                  ScrollToSection('skills-section', 'smooth'),
                  document.querySelector('#profileLalo').style.transform = 'translateX(-40vw)',
                  document.querySelector('#profileLalo').style.opacity = '0',
                  document.querySelector('#navCont').style.transform = 'translateX(0vw)'
                )
              }}
              onMouseEnter={() => { return (document.querySelector('#menuSkills').style.scale = '1') }}
              onMouseLeave={() => { return (document.querySelector('#menuSkills').style.scale = '0') }}
            >
              <button className={s.menuItem} id='menuSkills' disabled>
                {language === 'EN' ? 'skills' : 'habilidades'}
              </button>
            </div>
            <a id='contact' href='mailto:gwerh.dev@gmail.com' >
              <div  className={s.contactImg}>

              </div>
              <button className={s.menuItem} id='menuContact' disabled>
                {language === 'EN' ? 'contact' : 'contacto'}
              </button>
            </a>
            <Link to='/'>
              <div className={s.logoutImg} onClick={() => { return removeLocalStorage() }}
                onMouseEnter={() => { return (document.querySelector('#menuLogout').style.scale = '1') }}
                onMouseLeave={() => { return (document.querySelector('#menuLogout').style.scale = '0') }}
              >
                <button className={s.menuItem} id='menuLogout' disabled>
                  {language === 'EN' ? 'logout' : 'salir'}
                </button>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </motion.div>
  )
};