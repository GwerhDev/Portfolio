import { Switch, Route, Redirect } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Header } from '../components/Utils/Header/Header';
import { Navigator } from '../components/Navigator/Navigator';
import { Language } from '../components/Utils/Language/Language';
import { InfoCanvas } from "../components/Utils/InfoCanvas/InfoCanvas";
import { LateralCanvas } from '../components/LateralCanvas/LateralCanvas';


function Router() {
  return (
    <div className="App">
      <Language />
      <Navigator />
      <LateralCanvas />
      <InfoCanvas />

      <Switch>
        <Route exact path='/'>
          <Header title={"Gwerh | Portfolio"} content={"Desarrollo, Diseño y Sonido"} />
          <Home selection='develop' />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default Router;
