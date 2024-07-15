import s from './Card.module.css';
import experienceIcon from '../../../assets/images/svg/experience-icon.svg';

export const Card = (props) => {
  const { language, position, company, started, finished, description, more } = props;

  return (
    <article className={s.container}>
      <div className={s.timelineContainer}>
        <div className={s.timeline} style={{ height: "20px" }} />
        <img src={experienceIcon} alt="" width={40} />
        <div className={s.timeline} style={{ height: "100%" }} />
      </div>
      <div className={s.sectionsContainer}>
        <section className={s.leftSection}>
          <ul>
            <h2>{position}</h2>
            <h3>{company}</h3>
            <p>{started} - {finished}</p>
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
