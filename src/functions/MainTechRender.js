import angularSVG from '../assets/images/svg/angular-icon.svg';
import reactSVG from '../assets/images/svg/react-icon.svg';
import vueSVG from '../assets/images/svg/vue-icon.svg';
import threeSVG from '../assets/images/svg/threejs-icon.svg';
import nextSVG from '../assets/images/svg/next-icon.svg';
import electronSVG from '../assets/images/svg/electronjs-icon.svg';
import nodeSVG from '../assets/images/svg/node-icon.svg';
import tensorflowSVG from '../assets/images/svg/tensorflow-icon.svg';

export function MainTechRender(e) {
  switch(e) {
    case "Angular":
      return angularSVG;
    case "React":
      return reactSVG;
    case "Vue":
      return vueSVG;
    case "Three":
      return threeSVG;
    case "Next":
      return nextSVG;
    case "Electron":
      return electronSVG;
    case "React Native":
      return reactSVG;
    case "Node":
      return nodeSVG;
    case "TensorFlow":
      return tensorflowSVG;
    default:
      return;
  }
}