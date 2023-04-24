import { useDispatch } from "react-redux"
import { Contact } from "../Contact/Contact"
import { Design } from "../Design/Design"
import { Developer } from "../Developer/Developer"
import { OptionCanvas } from "../Options/OptionsCanvas"
import { Sound } from "../Sound/Sound"
import s from "./css/Card.module.css"
import { useEffect } from "react"
import { setOption } from "../../middlewares/redux/actions"

export const Card = (props) => {
    const dispatch = useDispatch()
    const {option} = props
    useEffect(()=>{dispatch(setOption(option))},[dispatch, option])
    return (
        <div className={s.contLandingPage}>
            <div className={s.bgCanvas}>
                {
                    option==='developer'? 
                    <div>
                        <Developer/>
                    </div>
                    :
                (
                    option==='sound'? 
                    <div>
                        <Sound/>
                    </div>
                    :
                (
                    option==='design'? 
                    <div>
                        <Design/>
                    </div>
                    :
                    (
                        option==='contact'? 
                        <div>
                            <Contact/>
                        </div>
                        :
                        <div>
                            <OptionCanvas/>
                        </div>
                    )
                )
                )
            }
            </div>
        </div>
    )
} 