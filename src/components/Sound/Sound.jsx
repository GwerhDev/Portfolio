import { useDispatch, useSelector } from "react-redux"
import { OptionTitle } from "../Options/OptionTitle"
import s from "./css/Sound.module.css"
import { HiddenStates, ShownStates } from "../../functions/ShownStates"
import { useEffect } from "react"
import { getSound } from "../../middlewares/redux/actions"
import { PresentationCard } from "../PresentationCard/PresentationCard"
import portfolioDevImg from "../../images/portfolio-dev-img.png"
import { GET_DESCRIPTION_SOUND } from "../../middlewares/misc/consts"
import { Gear } from "./Gear/Gear"
import { motion } from 'framer-motion'

export const Sound = () => {
  const language = useSelector(state=>state.language)
  const API = useSelector(state=>state.sound)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getSound())
  }, [dispatch])
  
  return (
    <div className={s.soundCont}>
      <PresentationCard language={language} img={portfolioDevImg} description={GET_DESCRIPTION_SOUND}/>
      <OptionTitle title={language==='EN'? 'portfolio: sound':'portafolio: sonido'}/>
      <div className={s.works}>
        <ul className={s.devUl}>
          {
            API? API.map((e,index)=>{
              return(
                <ul 
                  className={s.ulList} 
                  style={{listStyle:'none', marginBottom:'15px'}}
                  > 
                  <ul style={{
                    width:'100%', 
                    display: 'flex', 
                    justifyContent:'flex-end',
                    marginLeft:'-60px',
                    marginTop:'-10px',
                    position:'absolute'
                    }}>
                    <button
                      className={s.buttonClose}
                      style={{
                        display:'flex', 
                        position:'relative', 
                        right:'20px',
                        paddingRight:'15px',
                        paddingLeft:'15px',
                        paddingTop:'5px',
                      }}
                      id={`closeButton${index}`}
                      onClick={()=>{return HiddenStates(`contInfoSound${index}`,`closeButton${index}`)}}
                    >
                      X
                    </button>
                  </ul>
                    <li key={index} className={s.devLi}>
                        <p onClick={()=>{return ShownStates(`contInfoSound${index}`,`closeButton${index}`)}}>
                          {e.name}
                        </p>
                    <div id={`contInfoSound${index}`} style={{display:'grid'}}>
                      <motion.div
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: false}}
                        transition={{duration: 1.5}}
                      >
                        <li className={s.ytPlayer}>
                          <iframe width="280" height="157.5" src={`https://www.youtube.com/embed/${e.idYt}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </li>
                      </motion.div>
                      <h4 style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'12px'}}>
                        {language==='EN'? `Description: ${e.description.en}` : `Descripción: ${e.description.es}`}
                      </h4>
                      <h4 style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'12px'}}>
                        {language==='EN'? `Role: ${e.role.en}` : `Rol: ${e.role.es}`}
                      </h4>
                      <h4 style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'12px'}}>
                        {language==='EN'? `Year: ${e.year}` : `Año: ${e.year}`}
                      </h4>
                    </div>
                  </li>
                </ul>
            )})
            : null
          }
        </ul>
      </div>
      <Gear language={language}/>
    </div>
  )
}