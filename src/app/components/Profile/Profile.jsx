import s from "./css/Profile.module.css"
import { useDispatch } from "react-redux"
import { resetOption } from "../../../middlewares/redux/actions"
import picLaloFreak from "../../../assets/images/LaloFreak.jpg"

export const Profile = () => {
    const dispatch = useDispatch()
    return (
        <>
            <img 
                className={s.imgProfile} 
                src={picLaloFreak} 
                alt="LaloFreak" 
                width="150px" 
                onClick={()=>{return (
                    dispatch(resetOption()),
                    document.querySelector('#profileLalo').style.transform='translateX(-30vw)',
                    document.querySelector('#navCont').style.transform='translateX(0)'
                    )}}
                />
            <h2 className={s.name} style={{color: "white", fontWeight: 'thin', filter:'drop-shadow(0px 0px .1px yellow)'}}>Gerardo guarda</h2>
            <h3 className={s.alias} style={{color: "white", fontWeight: 'thin'}}>lalofreak</h3>
        </>
    )
} 