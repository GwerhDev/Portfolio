import { useSelector } from "react-redux"

export const UnderConstruction = () => {
  const language = useSelector(state=>state.language)
  return(
    <div><h1 style={{fontFamily: 'Trajan', }}>{language==='EN'? 'under construction':'en construccion'}</h1></div>
  )
}