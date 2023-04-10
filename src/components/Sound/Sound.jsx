import { useSelector } from "react-redux"
import { OptionTitle } from "../Options/OptionTitle"
import s from "./css/Sound.module.css"

export const Sound = () => {
  const language = useSelector(state=>state.language)
  const API = require('../../middlewares/misc/sound-api.json')
  return (
    <div className={s.devCont}>
      <OptionTitle title={language==='EN'? 'portfolio: sound':'portafolio: sonido'}/>
      <div className={s.works}>
        <ul className={s.devUl}>
          {
            API?.map((e,index)=>{
              return(
                <ul style={{listStyle:'none', marginBottom:'50px'}}>
                  <li key={index} className={s.devLi}>
                    <a href={`https://www.youtube.com/watch?v=${e.idYt}`} target='_blank' rel="noreferrer">
                      {e.name}
                    </a>
                  <li className={s.ytPlayer}>
                    <iframe width="280" height="157.5" src={`https://www.youtube.com/embed/${e.idYt}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </li>
                    <h4 style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:'12px'}}>
                      {language==='EN'? `Description: ${e.description.en}` : `Descripción: ${e.description.es}`}
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