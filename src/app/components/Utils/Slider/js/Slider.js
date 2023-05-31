export const next = (k, setK) => {
  if(k<=1) {
    setK(2);
    document.getElementById('first').style.opacity = `0`;
    document.getElementById('first').style.scale = `0`;
    document.getElementById('second').style.opacity = `1`;
    document.getElementById('second').style.scale = `1`;
    document.getElementById('third').style.opacity = `0`;
    document.getElementById('third').style.scale = `0`;
    document.getElementById('slider').style.transform = `translateX(-50vw)`;    
  } else if(k===2) {
    setK(3);
    document.getElementById('first').style.opacity = `0`;
    document.getElementById('first').style.scale = `0`;
    document.getElementById('second').style.opacity = `0`;
    document.getElementById('second').style.scale = `0`;
    document.getElementById('third').style.opacity = `1`;
    document.getElementById('third').style.scale = `1`;
    document.getElementById('slider').style.transform = `translateX(-100vw)`;
  } else {
    setK(0);
    document.getElementById('first').style.opacity = `1`;
    document.getElementById('first').style.scale = `1`;
    document.getElementById('second').style.opacity = `0`;
    document.getElementById('second').style.scale = `0`;
    document.getElementById('third').style.opacity = `0`;
    document.getElementById('third').style.scale = `0`;
    document.getElementById('slider').style.transform = `translateX(0)`;
  }
};

export const previous = (k, setK) => {
  if(k===2) {
    setK(1);
    document.getElementById('first').style.opacity = `1`;
    document.getElementById('first').style.scale = `1`;
    document.getElementById('second').style.opacity = `0`;
    document.getElementById('second').style.scale = `0`;
    document.getElementById('third').style.opacity = `0`;
    document.getElementById('third').style.scale = `0`;
    document.getElementById('slider').style.transform = `translateX(0vw)`;
  } else if(k===3) {
    setK(2);
    document.getElementById('first').style.opacity = `0`;
    document.getElementById('first').style.scale = `0`;
    document.getElementById('second').style.opacity = `1`;
    document.getElementById('second').style.scale = `1`;
    document.getElementById('third').style.opacity = `0`;
    document.getElementById('third').style.scale = `0`;
    document.getElementById('slider').style.transform = `translateX(-50vw)`;
  } else {
    setK(3);
    document.getElementById('first').style.opacity = `0`;
    document.getElementById('first').style.scale = `0`;
    document.getElementById('second').style.opacity = `0`;
    document.getElementById('second').style.scale = `0`;
    document.getElementById('third').style.opacity = `1`;
    document.getElementById('third').style.scale = `1`;
    document.getElementById('slider').style.transform = `translateX(-100vw)`;
  }
};