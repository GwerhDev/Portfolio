import s from './Card.module.css';
import { Timeline } from './Timeline';

export const Card = (props) => {
  const { language, position, company, started, finished, description, more } = props;
  const present = language === "EN" ? "present" : "actualidad";

  return (
    <article className={s.container}>
      <Timeline />
      <div className={s.sectionsContainer}>
        <section className={s.leftSection}>
          <ul>
            <h2>{position}</h2>
            <h3>{company}</h3>
            <p>{started} - {finished || present}</p>
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
