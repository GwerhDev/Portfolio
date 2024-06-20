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
    GET_LASTS
 } from "../../misc/consts"
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
    info: {},
    lasts: [],
    portfolioInfo: {
        develop: {
            es: 'Proyectos y aplicaciones relacionados a la programación y el desarrollo web',
            en: 'Projects and applications related to web development and programming',
        },
        design: {
            es: 'Proyectos, modelos y muestras relacionadas al diseño 3D',
            en: 'Projects, models and samples related to 3D design',
        },
        sound: {
            es: 'Proyectos y lanzamientos relacionados a la post-producción de sonido',
            en: 'Projects and releases related to post-production of sound',
        }
    },
    devDailyJoke: ''
}

export default function rootReducer(state = initialState, action){
    const auth = localStorage.getItem('auth');
    const user = auth ? JSON.parse(auth) : null;
    
    switch(action.type){
        case GET_LASTS:
            return {
                ...state,
                lasts: action.payload,
            }
        case GET_DEVELOP:
            return {
                ...state,
                develop: action.payload
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
                selection: action.payload
            }
        case RESET_OPTION:
            return {
                ...state,
                selection: 'home'
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
        case GET_DEVDAILYJOKE:
            return {
                ...state,
                devDailyJoke: action.payload,
            }
        default:
            return {...state}
    }
}