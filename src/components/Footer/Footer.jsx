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
            {currentYear()} &copy; Theme by {<a style={{color: 'white'}} href='http://developers.terminalkiller.site/'>LaloFreak</a>}. All Cats Are Beautiful</h3>
    </div>
  )
}