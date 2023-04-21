import s from "./css/Card.module.css"
import { Menu } from "./Menu"
import { Profile } from "./Profile"


export const ProfileCanvas = () => {
    return(
        <div className={s.profileLalo} id="profileLalo">
            <Profile/>
            <Menu/>
        </div>
)}