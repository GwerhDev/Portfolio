import { Card } from './Card';
import s from './DevExperience.module.css';
import { EmptyCard } from './EmptyCard';

export const DevExperience = (props) => {
  const { language, experience } = props;

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
