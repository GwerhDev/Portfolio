import { useSelector } from "react-redux"

export const UnderConstruction = (props) => {
  const {color} = props
  const language = useSelector(state=>state.language)
  return(
    <div><h1 style={{fontFamily: 'Trajan', height: '100vh', color: color}}>{language==='EN'? 'under construction':'en construccion'}</h1></div>
  )
}