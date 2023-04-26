import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setOption } from "../../middlewares/redux/actions"
import { OptionCanvas } from "../Options/OptionsCanvas"
import { Developer } from "../Developer/Developer"
import { Design } from "../Design/Design"
import { Sound } from "../Sound/Sound"
import { Contact } from "../Contact/Contact"
import s from "./css/Card.module.css"

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