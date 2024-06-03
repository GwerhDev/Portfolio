import s from './Home.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setOption } from '../../../middlewares/redux/actions';
import { Selection } from '../../components/Selection/Selection';

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setOption('home'));
  }, [dispatch]);

  return (
    <div className={s.container}>
      <div className={s.homeCont}>
        <Selection />
      </div>
    </div>
  )
}
