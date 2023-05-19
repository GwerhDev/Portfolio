import s from "./css/LateralCanvas.module.css"
import { Menu } from "../Menu/Menu"
import { Profile } from "../Profile/Profile"


export const LateralCanvas = () => {
    return(
        <div className={s.profileLalo} id="profileLalo">
            <Profile/>
            <Menu/>
        </div>
)}