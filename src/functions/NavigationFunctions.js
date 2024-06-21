export function optionActive(e) {
    document.querySelector(`#lateralMenu`).style.boxShadow=('0px 0px 4px transparent');
    document.querySelector(`#home`).style.boxShadow=('0px 0px 4px transparent');
    document.querySelector(`#projects`).style.boxShadow=('0px 0px 4px transparent');
/*     document.querySelector(`#experience`).style.boxShadow=('0px 0px 4px transparent');
 */}
  
export function disappear(){
    const Div1 = document.getElementById('lateralPanel');
    const Div2 = document.getElementById('navCont');
    const Div3 = document.getElementById('menu');
    const Div4 = document.getElementById('menuHome');
    const Div5 = document.getElementById('menuProjects');
/*     const Div6 = document.getElementById('menuExperience');
 */    const Div9 = document.getElementById('menuLogout');
  
    document.addEventListener('click', function(event) {
        if (!Div1.contains(event.target) && !Div2.contains(event.target) && !Div3.contains(event.target)) {
            Div1.style.transform='translateX(-40vw)';
            Div1.style.opacity='0';
            Div2.style.transform='translateX(0)';
            Div3.style.scale='0';
            Div4.style.scale='0';
            Div5.style.scale='0';
/*             Div6.style.scale='0';
 */            Div9.style.scale='0';
        };
    });
};
  
  
  
  
  
  