import { Switch, Route, Redirect } from 'react-router-dom';
import { Develop } from '../pages/Develop/Develop';
import { Navigator } from '../components/Navigator/Navigator';
import { Language } from '../components/Utils/Language/Language';
import { Header } from '../components/Utils/Header/Header';


function Router() {
  return (
    <div className="App">
      <Language />
      <Switch>
        <Route exact path='/'>
          <Header title={"Gwerh | Portfolio: Develop"} content={"Desarrollo, Diseño y Sonido"} />
          <Develop selection='develop' />
          <Navigator />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default Router;
