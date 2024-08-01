import { useDispatch } from 'react-redux';
import s from "./Develop.module.css";
import { useSelector } from "react-redux";
import { PresentationCard } from "../../components/PresentationCard/PresentationCard";
import { GET_DESCRIPTION_DEV } from "../../../middlewares/misc/descriptions";
import { DevSkills } from "../../components/DevSkills/DevSkills";
import { Featured } from "../../components/Featured/Featured";
import { Separator } from "../../components/Utils/Separator/Separator";
import { InfoCanvas } from "../../components/Utils/InfoCanvas/InfoCanvas";
import { DevProjects } from "../../components/DevProjects/DevProjects";
import { GithubEvents } from "../../components/GithubEvents/GithubEvents";
import { Experience } from '../../components/Experience/Experience';
import { useEffect } from "react";
import { getDevDailyJoke, setSelection } from '../../../middlewares/redux/actions';
import devBack from '../../../assets/images/jpg/dev-bg.jpg';

export const Develop = (props) => {
  const dispatch = useDispatch();
  const language = useSelector(state => state.language);
  const devDailyJoke = useSelector(state => state.devDailyJoke);

  const { selection } = props;

  useEffect(() => {
    dispatch(getDevDailyJoke(language === 'EN' ? 'en' : 'es'));
  }, [dispatch, language]);

  useEffect(() => {
    dispatch(setSelection(selection));
  }, [dispatch, selection]);

  return (
    <div className={s.container}>
      <div className="grids-background bg-position-top-center" />
      <PresentationCard joke={true} background={devBack} language={language} devDailyJoke={devDailyJoke} description={GET_DESCRIPTION_DEV} />
      <main className="main-container">
        <div className="sections-container">

          <section className="section-container" id="experience-section">
            <Separator marginTop="0px" />
            <h1>
              {language === "EN" ? "Experience" : "Experiencia"}
            </h1>
            <Experience language={language} selection={selection} />
          </section>

          <section className="section-container" id="projects-section">
            <Separator marginTop="0px" />
            <h1>
              {language === "EN" ? "Projects" : "Proyectos"}
            </h1>
            <Featured language={language} />
            <DevProjects language={language} />
            <GithubEvents language={language} />
          </section>

        </div>
      </main >

      <section id="skills-section">
        <Separator marginTop="0px" />
        <h1>
          {language === "EN" ? "Skills" : "Habilidades"}
        </h1>
        <DevSkills />
      </section>

      <InfoCanvas />
    </div >
  )
}