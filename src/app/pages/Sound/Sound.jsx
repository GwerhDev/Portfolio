import s from "./Sound.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PresentationCard } from "../../components/PresentationCard/PresentationCard";
/* import { Gear } from "../../components/Gear/Gear";
 */import { getSound, setSelection } from "../../../middlewares/redux/actions";
import { GET_DESCRIPTION_SOUND } from "../../../middlewares/misc/descriptions";
import { SoundProjects } from "../../components/SoundProjects/SoundProjects";
import { SoundSkills } from "../../components/SoundSkills/SoundSkills";
import soundIcon from '../../../assets/images/png/sound-icon.png';
import soundBack from '../../../assets/images/jpg/sound-bg.jpg';
import { Separator } from "../../components/Utils/Separator/Separator";

export const Sound = (props) => {
  const dispatch = useDispatch();
  const language = useSelector(state => state.language);
  const { selection } = props;

  useEffect(() => {
    dispatch(setSelection(selection));
  }, [dispatch, selection]);

  useEffect(() => {
    dispatch(getSound());
  }, [dispatch])

  return (
    <div className={s.container}>
      <div className="grids-background bg-position-top-center" />
      <PresentationCard background={soundBack} language={language} img={soundIcon} description={GET_DESCRIPTION_SOUND} />
      <main className="main-container">
        <div className="sections-container">
          <section className="section-container" id='projects-section'>
            <Separator marginTop="0px" />
            <h1>
              {language === "EN" ? "Releases" : "Lanzamientos"}
            </h1>
            <SoundProjects language={language} />
          </section>
        </div>
      </main>
      <section id="skills-section">
        {/* <Gear language={language} /> */}
        <Separator marginTop="0px" />
        <h1>{language === "EN" ? "Skills" : "Habilidades"}</h1>
        <SoundSkills language={language} />
      </section>
    </div>
  )
}