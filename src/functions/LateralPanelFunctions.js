export function openPanel() {
  document.querySelector('#lateralPanel').style.opacity = '1';
  document.querySelector('#navCont').style.transform = 'translateX(40vw)';
  document.querySelector('#lateralPanel').style.transform = 'translateX(0)';
}

export function closePanel() {
  document.querySelector('#lateralPanel').style.opacity = '0';
  document.querySelector('#navCont').style.transform = 'translateX(0)';
  document.querySelector('#lateralPanel').style.transform = 'translateX(-40vw)';
}