export function openPanel() {
  document.querySelector('#lateralPanel').style.width = '40vw';
  document.querySelector('#lateralPanelContent').style.opacity=('1');
  document.querySelector('#lateralPanelContent').style.transitionDelay=('.8s');
}

export function closePanel() {
  document.querySelector('#lateralPanel').style.width = '0';
  document.querySelector('#lateralPanelContent').style.opacity=('0');
  document.querySelector('#lateralPanelContent').style.transitionDelay=('0s');
  document.querySelector('#lateralPanelContent').style.transitionDuration=('0s');
}