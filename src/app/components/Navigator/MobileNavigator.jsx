import s from "./MobileNavigator.module.css";
import { motion } from 'framer-motion';
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setSelection } from "../../../middlewares/redux/actions";
import { disappear, optionActive } from "../../../functions/NavigationFunctions";
import { ScrollToSection } from "../../../functions/ScrollToSection";
import { closePanel } from "../../../functions/LateralPanelFunctions";
import homeIcon from '../../../assets/images/png/home-icon.png';
import devIcon from '../../../assets/images/png/dev-icon.png';
import soundIcon from '../../../assets/images/png/sound-icon.png';
import designIcon from '../../../assets/images/png/design-icon.png';
import skillsIcon from '../../../assets/images/svg/skills-icon.svg';
import contactIcon from '../../../assets/images/png/contact-icon.png';
import experienceIcon from '../../../assets/images/svg/experience-icon.svg';

export const MobileNavigator = () => {
  const selection = useSelector(state => state.selection);

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
            <img className={s.navImg} src={homeIcon} alt="" width="30" />
          </li>

          <li
            id='experience'
            onClick={() => {
              ScrollToSection('experience-section', 'smooth');
              closePanel();
            }}
          >
            <img className={s.navImg} src={experienceIcon} alt="" width="30" />
          </li>

          <li
            id='projects'
            onClick={() => {
              ScrollToSection('projects-section', 'smooth');
              closePanel();
            }}
          >
            <img className={s.navImg} src={activeSelection()} alt="" width="30" />
          </li>

          <li
            id='skills'
            onClick={() => {
              ScrollToSection('skills-section', 'smooth');
              closePanel();
            }}
          >
            <img className={s.navImg} src={skillsIcon} alt="" width="30" />
          </li>
          <li
            id='contact'
            onClick={() => {
              ScrollToSection('skills-section', 'smooth');
              closePanel();
            }}
          >
            <a href='mailto:gwerh.dev@gmail.com'>
              <img className={s.navImg} src={contactIcon} alt="" width="30" />
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  )
};