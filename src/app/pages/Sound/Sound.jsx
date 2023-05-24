import s from "./css/Sound.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Title } from "../../components/Utils/Title/Title";
import { PresentationCard } from "../../components/PresentationCard/PresentationCard";
import { Gear } from "../../components/Gear/Gear";
import { getSound } from "../../../middlewares/redux/actions";
import { GET_DESCRIPTION_SOUND } from "../../../middlewares/misc/consts";
import { SoundProjects } from "../../components/SoundProjects/SoundProjects";
import portfolioDevImg from "../../../assets/images/png/portfolio-dev-img.png";

export const Sound = () => {
  const language = useSelector(state=>state.language)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getSound())
  }, [dispatch])
  
  return (
    <div className={s.soundCont}>
        <PresentationCard language={language} img={portfolioDevImg} description={GET_DESCRIPTION_SOUND}/>
        <Title title={language==='EN'? 'portfolio: sound':'portafolio: sonido'}/>
        <SoundProjects language={language}/>
        <Gear language={language}/>
    </div>
  )
}