export function ShownStates(id,buttonId) {
    document.getElementById(id).style.display="grid"
    ShowCloseButton(buttonId)
}

export function HiddenStates(id, buttonId) {
    document.getElementById(id).style.display="none"
    HideCloseButton(buttonId)
}

export function ShowCloseButton(buttonId){
    document.getElementById(buttonId).style.display="flex"
}

export function HideCloseButton(buttonId){
    document.getElementById(buttonId).style.display="none"
}