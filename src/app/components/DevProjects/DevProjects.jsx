import s from "./css/DevProjects.module.css";
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDevelop } from "../../../middlewares/redux/actions";
import { Title } from "../../components/Utils/Title/Title";
import { RenderDriveImg } from "../../../functions/RenderDriveImg";
import { totalDevProyects } from "../../../functions/TotalProjects";
import { Separator } from "../Utils/Separator/Separator";
import webIcon from "../../../assets/images/png/web-icon-black.png";
import desktopIcon from "../../../assets/images/png/desktop-icon.png";
import mobileIcon from "../../../assets/images/png/mobile-icon.png";
import openwindowIcon from "../../../assets/images/png/openwindow-icon.png";
import softwareIcon from "../../../assets/images/png/software-icon.png";
import showMoreIcon from "../../../assets/images/png/showmore-icon.png";
import loadingImg from "../../../assets/images/gif/loading.gif";

export const DevProjects = (props) => {
  const { language } = props
  const API = useSelector(state=>state.programming)
  const [shownState1, setShownState1] = useState("none")
  const [shownState2, setShownState2] = useState("none")
  const [shownState3, setShownState3] = useState("none")
  const [shownState4, setShownState4] = useState("none")

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getDevelop())
  }, [dispatch])

  const total = totalDevProyects(API)

  return ( 
    <div className={s.devContainer}>
      <div className={s.titleSection}>
        <Title color='black' backgroundColor={true} title={ language==='EN'? `all (${total})`:`todos (${total})` }/>
      </div>
      <div className={s.devProjectContainer}>
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
        >
          <div className={s.works}>
            <ul className={s.devUl}>
              <li key={'title1'} className={s.devLi} onClick={()=> {shownState1==="none"? setShownState1("flex") : setShownState1("none")}}>
                <h1>
                    <img src={showMoreIcon} alt="" width="15px" style={{ rotate: shownState1==="none"? '0deg' : '180deg', transitionDuration: '.4s'}}/>
                    <div className={s.text} id="title">Web</div>
                    <img src={webIcon} width="20px" height="20px" alt="web" />
                </h1>
              </li>
              {
                API?.at(0)?.web?.map((e,index)=>{
                  return(
                    <ul key={`ulWeb${index}`} className={s.ulList} style={{ display: shownState1 }}>
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
                            {e.name}
                          <img src={openwindowIcon} alt="" width={'18px'}/>
                        </a>
                        <h4 style={{fontFamily:'Poppins, sans-serif', fontSize:'12px'}}>
                          {language==='EN'? `Description: ${e.description.en}` : `Descripción: ${e.description.es}`}
                        </h4>
                        <h4 style={{fontFamily:'Poppins, sans-serif', fontSize:'12px'}}>
                          {language==='EN'? `Technologies: ${e.technologies.en}` : `Tecnologías: ${e.technologies.es}`}
                        </h4>
                        <h4 style={{fontFamily:'Poppins, sans-serif', fontSize:'12px'}}>
                          {language==='EN'? `Role: ${e.role.en}` : `Rol: ${e.role.es}`}
                        </h4>
                      <Separator width={'100%'}/>
                      </li>
                    </ul>
                )})
              }
            </ul>
            <ul className={s.devUl} style={{ flexDirection:'column' }}>
              <li key={'title2'} className={s.devLi} onClick={()=> {shownState2==="none"? setShownState2("flex") : setShownState2("none")}}>
                <h1>
                  <img src={showMoreIcon} alt="" width="15px" style={{ rotate: shownState2==="none"? '0deg' : '180deg', transitionDuration: '.4s'}}/>
                    <div className={s.text} id='title'>{language==='EN'?'Desktop':'Escritorio'}</div>
                  <img src={desktopIcon} width="20px" height="20px" alt="desktop" />
                </h1>
              </li>
              {
                API?.at(1)?.desktop?.map((e,index)=>{
                  return(
                    <ul key={`ulDesk${index}`} className={s.ulList} style={{ display: shownState2 }}>
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
                        <h4 style={{fontFamily:'Poppins, sans-serif', fontSize:'12px'}}>
                          {language==='EN'? `Description: ${e.description.en}` : `Descripción: ${e.description.es}`}
                        </h4>
                        <h4 style={{fontFamily:'Poppins, sans-serif', fontSize:'12px'}}>
                          {language==='EN'? `Technologies: ${e.technologies.en}` : `Tecnologías: ${e.technologies.es}`}
                        </h4>
                        <h4 style={{fontFamily:'Poppins, sans-serif', fontSize:'12px'}}>
                          {language==='EN'? `Role: ${e.role.en}` : `Rol: ${e.role.es}`}
                        </h4>
                        <Separator width={'100%'}/>
                      </li>
                    </ul>        
                )})
              }
            </ul>
            <ul className={s.devUl} style={{ flexDirection:'column' }}>
              <li key={'title3'} className={s.devLi} onClick={()=> {shownState3==="none"? setShownState3("flex") : setShownState3("none")}}>
                <h1>
                  <img src={showMoreIcon} alt="" width="15px" style={{ rotate: shownState3==="none"? '0deg' : '180deg', transitionDuration: '.4s'}}/>
                  <div className={s.text} id="title">{language==='EN'?'Mobile': 'Movil'}</div>
                  <img src={mobileIcon} width="20px" height="20px" alt="mobile" />
                </h1>
              </li>
              {
                API?.at(2)?.mobile?.map((e,index)=>{
                  return(
                    <ul key={`ulMob${index}`} className={s.ulList} style={{ display: shownState3 }}>
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
                        <h4 style={{fontFamily:'Poppins, sans-serif', fontSize:'12px'}}>
                          {language==='EN'? `Description: ${e.description.en}` : `Descripción: ${e.description.es}`}
                        </h4>
                        <h4 style={{fontFamily:'Poppins, sans-serif', fontSize:'12px'}}>
                          {language==='EN'? `Technologies: ${e.technologies.en}` : `Tecnologías: ${e.technologies.es}`}
                        </h4>
                        <h4 style={{fontFamily:'Poppins, sans-serif', fontSize:'12px'}}>
                          {language==='EN'? `Role: ${e.role.en}` : `Rol: ${e.role.es}`}
                        </h4>
                        <Separator width={'100%'}/>
                      </li>
                    </ul>        
                )})
              }
            </ul>
            <ul className={s.devUl} style={{ flexDirection:'column' }}>
              <li key={'title4'} className={s.devLi} onClick={()=> {shownState4==="none"? setShownState4("flex") : setShownState4("none")}}>
                <h1>
                  <img src={showMoreIcon} alt="" width="15px" style={{ rotate: shownState4==="none"? '0deg' : '180deg', transitionDuration: '.4s'}}/>
                  <div className={s.text} id="title">Software</div>
                  <img src={softwareIcon} width="20px" height="20px" alt="software" />
                </h1>
              </li>
              {
                API?.at(3)?.software?.map((e,index)=>{
                  return(
                    <ul key={`ulSoft${index}`} className={s.ulList} style={{ display: shownState4 }}>
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
                        <h4 style={{fontFamily:'Poppins, sans-serif', fontSize:'12px'}}>
                          {language==='EN'? `Description: ${e.description.en}` : `Descripción: ${e.description.es}`}
                        </h4>
                        <h4 style={{fontFamily:'Poppins, sans-serif', fontSize:'12px'}}>
                          {language==='EN'? `Technologies: ${e.technologies.en}` : `Tecnologías: ${e.technologies.es}`}
                        </h4>
                        <h4 style={{fontFamily:'Poppins, sans-serif', fontSize:'12px'}}>
                          {language==='EN'? `Role: ${e.role.en}` : `Rol: ${e.role.es}`}
                        </h4>
                        <Separator width={'100%'}/>
                      </li>
                    </ul>
                )})
              }
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}