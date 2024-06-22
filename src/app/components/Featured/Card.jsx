import s from './Card.module.css';

export const Card = (props) => {
  const { image, description, role, language, title, url, github } = props;

  return (
    <article className={s.container}>
      <section className={s.leftSection}>
        <a href={url} target="_blank" rel="noreferrer">
          <img src={image} alt="" width="100%" />
        </a>
      </section>
      <section className={s.rightSection}>
        <div>
          <h3>{title}</h3>
          <p className={s.description}>{language === 'EN' ? description.en : description.es}</p>
        </div>
        <div className={s.role}>
          <p>{language === 'EN' ? role.en : role.es}</p>
        </div>

        <ul className={s.buttons}>
          <a className={s.link} href={url} target="_blank" rel="noreferrer">{language === 'EN' ? "visit" : "visitar"}</a>
          <a className={s.link} href={github} target="_blank" rel="noreferrer">github</a>
        </ul>

      </section>
    </article>
  )
}
