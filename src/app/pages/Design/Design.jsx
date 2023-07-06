import s from './css/Design.module.css'
import { UnderConstruction } from "../../components/Utils/UnderConstruction/UnderConstruction"
import { PresentationCard } from "../../components/PresentationCard/PresentationCard"
import { useSelector } from "react-redux"
import { GET_DESCRIPTION_DESIGN } from "../../../middlewares/misc/consts"
import designIcon from '../../../assets/images/png/design-icon.png';
import designBack from '../../../assets/images/jpg/design-bg.jpg';

export const Design = () => {
  const language = useSelector(state=>state.language)

  return(
    <div className={s.designCont}>
      <PresentationCard background={designBack} language={language} hideCircle={false} img={designIcon} description={GET_DESCRIPTION_DESIGN}/>
      <UnderConstruction language={language}/>
    </div>
  )
}