import { useEffect } from 'react'
import s from './css/Home.module.css'
import { useDispatch } from 'react-redux'
import { setOption } from '../../middlewares/redux/actions'
import { Section } from './Section'
import { Skills } from './Skills'
import { Card } from '../Profile/Card'

export const Home = () => {
    const dispatch = useDispatch()
    useEffect(()=>{dispatch(setOption('home'))},[dispatch])
    return (
        <div className={s.homeCont}>
            <div className={s.sectionCont}>
                <Section/>
            </div>
            <div className={s.skillsCont}>
                <Skills/>
            </div>
        </div>
    )
}
