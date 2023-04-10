import { useSelector } from "react-redux"
import { OptionTitle } from "../Options/OptionTitle"
import s from "./css/Developer.module.css"

export const Developer = () => {
  const language = useSelector(state=>state.language)
  const API = require('../../middlewares/misc/dev-api.json')
  return (
    <div className={s.devCont}>
      <OptionTitle title={language==='EN'? 'portfolio: developer':'portafolio: desarrollador'}/>
      <div className={s.works}>
        <ul className={s.devUl}>
          <li key={'title1'} className={s.devLi}><h1>Web</h1></li>
          {
            API?.at(0).web.map((e,index)=>{
              return(
                <li key={index} className={s.devLi}>
                  <a href={e.href} target='_blank' rel="noreferrer">
                    {e.name}
                  </a>
                  <h4 style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'12px'}}>
                    {language==='EN'? `Description: ${e.description.en}` : `Descripción: ${e.description.es}`}
                  </h4>
                  <h4 style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'12px'}}>
                    {language==='EN'? `Technologies: ${e.technologies.en}` : `Tecnologías: ${e.technologies.es}`}
                  </h4>
                  <h4 style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'12px'}}>
                    {language==='EN'? `Role: ${e.role.en}` : `Rol: ${e.role.es}`}
                  </h4>
                </li>        
            )})
          }
        </ul>
        <ul className={s.devUl}>
          <li key={'title2'} className={s.devLi}><h1>{language==='EN'?'Desktop':'Escritorio'}</h1></li>
          {
            API?.at(1).desktop.map((e,index)=>{
              return(
                <li key={index} className={s.devLi}>
                  <a href={e.href} target='_blank' rel="noreferrer">
                    {e.name}
                  </a>
                  <h4 style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'12px'}}>
                    {language==='EN'? `Description: ${e.description.en}` : `Descripción: ${e.description.es}`}
                  </h4>
                  <h4 style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'12px'}}>
                    {language==='EN'? `Technologies: ${e.technologies.en}` : `Tecnologías: ${e.technologies.es}`}
                  </h4>
                  <h4 style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'12px'}}>
                    {language==='EN'? `Role: ${e.role.en}` : `Rol: ${e.role.es}`}
                  </h4>
                </li>        
            )})
          }

        </ul>
        <ul className={s.devUl}>
          <li key={'title3'} className={s.devLi}><h1>{language==='EN'?'Mobile':'Movil'}</h1></li>
          {
            API?.at(2).mobile.map((e,index)=>{
              return(
                <li key={index} className={s.devLi}>
                  <a href={e.href} target='_blank' rel="noreferrer">
                    {e.name}
                  </a>
                  <h4 style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'12px'}}>
                    {language==='EN'? `Description: ${e.description.en}` : `Descripción: ${e.description.es}`}
                  </h4>
                  <h4 style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'12px'}}>
                    {language==='EN'? `Technologies: ${e.technologies.en}` : `Tecnologías: ${e.technologies.es}`}
                  </h4>
                  <h4 style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'12px'}}>
                    {language==='EN'? `Role: ${e.role.en}` : `Rol: ${e.role.es}`}
                  </h4>
                </li>        
            )})
          }

        </ul>
      </div>
    </div>
  )
}