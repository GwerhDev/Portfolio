export function openInfoCanvas(){
    return document.getElementById('infoCanvasDisplay').style.display='flex';
}

export function closeInfoCanvas(){
    return document.getElementById('infoCanvasDisplay').style.display='none';
}

export function handleClickOutside(event) {
    if (!document.getElementById('ulCont').contains(event.target)) {
      closeInfoCanvas();
    }
}