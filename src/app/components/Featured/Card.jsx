import s from './Card.module.css';
import githubIcon from '../../../assets/images/png/github-icon.png';
import { useDispatch } from 'react-redux';
import { setInfo } from '../../../middlewares/redux/actions';
import loadingImg from "../../../assets/images/gif/loading.gif";
import { openInfoCanvas } from '../../../functions/InfoCanvasFunctions';

export const Card = (props) => {
  const dispatch = useDispatch();
  const { image, description, role, language, title, url, github, technologies, gallery } = props;

  return (
    <article className={s.container}>
      <section className={s.leftSection}>
        <img src={image} alt="" width="100%" onClick={() => {
          return (dispatch(setInfo({
            img: image ? image : loadingImg,
            title: title,
            type: 'web',
            description: language === 'EN' ? `Description: ${description.en}` : `Descripción: ${description.es}`,
            technologies: language === 'EN' ? `Technologies: ${technologies.en}` : `Tecnologías: ${technologies.es}`,
            role: language === 'EN' ? `Role: ${role.en}` : `Rol: ${role.es}`,
            url: url,
            github: github,
            gallery: gallery,
            index: 0
          })), openInfoCanvas()
          )
        }}
        />
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
          <a className={s.link} href={url} target="_blank" rel="noreferrer">
            <p>
              {language === 'EN' ? "visit" : "visitar"}
            </p>
          </a>
          {
            github?.frontend &&
            <a className={s.link} href={github.frontend} target="_blank" rel="noreferrer">
              <img src={githubIcon} width={15} alt="" />
              <p>
                frontend
              </p>
            </a>
          }

          {
            github?.backend &&
            <a className={s.link} href={github.backend} target="_blank" rel="noreferrer">
              <img src={githubIcon} width={15} alt="" />
              <p>
                backend
              </p>
            </a>
          }
        </ul>

      </section>
    </article>
  )
}
