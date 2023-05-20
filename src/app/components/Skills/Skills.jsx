import s from './css/Skills.module.css';
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

export const Skills = (props) => {
    const { language } = props
    return (
        <div className={s.skillsCont}>
            <div style={{width:'100%', textAlign:'center', paddingTop:'100px'}}>
                <h1 style={{fontFamily:'Trajan', color:'white', fontSize:'2.3rem'}}>{language==='EN'? 'Skills' : 'Habilidades'}</h1>
            </div>
            <ul className={s.iconList} style={{marginLeft:'-40px'}}>
                <li className={s.icon}>
                    <img className={s.svgIcons} src={htmlSVG} alt="" />
                    <h5 style={{color:'white'}}>HTML</h5>
                </li>
                <li className={s.icon}>
                    <img className={s.svgIcons} src={cssSVG} alt="" />
                    <h5 style={{color:'white'}}>CSS</h5>
                </li>
                <li className={s.icon}>
                    <img className={s.svgIcons} src={pythonSVG} alt="" />               
                    <h5 style={{color:'white'}}>Python</h5>
                </li>
                <li className={s.icon}>
                    <img className={s.svgIcons} src={jsSVG} alt="" />
                    <h5 style={{color:'white'}}>JavaScript</h5>
                </li>
                <li className={s.icon}>
                    <img className={s.svgIcons} src={tsSVG} alt="" />                   
                    <h5 style={{color:'white'}}>TypeScript</h5>
                </li>
                <li className={s.icon}>
                    <img className={s.svgIcons} src={reactSVG} alt="" />                 
                    <h5 style={{color:'white'}}>ReactJS</h5>
                </li>
                <li className={s.icon}>
                    <img className={s.svgIcons} src={nextSVG} alt="" />                 
                    <h5 style={{color:'white'}}>NextJS</h5>
                </li>
                <li className={s.icon}>
                    <img className={s.svgIcons} src={reduxSVG} alt="" />

                   
                    <h5 style={{color:'white'}}>Redux</h5>
                </li>
                <li className={s.icon}>
                    <img className={s.svgIcons} src={nodeSVG} alt="" />              
                    <h5 style={{color:'white'}}>NodeJS</h5>
                </li>
                <li className={s.icon}>
                    <img className={s.svgIcons} src={expressSVG} alt="" />                  
                    <h5 style={{color:'white'}}>ExpressJS</h5>
                </li>
                <li className={s.icon}>
                    <img className={s.svgIcons} src={postgresqlSVG} alt="" />
                    <h5 style={{color:'white'}}>PostgreSQL</h5>
                </li>
                <li className={s.icon}>
                    <img className={s.svgIcons} src={electronSVG} alt="" />
                    <h5 style={{color:'white'}}>ElectronJS</h5>
                </li>

            </ul>
        </div>
    )
}