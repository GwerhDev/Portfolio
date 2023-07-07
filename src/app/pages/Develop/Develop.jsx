import s from "./css/Develop.module.css";
import { useSelector } from "react-redux";
import { PresentationCard } from "../../components/PresentationCard/PresentationCard";
import { DevSkills } from "../../components/DevSkills/DevSkills";
import { Featured } from "../../components/Featured/Featured";
import { GET_DESCRIPTION_DEV } from "../../../middlewares/misc/consts";
import { Separator } from "../../components/Utils/Separator/Separator";
import { InfoCanvas } from "../../components/Utils/InfoCanvas/InfoCanvas";
import { DevProjects } from "../../components/DevProjects/DevProjects";
import devIcon from '../../../assets/images/png/dev-icon.png';
import devBack from '../../../assets/images/jpg/dev-bg.jpg';

export const Develop = () => {
  const language = useSelector(state=>state.language)
  return ( 
    <div className={s.devCont}>
      <InfoCanvas/>
      <PresentationCard background={devBack} language={language} img={devIcon} description={GET_DESCRIPTION_DEV}/>
      <Separator marginTop="0px"/>      
      <Featured language={language}/>
      <DevProjects language={language}/>
      <DevSkills language={language}/>
    </div>
  )
}