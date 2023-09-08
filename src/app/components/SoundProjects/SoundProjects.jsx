import s from "./SoundProjects.module.css";
import { motion } from 'framer-motion';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSound } from "../../../middlewares/redux/actions";
import { Loader } from "../Utils/Loader/Loader";

export const SoundProjects = (props) => {
  const { language } = props
  const API = useSelector(state=>state.sound)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getSound())
  }, [dispatch])
  
  return (
    <div className={s.worksContainer}>
      <div className={s.works}>
        <ul className={s.devUl}>
          {
            API? API.map((e,index)=>{
              return(
                <ul 
                  key={`ul${index}`}
                  className={s.ulList}
                >
                  <ul key={`li${index}`} className={s.devLi}>
                    <div id={`contInfoSound${index}`}>
                      <motion.div
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: false}}
                        transition={{duration: 1.5}}
                        >
                        <li key={`liYT${index}`} className={s.ytPlayer}>
                          <a href={`https://www.youtube.com/watch?v=${e.idYt}`} target="_blank" rel="noreferrer">
                            <img src={`https://i.ytimg.com/vi/${e.idYt}/hqdefault.jpg`} alt="yt" width="280" />
                          </a>
{/*                           <iframe width="280" height="157.5" src={`https://www.youtube.com/embed/${e.idYt}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
 */}                        </li>
                      </motion.div>
                      <p>
                        {e.name}
                      </p>
                      <div className={s.infoCont} id={`infoCont${index}`}>
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
                    </div>
                  </ul>
              </ul>
            )})
            : <Loader language={language}/>
          }
        </ul>
      </div>
    </div>
  )
}