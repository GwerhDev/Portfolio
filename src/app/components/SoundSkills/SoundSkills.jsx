import s from './SoundSkills.module.css';
import reaperSVG from '../../../assets/images/svg/reaper-icon.svg';
import protoolsSVG from '../../../assets/images/svg/protools-icon.svg';
import cubaseSVG from '../../../assets/images/svg/cubase-icon.svg';

export const SoundSkills = () => {
  return (
    <div className={s.container}>
      <section className="section-container">
        <div className={s.skillsCont}>
          <ul className={s.iconList}>
            <li className={s.icon}>
              <img className={s.svgIcons} src={reaperSVG} alt="" />
              <h5 style={{ color: 'var(--app-white);' }}>Reaper</h5>
            </li>
            <li className={s.icon}>
              <img className={s.svgIcons} src={protoolsSVG} alt="" />
              <h5 style={{ color: 'var(--app-white);' }}>ProTools</h5>
            </li>
            <li className={s.icon}>
              <img className={s.svgIcons} src={cubaseSVG} alt="" />
              <h5 style={{ color: 'var(--app-white);' }}>Cubase</h5>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}