import s from './css/Footer.module.css'
import { currentYear } from './js'

export const Footer = () => {
  return (
    <div className={s.footerCont}>
      <h3 
        style={
          {
            fontSize:'10px', 
            color:'white', 
            marginTop:'0px'}
          }>
            {currentYear()} &copy; Theme by {<a style={{color: 'white'}} href='https://github.com/LaloFreak' alt="repository" target='_blank' rel='noreferrer' >LaloFreak</a>}. {<a style={{color: 'white'}} href='https://github.com/LaloFreak/Portfolio' alt="repository" target='_blank' rel='noreferrer' >All Cats Are Beautyful</a>}</h3>
    </div>
  )
}