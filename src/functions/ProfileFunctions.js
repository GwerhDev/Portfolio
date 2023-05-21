export function profilePicClick(dispatch, resetOption){
    return (
        dispatch(resetOption()),
        document.querySelector('#profileLalo').style.transform='translateX(-40vw)',
        document.querySelector('#navCont').style.transform='translateX(0)'
    )
}