import s from "./css/Develop.module.css";
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDevelop } from "../../../middlewares/redux/actions";
import { Title } from "../../components/Utils/Title/Title";
import { PresentationCard } from "../../components/PresentationCard/PresentationCard";
import { Skills } from "../../components/Skills/Skills";
import { Featured } from "../../components/Featured/Featured";
import { RenderDriveImg } from "../../../functions/RenderDriveImg";
import { totalDevProyects } from "../../../functions/TotalProjects";
import { GET_DESCRIPTION_DEV } from "../../../middlewares/misc/consts";
import webIcon from "../../../assets/images/png/web-icon-black.png";
import desktopIcon from "../../../assets/images/png/desktop-icon.png";
import mobileIcon from "../../../assets/images/png/mobile-icon.png";
import openwindowIcon from "../../../assets/images/png/openwindow-icon.png";
import softwareIcon from "../../../assets/images/png/software-icon.png";
import portfolioDevImg from "../../../assets/images/png/portfolio-dev-img.png";
import showMoreIcon from "../../../assets/images/png/showmore-icon.png";
import loadingImg from "../../../assets/images/gif/loading.gif";

export const Develop = () => {
  const language = useSelector(state=>state.language)
  const API = useSelector(state=>state.programming)
  const [shownState1, setShownState1] = useState("flex")
  const [shownState2, setShownState2] = useState("none")
  const [shownState3, setShownState3] = useState("none")
  const [shownState4, setShownState4] = useState("none")

  const dispatch = useDispatch()
  const [displayState, setDisplayState] = useState('none')
  const [angle, setAngle] = useState('0deg')

  useEffect(()=>{
    dispatch(getDevelop())
  }, [dispatch])

  function showHide(){
    displayState === 'none'? setDisplayState('flex') : setDisplayState('none')
    angle === '0deg'? setAngle('-180deg') : setAngle('0deg')
  }

  const total = totalDevProyects(API)

  return ( 
    <div className={s.devCont}>
      <PresentationCard language={language} img={portfolioDevImg} description={GET_DESCRIPTION_DEV}/>
      <Featured/>
      <div className={s.titleSection}>
        <Title 
          color='black' 
          funct={showHide} 
          displayButton='flex'
          backgroundColor={true}
          title={
            displayState === 'none'?
            (language==='EN'? `show all (${total})`:`mostrar todo (${total})`) : (language==='EN'? `hide all (${total})`:`ocultar todo (${total})`)
          }
          cursor='pointer'
          angle={angle}
        />
      </div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
      >
        <div className={s.works}>
          <ul className={s.devUl} style={{display: displayState, flexDirection:'column'}}>
            <li key={'title1'} className={s.devLi} onClick={()=> {shownState1==="none"? setShownState1("flex") : setShownState1("none")}}>
              <h1>
                  <img src={showMoreIcon} alt="" width={'25px'} style={{ rotate: shownState1==="none"? '0deg' : '180deg', transitionDuration: '.4s'}}/>
                  <div className={s.text}>Web</div>
                  <img src={webIcon} width="40px" height="40px" alt="web" />
              </h1>
            </li>
            {
              API?.at(0)?.web?.map((e,index)=>{
                return(
                  <ul className={s.ulList} style={{ display: shownState1 }}>
                    <motion.div
                      initial={{opacity: 0}}
                      whileInView={{opacity: 1}}
                      viewport={{once: false}}
                      transition={{duration: 0.5}}
                    >
                      <div className={s.divImg}>
                        <a href={e.href} target='_blank' rel="noreferrer">
                          <div className={s.projectImg} style={{backgroundImage:`url(${e.idImg? RenderDriveImg(e.idImg): loadingImg})`, backgroundSize:`${e.idImg? 'cover': '30px'} `}}></div>
                        </a>
                      </div>
                    </motion.div>
                    <li key={`web${index}`} className={s.infoLi}>
                      <a href={e.href} target='_blank' rel="noreferrer">
                        <img src={openwindowIcon} alt="" width={'18px'}/>
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
          <ul className={s.devUl} style={{display: displayState, flexDirection:'column'}}>
            <li key={'title2'} className={s.devLi} onClick={()=> {shownState2==="none"? setShownState2("flex") : setShownState2("none")}}>
              <h1>
                <img src={showMoreIcon} alt="" width={'25px'} style={{ rotate: shownState2==="none"? '0deg' : '180deg', transitionDuration: '.4s'}}/>
                  <div className={s.text}>{language==='EN'?'Desktop':'Escritorio'}</div>
                <img src={desktopIcon} width="40px" height="40px" alt="desktop" />
              </h1>
            </li>
            {
              API?.at(1)?.desktop?.map((e,index)=>{
                return(
                  <ul className={s.ulList} style={{ display: shownState2 }}>
                    <motion.div
                      initial={{opacity: 0}}
                      whileInView={{opacity: 1}}
                      viewport={{once: false}}
                      transition={{duration: 0.5}}
                    >
                      <div className={s.divImg}>
                        <a href={e.href} target='_blank' rel="noreferrer">
                          <div className={s.projectImg} style={{backgroundImage:`url(${e.idImg? RenderDriveImg(e.idImg): loadingImg})`, backgroundSize:`${e.idImg? 'cover': '30px'} `}}></div>
                        </a>
                      </div>
                    </motion.div>
                    <li key={`desktop${index}`} className={s.infoLi}>
                      <a href={e.href} target='_blank' rel="noreferrer">
                          {e.name}
                          <img src={openwindowIcon} alt="" width={'18px'}/>
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
          <ul className={s.devUl} style={{display: displayState, flexDirection:'column'}}>
            <li key={'title3'} className={s.devLi} onClick={()=> {shownState3==="none"? setShownState3("flex") : setShownState3("none")}}>
              <h1>
                <img src={showMoreIcon} alt="" width={'25px'} style={{ rotate: shownState3==="none"? '0deg' : '180deg', transitionDuration: '.4s'}}/>
                <div className={s.text}>{language==='EN'?'Mobile': 'Movil'}</div>
                <img src={mobileIcon} width="40px" height="40px" alt="mobile" />
              </h1>
            </li>
            {
              API?.at(2)?.mobile?.map((e,index)=>{
                return(
                  <ul className={s.ulList} style={{ display: shownState3 }}>
                    <motion.div
                      initial={{opacity: 0}}
                      whileInView={{opacity: 1}}
                      viewport={{once: false}}
                      transition={{duration: 0.5}}
                    >
                      <div className={s.divImgMobile}>
                        <a href={e.href} target='_blank' rel="noreferrer">
                          <div className={s.projectImgMobile} style={{backgroundImage:`url(${e.idImg? RenderDriveImg(e.idImg): loadingImg})`, backgroundSize:`${e.idImg? 'cover': '30px'} `}}></div>
                        </a>
                      </div>
                    </motion.div>
                    <li key={`mobile${index}`} className={s.infoLi}>
                      <a href={e.href} target='_blank' rel="noreferrer">
                        {e.name}
                        <img src={openwindowIcon} alt="" width={'18px'}/>
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
          <ul className={s.devUl} style={{display: displayState, flexDirection:'column'}}>
            <li key={'title4'} className={s.devLi} onClick={()=> {shownState4==="none"? setShownState4("flex") : setShownState4("none")}}>
              <h1>
                <img src={showMoreIcon} alt="" width={'25px'} style={{ rotate: shownState4==="none"? '0deg' : '180deg', transitionDuration: '.4s'}}/>
                <div className={s.text}>Software</div>
                <img src={softwareIcon} width="40px" height="40px" alt="software" />
              </h1>
            </li>
            {
              API?.at(3)?.software?.map((e,index)=>{
                return(
                  <ul className={s.ulList} style={{ display: shownState4 }}>
                    <motion.div
                      initial={{opacity: 0}}
                      whileInView={{opacity: 1}}
                      viewport={{once: false}}
                      transition={{duration: 0.5}}
                    >
                      <div className={s.divImg}>
                        <a href={e.href} target='_blank' rel="noreferrer">
                          <div className={s.projectImg} style={{backgroundImage:`url(${e.idImg? RenderDriveImg(e.idImg): loadingImg})`, backgroundSize:`${e.idImg? 'cover': '30px'} `}}></div>
                        </a>
                      </div>
                    </motion.div>                    
                    <li key={`software${index}`} className={s.infoLi}>
                      <a href={e.href} target='_blank' rel="noreferrer">
                        {e.name}
                        <img src={openwindowIcon} alt="" width={'18px'}/>
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
      </motion.div>
      <Skills language={language}/>
    </div>
  )
}