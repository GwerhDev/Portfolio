import {
  RESET_OPTION,
  SET_OPTION,
  SET_LANGUAGE,
  GET_DEVELOP,
  GET_SOUND,
  GET_DESIGN,
  SET_MENU,
  GET_LOGIN,
  SET_INFO,
  GET_DEVDAILYJOKE,
  GET_LASTS,
  SET_INDEX,
  RESET_INFO,
  GET_EXPERIENCE
} from "../../misc/consts"
import { Experience } from "../../models/Experience";
import { Info } from "../../models/Info";
import { PortfolioInfo } from "../../models/PortfolioInfo";
const lang = localStorage.getItem('language');
const userLang = lang ? JSON.parse(lang) : 'EN';

const initialState = {
  selection: 'home',
  language: userLang,
  develop: '',
  sound: '',
  design: '',
  menu: '',
  currentUser: '',
  info: new Info(),
  lasts: [],
  portfolioInfo: new PortfolioInfo(),
  devDailyJoke: '',
  experience: new Experience(),
}

export default function rootReducer(state = initialState, action) {
  const auth = localStorage.getItem('auth');
  const user = auth ? JSON.parse(auth) : null;

  switch (action.type) {
    case GET_EXPERIENCE:
      return {
        ...state,
        experience: action.payload,
      };

    case GET_LASTS:
      return {
        ...state,
        lasts: action.payload,
      };

    case GET_DEVELOP:
      return {
        ...state,
        develop: action.payload
      };

    case GET_SOUND:
      return {
        ...state,
        sound: action.payload
      };

    case GET_DESIGN:
      return {
        ...state,
        design: action.payload
      };

    case SET_OPTION:
      return {
        ...state,
        selection: action.payload
      };

    case RESET_OPTION:
      return {
        ...state,
        selection: 'home'
      };

    case SET_MENU:
      return {
        ...state,
        menu: action.payload
      };

    case SET_LANGUAGE:
      localStorage.setItem('language', JSON.stringify(action.payload))
      return {
        ...state,
        language: action.payload,
      };

    case GET_LOGIN:
      return {
        ...state,
        currentUser: action.payload.msg ? {
          userAlias: action.payload.msg.userAlias,
          email: action.payload.msg.email,
          googlePic: action.payload.msg.googlePic,
        } : user,
      };

    case SET_INFO:
      return {
        ...state,
        info: action.payload,
      };
    
    case RESET_INFO:
      return {
        ...state,
        info: new Info(),
      };

    case SET_INDEX:
      return {
        ...state,
        info: {
          ...state.info,
          index: action.payload
        }
      };

    case GET_DEVDAILYJOKE:
      return {
        ...state,
        devDailyJoke: action.payload,
      };

    default:
      return { ...state }
  }
}