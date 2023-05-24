import { Switch, Route } from 'react-router-dom';
import { Landing } from '../pages/Landing/Landing';
import { Home } from '../pages/Home/Home';
import { Curriculum } from '../pages/Curriculum/Curriculum';
import { Navigator } from '../components/Navigator/Navigator';
import { Language } from '../components/Utils/Language/Language';
import { Header } from '../components/Utils/Header/Header';
import { LateralCanvas } from '../components/LateralCanvas/LateralCanvas';
import { CanvasRouter } from '../components/Utils/CanvasRouter/CanvasRouter';
import AuthToken from '../components/Auth/AuthToken';
import MailAuthToken from '../components/Auth/MailAuthToken';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/mail/auth'>
          <Header title={"LaloFreak | TerminalKiller Developers"} content={"Desarrollo, Diseño y Sonido"} />
          <MailAuthToken />
        </Route>
        <Route path='/auth'>
          <Header title={"LaloFreak | TerminalKiller Developers"} content={"Desarrollo, Diseño y Sonido"} />
          <AuthToken />
        </Route>
        <Route exact path='/'>
          <Header title={"LaloFreak | TerminalKiller Developers"} content={"Desarrollo, Diseño y Sonido"} />
          <Landing/>
        </Route>
        <Route exact path='/home'>
          <Header title={"LaloFreak | Deveñop, Disign & Sound"} content={"Desarrollo, Diseño y Sonido"} />
          <Home/>
          <LateralCanvas/>
          <Navigator/>
        </Route>
        <Route exact path='/home/introduction'>
          <Header title={"LaloFreak | Introduction"} content={"Desarrollo, Diseño y Sonido"} />
          <CanvasRouter option='introduction' />
          <LateralCanvas/>
          <Navigator/>
        </Route>
        <Route exact path='/home/bio'>
          <Header title={"LaloFreak | Bio"} content={"Desarrollo, Diseño y Sonido"} />
          <CanvasRouter option='bio' />
          <LateralCanvas/>
          <Navigator/>
        </Route>
        <Route exact path='/home/cv'>
          <Header title={"LaloFreak | Resume"} content={"Desarrollo, Diseño y Sonido"} />
          <CanvasRouter option='cv' />
          <LateralCanvas/>
          <Navigator/>
        </Route>
        <Route exact path='/portfolio/develop'>
          <Header title={"LaloFreak | Portfolio: Develop"} content={"Desarrollo, Diseño y Sonido"} />
          <CanvasRouter option='develop' />
          <LateralCanvas/>
          <Navigator/>
        </Route>
        <Route exact path='/portfolio/sound'>
          <Header title={"LaloFreak | Portfolio: Sound"} content={"Desarrollo, Diseño y Sonido"} />
          <CanvasRouter option='sound' />
          <LateralCanvas/>
          <Navigator/>
        </Route>
        <Route exact path='/portfolio/design'>
          <Header title={"LaloFreak | Portfolio: Design"} content={"Desarrollo, Diseño y Sonido"} />
          <CanvasRouter option='design' />
          <LateralCanvas/>
          <Navigator/>
        </Route>
        <Route exact path='/contact'>
          <Header title={"LaloFreak | Contact"} content={"Desarrollo, Diseño y Sonido"} />
          <CanvasRouter option='contact' />
          <LateralCanvas/>
          <Navigator/>
        </Route>
        <Route exact path='/download/cv'>
          <Header title={"LaloFreak | Resume"} content={"Desarrollo, Diseño y Sonido"} />  
          <Curriculum/>
          <LateralCanvas/>
          <Navigator/>
        </Route>
      </Switch>
      <Language/>
    </div>
  );
}

export default App;
