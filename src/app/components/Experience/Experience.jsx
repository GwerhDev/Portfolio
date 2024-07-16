import { useSelector } from 'react-redux';
import s from './Experience.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Card } from './Card';
import { EmptyCard } from './EmptyCard';
import { getExperience } from '../../../middlewares/redux/actions';

export const Experience = (props) => {
  const dispatch = useDispatch();
  const { language, selection } = props;
  const experience = useSelector(state => state.experience[selection]);

  useEffect(() => {
    dispatch(getExperience());
  }, [dispatch]);

  return (
    <ul className={s.container}>
      {
        experience
        ?
        experience.map((e, index) => {
          return (
            <li key={index}>
              <Card
                more={e.more}
                position={language === 'EN' ? e.position.en : e.position.es}
                company={e.company}
                started={e.started}
                finished={e.finished}
                description={language === 'EN' ? e.description.en : e.description.es}
              />
            </li>
          )
        })
        :
        <EmptyCard />
      }
    </ul>
  );
};
