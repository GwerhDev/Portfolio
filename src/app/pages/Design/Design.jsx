import s from './css/Design.module.css'
import { PresentationCard } from "../../components/PresentationCard/PresentationCard"
import { useSelector } from "react-redux"
import { GET_DESCRIPTION_DESIGN } from '../../../middlewares/misc/descriptions';
import { DesignProjects } from '../../components/DesignProjects/DesignProjects';
import { DesignSkills } from '../../components/DesignSkills/DesignSkills';
import designBack from '../../../assets/images/jpg/design-bg.jpg';
import designIcon from '../../../assets/images/png/design-icon.png';

export const Design = () => {
  const language = useSelector(state=>state.language)

  return(
    <div className={s.designCont}>
      <PresentationCard background={designBack} language={language} hideCircle={false} img={designIcon} description={GET_DESCRIPTION_DESIGN}/>
      <DesignProjects language={language}/>
      <DesignSkills language={language} />
    </div>
  )
}