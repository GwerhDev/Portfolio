import axios from "axios";
import { 
    RESET_OPTION, 
    SET_OPTION, 
    SET_LANGUAGE, 
    GET_DEVELOP, 
    GET_DESIGN, 
    GET_SOUND, 
    SET_MENU, 
    GET_LOGIN, 
    SET_INFO,
    GET_WIKI
 } from "../../misc/consts";
import { URL_API, URL_DEVDAILYJOKE_API, URL_WIKI_API } from "../../misc/config";

export const getDevelop = () => {
    return async function (dispatch) {
        await axios.get(`${URL_API}/getdevelop`)
        .then(res => {
            dispatch({
                type: GET_DEVELOP,
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

export function setMenu(e){
    return {
        type: SET_MENU,
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

export function loginWithGoogle(accessToken){
    return async function (dispatch){ 
        await axios.post(`${URL_API}/users/login-with-google`, {accessToken})
        .then(res => {
            console.log(res.data)
            dispatch({
                type: GET_LOGIN,
                payload: res.data
            })
        })
        .catch((e) => {
            console.log(e);
        })
    }
}

export function setInfo(info){
    return { 
        type: SET_INFO,
        payload: info
    }
}

export function getWiki(query){
    return async function (dispatch){ 
        await axios.get(`${URL_WIKI_API}?action=query&list=search&srprop=snippet&format=json&origin=*&utf8=&srsearch=${query}`)
        .then(res => {
            console.log(res.data)
            dispatch({
                type: GET_WIKI,
                payload: res.data
            })
        })
        .catch((e) => {
            console.log(e);
        })
    }
}

export function getDevDailyJoke(){
    return async function (dispatch){ 
        await axios.get(`${URL_DEVDAILYJOKE_API}`)
        .then(res => {
            console.log(res.data)
            dispatch({
                type: GET_WIKI,
                payload: res.data
            })
        })
        .catch((e) => {
            console.log(e);
        })
    }
}