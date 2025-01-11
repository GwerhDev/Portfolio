import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Sound from '../pages/Sound/Sound';
import Design from '../pages/Design/Design';
import Develop from '../pages/Develop/Develop';
import Landing from '../pages/Landing/Landing';
import Contact from '../pages/Contact/Contact';
import Curriculum from '../pages/Curriculum/Curriculum';
import MailAuthToken from '../pages/Auth/MailAuthToken';
import ResumeAuthToken from '../pages/Auth/ResumeAuthToken';
import { Header } from '../components/Utils/Header/Header';
import { Language } from '../components/Utils/Language/Language';
import { Navigator } from '../components/Navigator/Navigator';
import { LateralCanvas } from '../components/LateralCanvas/LateralCanvas';

function Router() {
  const location = useLocation();

  return (
    <div className="App">
      {
        location.pathname !== '/' && location.pathname !== '/selection' && <LateralCanvas />
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
        <Route exact path='/selection'>
          <Header title={"Gwerh | Develop, Design & Sound"} content={"Desarrollo, Diseño y Sonido"} />
          <Home />
        </Route>
        <Route exact path='/portfolio/develop'>
          <div className="container">
            <Header title={"Gwerh | Portfolio: Develop"} content={"Desarrollo, Diseño y Sonido"} />
            <Develop selection='develop' />
            <Navigator />
          </div>
        </Route>
        <Route exact path='/portfolio/sound'>
          <Header title={"Gwerh | Portfolio: Sound"} content={"Desarrollo, Diseño y Sonido"} />
          <Sound selection='sound' />
          <Navigator />
        </Route>
        <Route exact path='/portfolio/design'>
          <Header title={"Gwerh | Portfolio: Design"} content={"Desarrollo, Diseño y Sonido"} />
          <Design selection='design' />
          <Navigator />
        </Route>
        <Route exact path='/contact'>
          <Header title={"Gwerh | Contact"} content={"Desarrollo, Diseño y Sonido"} />
          <Contact selection='contact' />
        </Route>
        <Route exact path='/download/resume'>
          <Header title={"Gwerh | Resume"} content={"Desarrollo, Diseño y Sonido"} />
          <Curriculum />
        </Route>
      </Switch >
    </div >
  );
}

export default Router;
