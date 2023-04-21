import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Card } from './components/Profile/Card';
import { Navigator } from './components/Navigator/Navigator';
import { Landing } from './components/Landing/Landing';
import { Language } from './components/Language/Language';
import { Footer } from './components/Footer/Footer';
import { CV } from './components/CV/CV';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Landing/>
        </Route>
        <Route exact path='/lalofreak'>
          <Card/>
          <Navigator/>
        </Route>
        <Route exact path='/lalofreak/cv'>
          <CV/>
          <Navigator/>
        </Route>
      </Switch>
      <Language/>
      <Footer/>
    </div>
  );
}

export default App;
