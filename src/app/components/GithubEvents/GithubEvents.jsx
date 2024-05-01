import s from './GithubEvents.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGithubEvents } from '../../../middlewares/redux/actions';
import clockIcon from '../../../assets/images/svg/clock-icon.svg';
import githubIcon from '../../../assets/images/png/github-icon.png';
import openwindowIcon from '../../../assets/images/png/openwindow-icon.png';

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
    setCurrent(lasts[index]);
    interval = setInterval(() => {
      setCurrent(lasts[index]);
      setIndex((index + 1) % lasts.length);
    }, 15000);
    return () => (clearInterval(interval));
  }, [current, lasts, index]);

  return (
    <ul className={s.container}>
      <li>
        <img className={s.clock} src={clockIcon} alt="" />
        <h4 className={s.sectionTitle}>{language === "EN" ? "Recent activity" : "Actividad reciente"}</h4>
        <h2 className={s.title}>
          <span>
            <img className={s.githubIcon} src={githubIcon} alt="" width="35px" />
          </span>
          <a href={current?.repoUrl} target='_blank' rel="noreferrer">
            {current?.name? "/" + current?.name : "Cargando..."}
            {current?.name? <img className={s.openwindowIcon} src={openwindowIcon} alt="" width="25px" /> : null}
          </a>
        </h2>
        <div className={s.ownerContainer}>
          <img src={current?.owner?.avatarUrl || null} alt="" height="30px" />
          <a href={current?.owner?.url || null} target='_blank' rel='noreferrer'>
            <p>{current?.owner?.name || null}</p>
          </a>
        </div>
        {
          current?.lastUpdated
          ?
          <span>{language === "EN" ? "Last update" : "Última actualización"}: <i>{new Date(current?.lastUpdated).toLocaleString()}</i></span>
          :
          <span>{language === "EN" ? "Connecting with Github" : "Estableciendo conexión con GitHub"}</span>
        }
      </li>
    </ul>
  );
};