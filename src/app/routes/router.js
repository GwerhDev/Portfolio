import { Switch, Route } from 'react-router-dom';
import { Landing } from '../pages/Landing/Landing';
import { Home } from '../pages/Home/Home';
import { Curriculum } from '../pages/Curriculum/Curriculum';
import { Navigator } from '../components/Navigator/Navigator';
import { Language } from '../components/Utils/Language/Language';
import { Header } from '../components/Utils/Header/Header';
import { LateralCanvas } from '../components/LateralCanvas/LateralCanvas';
import { CanvasRouter } from '../components/Utils/CanvasRouter/CanvasRouter';
import ResumeAuthToken from '../pages/Auth/ResumeAuthToken';
import MailAuthToken from '../pages/Auth/MailAuthToken';

function Router() {
  return (
    <div className="App">
      <Switch>
        <Route path='/mail/auth'>
          <Header title={"Gwerh | TerminalKiller Developers"} content={"Desarrollo, Diseño y Sonido"} />
          <MailAuthToken />
        </Route>
        <Route path='/resume/auth'>
          <Header title={"Gwerh | TerminalKiller Developers"} content={"Desarrollo, Diseño y Sonido"} />
          <ResumeAuthToken />
        </Route>
        <Route exact path='/'>
          <Header title={"Gwerh | TerminalKiller Developers"} content={"Desarrollo, Diseño y Sonido"} />
          <Landing/>
        </Route>
        <Route exact path='/home'>
          <Header title={"Gwerh | Develop, Design & Sound"} content={"Desarrollo, Diseño y Sonido"} />
          <Home/>
          <LateralCanvas/>
          <Navigator/>
        </Route>
        <Route exact path='/home/intro'>
          <Header title={"Gwerh | Intro"} content={"Desarrollo, Diseño y Sonido"} />
          <CanvasRouter option='intro' />
          <LateralCanvas/>
          <Navigator/>
        </Route>
        <Route exact path='/home/bio'>
          <Header title={"Gwerh | Bio"} content={"Desarrollo, Diseño y Sonido"} />
          <CanvasRouter option='bio' />
          <LateralCanvas/>
          <Navigator/>
        </Route>
        <Route exact path='/home/resume'>
          <Header title={"Gwerh | Resume"} content={"Desarrollo, Diseño y Sonido"} />
          <CanvasRouter option='resume' />
          <LateralCanvas/>
          <Navigator/>
        </Route>
        <Route exact path='/portfolio/develop'>
          <Header title={"Gwerh | Portfolio: Develop"} content={"Desarrollo, Diseño y Sonido"} />
          <CanvasRouter option='develop' />
          <LateralCanvas/>
          <Navigator/>
        </Route>
        <Route exact path='/portfolio/sound'>
          <Header title={"Gwerh | Portfolio: Sound"} content={"Desarrollo, Diseño y Sonido"} />
          <CanvasRouter option='sound' />
          <LateralCanvas/>
          <Navigator/>
        </Route>
        <Route exact path='/portfolio/design'>
          <Header title={"Gwerh | Portfolio: Design"} content={"Desarrollo, Diseño y Sonido"} />
          <CanvasRouter option='design' />
          <LateralCanvas/>
          <Navigator/>
        </Route>
        <Route exact path='/contact'>
          <Header title={"Gwerh | Contact"} content={"Desarrollo, Diseño y Sonido"} />
          <CanvasRouter option='contact' />
          <LateralCanvas/>
          <Navigator/>
        </Route>
        <Route exact path='/download/resume'>
          <Header title={"Gwerh | Resume"} content={"Desarrollo, Diseño y Sonido"} />  
          <Curriculum/>
          <LateralCanvas/>
          <Navigator/>
        </Route>
      </Switch>
      <Language/>
    </div>
  );
}

export default Router;
