import s from './Card.module.css';

export const Card = (props) => {
  const { image, description, role, language, title } = props;

  return (
    <article className={s.card}>
      <section className={s.leftSection} style={{ backgroundImage: `url(${image})` }}>
      </section>
      <section className={s.rightSection}>
        <div>
          <h3>{title}</h3>
          <p className={s.description}>{language === 'EN' ? description.en : description.es}</p>
        </div>
        <div className={s.role}>
          <p>{language === 'EN' ? role.en : role.es}</p>
        </div>
      </section>
    </article>)
}
