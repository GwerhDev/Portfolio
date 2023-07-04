import s from "./css/Profile.module.css";
import { useDispatch } from "react-redux";
import { resetOption } from "../../../middlewares/redux/actions";
import picLaloFreak from "../../../assets/images/png/LaloFreak.jpg";
import { profilePicClick } from "../../../functions/ProfileFunctions";

export const Profile = () => {
    const dispatch = useDispatch()
    return (
    <>
        <img 
            className={s.imgProfile} 
            src={picLaloFreak} 
            alt="LaloFreak" 
            width="150px" 
            onClick={()=> profilePicClick(dispatch, resetOption)}
        />
        <h2 className={s.name}>Gerardo guarda</h2>
        <h3 className={s.alias}>gwerh</h3>
    </>
    )
};