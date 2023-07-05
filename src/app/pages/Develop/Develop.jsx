import s from "./css/Develop.module.css";
import { useSelector } from "react-redux";
import { PresentationCard } from "../../components/PresentationCard/PresentationCard";
import { Skills } from "../../components/Skills/Skills";
import { Featured } from "../../components/Featured/Featured";
import { GET_DESCRIPTION_DEV } from "../../../middlewares/misc/consts";
import { Separator } from "../../components/Utils/Separator/Separator";
import { InfoCanvas } from "../../components/Utils/InfoCanvas/InfoCanvas";
import { DevList } from "../../components/DevList/DevList";
/* import { DevProjects } from "../../components/DevProjects/DevProjects"; */
import devIcon from '../../../assets/images/png/dev-icon.png';

export const Develop = () => {
  const language = useSelector(state=>state.language)
  return ( 
    <div className={s.devCont}>
      <InfoCanvas/>
      <PresentationCard language={language} img={devIcon} description={GET_DESCRIPTION_DEV}/>
      <Separator marginTop="0px"/>      
      <Featured language={language}/>
      <DevList language={language}/>
      {/* <DevProjects language={language}/> */}
      <Skills language={language}/>
    </div>
  )
}