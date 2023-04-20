import { useSelector } from 'react-redux'
import { UnderConstruction } from '../Utils/UnderConstruction'
import { URL_API } from '../../middlewares/misc/config'
import s from './css/Options.module.css'

export const Cv = () => {
    const language = useSelector(state=>state.language)
    return (
        <>
        <div className={s.cont}>
        {
            language==='EN'?
            (<><h4 className={s.par}>
                To request my CV, you can log in with a Google account to view it and/or download it
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
            <UnderConstruction/>
            <a href={`${URL_API}/auth/google`}>
                <button>Google</button>
            </a>
        </div>        
    </>
    )
}