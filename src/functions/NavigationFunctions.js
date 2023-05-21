export function optionActive(e) {
    document.querySelector(`#profile`).style.boxShadow=('0px 0px 4px transparent');
    document.querySelector(`#home`).style.boxShadow=('0px 0px 4px transparent');
    document.querySelector(`#develop`).style.boxShadow=('0px 0px 4px transparent');
    document.querySelector(`#sound`).style.boxShadow=('0px 0px 4px transparent');
    document.querySelector(`#design`).style.boxShadow=('0px 0px 4px transparent');
    document.querySelector(`#contact`).style.boxShadow=('0px 0px 4px transparent');
    if(e !== 'introduction' && e !== 'bio' && e !== 'cv') return document.querySelector(`#${e}`).style.boxShadow=('0px 0px 10px white');
    else return document.querySelector(`#profile`).style.boxShadow=('0px 0px 10px white');
}
  
export function disappear(){
    const Div1 = document.getElementById('profileLalo');
    const Div2 = document.getElementById('navCont');
    const Div3 = document.getElementById('menu');
    const Div4 = document.getElementById('menuHome');
    const Div5 = document.getElementById('menuDevelop');
    const Div6 = document.getElementById('menuDesign');
    const Div7 = document.getElementById('menuSound');
    const Div8 = document.getElementById('menuContact');
    const Div9 = document.getElementById('menuLogout');
  
    document.addEventListener('click', function(event) {
        if (!Div1.contains(event.target) && !Div2.contains(event.target) && !Div3.contains(event.target)) {
            Div1.style.transform='translateX(-40vw)';
            Div2.style.transform='translateX(0)';
            Div3.style.scale='0';
            Div4.style.scale='0';
            Div5.style.scale='0';
            Div6.style.scale='0';
            Div7.style.scale='0';
            Div8.style.scale='0';
            Div9.style.scale='0';
        };
    });
};
  
  
  
  
  
  