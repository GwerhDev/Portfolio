import s from './css/Design.module.css'
import { UnderConstruction } from "../../components/Utils/UnderConstruction/UnderConstruction"
import { PresentationCard } from "../../components/PresentationCard/PresentationCard"
import portfolioDevImg from "../../../assets/images/png/portfolio-dev-img.png"
import { useSelector } from "react-redux"
import { GET_DESCRIPTION_DESIGN } from "../../../middlewares/misc/consts"

export const Design = () => {
  const language = useSelector(state=>state.language)

  return(
    <div className={s.designCont}>
      <PresentationCard language={language} hideCircle={false} img={portfolioDevImg} description={GET_DESCRIPTION_DESIGN}/>
      <UnderConstruction language={language}/>
    </div>
  )
}