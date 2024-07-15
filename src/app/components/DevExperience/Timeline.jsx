import s from './Timeline.module.css';
import experienceIcon from '../../../assets/images/svg/experience-icon.svg';

export const Timeline = () => {
  return (
    <div className={s.container}>
      <div className={s.timeline} style={{ height: "20px" }} />
      <img src={experienceIcon} alt="" width={40} />
      <div className={s.timeline} style={{ height: "100%" }} />
    </div>
  );
};
