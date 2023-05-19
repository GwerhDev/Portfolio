import s from "./css/Develop.module.css"
import { motion } from 'framer-motion'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getDevelop } from "../../../middlewares/redux/actions"
import { OptionTitle } from "../../components/Utils/OptionTitle/OptionTitle"
import { PresentationCard } from "../../components/PresentationCard/PresentationCard"
import { Skills } from "../../components/Skills/Skills"
import { Featured } from "../../components/Featured/Featured"
import { RenderDriveImg } from "../../../functions/RenderDriveImg"
import { totalDevProyects } from "../../../functions/TotalProjects"
import { GET_DESCRIPTION_DEV } from "../../../middlewares/misc/consts"
import webIcon from "../../../assets/images/web-icon-black.png"
import desktopIcon from "../../../assets/images/desktop-icon.png"
import mobileIcon from "../../../assets/images/mobile-icon.png"
import openwindowIcon from "../../../assets/images/openwindow-icon.png"
import softwareIcon from "../../../assets/images/software-icon.png"
import loadingImg from "../../../assets/images/loading.gif"
import portfolioDevImg from "../../../assets/images/portfolio-dev-img.png"

export const Develop = () => {
  const language = useSelector(state=>state.language)
  const API = useSelector(state=>state.programming)
  const [shownState1, setShownState1] = useState("none")
  const [shownState2, setShownState2] = useState("none")
  const [shownState3, setShownState3] = useState("none")
  const [shownState4, setShownState4] = useState("none")

  const dispatch = useDispatch()
  const [displayState, setDisplayState] = useState('none')

  useEffect(()=>{
    dispatch(getDevelop())
  }, [dispatch])

  function showHide(){
    displayState === 'none'? setDisplayState('flex') : setDisplayState('none')
  }

  const total = totalDevProyects(API)

  return ( 
    <div className={s.devCont}>
      <PresentationCard language={language} img={portfolioDevImg} description={GET_DESCRIPTION_DEV}/>
      <Featured/>
      <OptionTitle 
        color='black' 
        funct={showHide} 
        displayButton='flex'
        title={
          displayState === 'none'?
          (language==='EN'? `show all (${total})`:`mostrar todo (${total})`) : (language==='EN'? `hide all (${total})`:`ocultar todo (${total})`)
        }
        cursor='pointer'
      />
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
      >
        <div className={s.works}>
          <ul className={s.devUl} style={{display: displayState, flexDirection:'column'}}>
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
                    <motion.div
                      initial={{opacity: 0}}
                      whileInView={{opacity: 1}}
                      viewport={{once: false}}
                      transition={{duration: 0.5}}
                    >
                      <a href={e.href} target='_blank' rel="noreferrer">
                        <div className={s.projectImg} style={{backgroundImage:`url(${e.idImg? RenderDriveImg(e.idImg): loadingImg})`, backgroundSize:`${e.idImg? 'cover': '30px'} `}}></div>
                      </a>
                    </motion.div>
                    <li key={`web${index}`} className={s.devLi}>
                      <a href={e.href} target='_blank' rel="noreferrer">
                          {e.name}
                          <img src={openwindowIcon} alt="" width={'18px'}/>
                        <h4 style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'12px'}}>
                          {language==='EN'? `Description: ${e.description.en}` : `Descripción: ${e.description.es}`}
                        </h4>
                        <h4 style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'12px'}}>
                          {language==='EN'? `Technologies: ${e.technologies.en}` : `Tecnologías: ${e.technologies.es}`}
                        </h4>
                        <h4 style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'12px'}}>
                          {language==='EN'? `Role: ${e.role.en}` : `Rol: ${e.role.es}`}
                        </h4>
                      </a>
                    </li>
                  </ul>
              )})
            }
          </ul>
          <ul className={s.devUl} style={{display: displayState, flexDirection:'column'}}>
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
                    <motion.div
                      initial={{opacity: 0}}
                      whileInView={{opacity: 1}}
                      viewport={{once: false}}
                      transition={{duration: 0.5}}
                    >
                      <a href={e.href} target='_blank' rel="noreferrer">
                        <div className={s.projectImg} style={{backgroundImage:`url(${e.idImg? RenderDriveImg(e.idImg): loadingImg})`, backgroundSize:`${e.idImg? 'cover': '30px'} `}}></div>
                      </a>
                    </motion.div>
                    <li key={`desktop${index}`} className={s.devLi}>
                      <a href={e.href} target='_blank' rel="noreferrer">
                          {e.name}
                          <img src={openwindowIcon} alt="" width={'18px'}/>
                        <h4 style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'12px'}}>
                          {language==='EN'? `Description: ${e.description.en}` : `Descripción: ${e.description.es}`}
                        </h4>
                        <h4 style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'12px'}}>
                          {language==='EN'? `Technologies: ${e.technologies.en}` : `Tecnologías: ${e.technologies.es}`}
                        </h4>
                        <h4 style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'12px'}}>
                          {language==='EN'? `Role: ${e.role.en}` : `Rol: ${e.role.es}`}
                        </h4>
                      </a>
                    </li>
                  </ul>        
              )})
            }
          </ul>
          <ul className={s.devUl} style={{display: displayState, flexDirection:'column'}}>
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
                    <motion.div
                      initial={{opacity: 0}}
                      whileInView={{opacity: 1}}
                      viewport={{once: false}}
                      transition={{duration: 0.5}}
                    >
                      <a href={e.href} target='_blank' rel="noreferrer">
                        <div className={s.projectImgMobile} style={{backgroundImage:`url(${e.idImg? RenderDriveImg(e.idImg): loadingImg})`, backgroundSize:`${e.idImg? 'cover': '30px'} `}}></div>
                      </a>
                    </motion.div>
                    <li key={`mobile${index}`} className={s.devLi}>
                      <a href={e.href} target='_blank' rel="noreferrer">
                          {e.name}
                          <img src={openwindowIcon} alt="" width={'18px'}/>
                        <h4 style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'12px'}}>
                          {language==='EN'? `Description: ${e.description.en}` : `Descripción: ${e.description.es}`}
                        </h4>
                        <h4 style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'12px'}}>
                          {language==='EN'? `Technologies: ${e.technologies.en}` : `Tecnologías: ${e.technologies.es}`}
                        </h4>
                        <h4 style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'12px'}}>
                          {language==='EN'? `Role: ${e.role.en}` : `Rol: ${e.role.es}`}
                        </h4>
                      </a>
                    </li>
                  </ul>        
              )})
            }
          </ul>
          <ul className={s.devUl} style={{display: displayState, flexDirection:'column'}}>
            <li key={'title4'} className={s.devLi} >
              <h1 style={{display: "flex", justifyContent:"space-between"}} onClick={()=> {shownState4==="none"? setShownState4("flex") : setShownState4("none")}}>
                Software
                <img style={{marginRight: "50px"}} src={softwareIcon} width="40px" height="40px" alt="software" />
              </h1>
            </li>
            {
              API?.at(3)?.software?.map((e,index)=>{
                return(
                  <ul className={s.ulList} style={{listStyle:'none', marginBottom:'50px', display: shownState4}}>
                    <motion.div
                      initial={{opacity: 0}}
                      whileInView={{opacity: 1}}
                      viewport={{once: false}}
                      transition={{duration: 0.5}}
                    >
                      <a href={e.href} target='_blank' rel="noreferrer">
                        <div className={s.projectImg} style={{backgroundImage:`url(${e.idImg? RenderDriveImg(e.idImg): loadingImg})`, backgroundSize:`${e.idImg? 'cover': '30px'} `}}></div>
                      </a>
                    </motion.div>                    
                    <li key={`software${index}`} className={s.devLi}>
                      <a href={e.href} target='_blank' rel="noreferrer">
                          {e.name}
                          <img src={openwindowIcon} alt="" width={'18px'}/>
                        <h4 style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'12px'}}>
                          {language==='EN'? `Description: ${e.description.en}` : `Descripción: ${e.description.es}`}
                        </h4>
                        <h4 style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'12px'}}>
                          {language==='EN'? `Technologies: ${e.technologies.en}` : `Tecnologías: ${e.technologies.es}`}
                        </h4>
                        <h4 style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'12px'}}>
                          {language==='EN'? `Role: ${e.role.en}` : `Rol: ${e.role.es}`}
                        </h4>
                      </a>
                    </li>
                  </ul>
              )})
            }
          </ul>
        </div>
      </motion.div>
      <Skills language={language}/>
    </div>
  )
}