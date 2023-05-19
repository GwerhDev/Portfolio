import { UnderConstruction } from "../../components/Utils/UnderConstruction/UnderConstruction"
import { PresentationCard } from "../../components/PresentationCard/PresentationCard"
import portfolioDevImg from "../../../assets/images/portfolio-dev-img.png"
import { useSelector } from "react-redux"
import { GET_DESCRIPTION_DESIGN } from "../../../middlewares/misc/consts"

export const Design = () => {
  const language = useSelector(state=>state.language)

  return(
    <div>
      <PresentationCard language={language} img={portfolioDevImg} description={GET_DESCRIPTION_DESIGN}/>
      <UnderConstruction/>
    </div>
  )
}