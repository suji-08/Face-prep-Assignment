import { Switch, Route } from 'react-router-dom'
import login from './pages/login';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/home' component={Home} exact />
        <Route path='/login' component={login} />
      </Switch>
    </div>
  );
}

export default App;
