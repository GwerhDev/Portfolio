export const next = (k, setK) => {
  if(k<=1) {
    setK(2);
    document.getElementById('first').style.opacity = `0.4`;
    document.getElementById('first').style.transformOrigin = `right`;    
    document.getElementById('first').style.transform = `rotateY(-90deg)`;    
    document.getElementById('second').style.opacity = `1`;
    document.getElementById('second').style.transformOrigin = `left`;
    document.getElementById('second').style.transform = `rotateY(0deg)`; 
    document.getElementById('third').style.opacity = `0.4`;
    document.getElementById('slider').style.transform = `translateX(-100%)`;    
  } else if(k===2) {
    setK(3);
    document.getElementById('first').style.opacity = `0.4`;
    document.getElementById('second').style.opacity = `0.4`;
    document.getElementById('second').style.transformOrigin = `right`;
    document.getElementById('second').style.transform = `rotateY(-90deg)`;
    document.getElementById('third').style.opacity = `1`;
    document.getElementById('third').style.transformOrigin = `left`;
    document.getElementById('third').style.transform = `rotateY(0deg)`; 
    document.getElementById('slider').style.transform = `translateX(-200%)`;
  } else {
    setK(0);
    document.getElementById('first').style.opacity = `1`;
    document.getElementById('first').style.transformOrigin = `right`;
    document.getElementById('first').style.transform = `rotateY(0deg)`;
    document.getElementById('second').style.transformOrigin = `left`;
    document.getElementById('second').style.transform = `rotateY(90deg)`;
    document.getElementById('second').style.opacity = `0.4`;
    document.getElementById('third').style.opacity = `0.4`;
    document.getElementById('third').style.transformOrigin = `left`;
    document.getElementById('third').style.transform = `rotateY(-90deg)`; 
    document.getElementById('slider').style.transform = `translateX(0)`;
  }
};

export const previous = (k, setK) => {
  if(k===2) {
    setK(1);
    document.getElementById('first').style.opacity = `1`;
    document.getElementById('first').style.transformOrigin = `right`;
    document.getElementById('first').style.transform = `rotateY(-0deg)`;    
    document.getElementById('second').style.opacity = `0.4`;
    document.getElementById('second').style.transformOrigin = `left`;
    document.getElementById('second').style.transform = `rotateY(-90deg)`;    
    document.getElementById('third').style.opacity = `0.4`;
    document.getElementById('slider').style.transform = `translateX(0vw)`;
  } else if(k===3) {
    setK(2);
    document.getElementById('first').style.opacity = `0.4`;
    document.getElementById('second').style.opacity = `1`;
    document.getElementById('second').style.transformOrigin = `right`;
    document.getElementById('second').style.transform = `rotateY(-0deg)`;    
    document.getElementById('third').style.opacity = `0.4`;
    document.getElementById('third').style.transformOrigin = `left`;
    document.getElementById('third').style.transform = `rotateY(-90deg)`;    
    document.getElementById('slider').style.transform = `translateX(-100%)`;
  } else {
    setK(3);
    document.getElementById('first').style.opacity = `0.4`;
    document.getElementById('first').style.transformOrigin = `right`;
    document.getElementById('first').style.transform = `rotateY(90deg)`;  
    document.getElementById('second').style.transformOrigin = `right`;
    document.getElementById('second').style.transform = `rotateY(90deg)`;  
    document.getElementById('second').style.opacity = `0.4`;
    document.getElementById('third').style.opacity = `1`;
    document.getElementById('third').style.transformOrigin = `right`;
    document.getElementById('third').style.transform = `rotateY(0deg)`;
    document.getElementById('slider').style.transform = `translateX(-200%)`;
  }
};