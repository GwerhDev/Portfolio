import s from './Design.module.css'
import { PresentationCard } from "../../components/PresentationCard/PresentationCard"
import { useDispatch, useSelector } from "react-redux"
import { GET_DESCRIPTION_DESIGN } from '../../../middlewares/misc/descriptions';
import { DesignProjects } from '../../components/DesignProjects/DesignProjects';
import { DesignSkills } from '../../components/DesignSkills/DesignSkills';
import designBack from '../../../assets/images/jpg/design-bg.jpg';
import designIcon from '../../../assets/images/png/design-icon.png';
import { useEffect } from 'react';
import { setSelection } from '../../../middlewares/redux/actions';

export const Design = (props) => {
  const dispatch = useDispatch();
  const language = useSelector(state => state.language);
  const { selection } = props;

  useEffect(() => {
    dispatch(setSelection(selection));
  }, [dispatch, selection]);

  return (
    <div className={s.designCont}>
      <PresentationCard background={designBack} language={language} hideCircle={false} img={designIcon} description={GET_DESCRIPTION_DESIGN} />
      <main className="main-container">
        <section className="section-container" id='projects-section'>
          <DesignProjects language={language} />
        </section>
      </main>
      <section id="skills-section">
        <DesignSkills language={language} />
      </section>
    </div>
  )
}