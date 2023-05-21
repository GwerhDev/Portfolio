import s from "./css/LateralCanvas.module.css";
import { Menu } from "../Menu/Menu";
import { Profile } from "../Profile/Profile";
import { Footer } from "../Utils/Footer/Footer";


export const LateralCanvas = () => {
    return (
        <div className={s.profileLalo} id="profileLalo">
            <Profile/>
            <Menu/>
            <Footer/>            
        </div>
    )
};