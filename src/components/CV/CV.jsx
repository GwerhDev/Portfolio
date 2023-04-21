import { Menu } from "../Profile/Menu"
import { Profile } from "../Profile/Profile"
import s from "./css/CV.module.css"

export const CV = () => {
    return (
        <div>
            CV
            <div className={s.profileLalo} id="profileLalo">
                <Profile/>
                <Menu/>
            </div>
        </div>
    )
}