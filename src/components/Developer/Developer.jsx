import { useSelector } from "react-redux"
import { OptionTitle } from "../Options/OptionTitle"
import s from "./css/Developer.module.css"
import { useState } from "react"

export const Developer = () => {
  const language = useSelector(state=>state.language)
  const API = require('../../middlewares/misc/dev-api.json')
  const [shownState1, setShownState1] = useState("none")
  const [shownState2, setShownState2] = useState("none")
  const [shownState3, setShownState3] = useState("none")
  return ( 
    <div className={s.devCont}>
      <OptionTitle title={language==='EN'? 'portfolio: programming':'portafolio: programacion'}/>
      <div className={s.works}>
        <ul className={s.devUl}>
          <li key={'title1'} className={s.devLi}>
            <h1 onClick={()=> {shownState1==="none"? setShownState1("flex") : setShownState1("none")}}>
              {">"} Web
            </h1>
          </li>
          {
            API?.at(0).web.map((e,index)=>{
              return(
                <ul className={s.ulList} style={{listStyle:'none', marginBottom:'50px', display: shownState1}}>
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
                </ul>
            )})
          }
        </ul>
        <ul className={s.devUl}>
          <li key={'title2'} className={s.devLi}>
            <h1 onClick={()=> {shownState2==="none"? setShownState2("flex") : setShownState2("none")}}>
              {language==='EN'?'> Desktop':'> Escritorio'}
            </h1>
          </li>
          {
            API?.at(1).desktop.map((e,index)=>{
              return(
                <ul className={s.ulList} style={{listStyle:'none', marginBottom:'50px', display: shownState2}}>
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
                </ul>        
            )})
          }
        </ul>
        <ul className={s.devUl}>
          <li key={'title3'} className={s.devLi}>
            <h1 onClick={()=> {shownState3==="none"? setShownState3("flex") : setShownState3("none")}}>
              {language==='EN'?'> Mobile':'> Movil'}
            </h1>
          </li>
          {
            API?.at(2).mobile.map((e,index)=>{
              return(
                <ul className={s.ulList} style={{listStyle:'none', marginBottom:'50px', display: shownState3}}>
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
                </ul>        
            )})
          }
        </ul>
      </div>
    </div>
  )
}