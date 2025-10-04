import s from './DesignSkills.module.css';
import blenderSVG from '../../../assets/images/svg/blender-icon.svg';
import photoshopSVG from '../../../assets/images/svg/photoshop-icon.svg';
import rhinocerosSvg from '../../../assets/images/svg/rhinoceros-icon.svg';
import premiereproSVG from '../../../assets/images/svg/premierepro-icon.svg';
import illustratorSVG from '../../../assets/images/svg/illustrator-icon.svg';
import aftereffectsSVG from '../../../assets/images/svg/aftereffects-icon.svg';

export const DesignSkills = () => {
  return (
    <div className={s.container}>
      <div className={s.skillsCont}>
        <ul className={s.iconList}>
          <li className={s.icon}>
            <img className={s.svgIcons} src={photoshopSVG} alt="" />
            <h5 style={{ color: 'var(--app-white)' }}>PhotoSHop</h5>
          </li>
          <li className={s.icon}>
            <img className={s.svgIcons} src={illustratorSVG} alt="" />
            <h5 style={{ color: 'var(--app-white)' }}>Illustrator</h5>
          </li>
          <li className={s.icon}>
            <img className={s.svgIcons} src={premiereproSVG} alt="" />
            <h5 style={{ color: 'var(--app-white)' }}>PremierePro</h5>
          </li>
          <li className={s.icon}>
            <img className={s.svgIcons} src={aftereffectsSVG} alt="" />
            <h5 style={{ color: 'var(--app-white)' }}>AfterEffects</h5>
          </li>
          <li className={s.icon}>
            <img className={s.svgIcons} src={blenderSVG} alt="" />
            <h5 style={{ color: 'var(--app-white)' }}>Blender</h5>
          </li>
          <li className={s.icon}>
            <img className={s.svgIcons} src={rhinocerosSvg} alt="" />
            <h5 style={{ color: 'var(--app-white)' }}>Rhinoceros</h5>
          </li>
        </ul>
      </div>
    </div>
  )
}