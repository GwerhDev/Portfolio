import s from "./css/SoundProjects.module.css";
import { motion } from 'framer-motion';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSound } from "../../../middlewares/redux/actions";
import { HiddenStates, ShownStates } from "../../../functions/ShownStates";

export const SoundProjects = (props) => {
  const { language } = props
  const API = useSelector(state=>state.sound)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getSound())
  }, [dispatch])
  
  return (
    <>
      <div className={s.works}>
        <ul className={s.devUl}>
          {
            API? API.map((e,index)=>{
              return(
                <ul 
                  key={`ul${index}`}
                  className={s.ulList} 
                  style={{listStyle:'none', marginBottom:'15px'}}
                > 
                  <ul 
                    key={`ul${index}`}
                    style={{
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
                    <ul key={`li${index}`} className={s.devLi}>
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
                          <li key={`liYT${index}`} className={s.ytPlayer}>
                            <iframe width="280" height="157.5" src={`https://www.youtube.com/embed/${e.idYt}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                          </li>
                        </motion.div>
                        <h4 style={{fontFamily:'Poppins, sans-serif', fontWeight:'bolder', fontSize:'12px'}}>
                          {language==='EN'? `Description: ${e.description.en}` : `Descripción: ${e.description.es}`}
                        </h4>
                        <h4 style={{fontFamily:'Poppins, sans-serif', fontWeight:'bolder', fontSize:'12px'}}>
                          {language==='EN'? `Role: ${e.role.en}` : `Rol: ${e.role.es}`}
                        </h4>
                        <h4 style={{fontFamily:'Poppins, sans-serif', fontWeight:'bolder', fontSize:'12px'}}>
                          {language==='EN'? `Year: ${e.year}` : `Año: ${e.year}`}
                        </h4>
                      </div>
                    </ul>
                </ul>
            )})
            : null
          }
        </ul>
      </div>
    </>
  )
}