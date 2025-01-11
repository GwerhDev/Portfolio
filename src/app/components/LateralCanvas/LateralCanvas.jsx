import s from "./LateralCanvas.module.css";
import { Selection } from "../Selection/Selection";

export const LateralCanvas = () => {
  return (
    <div className={s.lateralPanel} id="lateralPanel">
      <span className={s.innerContainer}>
        <Selection />
      </span>
    </div>
  )
};