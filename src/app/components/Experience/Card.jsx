import s from './Card.module.css';
import { useSelector } from 'react-redux';
import { Timeline } from './Timeline';

export const Card = (props) => {
  const { position, company, started, finished, description, more } = props;
  const language = useSelector(state => state.language);

  return (
    <article className={s.container}>
      <Timeline />
      <div className={s.sectionsContainer}>
        <section className={s.leftSection}>
          <ul>
            <h2>{position}</h2>
            <h3>{company}</h3>
            <p>{started} - {finished || (language === "EN" ? "present" : "actualidad")}</p>
          </ul>
        </section>
        <section className={s.rightSection}>
          <ul>
            <p>{description}</p>
            {
              more &&
              <a className={s.more} href={more} target='_blank' rel='noreferrer'>{language === "EN" ? "see more..." : "ver más..."}</a>
            }
          </ul>
        </section>
      </div>
    </article>
  );
};
