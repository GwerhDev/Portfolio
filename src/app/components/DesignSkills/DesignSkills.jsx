import s from './DesignSkills.module.css';
import photoshopSVG from '../../../assets/images/svg/photoshop-icon.svg';
import premiereproSVG from '../../../assets/images/svg/premierepro-icon.svg';
import illustratorSVG from '../../../assets/images/svg/illustrator-icon.svg';
import aftereffectsSVG from '../../../assets/images/svg/aftereffects-icon.svg';
import blenderSVG from '../../../assets/images/svg/blender-icon.svg';
import rhinocerosSvg from '../../../assets/images/svg/rhinoceros-icon.svg';

export const DesignSkills = (props) => {
  const { language } = props
  return (
    <div className={s.container}>
      <section className="section-container">
        <div className={s.skillsCont}>
          <div className={s.titleCont}>
            <h1>{language === 'EN' ? 'Skills' : 'Habilidades'}</h1>
          </div>
          <ul className={s.iconList}>
            <li className={s.icon}>
              <img className={s.svgIcons} src={photoshopSVG} alt="" />
              <h5 style={{ color: 'white' }}>PhotoSHop</h5>
            </li>
            <li className={s.icon}>
              <img className={s.svgIcons} src={illustratorSVG} alt="" />
              <h5 style={{ color: 'white' }}>Illustrator</h5>
            </li>
            <li className={s.icon}>
              <img className={s.svgIcons} src={premiereproSVG} alt="" />
              <h5 style={{ color: 'white' }}>PremierePro</h5>
            </li>
            <li className={s.icon}>
              <img className={s.svgIcons} src={aftereffectsSVG} alt="" />
              <h5 style={{ color: 'white' }}>AfterEffects</h5>
            </li>
            <li className={s.icon}>
              <img className={s.svgIcons} src={blenderSVG} alt="" />
              <h5 style={{ color: 'white' }}>Blender</h5>
            </li>
            <li className={s.icon}>
              <img className={s.svgIcons} src={rhinocerosSvg} alt="" />
              <h5 style={{ color: 'white' }}>Rhinoceros</h5>
            </li>
          </ul>
        </div>
      </section>
    </div>

  )
}