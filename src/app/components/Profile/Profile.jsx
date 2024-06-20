import s from "./Profile.module.css";
import picGwerhDev from "../../../assets/images/png/LaloFreak.png";

export const Profile = () => {
    return (
    <span className={s.container}>
        <img 
            className={s.imgProfile}
            src={picGwerhDev} 
            alt="GwerhDev" 
            width="150px" 
        />
        <h2 className={s.name}>Gerardo guarda</h2>
        <h3 className={s.alias}>gwerh</h3>
    </span>
    )
};