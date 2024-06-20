import s from './Language.module.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../../../middlewares/redux/actions";
import lang from '../../../../functions/LanguageFunctions';

export const Language = () => {
  const dispatch = useDispatch();
  const language = useSelector(state => state.language);

  useEffect(() => {
    lang(language);
  }, [language]);

  return (
    <div className={s.lanCont}>
      <ul className={s.ulCont}>
        <button id="EN" value='EN' onClick={(e) => dispatch(setLanguage(e.target.value))}>
          en
        </button>
        <button id="ES" value='ES' onClick={(e) => dispatch(setLanguage(e.target.value))}>
          es
        </button>
      </ul>
    </div>
  )
}