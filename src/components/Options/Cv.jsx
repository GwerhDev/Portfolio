import { useSelector } from 'react-redux'
import { URL_API } from '../../middlewares/misc/config'
import s from './css/Options.module.css'
import googleLogo from '../../images/google-logo.png'
import { Link } from 'react-router-dom'

export const Cv = () => {
    const language = useSelector(state=>state.language)
    const auth = localStorage.getItem('auth');
    const user = auth ? JSON.parse(auth) : null;
    return (
        <>
        <div className={s.cont}>
            {
                language==='EN'?
                (<><h4 className={s.par}>
                    To request my Resume, you can log in with a Google account to view it and/or download it
                </h4>
                <h4 className={s.par}>
                </h4></>)
                :
                (<><h4 className={s.par}>
                    Para solicitar mi CV, puedes iniciar sesión con una cuenta de Google para acceder a visualizarlo y/o descargarlo
                </h4>
                <h4 className={s.par}>
                </h4></>)
            }
            {
                user?
                <>
                    {
                        language==='EN'? 'Continue as:' : 'Continuar como:' 
                    }
                    <Link to='/lalofreak/download/cv'>
                        <div className={s.loginUserCont}>
                            <p style={{fontFamily:'Trajan', color: 'white', textShadow:'0px 0px 3px black'}}>
                                {user.userAlias}
                            </p>
                            <br/>
                            <img className={s.googlePic} src={user.googlePic} alt={user.userAlias} /><br/>
                        </div>
                    </Link>
                    <p>
                        {
                            language==='EN'? 'or request with another account' : 'o solicitar con otra cuenta' 
                        }
                        
                    </p>
                    <br/>
                    <a href={`${URL_API}/auth/google`} onClick={()=>{return localStorage.removeItem('auth')}}>
                        <button className={s.googleButton} onClick={()=>{return localStorage.removeItem('auth')}}>
                            <img src={googleLogo} alt="" height='40px' />
                        </button>
                    </a>
                </>
                :
                <a href={`${URL_API}/auth/google`}>
                <button className={s.googleButton}>
                    <img src={googleLogo} alt="" height='40px' />
                </button>
            </a>
            }
        </div>        
    </>
    )
}