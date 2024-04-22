import s from './Home.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setOption } from '../../../middlewares/redux/actions';
import { Selection } from '../../components/Selection/Selection';

export const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setOption('home'))
    }, [dispatch]);

    return (
        <div className={s.homeCont}>
            <div className={s.sectionCont}>
                <Selection />
            </div>
        </div>
    )
}
