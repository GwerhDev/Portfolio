import { Selection } from "../Selection/Selection";
import s from "./LateralCanvas.module.css";

export const LateralCanvas = () => {
  return (
    <div className={s.profileLalo} id="profileLalo">
      <span className={s.innerContainer}>
        <Selection />
      </span>
    </div>
  )
};