import axios from "axios";
import { RESET_OPTION, SET_OPTION, SET_LANGUAGE, GET_PROGRAMMING, GET_DESIGN, GET_SOUND } from "../../misc/consts";
import { URL_API } from "../../misc/config";

export const getProgramming = () => {
    return async function (dispatch) {
        await axios.get(`${URL_API}/getprogramming`)
        .then(res => {
            dispatch({
                type: GET_PROGRAMMING,
                payload: res.data
            })
        })
    }}

export const getDesign = () => {
    return async function (dispatch) {
        await axios.get(`${URL_API}/getdesign`)
        .then(res => {
            dispatch({
                type: GET_DESIGN,
                payload: res.data
            })
        })
    }}

export const getSound = () => {
    return async function (dispatch) {
        await axios.get(`${URL_API}/getsound`)
        .then(res => {
            dispatch({
                type: GET_SOUND,
                payload: res.data
            })
        })
    }}

export function setOption(e){
    return {
        type: SET_OPTION,
        payload: e
    }
}

export function resetOption(){
    return { type: RESET_OPTION }
}

export function setLanguage(e){
    return { 
        type: SET_LANGUAGE,
        payload: e
    }
}
