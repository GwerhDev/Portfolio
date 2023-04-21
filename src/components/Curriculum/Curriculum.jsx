import { Menu } from "../Profile/Menu"
import { Profile } from "../Profile/Profile"
import s from './css/Curriculum.module.css'

export const Curriculum = () => {
    return (
        <div className={s.contCV}>
            <div className={s.bgCanvas}>
                <div className={s.profileLalo} id="profileLalo">
                    <Profile/>
                    <Menu/>
                </div>
            </div>
        </div>
    )
}