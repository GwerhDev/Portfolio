import { useSelector } from "react-redux"
import { Contact } from "../Contact/Contact"
import { Design } from "../Design/Design"
import { Developer } from "../Developer/Developer"
import { OptionCanvas } from "../Options/OptionsCanvas"
import { Sound } from "../Sound/Sound"
import s from "./css/Card.module.css"

export const Card = () => {
    const option = useSelector(state=>state.option)
    return (
        <div className={s.contLandingPage}>
            <div className={s.bgCanvas}>

                {
                    option==='CVRoute'?
                    <div>
                        CV
                    </div>
                    :
                (
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
                ))
            }
            </div>
        </div>
    )
} 