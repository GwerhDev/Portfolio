import s from './GithubEvents.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGithubEvents } from '../../../middlewares/redux/actions';
import githubIcon from '../../../assets/images/png/github-icon.png';

export const GithubEvents = (props) => {
  const { language } = props;
  const dispatch = useDispatch();
  const lasts = useSelector(state => state.lasts);
  const [index, setIndex] = useState(0);
  const [current, setCurrent] = useState(lasts[0] || "");

  useEffect(() => {
    dispatch(getGithubEvents());
  }, [dispatch]);

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setCurrent(lasts[index]);
      setIndex((index + 1) % lasts.length);
    }, 15000);
    return () => (clearInterval(interval));
  }, [current, lasts, index]);

  return (
    <ul className={s.container}>
      <li>
        <h4>{language === "EN" ? "Lasts Projects" : "Últimos Proyectos"}</h4>
        <h2 className={s.title}>
          <span>
            <img src={githubIcon} alt="" width="35px" />
          </span>
          <a href={current?.repoUrl} target='_blank' rel="noreferrer">
            {current?.name || "Cargando..."}
          </a>
        </h2>
        {
          current?.lastUpdated
          ?
          <span>{language === "EN" ? "Last update" : "Última actualización"}: <i>{new Date(current?.lastUpdated).toLocaleString()}</i></span>
          :
          <span>{language === "EN" ? "Connecting with Github" : "Estableciando conexión con GitHub"}</span>
        }
      </li>
    </ul>
  );
};