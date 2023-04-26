export function optionActive(e) {
  document.querySelector(`#profile`).style.boxShadow=('0px 0px 4px transparent')
  document.querySelector(`#home`).style.boxShadow=('0px 0px 4px transparent')
  document.querySelector(`#developer`).style.boxShadow=('0px 0px 4px transparent')
  document.querySelector(`#sound`).style.boxShadow=('0px 0px 4px transparent')
  document.querySelector(`#design`).style.boxShadow=('0px 0px 4px transparent')
  document.querySelector(`#contact`).style.boxShadow=('0px 0px 4px transparent')
  if(e !== 'programming, design & sound' && e !== 'bio' && e !== 'cv') return document.querySelector(`#${e}`).style.boxShadow=('0px 0px 10px white')
  else return document.querySelector(`#profile`).style.boxShadow=('0px 0px 10px white')
}

export function disapear(){
  const Div1 = document.getElementById('profileLalo');
  const Div2 = document.getElementById('navCont');

  document.addEventListener('click', function(event) {
    if (!Div1.contains(event.target)&& !Div2.contains(event.target)) {
      Div1.style.transform='translateX(-30vw)';
      Div2.style.transform='translateX(0)'
    }
  });
}





