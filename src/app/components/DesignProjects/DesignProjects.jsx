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
          <h1>{language === 'EN' ? 'Isotypes': 'Isotipos'}</h1>
          <p>{language === 'EN' ? 'Isotypes for all kind of projects': 'Isotipos para todo tipo de proyectos'}</p>
        </div>
        <div className={s.logotypesContainer}>
          <div className={s.logoList}>
            <img src={laruinarecordsLogo} alt="" height="50px"/>
            <h6>La Ruina Records</h6>
          </div>
        </div>
        <div className={s.logotypesContainer}>
          <div className={s.logoList}>
            <img src={laruinatvLogo} alt="" height="50px"/>
            <h6>La Ruina TV</h6>
          </div>
        </div>
        <div className={s.logotypesContainer}>
          <div className={s.logoList}>
            <img src={advanc3dLogo} alt="" height="50px"/>
            <h6>ADvanc3D</h6>
          </div>
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