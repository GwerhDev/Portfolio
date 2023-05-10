import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { setOption } from "../../middlewares/redux/actions"
import s from "./css/Navigator.module.css"
import { disapear, optionActive } from "./js/functions"
import { removeLocalStorage } from "../../functions/RemoveLocalStorage"
import { motion } from 'framer-motion'

export const Navigator = () => {
  const dispatch = useDispatch()
  const option = useSelector(state=>state.option)
  const language = useSelector(state=>state.language)
  useEffect(()=>{
    optionActive(option? option : '')
    disapear()
  }, [option])
  return (
    <motion.div 
      initial={{opacity:0, x:-100}}
      transition={{duration: 1}}
      animate={{opacity:1, x:0}}
      drag='y'
      dragConstraints={{
        top: -80,
        bottom: 50,
      }}
    >
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
          <Link to='/home'>
            <div 
              className={s.homeImg}
              id='home'
              onClick={()=>{return (
                dispatch(setOption('home')),
                document.querySelector('#profileLalo').style.transform='translateX(-30vw)',
                document.querySelector('#navCont').style.transform='translateX(0vw)'
                )}}
                onMouseEnter={()=>{return(document.querySelector('#menuHome').style.scale='1')}}
                onMouseLeave={()=>{return(document.querySelector('#menuHome').style.scale='0')}}
                >
              <button className={s.menuItem} id='menuHome' disabled>
                {language==='EN'? 'Home':'Inicio'}
              </button>
            </div>
          </Link>
          <Link to='/portfolio/develop'>
            <div 
              className={s.webImg}
              id='develop'
              onClick={()=>{return (
                dispatch(setOption('develop')),
                document.querySelector('#profileLalo').style.transform='translateX(-30vw)',
                document.querySelector('#navCont').style.transform='translateX(0vw)'
                )}}
                onMouseEnter={()=>{return(document.querySelector('#menuDevelop').style.scale='1')}}
                onMouseLeave={()=>{return(document.querySelector('#menuDevelop').style.scale='0')}}
                >
              <button className={s.menuItem} id='menuDevelop' disabled>
                {language==='EN'? 'develop':'desarrollo'}
              </button>
            </div>
          </Link>
          <Link to='/portfolio/design'>
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
          </Link>
          <Link to='/portfolio/sound'>
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
          </Link>
          <Link to='/contact'>
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
          </Link>            
          <Link to='/'>
            <div className={s.logoutImg} onClick={()=>{return removeLocalStorage()}}
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
    </motion.div>
  )
}