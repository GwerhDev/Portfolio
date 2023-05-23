export const UnderConstruction = (props) => {
  const {color, language} = props
  return(
    <div><h1 style={{fontFamily: 'Trajan', height: '100vh', color: color}}>{language==='EN'? 'under construction':'en construccion'}</h1></div>
  )
}