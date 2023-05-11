import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Card } from './components/Profile/Card';
import { Navigator } from './components/Navigator/Navigator';
import { Language } from './components/Language/Language';
import { Footer } from './components/Footer/Footer';
import { Curriculum } from './components/Curriculum/Curriculum';
import { ProfileCanvas } from './components/Profile/ProfileCanvas';
import { Home } from './components/Home/Home';
import { Landing } from './components/Landing/Landing';
import { Header } from './components/Header/Header';
import AuthToken from './components/Auth/AuthToken';
import MailAuthToken from './components/Auth/MailAuthToken';

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
          <ProfileCanvas/>
          <Navigator/>
        </Route>
        <Route exact path='/home/introduction'>
          <Header title={"LaloFreak | Introduction"} content={"Desarrollo, Diseño y Sonido"} />
          <Card option='introduction' />
          <ProfileCanvas/>
          <Navigator/>
        </Route>
        <Route exact path='/home/bio'>
          <Header title={"LaloFreak | Bio"} content={"Desarrollo, Diseño y Sonido"} />
          <Card option='bio' />
          <ProfileCanvas/>
          <Navigator/>
        </Route>
        <Route exact path='/home/cv'>
          <Header title={"LaloFreak | Resume"} content={"Desarrollo, Diseño y Sonido"} />
          <Card option='cv' />
          <ProfileCanvas/>
          <Navigator/>
        </Route>
        <Route exact path='/portfolio/develop'>
          <Header title={"LaloFreak | Portfolio: Develop"} content={"Desarrollo, Diseño y Sonido"} />
          <Card option='develop' />
          <ProfileCanvas/>
          <Navigator/>
        </Route>
        <Route exact path='/portfolio/sound'>
          <Header title={"LaloFreak | Portfolio: Sound"} content={"Desarrollo, Diseño y Sonido"} />
          <Card option='sound' />
          <ProfileCanvas/>
          <Navigator/>
        </Route>
        <Route exact path='/portfolio/design'>
          <Header title={"LaloFreak | Portfolio: Design"} content={"Desarrollo, Diseño y Sonido"} />
          <Card option='design' />
          <ProfileCanvas/>
          <Navigator/>
        </Route>
        <Route exact path='/contact'>
          <Header title={"LaloFreak | Contact"} content={"Desarrollo, Diseño y Sonido"} />
          <Card option='contact' />
          <ProfileCanvas/>
          <Navigator/>
        </Route>
        <Route exact path='/download/cv'>
          <Header title={"LaloFreak | Resume"} content={"Desarrollo, Diseño y Sonido"} />  
          <Curriculum/>
          <ProfileCanvas/>
          <Navigator/>
        </Route>
      </Switch>
      <Language/>
      <Footer/>
    </div>
  );
}

export default App;
