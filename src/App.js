import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { DashBoard } from './components/DashBoard';
import { Login } from './components/Login';
import { NavBar } from './components/navbar/NavBar';
import { Root } from './components/Root';
import { UseUser } from './context/UserContext';

function App() {
  const { login } = UseUser();

  const validar = () => (login ? true : false);
  const Public = (props) => (validar() ? <Redirect to='/root' /> : <Route {...props} />);

  return (
    <Router>
      <NavBar />
      <Switch>
        <Public path='/' exact component={Login} />
        {validar() ? <Route path='/root' component={Root} /> : <Redirect to='/' />}
        {validar() ? <Route path='/dashboard' component={DashBoard} /> : <Redirect to='/' />}
      </Switch>
    </Router>
  );
}

export default App;
