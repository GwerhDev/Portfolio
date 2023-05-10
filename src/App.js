import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Card } from './components/Profile/Card';
import { Navigator } from './components/Navigator/Navigator';
import { Landing } from './components/Landing/Landing';
import { Language } from './components/Language/Language';
import { Footer } from './components/Footer/Footer';
import { Curriculum } from './components/Curriculum/Curriculum';
import { ProfileCanvas } from './components/Profile/ProfileCanvas';
import { Home } from './components/Home/Home';
import { LandingLaloFreak } from './components/LandingLaloFreak/LandingLaloFreak';
import { Header } from './components/Header/Header';
import AuthToken from './components/Auth/AuthToken';
import MailAuthToken from './components/Auth/MailAuthToken';
import { Nav } from './components/Landing/Nav';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Header title={"TerminalKiller | Developers"} content={"TerminalKiller Developers"} />
          <Nav/>
          <Landing/>
        </Route>
        <Route path='/lalofreak/mail/auth'>
          <Header title={"LaloFreak | TerminalKiller Developers"} content={"Desarrollo, Diseño y Sonido"} />
          <MailAuthToken />
          <Language/>
          <Footer/>
        </Route>
        <Route path='/lalofreak/auth'>
          <Header title={"LaloFreak | TerminalKiller Developers"} content={"Desarrollo, Diseño y Sonido"} />
          <AuthToken />
          <Language/>
          <Footer/>
        </Route>
        <Route exact path='/lalofreak'>
          <Header title={"LaloFreak | TerminalKiller Developers"} content={"Desarrollo, Diseño y Sonido"} />
          <LandingLaloFreak/>
          <Language/>
          <Footer/>
        </Route>
        <Route exact path='/lalofreak/home'>
          <Header title={"LaloFreak | TerminalKiller Developers"} content={"Desarrollo, Diseño y Sonido"} />
          <Home/>
          <ProfileCanvas/>
          <Navigator/>
          <Language/>
          <Footer/>
        </Route>
        <Route exact path='/lalofreak/home/introduction'>
          <Header title={"LaloFreak | TerminalKiller Developers"} content={"Desarrollo, Diseño y Sonido"} />
          <Card option='introduction' />
          <ProfileCanvas/>
          <Navigator/>
          <Language/>
          <Footer/>
        </Route>
        <Route exact path='/lalofreak/home/bio'>
          <Header title={"LaloFreak | TerminalKiller Developers"} content={"Desarrollo, Diseño y Sonido"} />
          <Card option='bio' />
          <ProfileCanvas/>
          <Navigator/>
          <Language/>
          <Footer/>
        </Route>
        <Route exact path='/lalofreak/home/cv'>
          <Header title={"LaloFreak | TerminalKiller Developers"} content={"Desarrollo, Diseño y Sonido"} />
          <Card option='cv' />
          <ProfileCanvas/>
          <Navigator/>
          <Language/>
          <Footer/>
        </Route>
        <Route exact path='/lalofreak/portfolio/develop'>
          <Header title={"LaloFreak | TerminalKiller Developers"} content={"Desarrollo, Diseño y Sonido"} />
          <Card option='develop' />
          <ProfileCanvas/>
          <Navigator/>
          <Language/>
          <Footer/>
        </Route>
        <Route exact path='/lalofreak/portfolio/sound'>
          <Header title={"LaloFreak | TerminalKiller Developers"} content={"Desarrollo, Diseño y Sonido"} />
          <Card option='sound' />
          <ProfileCanvas/>
          <Navigator/>
          <Language/>
          <Footer/>
        </Route>
        <Route exact path='/lalofreak/portfolio/design'>
          <Header title={"LaloFreak | TerminalKiller Developers"} content={"Desarrollo, Diseño y Sonido"} />
          <Card option='design' />
          <ProfileCanvas/>
          <Navigator/>
          <Language/>
          <Footer/>
        </Route>
        <Route exact path='/lalofreak/contact'>
          <Header title={"LaloFreak | TerminalKiller Developers"} content={"Desarrollo, Diseño y Sonido"} />
          <Card option='contact' />
          <ProfileCanvas/>
          <Navigator/>
          <Language/>
          <Footer/>
        </Route>
        <Route exact path='/lalofreak/download/cv'>
          <Header title={"LaloFreak | TerminalKiller Developers"} content={"Desarrollo, Diseño y Sonido"} />  
          <Curriculum/>
          <ProfileCanvas/>
          <Navigator/>
          <Language/>
          <Footer/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
