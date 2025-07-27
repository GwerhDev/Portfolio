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
  GET_WIKI,
  GET_DEVDAILYJOKE,
  GET_LASTS,
  GET_FEATURED_DEVELOP,
  SET_INDEX,
  RESET_INFO,
  GET_EXPERIENCE,
} from "../../misc/consts";
import { URL_API, URL_DEVDAILYJOKE_API, URL_WIKI_API, NHEXA_PROJECT_API } from "../../config";

export const getExperience = () => {
  return async function (dispatch) {
    try {
      await axios.get(`${URL_API}/getexperience`)
        .then(res => {
          dispatch({
            type: GET_EXPERIENCE,
            payload: res.data
          })
        })
    } catch (error) {

    }
  }
}

export const getDevelop = () => {
  return async function (dispatch) {
    try {
      await axios.get(`${NHEXA_PROJECT_API}/public-export/develop`)
        .then(res => {
          dispatch({
            type: GET_DEVELOP,
            payload: res.data
          })
        })
    } catch (error) {
    }
  }
}

export const getFeaturedDevelop = () => {
  return async function (dispatch) {
    try {
      await axios.get(`${URL_API}/getdevelop/featured`)
        .then(res => {
          dispatch({
            type: GET_FEATURED_DEVELOP,
            payload: res.data
          })
        })
    } catch (error) {

    }
  }
}

export const getDesign = () => {
  return async function (dispatch) {
    try {
      await axios.get(`${URL_API}/getdesign`)
        .then(res => {
          dispatch({
            type: GET_DESIGN,
            payload: res.data
          })
        })
    } catch (error) {

    }
  }
}

export const getSound = () => {
  return async function (dispatch) {
    try {
      await axios.get(`${URL_API}/getsound`)
        .then(res => {
          dispatch({
            type: GET_SOUND,
            payload: res.data
          })
        })
    } catch (error) {

    }
  }
}

export function setSelection(e) {
  return {
    type: SET_OPTION,
    payload: e
  }
}

export function setMenu(e) {
  return {
    type: SET_MENU,
    payload: e
  }
}

export function resetOption() {
  return { type: RESET_OPTION }
}

export function setLanguage(e) {
  return {
    type: SET_LANGUAGE,
    payload: e
  }
}

export function loginWithGoogle(accessToken) {
  return async function (dispatch) {
    try {
      await axios.post(`${URL_API}/users/login-with-google`, { accessToken })
        .then(res => {
          dispatch({
            type: GET_LOGIN,
            payload: res.data
          })
        })
        .catch((e) => {
          console.error(e);
        })
    } catch (error) {

    }
  }
}

export function setInfo(info) {
  return {
    type: SET_INFO,
    payload: info
  }
}

export function getWiki(query) {
  return async function (dispatch) {
    try {
      await axios.get(`${URL_WIKI_API}?action=query&list=search&srprop=snippet&format=json&origin=*&utf8=&srsearch=${query}`)
        .then(res => {
          dispatch({
            type: GET_WIKI,
            payload: res.data
          })
        })
        .catch((e) => {
          console.error(e);
        })
    } catch (error) {

    }
  }
}

export function getDevDailyJoke(lang) {
  const url = `${URL_DEVDAILYJOKE_API}/${lang}`
  return async function (dispatch) {
    try {
      await axios.get(url)
        .then(res => {
          dispatch({
            type: GET_DEVDAILYJOKE,
            payload: res.data
          })
        })
        .catch((e) => {
          console.error(e);
        })
    } catch (error) {

    }
  }
}

export function getGithubEvents() {
  const url = `${URL_API}/github/GwerhDev/lasts`
  return async function (dispatch) {
    try {
      await axios.get(url)
        .then(res => {
          dispatch({
            type: GET_LASTS,
            payload: res.data
          })
        })
        .catch((e) => {
          console.error(e);
        })
    } catch (error) {
      
    }
  }
}

export function setIndex(index) {
  return {
    type: SET_INDEX,
    payload: index
  }
}

export function resetInfo() {
  return {
    type: RESET_INFO
  }
}