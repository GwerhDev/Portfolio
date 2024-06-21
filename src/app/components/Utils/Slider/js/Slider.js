export const next = (k, setK) => {
  if (k === 1) {
    setK(2);
    document.getElementById(`card0`).style.opacity = `0.4`;
    document.getElementById(`card0`).style.transformOrigin = `right`;
    document.getElementById(`card0`).style.transform = `rotateY(-90deg)`;
    document.getElementById(`card1`).style.opacity = `1`;
    document.getElementById(`card1`).style.transformOrigin = `left`;
    document.getElementById(`card1`).style.transform = `rotateY(0deg)`;
    document.getElementById(`card2`).style.opacity = `0.4`;
    document.getElementById(`slider`).style.transform = `translateX(-100%)`;
  } else if (k === 2) {
    setK(k + 1);
    document.getElementById(`card0`).style.opacity = `0.4`;
    document.getElementById(`card1`).style.opacity = `0.4`;
    document.getElementById(`card1`).style.transformOrigin = `right`;
    document.getElementById(`card1`).style.transform = `rotateY(-90deg)`;
    document.getElementById(`card2`).style.opacity = `1`;
    document.getElementById(`card2`).style.transformOrigin = `left`;
    document.getElementById(`card2`).style.transform = `rotateY(0deg)`;
    document.getElementById(`slider`).style.transform = `translateX(-200%)`;
  } else {
    setK(1);
    document.getElementById(`card0`).style.opacity = `1`;
    document.getElementById(`card0`).style.transformOrigin = `right`;
    document.getElementById(`card0`).style.transform = `rotateY(0deg)`;
    document.getElementById(`card1`).style.transformOrigin = `left`;
    document.getElementById(`card1`).style.transform = `rotateY(90deg)`;
    document.getElementById(`card1`).style.opacity = `0.4`;
    document.getElementById(`card2`).style.opacity = `0.4`;
    document.getElementById(`card2`).style.transformOrigin = `left`;
    document.getElementById(`card2`).style.transform = `rotateY(-90deg)`;
    document.getElementById(`slider`).style.transform = `translateX(0)`;
  }
};

export const previous = (k, setK) => {
  if (k === 2) {
    setK(1);
    document.getElementById(`card0`).style.opacity = `1`;
    document.getElementById(`card0`).style.transformOrigin = `right`;
    document.getElementById(`card0`).style.transform = `rotateY(-0deg)`;
    document.getElementById(`card1`).style.opacity = `0.4`;
    document.getElementById(`card1`).style.transformOrigin = `left`;
    document.getElementById(`card1`).style.transform = `rotateY(-90deg)`;
    document.getElementById(`card2`).style.opacity = `0.4`;
    document.getElementById(`slider`).style.transform = `translateX(0vw)`;
  } else if (k === 3) {
    setK(2);
    document.getElementById(`card0`).style.opacity = `0.4`;
    document.getElementById(`card1`).style.opacity = `1`;
    document.getElementById(`card1`).style.transformOrigin = `right`;
    document.getElementById(`card1`).style.transform = `rotateY(-0deg)`;
    document.getElementById(`card2`).style.opacity = `0.4`;
    document.getElementById(`card2`).style.transformOrigin = `left`;
    document.getElementById(`card2`).style.transform = `rotateY(-90deg)`;
    document.getElementById(`slider`).style.transform = `translateX(-100%)`;
  } else {
    setK(3);
    document.getElementById(`card0`).style.opacity = `0.4`;
    document.getElementById(`card0`).style.transformOrigin = `right`;
    document.getElementById(`card0`).style.transform = `rotateY(90deg)`;
    document.getElementById(`card1`).style.transformOrigin = `right`;
    document.getElementById(`card1`).style.transform = `rotateY(90deg)`;
    document.getElementById(`card1`).style.opacity = `0.4`;
    document.getElementById(`card2`).style.opacity = `1`;
    document.getElementById(`card2`).style.transformOrigin = `right`;
    document.getElementById(`card2`).style.transform = `rotateY(0deg)`;
    document.getElementById(`slider`).style.transform = `translateX(-200%)`;
  }
};