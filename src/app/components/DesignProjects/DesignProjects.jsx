import React from 'react';
import s from './css/DesignProjects.module.css';
import laruinarecordsLogo from '../../../assets/images/svg/laruinarecords-logo.svg';
import advanc3dLogo from '../../../assets/images/svg/advanc3d-logo.svg';
import laruinatvLogo from '../../../assets/images/svg/laruinatv-logo.svg';

export const DesignProjects = (props) => {
  const { language } = props
  return (
    <div className={s.designContainer}>
      <section className={s.section}>
        <div className={s.header}>
          <h1>{language === 'EN' ? 'Logotypes': 'Logotipos'}</h1>
          <p>{language === 'EN' ? 'Logotypes for all kind of projects': 'Logotipos para todo tipo de proyectos'}</p>
        </div>
        <div className={s.logotypesContainer}>
          <img src={laruinarecordsLogo} alt="" height="50px"/>
        </div>
        <div className={s.logotypesContainer}>
          <img src={laruinatvLogo} alt="" height="50px"/>
        </div>
        <div className={s.logotypesContainer}>
          <img src={advanc3dLogo} alt="" height="50px"/>
        </div>
      </section>
      <section className={s.section}>
        <div className={s.header}>
          <h1>{language === 'EN' ? '3d Models': 'Modelos 3d'}</h1>
          <p>{language === 'EN' ? 'Models for 3d printers and applications' : 'Modelos para impresoras 3D y aplicaciones'}</p>
        </div>
      </section>
      <section className={s.section}>
        <div className={s.header}>
          <h1>{language === 'EN' ? 'Web design' : 'Diseno web'}</h1>
          <p>{language === 'EN' ? 'Templates for web design' : 'Plantillas para diseño web'}</p>
        </div>
      </section>
    </div>
  )
}
