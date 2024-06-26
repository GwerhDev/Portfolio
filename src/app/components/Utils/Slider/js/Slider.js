export const initialState = (length) => {
  for (let i = 0; i < length; i++) {
    document.getElementById(`card${i}`).style.opacity = '1';
    document.getElementById(`card${i}`).style.transitionDuration = '.7s';
    document.getElementById(`card${i}`).style.transform = 'rotateY(0deg)';
    document.getElementById(`slider`).style.transform = `translateX(0)`;

    if (i > 0) {
      document.getElementById(`card${i}`).style.opacity = '0.4';
      document.getElementById(`card${i}`).style.transform = 'rotateY(90deg)';
      document.getElementById(`card${i}`).style.transformOrigin = 'right';
    }
  }
  return;
}

export const next = (k, setK, length) => {
  if (k === 0) {
    setK(k + 1);
    document.getElementById(`card${k}`).style.opacity = `0.4`;
    document.getElementById(`card${k}`).style.transformOrigin = `right`;
    document.getElementById(`card${k}`).style.transform = `rotateY(-90deg)`;
    document.getElementById(`card${k + 1}`).style.opacity = `1`;
    document.getElementById(`card${k + 1}`).style.transformOrigin = `left`;
    document.getElementById(`card${k + 1}`).style.transform = `rotateY(0deg)`;
    document.getElementById(`slider`).style.transform = `translateX(-100%)`;
  } else if (k < length - 1 && k > 0) {
    setK(k + 1);
    document.getElementById(`card${k - 1}`).style.opacity = `0.4`;
    document.getElementById(`card${k}`).style.opacity = `0.4`;
    document.getElementById(`card${k}`).style.transformOrigin = `right`;
    document.getElementById(`card${k}`).style.transform = `rotateY(-90deg)`;
    document.getElementById(`card${k + 1}`).style.opacity = `1`;
    document.getElementById(`card${k + 1}`).style.transformOrigin = `left`;
    document.getElementById(`card${k + 1}`).style.transform = `rotateY(0deg)`;
    document.getElementById(`slider`).style.transform = `translateX(-${100 * (k + 1)}%)`;
  } else {
    setK(0);
    document.getElementById(`card0`).style.opacity = `1`;
    document.getElementById(`card0`).style.transformOrigin = `right`;
    document.getElementById(`card0`).style.transform = `rotateY(0deg)`;

    for (let i = 1; i < length; i++) {
      document.getElementById(`card${i}`).style.opacity = `0.4`;
      document.getElementById(`card${i}`).style.transformOrigin = `left`;
      document.getElementById(`card${i}`).style.transform = `rotateY(90deg)`;
    }

    document.getElementById(`slider`).style.transform = `translateX(0)`;
  }
};

export const previous = (k, setK, length) => {
  if (k === 1) {
    setK(0);
    document.getElementById(`card0`).style.opacity = `1`;
    document.getElementById(`card0`).style.transformOrigin = `right`;
    document.getElementById(`card0`).style.transform = `rotateY(0deg)`;

    for (let i = 1; i < length; i++) {
      document.getElementById(`card${i}`).style.opacity = `0.4`;
      document.getElementById(`card${i}`).style.transformOrigin = `left`;
      document.getElementById(`card${i}`).style.transform = `rotateY(90deg)`;
    }

    document.getElementById(`slider`).style.transform = `translateX(0)`;
  } else if (k > 1) {
    setK(k - 1);
    document.getElementById(`card${k - 2}`).style.opacity = `0.4`;
    document.getElementById(`card${k - 1}`).style.opacity = `1`;
    document.getElementById(`card${k - 1}`).style.transformOrigin = `right`;
    document.getElementById(`card${k - 1}`).style.transform = `rotateY(-0deg)`;
    document.getElementById(`card${k}`).style.opacity = `0.4`;
    document.getElementById(`card${k}`).style.transformOrigin = `left`;
    document.getElementById(`card${k}`).style.transform = `rotateY(-90deg)`;
    document.getElementById(`slider`).style.transform = `translateX(-${100 * (k - 1)}%)`;

  } else {
    setK(0);
    document.getElementById(`card0`).style.opacity = `1`;
    document.getElementById(`card0`).style.transformOrigin = `right`;
    document.getElementById(`card0`).style.transform = `rotateY(0deg)`;

    for (let i = 1; i < length; i++) {
      document.getElementById(`card${i}`).style.opacity = `0.4`;
      document.getElementById(`card${i}`).style.transformOrigin = `left`;
      document.getElementById(`card${i}`).style.transform = `rotateY(90deg)`;
    }

    document.getElementById(`slider`).style.transform = `translateX(0)`;
  }
};