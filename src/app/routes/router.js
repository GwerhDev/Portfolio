import { Switch, Route } from 'react-router-dom';
import { Landing } from '../pages/Landing/Landing';
import { Home } from '../pages/Home/Home';
import { Develop } from '../pages/Develop/Develop';
import { Curriculum } from '../pages/Curriculum/Curriculum';
import { Navigator } from '../components/Navigator/Navigator';
import { Language } from '../components/Utils/Language/Language';
import { Header } from '../components/Utils/Header/Header';
import { LateralCanvas } from '../components/LateralCanvas/LateralCanvas';
import { CanvasRouter } from '../pages/Options/CanvasRouter';
import ResumeAuthToken from '../pages/Auth/ResumeAuthToken';
import MailAuthToken from '../pages/Auth/MailAuthToken';
import { Design } from '../pages/Design/Design';
import { Sound } from '../pages/Sound/Sound';
import { Contact } from '../pages/Contact/Contact';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

function Router() {
  const location = useLocation();

  return (
    <div className="App">
      {
        location.pathname !== '/' && <Navigator />
      }
      
      {
        location.pathname !== '/' && <LateralCanvas />
      }

      <Language />

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
          <Landing />
        </Route>
        <Route exact path='/home'>
          <Header title={"Gwerh | Develop, Design & Sound"} content={"Desarrollo, Diseño y Sonido"} />
          <Home />
        </Route>
        <Route exact path='/home/intro'>
          <Header title={"Gwerh | Intro"} content={"Desarrollo, Diseño y Sonido"} />
          <CanvasRouter option='intro' />
        </Route>
        <Route exact path='/home/bio'>
          <Header title={"Gwerh | Bio"} content={"Desarrollo, Diseño y Sonido"} />
          <CanvasRouter option='bio' />
        </Route>
        <Route exact path='/home/resume'>
          <Header title={"Gwerh | Resume"} content={"Desarrollo, Diseño y Sonido"} />
          <CanvasRouter option='resume' />
        </Route>
        <Route exact path='/portfolio/develop'>
          <Header title={"Gwerh | Portfolio: Develop"} content={"Desarrollo, Diseño y Sonido"} />
          <Develop option='develop' />
        </Route>
        <Route exact path='/portfolio/sound'>
          <Header title={"Gwerh | Portfolio: Sound"} content={"Desarrollo, Diseño y Sonido"} />
          <Sound option='sound' />
        </Route>
        <Route exact path='/portfolio/design'>
          <Header title={"Gwerh | Portfolio: Design"} content={"Desarrollo, Diseño y Sonido"} />
          <Design option='design' />
        </Route>
        <Route exact path='/contact'>
          <Header title={"Gwerh | Contact"} content={"Desarrollo, Diseño y Sonido"} />
          <Contact option='contact' />
        </Route>
        <Route exact path='/download/resume'>
          <Header title={"Gwerh | Resume"} content={"Desarrollo, Diseño y Sonido"} />
          <Curriculum />
        </Route>
      </Switch>
    </div>
  );
}

export default Router;
