import React, { useEffect } from 'react';
import s from './DevProjects.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RenderMainTech } from '../../../functions/RenderMainTech';
import { getDevelop, setInfo } from '../../../middlewares/redux/actions';
import { openInfoCanvas } from '../../../functions/InfoCanvasFunctions';
import { NavFilter } from '../NavFilter/NavFilter';
import loadingImg from "../../../assets/images/gif/loading.gif";
import webIcon from "../../../assets/images/svg/web-icon.svg";
import desktopIcon from "../../../assets/images/svg/desktop-icon.svg";
import mobileIcon from "../../../assets/images/svg/mobile-icon.svg";
import softwareIcon from "../../../assets/images/svg/software-icon.svg";

export const DevProjects = (props) => {
  const { language } = props;
  const dispatch = useDispatch();
  const API = useSelector(state => state.develop);

  useEffect(() => {
    dispatch(getDevelop());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <section className={s.projectSection}>
        <NavFilter language={language} />
        <ul className={s.devUlCont} id='devListWebSection'>
          <div className={s.cathegoryDescription}>
            <img src={webIcon} alt="" width={50} />
            <p>{language === 'EN' ? 'Web Applications' : 'Aplicaciones Web'}</p>
          </div>
          {
            API ? API.at(0)?.web?.map((e, index) => {
              return (
                e.published &&
                <li
                  onClick={() => {
                    return (
                      dispatch(setInfo({
                        img: e.img ? e.img : loadingImg,
                        title: e.name,
                        type: 'web',
                        description: language === 'EN' ? `Description: ${e.description.en}` : `Descripción: ${e.description.es}`,
                        technologies: language === 'EN' ? `Technologies: ${e.technologies.en}` : `Tecnologías: ${e.technologies.es}`,
                        role: language === 'EN' ? `Role: ${e.role.en}` : `Rol: ${e.role.es}`,
                        url: e.href,
                        github: e.repository,
                        gallery: e.gallery,
                        index: 0
                      })),
                      openInfoCanvas()
                    )
                  }}
                  key={`ulWeb${index}`} className={s.devLiCont} style={{ backgroundImage: `url(${e.img ? e.img : loadingImg})`, backgroundSize: `${e.img ? 'cover' : '30px'} ` }}>
                  <div className={s.backImgCanvas}>
                    {
                      e.technologies.main ? <img src={RenderMainTech(e.technologies.main)} alt="" width={30} /> : null
                    }
                    <h1>{e.name}</h1>
                  </div>
                </li>
              )
            }) : <li className={s.emptyCard}></li>
          }
        </ul>
        <ul className={s.devUlCont} id='devListDesktopSection'>
          <div className={s.cathegoryDescription}>
            <img src={desktopIcon} alt="" width={50} />
            <p>{language === 'EN' ? 'Desktop Applications' : 'Aplicaciones de Escritorio'}</p>
          </div>
          {
            API ? API.at(1)?.desktop?.map((e, index) => {
              return (
                e.published &&
                <li
                  onClick={() => {
                    return (
                      dispatch(setInfo({
                        img: e.img ? e.img : loadingImg,
                        title: e.name,
                        type: 'desktop',
                        description: language === 'EN' ? `Description: ${e.description.en}` : `Descripción: ${e.description.es}`,
                        technologies: language === 'EN' ? `Technologies: ${e.technologies.en}` : `Tecnologías: ${e.technologies.es}`,
                        role: language === 'EN' ? `Role: ${e.role.en}` : `Rol: ${e.role.es}`,
                        url: e.href,
                        github: e.repository,
                        gallery: e.gallery,
                        index: 0
                      })),
                      openInfoCanvas()
                    )
                  }}
                  key={`ulDesk${index}`} className={s.devLiCont} style={{ backgroundImage: `url(${e.img ? e.img : loadingImg})`, backgroundSize: `${e.img ? 'cover' : '30px'} ` }}>
                  <div className={s.backImgCanvas}>
                    {
                      e.technologies.main ? <img src={RenderMainTech(e.technologies.main)} alt="" width={30} /> : null
                    }
                    <h1>{e.name}</h1>
                  </div>
                </li>
              )
            }) : <li className={s.emptyCard}></li>
          }
        </ul>
        <ul className={s.devUlCont} id='devListMobileSection'>
          <div className={s.cathegoryDescription}>
            <img src={mobileIcon} alt="" width={50} />
            <p>{language === 'EN' ? 'Mobile Applications' : 'Aplicaciones de Móvil'}</p>
          </div>
          {
            API ? API.at(2)?.mobile?.map((e, index) => {
              return (
                e.published &&
                <li
                  onClick={() => {
                    return (
                      dispatch(setInfo({
                        img: e.img ? e.img : loadingImg,
                        title: e.name,
                        type: 'mobile',
                        description: language === 'EN' ? `Description: ${e.description.en}` : `Descripción: ${e.description.es}`,
                        technologies: language === 'EN' ? `Technologies: ${e.technologies.en}` : `Tecnologías: ${e.technologies.es}`,
                        role: language === 'EN' ? `Role: ${e.role.en}` : `Rol: ${e.role.es}`,
                        url: e.href,
                        github: e.repository,
                        gallery: e.gallery,
                        index: 0
                      })),
                      openInfoCanvas()
                    )
                  }}
                  key={`ulMobile${index}`} className={s.devLiCont} style={{ backgroundImage: `url(${e.img ? e.img : loadingImg})`, backgroundSize: `${e.img ? 'cover' : '30px'} ` }}>
                  <div className={s.backImgCanvas}>
                    {
                      e.technologies.main ? <img src={RenderMainTech(e.technologies.main)} alt="" width={30} /> : null
                    }
                    <h1>{e.name}</h1>
                  </div>
                </li>
              )
            }) : <li className={s.emptyCard}></li>
          }
        </ul>
        <ul className={s.devUlCont} id='devListSoftwareSection'>
          <div className={s.cathegoryDescription}>
            <img src={softwareIcon} alt="" width={50} />
            <p>{language === 'EN' ? 'Software Development' : 'Desarrollo de Software'}</p>
          </div>
          {
            API ? API.at(3)?.software?.map((e, index) => {
              return (
                e.published &&
                <li
                  onClick={() => {
                    return (
                      dispatch(setInfo({
                        img: e.img ? e.img : loadingImg,
                        title: e.name,
                        type: 'software',
                        description: language === 'EN' ? `Description: ${e.description.en}` : `Descripción: ${e.description.es}`,
                        technologies: language === 'EN' ? `Technologies: ${e.technologies.en}` : `Tecnologías: ${e.technologies.es}`,
                        role: language === 'EN' ? `Role: ${e.role.en}` : `Rol: ${e.role.es}`,
                        url: e.href,
                        github: e.repository,
                        download: e.download,
                        gallery: e.gallery,
                        index: 0
                      })),
                      openInfoCanvas()
                    )
                  }}
                  key={`ulSoft${index}`} className={s.devLiCont} style={{ backgroundImage: `url(${e.img ? e.img : loadingImg})`, backgroundSize: `${e.img ? 'cover' : '30px'} ` }}>
                  <div className={s.backImgCanvas}>
                    {
                      e.technologies.main ? <img src={RenderMainTech(e.technologies.main)} alt="" width={30} /> : null
                    }
                    <h1>{e.name}</h1>
                  </div>
                </li>
              )
            }) : <li className={s.emptyCard}></li>
          }
        </ul>
      </section>
    </div>
  )
}
