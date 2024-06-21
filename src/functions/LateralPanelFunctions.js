export function openPanel() {
  document.querySelector('#profileLalo').style.opacity = '1';
  document.querySelector('#navCont').style.transform = 'translateX(40vw)';
  document.querySelector('#profileLalo').style.transform = 'translateX(0)';
}

export function closePanel() {
  document.querySelector('#profileLalo').style.opacity = '0';
  document.querySelector('#navCont').style.transform = 'translateX(0)';
  document.querySelector('#profileLalo').style.transform = 'translateX(-40vw)';
}