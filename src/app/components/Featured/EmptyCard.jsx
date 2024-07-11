import s from './EmptyCard.module.css';

export const EmptyCard = () => {
  return (
    <article className={s.container}>
      <div className={s.image}></div>
      <ul className={s.listContainer}>
        <li className={s.title}></li>
        <li className={s.subtitle}></li>
        <li className={s.buttons}></li>
      </ul>
    </article>
  )
}
