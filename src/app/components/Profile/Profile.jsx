import s from "./css/Profile.module.css";
import picLaloFreak from "../../../assets/images/png/LaloFreak.png";

export const Profile = () => {
    return (
    <>
        <img 
            className={s.imgProfile} 
            src={picLaloFreak} 
            alt="LaloFreak" 
            width="150px" 
        />
        <h2 className={s.name}>Gerardo guarda</h2>
        <h3 className={s.alias}>gwerh</h3>
    </>
    )
};