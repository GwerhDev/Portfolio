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
import AuthToken from './components/Auth/AuthToken';
import MailAuthToken from './components/Auth/MailAuthToken';
import { LandingLaloFreak } from './components/LandingLaloFreak/LandingLaloFreak';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Landing/>
        </Route>
        <Route path='/lalofreak/mail/auth'>
          <MailAuthToken />
        </Route>
        <Route path='/lalofreak/auth'>
          <AuthToken />
        </Route>
        <Route exact path='/lalofreak'>
          <LandingLaloFreak/>
        </Route>
        <Route exact path='/lalofreak/home'>
          <Home/>
          <ProfileCanvas/>
          <Navigator/>
        </Route>
        <Route exact path='/lalofreak/home/introduction'>
          <Card option='introduction' />
          <ProfileCanvas/>
          <Navigator/>
        </Route>
        <Route exact path='/lalofreak/home/bio'>
          <Card option='bio' />
          <ProfileCanvas/>
          <Navigator/>
        </Route>
        <Route exact path='/lalofreak/home/cv'>
          <Card option='cv' />
          <ProfileCanvas/>
          <Navigator/>
        </Route>
        <Route exact path='/lalofreak/portfolio/develop'>
          <Card option='develop' />
          <ProfileCanvas/>
          <Navigator/>
        </Route>
        <Route exact path='/lalofreak/portfolio/sound'>
          <Card option='sound' />
          <ProfileCanvas/>
          <Navigator/>
        </Route>
        <Route exact path='/lalofreak/portfolio/design'>
          <Card option='design' />
          <ProfileCanvas/>
          <Navigator/>
        </Route>
        <Route exact path='/lalofreak/contact'>
          <Card option='contact' />
          <ProfileCanvas/>
          <Navigator/>
        </Route>
        <Route exact path='/lalofreak/download/cv'>
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
