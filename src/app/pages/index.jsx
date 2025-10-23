import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { PresentationCard } from "../components/PresentationCard/PresentationCard";
import { GET_DESCRIPTION_DEV } from "../../middlewares/misc/descriptions";
import { getDevDailyJoke, setSelection } from '../../middlewares/redux/actions';
import { Featured } from "../components/Featured/Featured";
import { Skills } from "../components/Skills/Skills";
import { Experience } from '../components/Experience/Experience';
import { Separator } from "../components/Utils/Separator/Separator";
import { Projects } from "../components/Projects/Projects";
import { GithubEvents } from "../components/GithubEvents/GithubEvents";
import devBack from '../../assets/images/jpg/dev-bg.jpg';

export const Home = (props) => {
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
    <div>
      <div className="grids-background bg-position-top-center" />
      <PresentationCard language={language} joke={true} background={devBack} devDailyJoke={devDailyJoke} description={GET_DESCRIPTION_DEV} />
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
            <Projects language={language} />
            <GithubEvents language={language} />
          </section>

          <section className="section-container" id="skills-section">
            <Separator marginTop="0px" />
            <h1>
              {language === "EN" ? "Skills" : "Habilidades"}
            </h1>
            <Skills />
          </section>
        </div>
      </main>
    </div>
  )
}