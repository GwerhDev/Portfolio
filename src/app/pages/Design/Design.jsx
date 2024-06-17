import s from './Design.module.css'
import { PresentationCard } from "../../components/PresentationCard/PresentationCard"
import { useDispatch, useSelector } from "react-redux"
import { GET_DESCRIPTION_DESIGN } from '../../../middlewares/misc/descriptions';
import { DesignProjects } from '../../components/DesignProjects/DesignProjects';
import { DesignSkills } from '../../components/DesignSkills/DesignSkills';
import designBack from '../../../assets/images/jpg/design-bg.jpg';
import designIcon from '../../../assets/images/png/design-icon.png';
import { useEffect } from 'react';
import { setOption } from '../../../middlewares/redux/actions';

export const Design = (props) => {
  const dispatch = useDispatch();
  const language = useSelector(state => state.language);
  const { option } = props;

  useEffect(() => {
    dispatch(setOption(option));
  }, [dispatch, option]);

  return (
    <div className={s.designCont}>
      <PresentationCard background={designBack} language={language} hideCircle={false} img={designIcon} description={GET_DESCRIPTION_DESIGN} />
      <main className="main-container">
        <section className="section-container">
          <DesignProjects language={language} />
        </section>
      </main>
      <DesignSkills language={language} />
    </div>
  )
}