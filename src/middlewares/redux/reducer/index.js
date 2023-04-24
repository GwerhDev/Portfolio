import { RESET_OPTION, SET_OPTION, SET_LANGUAGE, GET_PROGRAMMING, GET_SOUND, GET_DESIGN, SET_MENU } from "../../misc/consts"

const initialState = {
    option: 'developer',
    language: 'EN',
    programming: '',
    sound: '',
    design: '',
    menu: ''
}


export default function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_PROGRAMMING:
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
                option: 'developer'
            }
        case SET_MENU:
            return {
                ...state,
                menu: action.payload
            }
        case SET_LANGUAGE:
            return {
                ...state,
                language: action.payload
            }
        default:
            return {...state}
    }
}