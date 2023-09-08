import s from "./CanvasRouter.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setOption } from "../../../../middlewares/redux/actions";
import { Develop } from "../../../pages/Develop/Develop";
import { Design } from "../../../pages/Design/Design";
import { Sound } from "../../../pages/Sound/Sound";
import { Contact } from "../../../pages/Contact/Contact";
import { OptionCanvas } from "../../../pages/Options/OptionsCanvas";

export const CanvasRouter = (props) => {
    const dispatch = useDispatch();
    const {option} = props;
    useEffect(()=>{dispatch(setOption(option))},[dispatch, option]);
    return (
        <div className={s.contLandingPage}>
            <div className={s.bgCanvas}>
                {
                    option==='develop'? 
                    <div><Develop/></div>
                    :
                    (
                        option==='sound'? 
                        <div><Sound/></div>
                        :
                        (
                            option==='design'? 
                            <div><Design/></div>
                            :
                            (
                                option==='contact'? 
                                <div><Contact/></div>
                                :
                                <div><OptionCanvas/></div>
                            )
                        )
                    )
                }
            </div>
        </div>
    )
} 