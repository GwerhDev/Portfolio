import s from "./css/CanvasRouter.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setOption } from "../../../middlewares/redux/actions";
import { OptionCanvas } from "./OptionsCanvas";

export const CanvasRouter = (props) => {
  const dispatch = useDispatch();
  const { option } = props;

  function renderSwitch() {
    switch (option) {
      case 'intro':
        return <OptionCanvas />
      case 'bio':
        return <OptionCanvas />
      case 'resume':
        return <OptionCanvas />
      default:
        return;
    }
  }

  useEffect(() => {
    dispatch(setOption(option));
  }, [dispatch, option]);

  return (
    <div className={s.contLandingPage}>
      {
        renderSwitch()
      }
    </div>
  )
} 