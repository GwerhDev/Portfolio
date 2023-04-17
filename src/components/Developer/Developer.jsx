import { useDispatch, useSelector } from "react-redux"
import { OptionTitle } from "../Options/OptionTitle"
import s from "./css/Developer.module.css"
import { useEffect, useState } from "react"
import { getProgramming } from "../../middlewares/redux/actions"
import webIcon from "../../images/web-icon-black.png"
import desktopIcon from "../../images/desktop-icon.png"
import mobileIcon from "../../images/mobile-icon.png"

export const Developer = () => {
  const language = useSelector(state=>state.language)
  const API = useSelector(state=>state.programming)
  const [shownState1, setShownState1] = useState("none")
  const [shownState2, setShownState2] = useState("none")
  const [shownState3, setShownState3] = useState("none")
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getProgramming())
  }, [dispatch])

  return ( 
    <div className={s.devCont}>
      <OptionTitle title={language==='EN'? 'portfolio: programming':'portafolio: programacion'}/>
      <div className={s.works}>
        <ul className={s.devUl}>
          <li key={'title1'} className={s.devLi} >
            <h1 style={{display: "flex", justifyContent:"space-between"}} onClick={()=> {shownState1==="none"? setShownState1("flex") : setShownState1("none")}}>
              Web
              <img style={{marginRight: "50px"}} src={webIcon} width="40px" height="40px" alt="web" />
            </h1>
          </li>
          {
            API?.at(0)?.web?.map((e,index)=>{
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
            <h1 style={{display: "flex", justifyContent:"space-between"}} onClick={()=> {shownState2==="none"? setShownState2("flex") : setShownState2("none")}}>
              {language==='EN'?'Desktop':'Escritorio'}
              <img style={{marginRight: "50px"}} src={desktopIcon} width="40px" height="40px" alt="desktop" />
            </h1>
          </li>
          {
            API?.at(1)?.desktop?.map((e,index)=>{
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
            <h1 style={{display: "flex", justifyContent:"space-between"}} onClick={()=> {shownState3==="none"? setShownState3("flex") : setShownState3("none")}}>
              {language==='EN'?'Mobile': 'Movil'}
              <img style={{marginRight: "50px"}} src={mobileIcon} width="40px" height="40px" alt="mobile" />
            </h1>
          </li>
          {
            API?.at(2)?.mobile?.map((e,index)=>{
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