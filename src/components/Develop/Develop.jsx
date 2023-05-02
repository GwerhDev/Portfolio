import { useDispatch, useSelector } from "react-redux"
import { OptionTitle } from "../Options/OptionTitle"
import s from "./css/Develop.module.css"
import { useEffect, useState } from "react"
import { getProgramming } from "../../middlewares/redux/actions"
import webIcon from "../../images/web-icon-black.png"
import desktopIcon from "../../images/desktop-icon.png"
import mobileIcon from "../../images/mobile-icon.png"
import { Skills } from "./Skills/Skills"
import portfolioDevImg from "../../images/portfolio-dev-img.png"
import { PresentationCard } from "../PresentationCard/PresentationCard"
import {GET_DESCRIPTION_DEV} from "../../middlewares/misc/consts"

export const Develop = () => {
  const language = useSelector(state=>state.language)
  const API = useSelector(state=>state.programming)
  const [shownState1, setShownState1] = useState("flex")
  const [shownState2, setShownState2] = useState("none")
  const [shownState3, setShownState3] = useState("none")
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getProgramming())
  }, [dispatch])

  return ( 
    <div className={s.devCont}>
      <PresentationCard language={language} img={portfolioDevImg} description={GET_DESCRIPTION_DEV}/>
      <OptionTitle color='black' title={language==='EN'? 'portfolio: develop':'portafolio: desarrollo'}/>
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
                  <a href={e.href} target='_blank' rel="noreferrer">
                    <div className={s.projectImg}></div>
                  </a>
                  <li key={`web${index}`} className={s.devLi}>
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
                  <a href={e.href} target='_blank' rel="noreferrer">
                    <div className={s.projectImg}></div>
                  </a>
                  <li key={`desktop${index}`} className={s.devLi}>
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
                  <a href={e.href} target='_blank' rel="noreferrer">
                    <div className={s.projectImg}></div>
                  </a>
                  <li key={`mobile${index}`} className={s.devLi}>
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
      <Skills language={language}/>
    </div>
  )
}