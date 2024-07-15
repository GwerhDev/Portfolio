import s from './EmptyCard.module.css';
import { Timeline } from './Timeline';

export const EmptyCard = () => {
  return (
    <article className={s.container}>
      <article className={s.container}>
        <Timeline />
        <div className={s.sectionsContainer}>
          <section className={s.leftSection}>
            <ul>
              <span className={s.position}></span>
              <span className={s.company}></span>
              <span className={s.date}></span>
            </ul>
          </section>
          <section className={s.rightSection}>
            <ul>
              <span className={s.description}></span>
            </ul>
          </section>
        </div>
      </article>
    </article>
  );
};
