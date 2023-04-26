import { useDispatch, useSelector } from "react-redux"
import { setOption } from "../../middlewares/redux/actions"
import { SocialLinks } from "../Utils/SocialLinks"
import s from "./css/Card.module.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

export const Menu = () => {
    const dispatch = useDispatch()
    const language = useSelector(state=>state.language)
    return (
        <>
            <Link to="/lalofreak/home/introduction">
                <div 
                    className={s.divH2}
                    onClick={()=>{return (
                        dispatch(setOption('develop, design & sound')),
                        document.querySelector('#profileLalo').style.transform='translateX(-30vw)',
                        document.querySelector('#navCont').style.transform='translateX(0)'
                        )}}
                >
                    <h2>
                        {
                            language==='EN'?
                            'Intro' : 'Intro'
                        }
                    </h2>
                </div>
            </Link>

            <Link to="/lalofreak/home/bio">
                <div 
                    className={s.divH2}
                    onClick={()=>{return (
                        dispatch(setOption('bio')),
                        document.querySelector('#profileLalo').style.transform='translateX(-30vw)',
                        document.querySelector('#navCont').style.transform='translateX(0)'
                    )}}
                >
                    <h2>
                        Bio
                    </h2>
                </div>
            </Link>
            <Link to="/lalofreak/home/cv">
                <div 
                    className={s.divH2}
                    onClick={()=>{return (
                        dispatch(setOption('cv')),
                        document.querySelector('#profileLalo').style.transform='translateX(-30vw)',
                        document.querySelector('#navCont').style.transform='translateX(0)'
                        )}}
                >
                    <h2>
                        {
                            language==='EN'?
                                'Resume' : 'CV'
                        }                    
                    </h2>
                </div>
            </Link>
            <div className={s.contSL}>
                <SocialLinks/>
            </div>        
        </>
    )
}