import s from './css/Skills.module.css'
import htmlIcon from '../../../images/html-icon.png'
import cssIcon from '../../../images/css-icon.png'
import jsIcon from '../../../images/js-icon.png'
import reactIcon from '../../../images/react-icon.png'


export const Skills = (props) => {
    const { language } = props
    return (
        <div className={s.skillsCont}>
            <div style={{width:'100%', textAlign:'center', paddingTop:'100px'}}>
                <h1 style={{fontFamily:'Trajan', color:'white', fontSize:'2.3rem'}}>{language==='EN'? 'Skills' : 'Habilidades'}</h1>
            </div>
            <ul className={s.iconList} style={{marginLeft:'-40px'}}>
                <li className={s.icon}>
                    <img src={htmlIcon} alt="" width={'60px'} />
                    <h5 style={{color:'white'}}>HTML</h5>
                </li>
                <li className={s.icon}>
                    <img src={cssIcon} alt="" width={'60px'} />
                    <h5 style={{color:'white'}}>CSS</h5>
                </li>
                <li className={s.icon}>
                    <img src={jsIcon} alt="" width={'60px'} />
                    <h5 style={{color:'white'}}>JavaScript</h5>
                </li>
                <li className={s.icon}>
                    <img src={reactIcon} alt="" width={'60px'} />
                    <h5 style={{color:'white'}}>ReactJS</h5>
                </li>
            </ul>
        </div>
    )
}