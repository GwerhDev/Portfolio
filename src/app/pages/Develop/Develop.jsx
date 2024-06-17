import { useDispatch } from 'react-redux';
import s from "./Develop.module.css";
import { useSelector } from "react-redux";
import { PresentationCard } from "../../components/PresentationCard/PresentationCard";
import { DevSkills } from "../../components/DevSkills/DevSkills";
import { Featured } from "../../components/Featured/Featured";
import { GET_DESCRIPTION_DEV } from "../../../middlewares/misc/descriptions";
import { Separator } from "../../components/Utils/Separator/Separator";
import { InfoCanvas } from "../../components/Utils/InfoCanvas/InfoCanvas";
import { DevProjects } from "../../components/DevProjects/DevProjects";
import { GithubEvents } from "../../components/GithubEvents/GithubEvents";
import { useEffect } from "react";
import { setOption } from '../../../middlewares/redux/actions';
import devIcon from '../../../assets/images/png/dev-icon.png';
import devBack from '../../../assets/images/jpg/dev-bg.jpg';

export const Develop = (props) => {
  const dispatch = useDispatch();
  const language = useSelector(state => state.language);
  const { option } = props;

  useEffect(() => {
    dispatch(setOption(option));
  }, [dispatch, option]);

  return (
    <div className={s.devCont}>
      <InfoCanvas />
      <PresentationCard background={devBack} language={language} img={devIcon} description={GET_DESCRIPTION_DEV} />
      <div className="main-container">
        <section className="section-container">
          <Separator marginTop="0px" />
          <Featured language={language} />
          <DevProjects language={language} />
          <GithubEvents language={language} />
        </section>
      </div>
      <DevSkills language={language} />
    </div>
  )
}