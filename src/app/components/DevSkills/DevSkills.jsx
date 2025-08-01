import s from './DevSkills.module.css';
import htmlSVG from '../../../assets/images/svg/html-icon.svg';
import cssSVG from '../../../assets/images/svg/css-icon.svg';
import pythonSVG from '../../../assets/images/svg/python-icon.svg';
import jsSVG from '../../../assets/images/svg/js-icon.svg';
import tsSVG from '../../../assets/images/svg/ts-icon.svg';
import reactSVG from '../../../assets/images/svg/react-icon.svg';
import nextSVG from '../../../assets/images/svg/next-icon.svg';
import reduxSVG from '../../../assets/images/svg/redux-icon.svg';
import nodeSVG from '../../../assets/images/svg/node-icon.svg';
import expressSVG from '../../../assets/images/svg/express-icon.svg';
import postgresqlSVG from '../../../assets/images/svg/postgresql-icon.svg';
import electronSVG from '../../../assets/images/svg/electronjs-icon.svg';
import tensorflowSVG from '../../../assets/images/svg/tensorflow-icon.svg';
import threeSVG from '../../../assets/images/svg/threejs-icon.svg';
import angularSVG from '../../../assets/images/svg/angular-icon.svg';
import vueSVG from '../../../assets/images/svg/vue-icon.svg';
import djangoSVG from '../../../assets/images/svg/django-icon.svg';

export const DevSkills = () => {
  return (
    <div className={s.container}>
        <div className={s.skillsCont}>
          <ul className={s.iconList}>
            <li className={s.icon}>
              <img className={s.svgIcons} src={htmlSVG} alt="" />
              <h5 style={{ color: 'var(--app-white);' }}>HTML</h5>
            </li>
            <li className={s.icon}>
              <img className={s.svgIcons} src={cssSVG} alt="" />
              <h5 style={{ color: 'var(--app-white);' }}>CSS</h5>
            </li>
            <li className={s.icon}>
              <img className={s.svgIcons} src={pythonSVG} alt="" />
              <h5 style={{ color: 'var(--app-white);' }}>Python</h5>
            </li>
            <li className={s.icon}>
              <img className={s.svgIcons} src={jsSVG} alt="" />
              <h5 style={{ color: 'var(--app-white);' }}>JavaScript</h5>
            </li>
            <li className={s.icon}>
              <img className={s.svgIcons} src={tsSVG} alt="" />
              <h5 style={{ color: 'var(--app-white);' }}>TypeScript</h5>
            </li>
            <li className={s.icon}>
              <img className={s.svgIcons} src={reactSVG} alt="" />
              <h5 style={{ color: 'var(--app-white);' }}>ReactJS</h5>
            </li>
            <li className={s.icon}>
              <img className={s.svgIcons} src={angularSVG} alt="" />
              <h5 style={{ color: 'var(--app-white);' }}>AngularJS</h5>
            </li>
            <li className={s.icon}>
              <img className={s.svgIcons} src={vueSVG} alt="" />
              <h5 style={{ color: 'var(--app-white);' }}>VueJS</h5>
            </li>
            <li className={s.icon}>
              <img className={s.svgIcons} src={nextSVG} alt="" />
              <h5 style={{ color: 'var(--app-white);' }}>NextJS</h5>
            </li>
            <li className={s.icon}>
              <img className={s.svgIcons} src={djangoSVG} alt="" />
              <h5 style={{ color: 'var(--app-white);' }}>Django</h5>
            </li>
            <li className={s.icon}>
              <img className={s.svgIcons} src={reactSVG} alt="" />
              <h5 style={{ color: 'var(--app-white);' }}>ReactNative</h5>
            </li>
            <li className={s.icon}>
              <img className={s.svgIcons} src={reduxSVG} alt="" />
              <h5 style={{ color: 'var(--app-white);' }}>Redux</h5>
            </li>
            <li className={s.icon}>
              <img className={s.svgIcons} src={nodeSVG} alt="" />
              <h5 style={{ color: 'var(--app-white);' }}>NodeJS</h5>
            </li>
            <li className={s.icon}>
              <img className={s.svgIcons} src={expressSVG} alt="" />
              <h5 style={{ color: 'var(--app-white);' }}>ExpressJS</h5>
            </li>
            <li className={s.icon}>
              <img className={s.svgIcons} src={postgresqlSVG} alt="" />
              <h5 style={{ color: 'var(--app-white);' }}>PostgreSQL</h5>
            </li>
            <li className={s.icon}>
              <img className={s.svgIcons} src={electronSVG} alt="" />
              <h5 style={{ color: 'var(--app-white);' }}>ElectronJS</h5>
            </li>
            <li className={s.icon}>
              <img className={s.svgIcons} src={tensorflowSVG} alt="" />
              <h5 style={{ color: 'var(--app-white);' }}>TensorFlow</h5>
            </li>
            <li className={s.icon}>
              <img className={s.svgIcons} src={threeSVG} alt="" />
              <h5 style={{ color: 'var(--app-white);' }}>ThreeJS</h5>
            </li>
          </ul>
        </div>
    </div>
  )
}