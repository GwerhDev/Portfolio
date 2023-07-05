import React, { useEffect } from 'react';
import s from './css/DevList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RenderDriveImg } from '../../../functions/RenderDriveImg';
import { getDevelop, setInfo } from '../../../middlewares/redux/actions';
import { openInfoCanvas } from '../../../functions/InfoCanvasFunctions';
import { NavFilter } from '../NavFilter/NavFilter';
import loadingImg from "../../../assets/images/gif/loading.gif";

export const DevList = (props) => {
  const { language } = props;
  const dispatch = useDispatch();
  const API = useSelector(state => state.programming);

  useEffect(() => {
    dispatch(getDevelop());
  }, [dispatch]);

  return (
    <div className={s.devCont}>
      <NavFilter language={language}/>
      <ul className={s.devUlCont} id='devListWebSection'>
        <div className={s.cathegoryDescription}>
          <h1 className={s.title} id="title">Web</h1>
          <p>{language==='EN'?'Web Applications':'Aplicaciones Web'}</p>
        </div>
        {
          API?.at(0)?.web?.map((e,index)=>{
          return(
            <li 
            onClick={()=>{
              return (
                dispatch(setInfo({
                  img: e.idImg? RenderDriveImg(e.idImg): loadingImg,
                  title: e.name,
                  type: 'web',
                  description: language==='EN'? `Description: ${e.description.en}` : `Descripción: ${e.description.es}`,
                  technologies: language==='EN'? `Technologies: ${e.technologies.en}` : `Tecnologías: ${e.technologies.es}`,
                  role: language==='EN'? `Role: ${e.role.en}` : `Rol: ${e.role.es}`,
                  url: e.href,
                  github: e.github
                })), 
                openInfoCanvas()
              )
            }}
              key={`ulWeb${index}`} className={s.devLiCont} style={{backgroundImage:`url(${e.idImg? RenderDriveImg(e.idImg): loadingImg})`, backgroundSize:`${e.idImg? 'cover': '30px'} `}}>
              <div className={s.backImgCanvas}>
                <h1>{e.name}</h1>
              </div>
            </li>
          )
        })}
      </ul>
      <ul className={s.devUlCont} id='devListDesktopSection'>
        <div className={s.cathegoryDescription}>
          <h1 className={s.title} id="title">{language==='EN'?'Desktop':'Escritorio'}</h1>
          <p>{language==='EN'?'Desktop Applications':'Aplicaciones de Escritorio'}</p>
        </div>
        {
          API?.at(1)?.desktop?.map((e,index)=>{
          return(
            <li 
              onClick={()=>{
                return (
                  dispatch(setInfo({
                    img: e.idImg? RenderDriveImg(e.idImg): loadingImg,
                    title: e.name,
                    type: 'desktop',
                    description: language==='EN'? `Description: ${e.description.en}` : `Descripción: ${e.description.es}`,
                    technologies: language==='EN'? `Technologies: ${e.technologies.en}` : `Tecnologías: ${e.technologies.es}`,
                    role: language==='EN'? `Role: ${e.role.en}` : `Rol: ${e.role.es}`,
                    url: e.href,
                    github: e.github
                  })), 
                  openInfoCanvas()
                )
              }}
              key={`ulDesk${index}`} className={s.devLiCont} style={{backgroundImage:`url(${e.idImg? RenderDriveImg(e.idImg): loadingImg})`, backgroundSize:`${e.idImg? 'cover': '30px'} `}}>
              <div className={s.backImgCanvas}>
                <h1>{e.name}</h1>
              </div>
            </li>
          )
        })}
      </ul>
      <ul className={s.devUlCont} id='devListMobileSection'>
        <div className={s.cathegoryDescription}>
          <h1 className={s.title} id="title">{language==='EN'?'Mobile':'Movil'}</h1>
          <p>{language==='EN'?'Mobile Applications':'Aplicaciones de Móvil'}</p>
        </div>
        {
          API?.at(2)?.mobile?.map((e,index)=>{
          return(
            <li 
              onClick={()=>{
                return (
                  dispatch(setInfo({
                    img: e.idImg? RenderDriveImg(e.idImg): loadingImg,
                    title: e.name,
                    type: 'mobile',
                    description: language==='EN'? `Description: ${e.description.en}` : `Descripción: ${e.description.es}`,
                    technologies: language==='EN'? `Technologies: ${e.technologies.en}` : `Tecnologías: ${e.technologies.es}`,
                    role: language==='EN'? `Role: ${e.role.en}` : `Rol: ${e.role.es}`,
                    url: e.href,
                    github: e.github
                  })), 
                  openInfoCanvas()
                )
              }}
              key={`ulMobile${index}`} className={s.devLiCont} style={{backgroundImage:`url(${e.idImg? RenderDriveImg(e.idImg): loadingImg})`, backgroundSize:`${e.idImg? 'cover': '30px'} `}}>
              <div className={s.backImgCanvas}>
                <h1>{e.name}</h1>
              </div>
            </li>
          )
        })}
      </ul>
      <ul className={s.devUlCont} id='devListSoftwareSection'>
        <div className={s.cathegoryDescription}>
          <h1 className={s.title} id="title">Software</h1>
          <p>{language==='EN'?'Software developing':'Desarrollo de Software'}</p>
        </div>
        {
          API?.at(3)?.software?.map((e,index)=>{
          return(
            <li 
              onClick={()=>{
                return (
                  dispatch(setInfo({
                    img: e.idImg? RenderDriveImg(e.idImg): loadingImg,
                    title: e.name,
                    type: 'software',
                    description: language==='EN'? `Description: ${e.description.en}` : `Descripción: ${e.description.es}`,
                    technologies: language==='EN'? `Technologies: ${e.technologies.en}` : `Tecnologías: ${e.technologies.es}`,
                    role: language==='EN'? `Role: ${e.role.en}` : `Rol: ${e.role.es}`,
                    url: e.href,
                    github: e.github
                  })), 
                  openInfoCanvas()
                )
              }}
              key={`ulSoft${index}`} className={s.devLiCont} style={{backgroundImage:`url(${e.idImg? RenderDriveImg(e.idImg): loadingImg})`, backgroundSize:`${e.idImg? 'cover': '30px'} `}}>
              <div className={s.backImgCanvas}>
                <h1>{e.name}</h1>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}