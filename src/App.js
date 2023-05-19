import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Landing } from './app/pages/Landing/Landing';
import { Home } from './app/pages/Home/Home';
import { Curriculum } from './app/pages/Curriculum/Curriculum';
import { Navigator } from './app/components/Navigator/Navigator';
import { Language } from './app/components/Utils/Language/Language';
import { Header } from './app/components/Utils/Header/Header';
import { Footer } from './app/components/Utils/Footer/Footer';
import { LateralCanvas } from './app/components/LateralCanvas/LateralCanvas';
import { CanvasRouter } from './app/components/Utils/CanvasRouter/CanvasRouter';
import AuthToken from './app/components/Auth/AuthToken';
import MailAuthToken from './app/components/Auth/MailAuthToken';

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
      <Footer/>
    </div>
  );
}

export default App;
