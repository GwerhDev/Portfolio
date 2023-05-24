import s from "./css/Develop.module.css";
import { useSelector } from "react-redux";
import { PresentationCard } from "../../components/PresentationCard/PresentationCard";
import { Skills } from "../../components/Skills/Skills";
import { Featured } from "../../components/Featured/Featured";
import { GET_DESCRIPTION_DEV } from "../../../middlewares/misc/consts";
import portfolioDevImg from "../../../assets/images/png/portfolio-dev-img.png";
import { DevProjects } from "../../components/DevProjects/DevProjects";
import { Separator } from "../../components/Utils/Separator/Separator";

export const Develop = () => {
  const language = useSelector(state=>state.language)
  return ( 
    <div className={s.devCont}>
      <PresentationCard language={language} img={portfolioDevImg} description={GET_DESCRIPTION_DEV}/>
      <Separator marginTop="0px"/>      
      <Featured language={language}/>
      <Separator marginTop="-80px"/>      
      <DevProjects language={language}/>
      <Skills language={language}/>
    </div>
  )
}