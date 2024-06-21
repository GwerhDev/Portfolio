import s from './SoundSkills.module.css';
import reaperSVG from '../../../assets/images/svg/reaper-icon.svg';
import protoolsSVG from '../../../assets/images/svg/protools-icon.svg';
import cubaseSVG from '../../../assets/images/svg/cubase-icon.svg';

export const SoundSkills = (props) => {
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
              <img className={s.svgIcons} src={reaperSVG} alt="" />
              <h5 style={{ color: 'white' }}>Reaper</h5>
            </li>
            <li className={s.icon}>
              <img className={s.svgIcons} src={protoolsSVG} alt="" />
              <h5 style={{ color: 'white' }}>ProTools</h5>
            </li>
            <li className={s.icon}>
              <img className={s.svgIcons} src={cubaseSVG} alt="" />
              <h5 style={{ color: 'white' }}>Cubase</h5>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}