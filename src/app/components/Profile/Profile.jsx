import s from "./Profile.module.css";
import picGwerhDev from "../../../assets/images/png/profilePic.png"; 

export const Profile = () => {
  return (
    <ul className={s.container}>
      <img
        className={s.imgProfile}
        src={picGwerhDev}
        alt="GwerhDev"
        width="200px"
      />
      <h1 className={s.name}>Gerardo guarda</h1>
      <h2 className={s.alias}>gwerh</h2>
    </ul>
  )
};