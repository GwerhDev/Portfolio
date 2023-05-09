import s from "./css/Nav.module.css"
import terminalkillerLogo from "../../images/terminalkiller-logo.png"
import { Link } from "react-router-dom"

export const Nav = () => {
    return (
        <div className={s.divNav} style={{color:"white"}}>
            <ul className={s.ulNav} style={{color:"white"}}>
                <a href="http://projects.terminalkiller.site" rel="noreferrer"><img className={s.terminalkillerLogo} src={terminalkillerLogo} alt="Logo" height="80px" /></a>
                <ul className={s.ulMenu} style={{color:"white"}}>
                    <li style={{color:"white"}}><a href="http://projects.terminalkiller.site" rel="noreferrer">Inicio</a></li>
                    <li style={{color:"white"}}><Link to="http://developers.terminalkiller.site" rel="noreferrer">Quiénes somos</Link></li>
                    <li style={{color:"white"}}><a href="http://projects.terminalkiller.site/contact" rel="noreferrer">Contacto</a></li>
                </ul>
            </ul>
        </div>
    )
}