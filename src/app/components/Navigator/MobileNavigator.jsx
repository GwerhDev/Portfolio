import s from "./MobileNavigator.module.css";
import { motion } from 'framer-motion';
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setSelection } from "../../../middlewares/redux/actions";
import { disappear, optionActive } from "../../../functions/NavigationFunctions";
import { ScrollToSection } from "../../../functions/ScrollToSection";
import { closePanel } from "../../../functions/LateralPanelFunctions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBriefcase, faCode, faPalette, faMusic, faWrench, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const MobileNavigator = () => {
  const selection = useSelector(state => state.selection);

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
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
      animate={{ opacity: 1, y: 0 }}
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
          >
            <FontAwesomeIcon className={s.navImg} icon={faHome} />
          </li>

          <li
            id='experience'
            onClick={() => {
              ScrollToSection('experience-section', 'smooth');
              closePanel();
            }}
          >
            <FontAwesomeIcon className={s.navImg} icon={faBriefcase} />
          </li>

          <li
            id='projects'
            onClick={() => {
              ScrollToSection('projects-section', 'smooth');
              closePanel();
            }}
          >
            <FontAwesomeIcon className={s.navImg} icon={activeSelection()} />
          </li>

          <li
            id='skills'
            onClick={() => {
              ScrollToSection('skills-section', 'smooth');
              closePanel();
            }}
          >
            <FontAwesomeIcon className={s.navImg} icon={faWrench} />
          </li>
          <li
            id='contact'
            onClick={() => {
              closePanel();
            }}
          >
            <a href='mailto:gwerh.dev@gmail.com'>
              <FontAwesomeIcon className={s.navImg} icon={faEnvelope} />
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  )
};