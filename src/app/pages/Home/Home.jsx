import { useEffect } from 'react'
import s from './css/Home.module.css'
import { useDispatch } from 'react-redux'
import { setOption } from '../../../middlewares/redux/actions'
import { Selection } from '../../components/Selection/Selection'


export const Home = () => {
    const dispatch = useDispatch()
    useEffect(()=>{dispatch(setOption('home'))},[dispatch])
    return (
        <div className={s.homeCont}>
            <div className={s.sectionCont}>
                <Selection/>
            </div>
        </div>
    )
}
