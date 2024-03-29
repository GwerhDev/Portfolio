import s from "./css/Sound.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Title } from "../../components/Utils/Title/Title";
import { PresentationCard } from "../../components/PresentationCard/PresentationCard";
import { Gear } from "../../components/Gear/Gear";
import { getSound } from "../../../middlewares/redux/actions";
import { GET_DESCRIPTION_SOUND } from "../../../middlewares/misc/descriptions";
import { SoundProjects } from "../../components/SoundProjects/SoundProjects";
import { SoundSkills } from "../../components/SoundSkills/SoundSkills";
import soundIcon from '../../../assets/images/png/sound-icon.png';
import soundBack from '../../../assets/images/jpg/sound-bg.jpg';

export const Sound = () => {
  const language = useSelector(state=>state.language)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getSound())
  }, [dispatch])
  
  return (
    <div className={s.soundCont}>
        <PresentationCard background={soundBack} language={language} img={soundIcon} description={GET_DESCRIPTION_SOUND}/>
        <div className={s.titleContainer}><Title backgroundColor={true} color={"white"} title={language==='EN'? 'releases':'lanzamientos'}/></div>
        <SoundProjects language={language}/>
        <Gear language={language}/>
        <SoundSkills language={language}/>
    </div>
  )
}