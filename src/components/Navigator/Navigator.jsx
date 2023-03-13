import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { resetOption, setOption } from "../../middlewares/redux/actions"
import s from "./css/Navigator.module.css"
import { disapear, optionActive } from "./js/functions"

export const Navigator = () => {
  const dispatch = useDispatch()
  const option = useSelector(state=>state.option)
  const language = useSelector(state=>state.language)
  useEffect(()=>{
    optionActive(option? option : '')
    disapear()
  }, [option])
  return (
    <div className={s.navCont} id='navCont'>
      <ul className={s.ulCont}>
        <li>
          <div 
            className={s.profileImg}
            id='profile'
            onClick={()=>{return (
              document.querySelector('#profileLalo').style.transform='translateX(0)',
              document.querySelector('#navCont').style.transform='translateX(30vw)'
              )}}
              onMouseEnter={()=>{return(document.querySelector('#menu').style.scale='1')}}
              onMouseLeave={()=>{return(document.querySelector('#menu').style.scale='0')}}
              >
              <button className={s.menuItem} id='menu' disabled>
                {language==='EN'? 'menu':'menu'}
            </button>
          </div>
          <div 
            className={s.webImg}
            id='developer'
            onClick={()=>{return (
              dispatch(setOption('developer')),
              document.querySelector('#profileLalo').style.transform='translateX(-30vw)',
              document.querySelector('#navCont').style.transform='translateX(0vw)'
              )}}
              onMouseEnter={()=>{return(document.querySelector('#menuDeveloper').style.scale='1')}}
              onMouseLeave={()=>{return(document.querySelector('#menuDeveloper').style.scale='0')}}
              >
            <button className={s.menuItem} id='menuDeveloper' disabled>
              {language==='EN'? 'developer':'desarrollador'}
            </button>
          </div>
          <div 
            className={s.soundImg}
            id='sound'
            onClick={()=>{return (
              dispatch(setOption('sound')),
              document.querySelector('#profileLalo').style.transform='translateX(-30vw)',
              document.querySelector('#navCont').style.transform='translateX(0vw)'
              )}}
              onMouseEnter={()=>{return(document.querySelector('#menuSound').style.scale='1')}}
              onMouseLeave={()=>{return(document.querySelector('#menuSound').style.scale='0')}}
              >
            <button className={s.menuItem} id='menuSound' disabled>
              {language==='EN'? 'sound':'sonido'}
            </button>
          </div> 
          <div 
            className={s.designImg}
            id='design'
            onClick={()=>{return (
              dispatch(setOption('design')),
              document.querySelector('#profileLalo').style.transform='translateX(-30vw)',
              document.querySelector('#navCont').style.transform='translateX(0vw)'
              )}}
              onMouseEnter={()=>{return(document.querySelector('#menuDesign').style.scale='1')}}
              onMouseLeave={()=>{return(document.querySelector('#menuDesign').style.scale='0')}}
              >
              <button className={s.menuItem} id='menuDesign' disabled>
              {language==='EN'? 'design':'diseno'}
            </button>
          </div>          
          <div 
            className={s.contactImg}
            id='contact'
            onClick={()=>{return (
              dispatch(setOption('contact')),
              document.querySelector('#profileLalo').style.transform='translateX(-30vw)',
              document.querySelector('#navCont').style.transform='translateX(0vw)'
              )}}
              onMouseEnter={()=>{return(document.querySelector('#menuContact').style.scale='1')}}
              onMouseLeave={()=>{return(document.querySelector('#menuContact').style.scale='0')}}
              >
            <button className={s.menuItem} id='menuContact' disabled>
            {language==='EN'? 'contact':'contacto'}
            </button>
          </div>            
          <Link to='/'>
            <div className={s.logoutImg} onClick={()=>{return dispatch(resetOption())}} 
              onMouseEnter={()=>{return(document.querySelector('#menuLogout').style.scale='1')}}
              onMouseLeave={()=>{return(document.querySelector('#menuLogout').style.scale='0')}}
              >
              <button className={s.menuItem} id='menuLogout' disabled>
              {language==='EN'? 'logout':'salir'}
              </button>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  )
}