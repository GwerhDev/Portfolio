import { 
    RESET_OPTION, 
    SET_OPTION, 
    SET_LANGUAGE, 
    GET_DEVELOP, 
    GET_SOUND, 
    GET_DESIGN, 
    SET_MENU, 
    GET_LOGIN, 
    SET_INFO
 } from "../../misc/consts"
const lang = localStorage.getItem('language');
const userLang = lang ? JSON.parse(lang) : 'EN';

const initialState = {
    option: 'home',
    language: userLang,
    programming: '',
    sound: '',
    design: '',
    menu: '',
    currentUser: '',
    info: {},
}

export default function rootReducer(state = initialState, action){
    const auth = localStorage.getItem('auth');
    const user = auth ? JSON.parse(auth) : null;
    switch(action.type){
        case GET_DEVELOP:
            return {
                ...state,
                programming: action.payload
            }
        case GET_SOUND:
            return {
                ...state,
                sound: action.payload
            }
        case GET_DESIGN:
            return {
                ...state,
                design: action.payload
            }
        case SET_OPTION:
            return {
                ...state,
                option: action.payload
            }
        case RESET_OPTION:
            return {
                ...state,
                option: 'home'
            }
        case SET_MENU:
            return {
                ...state,
                menu: action.payload
            }
        case SET_LANGUAGE:
            localStorage.setItem('language', JSON.stringify(action.payload))
            return {
                ...state,
                language: action.payload,
            }
        case GET_LOGIN:
            return {
                ...state,
                currentUser: action.payload.msg ? {
                    userId: action.payload.msg.userId,
                    userAlias: action.payload.msg.userAlias,
                    email: action.payload.msg.email,
                    googlePic: action.payload.msg.googlePic,
                } : user,
            };
        case SET_INFO:
            return {
                ...state,
                info: action.payload
            }
        default:
            return {...state}
    }
}