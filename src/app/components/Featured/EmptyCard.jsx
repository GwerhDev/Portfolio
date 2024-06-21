import s from './EmptyCard.module.css';

export const EmptyCard = () => {
  return (
    <article className={s.card}>
      <section className={s.leftSection}>

      </section>
      <section className={s.rightSection}>
        <div>
          <p className={s.description}></p>
        </div>
        <div className={s.role}>
        </div>

        <span className={s.buttons}>
        </span>

      </section>
    </article>
  )
}
