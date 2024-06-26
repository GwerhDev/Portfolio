import { resetInfo } from "../middlewares/redux/actions";

export function openInfoCanvas() {
    return document.getElementById('infoCanvasDisplay').style.display = 'flex';
}

export function closeInfoCanvas() {
    return document.getElementById('infoCanvasDisplay').style.display = 'none';
}

export function handleClickOutside(event, dispatch) {
    if (!document.getElementById('ulCont').contains(event.target)) {
        closeInfoCanvas();
        dispatch(resetInfo());
    }
}