import { RESET_OPTION, SET_OPTION, SET_LANGUAGE, GET_PROGRAMMING, GET_SOUND, GET_DESIGN } from "../../misc/consts"

const initialState = {
    option: 'programming, design & sound',
    language: 'EN',
    programming: '',
    sound: '',
    design: ''
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
                option: 'programming, design & sound'
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