import s from "./css/Menu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { setOption } from "../../../middlewares/redux/actions";
import { SocialLinks } from "../Utils/SocialLinks/SocialLinks";

export const Menu = () => {
    const dispatch = useDispatch()
    const language = useSelector(state=>state.language)
    return (
        <>
            <div 
                className={s.divH2}
                onClick={()=>{return (
                    dispatch(setOption('introduction')),
                    document.querySelector('#profileLalo').style.transform='translateX(-40vw)',
                    document.querySelector('#navCont').style.transform='translateX(0)'
                    )}
                }
            >
                <Link to="/home/introduction" className={s.linkMenu}>
                    { language==='EN'? 'Intro' : 'Intro' }
                </Link>
            </div>

            <div 
                className={s.divH2}
                onClick={()=>{return (
                    dispatch(setOption('bio')),
                    document.querySelector('#profileLalo').style.transform='translateX(-30vw)',
                    document.querySelector('#navCont').style.transform='translateX(0)'
                )}}
            >
                <Link to="/home/bio" className={s.linkMenu}>
                    Bio
                </Link>
            </div>
            <div 
                className={s.divH2}
                onClick={()=>{return (
                    dispatch(setOption('cv')),
                    document.querySelector('#profileLalo').style.transform='translateX(-30vw)',
                    document.querySelector('#navCont').style.transform='translateX(0)'
                    )}}
                    >
                <Link to="/home/cv" className={s.linkMenu}>
                    { language==='EN'? 'Resume' : 'CV' }
                </Link> 
            </div>
            <div className={s.contSL}>
                <SocialLinks gitHub='https://github.com/LaloFreak' linkedIn='https://www.linkedin.com/in/lalofreak/' />
            </div>        
        </>
    )
};